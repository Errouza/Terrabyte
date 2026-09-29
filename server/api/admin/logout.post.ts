export default defineEventHandler((event) => {
  deleteCookie(event, 'tb_admin_token', { path: '/' })
  return { success: true }
})
