export default defineEventHandler(async (event) => {
  if (!await isValidAdminSession(event)) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }

  const id = getRouterParam(event, 'id')
  const supabase = getSupabase()

  if (supabase && id) {
    try {
      await supabase.from('products').delete().eq('id', id)
    } catch (err: any) {
      console.warn('[Supabase] Error deleting product:', err.message)
    }
  }

  let list = getStore('products.json', [])
  list = list.filter((p: any) => p.id !== id)
  setStore('products.json', list)

  const updatedFromDb = await getProductsFromSupabase()
  return { success: true, products: updatedFromDb || list }
})
