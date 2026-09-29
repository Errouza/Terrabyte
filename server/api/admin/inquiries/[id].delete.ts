export default defineEventHandler((event) => {
  if (!isValidAdminSession(event)) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }

  const id = getRouterParam(event, 'id')
  let list = getStore('inquiries.json', [])
  list = list.filter((inq: any) => inq.id !== id)

  setStore('inquiries.json', list)
  return { success: true, inquiries: list }
})
