export default defineEventHandler(async (event) => {
  if (!isValidAdminSession(event)) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }

  const item = await readBody(event)
  const list = getStore('products.json', [])

  if (item.id) {
    // Update existing
    const idx = list.findIndex((p: any) => p.id === item.id)
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...item, updatedAt: new Date().toISOString() }
    } else {
      list.unshift({ ...item, updatedAt: new Date().toISOString() })
    }
  } else {
    // Create new
    const newId = 'prod-' + Date.now()
    list.unshift({
      ...item,
      id: newId,
      updatedAt: new Date().toISOString()
    })
  }

  setStore('products.json', list)
  return { success: true, products: list }
})
