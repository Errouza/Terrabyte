export default defineEventHandler(async (event) => {
  if (!isValidAdminSession(event)) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }

  const id = getRouterParam(event, 'id')
  const body = await readBody(event)
  const list = getStore('inquiries.json', [])

  const idx = list.findIndex((inq: any) => inq.id === id)
  if (idx !== -1) {
    list[idx] = { ...list[idx], status: body.status || list[idx].status, updatedAt: new Date().toISOString() }
    setStore('inquiries.json', list)
    return { success: true, inquiry: list[idx] }
  }

  throw createError({ statusCode: 404, statusMessage: 'Inquiry not found' })
})
