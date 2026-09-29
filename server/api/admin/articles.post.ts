export default defineEventHandler(async (event) => {
  if (!isValidAdminSession(event)) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }

  const item = await readBody(event)
  const list = getStore('articles.json', [])

  // Auto slug generator if empty
  if (!item.slug && item.title) {
    item.slug = item.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')
  }

  if (item.id) {
    const idx = list.findIndex((a: any) => a.id === item.id)
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...item, updatedAt: new Date().toISOString() }
    } else {
      list.unshift({ ...item, updatedAt: new Date().toISOString() })
    }
  } else {
    const newId = 'art-' + Date.now()
    list.unshift({
      ...item,
      id: newId,
      publishedAt: item.publishedAt || new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }),
      updatedAt: new Date().toISOString()
    })
  }

  setStore('articles.json', list)
  return { success: true, articles: list }
})
