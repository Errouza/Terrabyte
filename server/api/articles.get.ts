export default defineEventHandler(async () => {
  const fromDb = await getArticlesFromSupabase()
  if (fromDb && fromDb.length > 0) {
    return fromDb
  }
  return getStore('articles.json', [])
})
