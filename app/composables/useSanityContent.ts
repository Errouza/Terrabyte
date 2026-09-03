import { createClient } from '@sanity/client'

export interface Article {
  _id: string
  title: string
  slug: string
  publishedAt: string
  category: string
  readTime: string
  excerpt: string
  author: {
    name: string
    role: string
    avatar?: string
  }
  mainImage: string
  content?: string
  tags?: string[]
}

export const useSanityContent = () => {
  const client = createClient({
    projectId: 'hzmtw7ck',
    dataset: 'production',
    apiVersion: '2024-03-01',
    useCdn: false,
  })

  const getArticles = async (): Promise<Article[]> => {
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
      const data = await client.fetch(query)
      return data || []
    } catch (err) {
      console.warn('Sanity getArticles warning:', err)
      return []
    }
  }

  const getArticleBySlug = async (slug: string): Promise<Article | null> => {
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
      const data = await client.fetch(query, { slug })
      return data || null
    } catch (err) {
      console.warn('Sanity getArticleBySlug warning:', err)
      return null
    }
  }

  return {
    getArticles,
    getArticleBySlug,
  }
}
