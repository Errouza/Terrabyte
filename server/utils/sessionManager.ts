import crypto from 'node:crypto'
import { getSupabase } from './supabase'

// ─── RATE LIMITER (ANTI BRUTE-FORCE) ─────────────────────────────────
interface RateLimitRecord {
  attempts: number
  lockedUntil: number
}

const rateLimitMap = new Map<string, RateLimitRecord>()

export function checkRateLimit(ip: string): { allowed: boolean; waitMinutes?: number } {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record) return { allowed: true }

  if (record.lockedUntil > now) {
    const waitMinutes = Math.ceil((record.lockedUntil - now) / 60000)
    return { allowed: false, waitMinutes }
  }

  // Jika waktu blokir sudah lewat, reset
  if (record.lockedUntil > 0 && record.lockedUntil <= now) {
    rateLimitMap.delete(ip)
    return { allowed: true }
  }

  return { allowed: true }
}

export function recordFailedAttempt(ip: string): { locked: boolean; remaining: number } {
  const now = Date.now()
  const record = rateLimitMap.get(ip) || { attempts: 0, lockedUntil: 0 }

  record.attempts++

  if (record.attempts >= 5) {
    record.lockedUntil = now + 15 * 60 * 1000 // Kunci 15 menit
    rateLimitMap.set(ip, record)
    return { locked: true, remaining: 0 }
  }

  rateLimitMap.set(ip, record)
  return { locked: false, remaining: 5 - record.attempts }
}

export function resetRateLimit(ip: string): void {
  rateLimitMap.delete(ip)
}

// ─── DEVICE PARSER ───────────────────────────────────────────────────
export function parseDevice(userAgent: string | undefined): string {
  if (!userAgent) return 'Perangkat Tidak Dikenal'

  let os = 'Unknown OS'
  if (userAgent.includes('Windows NT 10.0') || userAgent.includes('Windows')) os = 'Windows PC'
  else if (userAgent.includes('Macintosh') || userAgent.includes('Mac OS')) os = 'Apple Mac'
  else if (userAgent.includes('iPhone')) os = 'iPhone'
  else if (userAgent.includes('iPad')) os = 'iPad'
  else if (userAgent.includes('Android')) os = 'Android Device'
  else if (userAgent.includes('Linux')) os = 'Linux'

  let browser = 'Browser'
  if (userAgent.includes('Edg/')) browser = 'Microsoft Edge'
  else if (userAgent.includes('Chrome/')) browser = 'Google Chrome'
  else if (userAgent.includes('Firefox/')) browser = 'Mozilla Firefox'
  else if (userAgent.includes('Safari/') && !userAgent.includes('Chrome')) browser = 'Apple Safari'

  return `${os} (${browser})`
}

export function getClientIp(event: any): string {
  const forwarded = getHeader(event, 'x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  const realIp = getHeader(event, 'x-real-ip')
  if (realIp) return realIp
  return event.node?.req?.socket?.remoteAddress || '127.0.0.1'
}

// ─── SINGLE ACTIVE SESSION STATE ─────────────────────────────────────
export interface AdminSession {
  token: string
  deviceInfo: string
  ip: string
  lastActiveAt: number
  createdAt: number
  isActive: boolean
}

// In-memory fallback
let currentActiveSession: AdminSession | null = null

const INACTIVITY_TIMEOUT_MS = 30 * 60 * 1000 // 30 Menit AFK

export async function getActiveSession(): Promise<AdminSession | null> {
  const now = Date.now()
  const supabase = getSupabase()

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('admin_sessions')
        .select('*')
        .eq('is_active', true)
        .order('last_active_at', { ascending: false })
        .limit(1)
        .maybeSingle()

      if (!error && data) {
        const lastActive = new Date(data.last_active_at).getTime()
        if (now - lastActive > INACTIVITY_TIMEOUT_MS) {
          // Sudah AFK > 30 menit, expire session
          await supabase.from('admin_sessions').update({ is_active: false }).eq('id', data.id)
          return null
        }
        return {
          token: data.session_token,
          deviceInfo: data.device_info,
          ip: data.ip_address,
          lastActiveAt: lastActive,
          createdAt: new Date(data.created_at).getTime(),
          isActive: data.is_active
        }
      }
    } catch {
      // fallback to memory
    }
  }

  // Fallback in-memory
  if (currentActiveSession && currentActiveSession.isActive) {
    if (now - currentActiveSession.lastActiveAt > INACTIVITY_TIMEOUT_MS) {
      currentActiveSession.isActive = false
      return null
    }
    return currentActiveSession
  }

  return null
}

export async function createNewSession(deviceInfo: string, ip: string): Promise<string> {
  const now = Date.now()
  const token = crypto.randomBytes(32).toString('hex')
  const supabase = getSupabase()

  // Invalidate previous sessions
  if (supabase) {
    try {
      await supabase.from('admin_sessions').update({ is_active: false }).eq('is_active', true)
      await supabase.from('admin_sessions').insert([{
        id: 'sess-' + now,
        session_token: token,
        device_info: deviceInfo,
        ip_address: ip,
        last_active_at: new Date(now).toISOString(),
        is_active: true,
        created_at: new Date(now).toISOString()
      }])
    } catch {
      // fallback to memory
    }
  }

  currentActiveSession = {
    token,
    deviceInfo,
    ip,
    lastActiveAt: now,
    createdAt: now,
    isActive: true
  }

  return token
}

export async function touchSession(token: string): Promise<boolean> {
  const now = Date.now()
  const supabase = getSupabase()

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('admin_sessions')
        .select('*')
        .eq('session_token', token)
        .eq('is_active', true)
        .maybeSingle()

      if (!error && data) {
        const lastActive = new Date(data.last_active_at).getTime()
        if (now - lastActive > INACTIVITY_TIMEOUT_MS) {
          await supabase.from('admin_sessions').update({ is_active: false }).eq('id', data.id)
          return false
        }
        await supabase
          .from('admin_sessions')
          .update({ last_active_at: new Date(now).toISOString() })
          .eq('id', data.id)
        return true
      }
    } catch {
      // fallback to memory
    }
  }

  if (currentActiveSession && currentActiveSession.token === token && currentActiveSession.isActive) {
    if (now - currentActiveSession.lastActiveAt > INACTIVITY_TIMEOUT_MS) {
      currentActiveSession.isActive = false
      return false
    }
    currentActiveSession.lastActiveAt = now
    return true
  }

  return false
}

export async function invalidateSession(token?: string): Promise<void> {
  const supabase = getSupabase()
  if (supabase) {
    try {
      if (token) {
        await supabase.from('admin_sessions').update({ is_active: false }).eq('session_token', token)
      } else {
        await supabase.from('admin_sessions').update({ is_active: false }).eq('is_active', true)
      }
    } catch {
      // fallback
    }
  }

  if (currentActiveSession) {
    currentActiveSession.isActive = false
  }
}

export function formatTimeAgo(timestamp: number): string {
  const diffSec = Math.floor((Date.now() - timestamp) / 1000)
  if (diffSec < 60) return `${diffSec} detik yang lalu`
  const diffMin = Math.floor(diffSec / 60)
  if (diffMin < 60) return `${diffMin} menit yang lalu`
  const diffHours = Math.floor(diffMin / 60)
  return `${diffHours} jam yang lalu`
}
