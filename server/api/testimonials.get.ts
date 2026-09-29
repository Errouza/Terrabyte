export default defineEventHandler(() => {
  return getStore('testimonials.json', [])
})
