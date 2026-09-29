export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'tb_admin_session')
  await invalidateSession(token)
  deleteCookie(event, 'tb_admin_session', { path: '/' })
  deleteCookie(event, 'tb_admin_token', { path: '/' })
  return { success: true }
})
