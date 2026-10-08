export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: 'Slug is required' })
  }

  const fromDb = await getArticlesFromSupabase()
  const fromLocal = getStore('articles.json', [])

  const map = new Map<string, any>()

  if (Array.isArray(fromDb)) {
    for (const a of fromDb) {
      if (a) {
        const key = String(a.id || a.slug || '').toLowerCase()
        map.set(key, a)
      }
    }
  }

  if (Array.isArray(fromLocal)) {
    for (const a of fromLocal) {
      if (a) {
        const key = String(a.id || a.slug || '').toLowerCase()
        const existing = map.get(key) || {}
        map.set(key, { ...existing, ...a })
      }
    }
  }

  const list = Array.from(map.values())
  const decoded = decodeURIComponent(slug).toLowerCase().trim()

  const article = list.find((a: any) => {
    if (!a) return false
    const aId = String(a.id || '').toLowerCase()
    const aSlug = String(a.slug || '').toLowerCase()
    return aId === decoded || aSlug === decoded || decoded.includes(aSlug) || aSlug.includes(decoded)
  })

  if (!article) {
    throw createError({ statusCode: 404, statusMessage: 'Article not found' })
  }

  return article
})
