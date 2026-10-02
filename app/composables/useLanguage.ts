import { ref, computed } from 'vue'
import en from '~/locales/en'
import id from '~/locales/id'

const currentLocale = ref<'en' | 'id'>('en')
let initialized = false

export function useLanguage() {
  if (!initialized && typeof window !== 'undefined') {
    initialized = true
    const saved = localStorage.getItem('tb_language') as 'en' | 'id' | null
    if (saved === 'id' || saved === 'en') {
      currentLocale.value = saved
    }
  }

  const setLocale = (lang: 'en' | 'id') => {
    currentLocale.value = lang
    if (typeof window !== 'undefined') {
      localStorage.setItem('tb_language', lang)
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

  return {
    locale: currentLocale,
    setLocale,
    t
  }
}
