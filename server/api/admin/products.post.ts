export default defineEventHandler(async (event) => {
  if (!await isValidAdminSession(event)) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }

  const item = await readBody(event)
  const fromDb = await getProductsFromSupabase()
  const list = fromDb && fromDb.length > 0 ? fromDb : getStore('products.json', [])

  let targetItem = { ...item }
  if (item.id) {
    const idx = list.findIndex((p: any) => p.id === item.id)
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
      id: 'prod-' + Date.now(),
      updatedAt: new Date().toISOString()
    }
    list.unshift(targetItem)
  }

  // Save to Supabase Cloud
  await saveProductsToSupabase([targetItem])
  // Backup to local store if writable
  setStore('products.json', list)

  return { success: true, products: list }
})
