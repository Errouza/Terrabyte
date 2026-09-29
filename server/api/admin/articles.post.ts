export default defineEventHandler(async (event) => {
  if (!await isValidAdminSession(event)) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }

  const item = await readBody(event)
  const fromDb = await getArticlesFromSupabase()
  const list = fromDb && fromDb.length > 0 ? fromDb : getStore('articles.json', [])

  // Auto slug generator if empty
  if (!item.slug && item.title) {
    item.slug = item.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')
  }

  let targetItem = { ...item }
  if (item.id) {
    const idx = list.findIndex((a: any) => a.id === item.id)
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...item, updatedAt: new Date().toISOString() }
      targetItem = list[idx]
    } else {
      targetItem = { ...item, updatedAt: new Date().toISOString() }
      list.unshift(targetItem)
    }
  } else {
    targetItem = {
      ...item,
      id: 'art-' + Date.now(),
      publishedAt: item.publishedAt || new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }),
      updatedAt: new Date().toISOString()
    }
    list.unshift(targetItem)
  }

  // Save to Supabase Cloud
  await saveArticlesToSupabase([targetItem])
  // Backup to local file store
  setStore('articles.json', list)

  return { success: true, articles: list }
})
