export default defineEventHandler(async (event) => {
  if (!await isValidAdminSession(event)) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }

  const body = await readBody(event)
  const from = body?.from || 'id'
  const to = body?.to || 'en'

  async function translateSingle(str: string): Promise<string> {
    if (!str || !str.trim()) return ''
    
    // Split by newlines so markdown paragraphs and headers stay clean
    const lines = str.split('\n')
    const translatedLines: string[] = []

    for (const line of lines) {
      if (!line.trim()) {
        translatedLines.push(line)
        continue
      }

      // Preserve markdown headers and bullet points
      let prefix = ''
      let clean = line
      const headerMatch = line.match(/^(#{1,6}\s+)/)
      if (headerMatch) {
        prefix = headerMatch[1]
        clean = line.slice(prefix.length)
      } else if (line.startsWith('- ') || line.startsWith('* ')) {
        prefix = line.slice(0, 2)
        clean = line.slice(2)
      }

      try {
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(clean)}&langpair=${from}|${to}`
        const res = await fetch(url, {
          headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
        })
        if (res.ok) {
          const data: any = await res.json()
          const translated = data?.responseData?.translatedText
          if (translated && !translated.includes('MYMEMORY WARNING')) {
            translatedLines.push(prefix + translated)
            continue
          }
        }
      } catch (err) {
        console.warn('Translation fetch failed for line:', line, err)
      }

      // Fallback: keep original line
      translatedLines.push(line)
    }

    return translatedLines.join('\n')
  }

  // Case 1: single text
  if (typeof body?.text === 'string') {
    const translated = await translateSingle(body.text)
    return { success: true, translated }
  }

  // Case 2: object of fields { title: "...", summary: "..." }
  if (body?.fields && typeof body.fields === 'object') {
    const results: Record<string, string> = {}
    for (const [key, val] of Object.entries(body.fields)) {
      if (typeof val === 'string') {
        results[key] = await translateSingle(val)
      } else {
        results[key] = ''
      }
    }
    return { success: true, results }
  }

  // Case 3: array of texts
  if (Array.isArray(body?.texts)) {
    const results: string[] = []
    for (const item of body.texts) {
      results.push(typeof item === 'string' ? await translateSingle(item) : '')
    }
    return { success: true, results }
  }

  return { success: false, message: 'Invalid payload' }
})
