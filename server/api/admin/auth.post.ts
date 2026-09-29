export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const password = body?.password?.trim()

  const correctPassword = getAdminPassword()

  if (password === correctPassword) {
    const token = Buffer.from(correctPassword).toString('base64')
    setCookie(event, 'tb_admin_token', token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
      sameSite: 'lax'
    })
    return { success: true, token }
  }

  throw createError({
    statusCode: 401,
    statusMessage: 'Invalid admin credentials'
  })
})
