import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'hzmtw7ck',
  dataset: 'production',
  apiVersion: '2024-03-01',
  useCdn: false,
})

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  try {
    const query = `*[_type == "article" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      category,
      readTime,
      excerpt,
      "author": coalesce(author->, author, {"name": "Terrabyte Team", "role": "Specialist"}),
      "mainImage": coalesce(mainImage.asset->url, "/images/hero-bg.jpg"),
      tags,
      content
    }`
    const article = await client.fetch(query, { slug })
    return article || null
  } catch (err: any) {
    console.error('Server Sanity slug error:', err.message)
    return null
  }
})
