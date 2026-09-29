export default defineEventHandler(async (event) => {
  if (!await isValidAdminSession(event)) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }

  const body = await readBody(event)
  setStore('testimonials.json', body)
  return { success: true, testimonials: body }
})
