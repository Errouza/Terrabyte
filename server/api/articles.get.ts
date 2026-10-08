export default defineEventHandler(async () => {
  const fromDb = await getArticlesFromSupabase()
  const fromLocal = getStore('articles.json', [])

  const map = new Map<string, any>()

  // 1. Load Supabase records
  if (Array.isArray(fromDb)) {
    for (const a of fromDb) {
      if (a) {
        const key = String(a.id || a.slug || '').toLowerCase()
        map.set(key, a)
      }
    }
  }

  // 2. Overlay / Merge with local curated data from articles.json (contains bilingual fields)
  if (Array.isArray(fromLocal)) {
    for (const a of fromLocal) {
      if (a) {
        const key = String(a.id || a.slug || '').toLowerCase()
        const existing = map.get(key) || {}
        map.set(key, { ...existing, ...a })
      }
    }
  }

  // Fallback to local if map is empty
  const list = Array.from(map.values())
  return list.length > 0 ? list : fromLocal
})
