export default defineEventHandler(async (event) => {
  const authenticated = await isValidAdminSession(event)
  return { authenticated }
})
