export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'Product ID is required' })
  }

  const fromDb = await getProductsFromSupabase()
  const list = fromDb && fromDb.length > 0 ? fromDb : getStore('products.json', [])

  const decodedId = decodeURIComponent(id).trim().toLowerCase()

  const product = list.find((p: any) => {
    if (!p) return false
    const pId = String(p.id || '').toLowerCase()
    const pCode = String(p.code || '').toLowerCase()
    const pSlug = String(p.name || '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')

    return (
      pId === decodedId ||
      pCode === decodedId ||
      pSlug === decodedId ||
      pId.includes(decodedId) ||
      decodedId.includes(pId)
    )
  })

  if (!product) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found' })
  }

  return product
})
