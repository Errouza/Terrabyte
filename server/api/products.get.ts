export default defineEventHandler(() => {
  return getStore('products.json', [])
})
