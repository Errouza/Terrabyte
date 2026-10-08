import { ref, computed, unref } from 'vue'
import en from '~/locales/en'
import id from '~/locales/id'

export function useLanguage() {
  const cookieLocale = useCookie<'en' | 'id'>('tb_language', {
    default: () => 'id',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365
  })

  const currentLocale = useState<'en' | 'id'>('tb_locale', () => {
    if (cookieLocale.value === 'en' || cookieLocale.value === 'id') {
      return cookieLocale.value
    }
    return 'id'
  })

  // Synchronize on client if cookie was updated or if stored in localStorage
  if (import.meta.client) {
    if (!cookieLocale.value) {
      try {
        const saved = localStorage.getItem('tb_language') as 'en' | 'id' | null
        if (saved === 'id' || saved === 'en') {
          currentLocale.value = saved
          cookieLocale.value = saved
        }
      } catch {}
    } else if (currentLocale.value !== cookieLocale.value) {
      currentLocale.value = cookieLocale.value
    }
  }

  const setLocale = (lang: 'en' | 'id') => {
    currentLocale.value = lang
    cookieLocale.value = lang
    if (import.meta.client) {
      try {
        localStorage.setItem('tb_language', lang)
      } catch {}
    }
  }

  const t = (path: string, fallback?: string): string => {
    const dict = currentLocale.value === 'id' ? id : en
    const keys = path.split('.')
    let current: any = dict

    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key]
      } else {
        return fallback || path
      }
    }

    return typeof current === 'string' ? current : (fallback || path)
  }

  // Localize dynamic database/JSON content (e.g. products, articles)
  const loc = (rawItem: any, field: string): string => {
    const item = unref(rawItem)
    if (!item) return ''
    if (currentLocale.value === 'en') {
      const enField = field + 'En'
      const snakeField = field + '_en'
      if (item[enField]) return String(item[enField])
      if (item[snakeField]) return String(item[snakeField])
    }
    return String(item[field] || '')
  }

  // Localize array of specs: [["Label", "Value"], ...]
  const locSpecs = (rawItem: any): Array<[string, string]> => {
    const item = unref(rawItem)
    if (!item) return []
    if (currentLocale.value === 'en' && Array.isArray(item.specsEn) && item.specsEn.length > 0) {
      return item.specsEn
    }
    return Array.isArray(item.specs) ? item.specs : []
  }

  // Localize advantages list: [{ title, desc, icon }]
  const locAdvantages = (rawItem: any): Array<any> => {
    const item = unref(rawItem)
    if (!item || !Array.isArray(item.advantages)) return []
    if (currentLocale.value === 'en') {
      return item.advantages.map((adv: any) => ({
        ...adv,
        title: adv.titleEn || adv.title,
        desc: adv.descEn || adv.desc
      }))
    }
    return item.advantages
  }

  return {
    locale: currentLocale,
    setLocale,
    t,
    loc,
    locSpecs,
    locAdvantages
  }
}
