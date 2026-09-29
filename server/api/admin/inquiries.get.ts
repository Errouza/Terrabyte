export default defineEventHandler((event) => {
  if (!isValidAdminSession(event)) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }
  return getStore('inquiries.json', [])
})
