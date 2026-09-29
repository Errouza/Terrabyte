import fs from 'node:fs'
import path from 'node:path'

const dataDir = path.resolve(process.cwd(), 'server', 'data')

export function getStore<T = any>(filename: string, defaultValue: T): T {
  try {
    const filePath = path.join(dataDir, filename.endsWith('.json') ? filename : filename + '.json')
    if (!fs.existsSync(filePath)) {
      return defaultValue
    }
    const content = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(content) as T
  } catch (err) {
    console.error('Error reading ' + filename + ':', err)
    return defaultValue
  }
}

export function setStore<T = any>(filename: string, data: T): boolean {
  try {
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }
    const filePath = path.join(dataDir, filename.endsWith('.json') ? filename : filename + '.json')
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8')
    return true
  } catch (err) {
    console.error('Error writing ' + filename + ':', err)
    return false
  }
}

export function getAdminPassword(): string {
  return process.env.ADMIN_PASSWORD || 'terrabyte2026'
}

export async function isValidAdminSession(event: any): Promise<boolean> {
  const sessionToken = getCookie(event, 'tb_admin_session')
  if (sessionToken) {
    const isAlive = await touchSession(sessionToken)
    if (isAlive) return true
  }

  // Legacy fallback support for older token format
  const cookie = getCookie(event, 'tb_admin_token')
  const authHeader = getHeader(event, 'authorization')
  const validToken = Buffer.from(getAdminPassword()).toString('base64')

  if (cookie === validToken) return true
  if (authHeader && authHeader.replace('Bearer ', '') === validToken) return true

  return false
}
