<template>
  <div class="relative inline-flex items-center" ref="dropdownRef">
    <!-- Trigger Button -->
    <button
      type="button"
      @click="isOpen = !isOpen"
      class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#18b8ea]/60 transition-all text-xs font-mono text-white shadow-sm cursor-pointer select-none"
      aria-label="Select Language"
    >
      <span class="text-sm leading-none">{{ currentConfig.flag }}</span>
      <span class="font-bold tracking-wider uppercase text-[#18b8ea] text-[11px]">{{ currentConfig.code }}</span>
      <svg
        class="w-3 h-3 text-[#94a3b8] transition-transform duration-200"
        :class="{ 'rotate-180 text-[#18b8ea]': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="transform scale-95 opacity-0 -translate-y-1"
      enter-to-class="transform scale-100 opacity-100 translate-y-0"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="transform scale-100 opacity-100 translate-y-0"
      leave-to-class="transform scale-95 opacity-0 -translate-y-1"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 top-full mt-2 w-44 py-2 rounded-2xl bg-[#030d17]/95 border border-white/15 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(24,184,234,0.15)] z-50 overflow-hidden"
      >
        <div class="px-3.5 py-1 text-[10px] font-mono tracking-widest uppercase text-[#64748b] border-b border-white/5 mb-1">
          Language / Bahasa
        </div>
        <button
          v-for="lang in availableLanguages"
          :key="lang.code"
          type="button"
          @click="selectLanguage(lang.code as 'en' | 'id')"
          class="w-full px-3.5 py-2 text-left text-xs font-mono flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer"
          :class="locale === lang.code ? 'text-[#18b8ea] font-bold bg-[#18b8ea]/10' : 'text-[#cbd5e1]'"
        >
          <span class="flex items-center gap-2.5">
            <span class="text-base">{{ lang.flag }}</span>
            <span>{{ lang.name }}</span>
          </span>
          <span v-if="locale === lang.code" class="text-[#18b8ea] text-xs font-bold">&check;</span>
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '~/composables/useLanguage'

const { locale, setLocale } = useLanguage()

const availableLanguages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'id', name: 'Indonesia', flag: '🇮🇩' },
]

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const currentConfig = computed(() => {
  return availableLanguages.find(l => l.code === locale.value) || availableLanguages[0]
})

function closeDropdown(e: MouseEvent) {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
    isOpen.value = false
  }
}

function selectLanguage(lang: 'en' | 'id') {
  isOpen.value = false
  setLocale(lang)
}

onMounted(() => {
  // Clear any residual Google Translate cookies
  if (typeof document !== 'undefined') {
    const host = window.location.hostname
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${host};`
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${host};`
  }
  document.addEventListener('click', closeDropdown)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>
