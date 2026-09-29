export default defineEventHandler(async (event) => {
  if (!await isValidAdminSession(event)) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }

  const id = getRouterParam(event, 'id')
  const supabase = getSupabase()

  if (supabase && id) {
    try {
      await supabase.from('articles').delete().eq('id', id)
    } catch (err: any) {
      console.warn('[Supabase] Error deleting article:', err.message)
    }
  }

  let list = getStore('articles.json', [])
  list = list.filter((a: any) => a.id !== id)
  setStore('articles.json', list)

  const updatedFromDb = await getArticlesFromSupabase()
  return { success: true, articles: updatedFromDb || list }
})
