export default defineEventHandler(() => {
  return getStore('settings.json', {})
})
