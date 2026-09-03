import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'hzmtw7ck',
  dataset: 'production',
  apiVersion: '2024-03-01',
  useCdn: false,
})

export default defineEventHandler(async () => {
  try {
    const query = `*[_type == "article" && !(_id in path("drafts.**"))] | order(_createdAt desc) {
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
    const articles = await client.fetch(query)
    return articles || []
  } catch (err: any) {
    console.error('Server Sanity fetch error:', err.message)
    return []
  }
})
