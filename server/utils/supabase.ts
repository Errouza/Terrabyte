import { createClient, SupabaseClient } from '@supabase/supabase-js'

let _client: SupabaseClient | null = null

export function getSupabase(): SupabaseClient | null {
  const url = process.env.SUPABASE_URL || 'https://xbadzroazjblacumvnpq.supabase.co'
  const key = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhiYWR6cm9hempibGFjdW12bnBxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc5MDY5NzAwMCwiZXhwIjoyMTA2MjczMDAwfQ.SsW2JYfsb9EL8ZH6MA5jU0HGVBaAmi8e-zHppRPQMP8'

  if (!url || !key) return null

  if (!_client) {
    _client = createClient(url, key, {
      auth: {
        persistSession: false,
        autoRefreshToken: false
      }
    })
  }

  return _client
}

// ─── PRODUCTS ────────────────────────────────────────────────────────
export async function getProductsFromSupabase(): Promise<any[] | null> {
  const supabase = getSupabase()
  if (!supabase) return null

  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('updated_at', { ascending: false })

    if (error || !data) {
      console.warn('[Supabase] Could not fetch products, using fallback:', error?.message)
      return null
    }

    return data.map(item => ({
      ...item,
      updatedAt: item.updated_at || item.updatedAt
    }))
  } catch (err: any) {
    console.warn('[Supabase] Exception fetching products:', err?.message)
    return null
  }
}

export async function saveProductsToSupabase(products: any[]): Promise<boolean> {
  const supabase = getSupabase()
  if (!supabase) return false

  try {
    const rows = products.map(p => ({
      id: p.id,
      code: p.code || null,
      tag: p.tag || null,
      category: p.category || null,
      name: p.name,
      summary: p.summary || null,
      img: p.img || null,
      status: p.status || 'In Field Deployment',
      specs: p.specs || [],
      updated_at: new Date().toISOString()
    }))

    const { error } = await supabase
      .from('products')
      .upsert(rows, { onConflict: 'id' })

    if (error) {
      console.error('[Supabase] Error saving products:', error.message)
      return false
    }

    return true
  } catch (err: any) {
    console.error('[Supabase] Exception saving products:', err?.message)
    return false
  }
}

// ─── ARTICLES ────────────────────────────────────────────────────────
export async function getArticlesFromSupabase(): Promise<any[] | null> {
  const supabase = getSupabase()
  if (!supabase) return null

  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .order('updated_at', { ascending: false })

    if (error || !data) {
      console.warn('[Supabase] Could not fetch articles, using fallback:', error?.message)
      return null
    }

    return data.map(item => {
      const i18n = (item.author && typeof item.author === 'object') ? item.author.i18n : null
      return {
        id: item.id,
        slug: item.slug,
        title: item.title,
        titleEn: i18n?.titleEn || item.title_en || item.titleEn || undefined,
        excerpt: item.excerpt,
        excerptEn: i18n?.excerptEn || item.excerpt_en || item.excerptEn || undefined,
        content: item.content,
        contentEn: i18n?.contentEn || item.content_en || item.contentEn || undefined,
        category: item.category,
        categoryEn: i18n?.categoryEn || item.category_en || item.categoryEn || undefined,
        publishedAt: item.published_at,
        readTime: item.read_time,
        mainImage: item.main_image,
        author: item.author,
        updatedAt: item.updated_at
      }
    })
  } catch (err: any) {
    console.warn('[Supabase] Exception fetching articles:', err?.message)
    return null
  }
}

export async function saveArticlesToSupabase(articles: any[]): Promise<boolean> {
  const supabase = getSupabase()
  if (!supabase) return false

  try {
    const rows = articles.map(a => {
      const authorObj = typeof a.author === 'object' && a.author !== null ? { ...a.author } : { name: 'Terrabyte Team', role: 'Specialist' }
      authorObj.i18n = {
        titleEn: a.titleEn || a.title_en || null,
        categoryEn: a.categoryEn || a.category_en || null,
        excerptEn: a.excerptEn || a.excerpt_en || null,
        contentEn: a.contentEn || a.content_en || null
      }

      return {
        id: a.id,
        slug: a.slug,
        title: a.title,
        excerpt: a.excerpt || null,
        content: a.content || null,
        category: a.category || 'Articles',
        published_at: a.publishedAt || a.published_at || null,
        read_time: a.readTime || a.read_time || '4',
        main_image: a.mainImage || a.main_image || null,
        author: authorObj,
        updated_at: new Date().toISOString()
      }
    })

    const { error } = await supabase
      .from('articles')
      .upsert(rows, { onConflict: 'id' })

    if (error) {
      console.error('[Supabase] Error saving articles:', error.message)
      return false
    }

    return true
  } catch (err: any) {
    console.error('[Supabase] Exception saving articles:', err?.message)
    return false
  }
}

// ─── INQUIRIES ───────────────────────────────────────────────────────
export async function getInquiriesFromSupabase(): Promise<any[] | null> {
  const supabase = getSupabase()
  if (!supabase) return null

  try {
    const { data, error } = await supabase
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false })

    if (error || !data) {
      console.warn('[Supabase] Could not fetch inquiries, using fallback:', error?.message)
      return null
    }

    return data.map(i => ({
      ...i,
      createdAt: i.created_at
    }))
  } catch (err: any) {
    console.warn('[Supabase] Exception fetching inquiries:', err?.message)
    return null
  }
}

export async function saveInquiryToSupabase(inquiry: any): Promise<boolean> {
  const supabase = getSupabase()
  if (!supabase) return false

  try {
    const row = {
      id: inquiry.id || 'inq-' + Date.now(),
      name: inquiry.name,
      email: inquiry.email,
      organization: inquiry.organization || null,
      domain: inquiry.domain || null,
      message: inquiry.message || null,
      status: inquiry.status || 'new',
      source: inquiry.source || 'Web Contact Form',
      created_at: inquiry.createdAt || new Date().toISOString()
    }

    const { error } = await supabase.from('inquiries').insert([row])
    if (error) {
      console.error('[Supabase] Error inserting inquiry:', error.message)
      return false
    }

    return true
  } catch (err: any) {
    console.error('[Supabase] Exception inserting inquiry:', err?.message)
    return false
  }
}

// ─── STORAGE: UPLOADS ────────────────────────────────────────────────
export async function uploadImageToSupabaseStorage(
  filename: string,
  buffer: Buffer,
  contentType: string
): Promise<string | null> {
  const supabase = getSupabase()
  if (!supabase) return null

  try {
    // Pastikan bucket uploads ada
    await supabase.storage.createBucket('uploads', { public: true }).catch(() => {})

    const cleanFilename = Date.now() + '-' + filename.replace(/[^a-zA-Z0-9._-]/g, '_')

    const { error } = await supabase.storage
      .from('uploads')
      .upload(cleanFilename, buffer, {
        contentType,
        upsert: true
      })

    if (error) {
      console.error('[Supabase Storage] Upload error:', error.message)
      return null
    }

    const { data } = supabase.storage.from('uploads').getPublicUrl(cleanFilename)
    return data.publicUrl
  } catch (err: any) {
    console.error('[Supabase Storage] Upload exception:', err?.message)
    return null
  }
}
