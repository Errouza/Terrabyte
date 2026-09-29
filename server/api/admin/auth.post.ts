import crypto from 'node:crypto'

export default defineEventHandler(async (event) => {
  const ip = getClientIp(event)
  const userAgent = getHeader(event, 'user-agent')
  const deviceInfo = parseDevice(userAgent)

  // 1. Proteksi Anti Brute-Force (Rate Limiting)
  const rateLimit = checkRateLimit(ip)
  if (!rateLimit.allowed) {
    throw createError({
      statusCode: 429,
      statusMessage: `Terlalu banyak percobaan login gagal. Demi keamanan, akses dibekukan selama ${rateLimit.waitMinutes} menit.`
    })
  }

  const body = await readBody(event)
  const password = body?.password?.trim()
  const force = Boolean(body?.force)

  const correctPassword = getAdminPassword()

  // 2. Timing-safe comparison untuk mencegah timing attack
  let isPasswordValid = false
  if (password && password.length === correctPassword.length) {
    isPasswordValid = crypto.timingSafeEqual(
      Buffer.from(password),
      Buffer.from(correctPassword)
    )
  }

  if (!isPasswordValid) {
    const attempt = recordFailedAttempt(ip)
    if (attempt.locked) {
      throw createError({
        statusCode: 429,
        statusMessage: '5 kali salah kata sandi berturut-turut. Akses dibekukan selama 15 menit.'
      })
    }
    throw createError({
      statusCode: 401,
      statusMessage: `Kata sandi salah. Sisa kesempatan: ${attempt.remaining} kali.`
    })
  }

  // 3. Single-Session Check (Hanya boleh 1 sesi aktif)
  const activeSession = await getActiveSession()
  if (activeSession && !force) {
    return {
      success: false,
      activeSessionDetected: true,
      sessionInfo: {
        device: activeSession.deviceInfo,
        ip: activeSession.ip,
        lastActive: formatTimeAgo(activeSession.lastActiveAt)
      },
      message: 'Sesi admin sedang aktif di perangkat lain. Sistem dibatasi hanya 1 login aktif.'
    }
  }

  // 4. Buat sesi baru (Invalidate sesi lama jika force takeover)
  resetRateLimit(ip)
  const token = await createNewSession(deviceInfo, ip)

  // Set Cookie HttpOnly 30 Menit
  setCookie(event, 'tb_admin_session', token, {
    httpOnly: true,
    maxAge: 30 * 60, // 30 Menit
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production'
  })

  // Set legacy token for compatibility
  const legacyToken = Buffer.from(correctPassword).toString('base64')
  setCookie(event, 'tb_admin_token', legacyToken, {
    httpOnly: true,
    maxAge: 30 * 60,
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production'
  })

  return {
    success: true,
    token,
    deviceInfo,
    message: 'Login berhasil.'
  }
})
