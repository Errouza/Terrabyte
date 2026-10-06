export default defineEventHandler(async () => {
  const fromDb = await getProductsFromSupabase()
  const fromLocal = getStore('products.json', [])

  const map = new Map<string, any>()

  const getGroup = (p: any) => {
    const s = `${p.id || ''} ${p.code || ''} ${p.name || ''}`.toLowerCase()
    if (s.includes('sar5000') || s.includes('radar')) return 'sar5000'
    if (s.includes('n2') || s.includes('palm')) return 'n2'
    if (s.includes('t20')) return 't20'
    if (s.includes('mars')) return 'mars'
    return s.replace(/[^a-z0-9]/g, '')
  }

  // 1. Overlay Supabase database entries first
  if (Array.isArray(fromDb)) {
    for (const p of fromDb) {
      if (p) {
        const key = getGroup(p)
        map.set(key, p)
      }
    }
  }

  // 2. Overlay / Enhance with local high-fidelity curated data from products.json
  if (Array.isArray(fromLocal)) {
    for (const p of fromLocal) {
      if (p) {
        const key = getGroup(p)
        const existing = map.get(key) || {}
        map.set(key, { ...existing, ...p })
      }
    }
  }

  // Filter out any SV600 or placeholder images
  const list = Array.from(map.values()).filter(p => {
    const s = `${p.id || ''} ${p.code || ''} ${p.name || ''} ${p.img || ''}`.toLowerCase()
    return !s.includes('sv600') && !s.includes('solutions-marine')
  })

  // Exact sorting order matching reference:
  // 1. SAR5000 Radar
  // 2. N2 Palm Laser RTK
  // 3. T20 GNSS
  // 4. Mars Laser RTK
  const priority = (p: any) => {
    const s = `${p.code || ''} ${p.name || ''} ${p.id || ''}`.toLowerCase()
    if (s.includes('sar5000') || s.includes('radar')) return 1
    if (s.includes('n2')) return 2
    if (s.includes('t20')) return 3
    if (s.includes('mars')) return 4
    return 10
  }

  list.sort((a, b) => priority(a) - priority(b))
  return list
})
