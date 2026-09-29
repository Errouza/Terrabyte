export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')
  const list = getStore('articles.json', [])
  const article = list.find((a: any) => a.slug === slug || a.id === slug)
  if (!article) {
    throw createError({ statusCode: 404, statusMessage: 'Article not found' })
  }
  return article
})
