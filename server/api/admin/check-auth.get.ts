export default defineEventHandler((event) => {
  const authenticated = isValidAdminSession(event)
  return { authenticated }
})
