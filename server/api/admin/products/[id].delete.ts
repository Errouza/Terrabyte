export default defineEventHandler((event) => {
  if (!isValidAdminSession(event)) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }

  const id = getRouterParam(event, 'id')
  let list = getStore('products.json', [])
  list = list.filter((p: any) => p.id !== id)

  setStore('products.json', list)
  return { success: true, products: list }
})
