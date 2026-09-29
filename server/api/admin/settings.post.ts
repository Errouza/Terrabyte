export default defineEventHandler(async (event) => {
  if (!isValidAdminSession(event)) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }

  const body = await readBody(event)
  const current = getStore('settings.json', {})
  const updated = { ...current, ...body, updatedAt: new Date().toISOString() }

  setStore('settings.json', updated)
  return { success: true, settings: updated }
})
