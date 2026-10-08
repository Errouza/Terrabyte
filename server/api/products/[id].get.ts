export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'Product ID is required' })
  }

  const fromDb = await getProductsFromSupabase()
  const fromLocal = getStore('products.json', [])

  const getGroup = (p: any) => {
    const s = `${p.id || ''} ${p.code || ''} ${p.name || ''}`.toLowerCase()
    if (s.includes('sar5000') || s.includes('radar')) return 'sar5000'
    if (s.includes('n2') || s.includes('palm')) return 'n2'
    if (s.includes('t20')) return 't20'
    if (s.includes('mars')) return 'mars'
    return s.replace(/[^a-z0-9]/g, '')
  }

  const map = new Map<string, any>()
  if (Array.isArray(fromDb)) {
    for (const p of fromDb) {
      if (p) map.set(getGroup(p), p)
    }
  }
  if (Array.isArray(fromLocal)) {
    for (const p of fromLocal) {
      if (p) {
        const key = getGroup(p)
        const existing = map.get(key) || {}
        map.set(key, { ...existing, ...p })
      }
    }
  }

  const list = Array.from(map.values())
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
      decodedId.includes(pId) ||
      getGroup(p) === decodedId ||
      decodedId.includes(getGroup(p))
    )
  })

  if (!product) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found' })
  }

  return product
})
