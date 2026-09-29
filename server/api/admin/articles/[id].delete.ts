export default defineEventHandler((event) => {
  if (!isValidAdminSession(event)) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }

  const id = getRouterParam(event, 'id')
  let list = getStore('articles.json', [])
  list = list.filter((a: any) => a.id !== id)

  setStore('articles.json', list)
  return { success: true, articles: list }
})
