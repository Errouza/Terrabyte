export default defineEventHandler(async (event) => {
  if (!await isValidAdminSession(event)) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }
  const fromDb = await getInquiriesFromSupabase()
  if (fromDb && fromDb.length > 0) {
    return fromDb
  }
  return getStore('inquiries.json', [])
})
