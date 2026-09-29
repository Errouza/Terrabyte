export default defineEventHandler(async () => {
  const fromDb = await getProductsFromSupabase()
  if (fromDb && fromDb.length > 0) {
    return fromDb
  }
  return getStore('products.json', [])
})
