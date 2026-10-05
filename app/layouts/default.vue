<template>
  <div class="min-h-screen bg-[#030d17] text-white flex flex-col font-body selection:bg-[#18b8ea] selection:text-[#030d17] relative">

    <!-- ─── WRAPPER ────────────────────────────────────────────────── -->
    <div class="relative flex-1 flex flex-col z-10">

      <!-- ─── HEADER: DYNAMIC ISLAND NAV ─────────────────────────────── -->
      <header
        class="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-300"
        :style="{
          paddingTop: `${(16 - progress * 10).toFixed(1)}px`,
          paddingBottom: '8px'
        }"
      >
        <nav
          class="pointer-events-auto flex items-center justify-between transition-all duration-300 ease-out border"
          :style="{
            width: `${(94 - progress * 8).toFixed(1)}%`,
            maxWidth: `${(1240 - progress * 160).toFixed(0)}px`,
            padding: `${(12 - progress * 3).toFixed(1)}px ${(28 - progress * 6).toFixed(1)}px`,
            backgroundColor: `rgba(3, 13, 23, ${(0.85 + progress * 0.13).toFixed(2)})`,
            borderColor: `rgba(24, 184, 234, ${(0.20 + progress * 0.25).toFixed(2)})`,
            borderRadius: `${Math.round(28 + progress * 72)}px`,
            backdropFilter: 'blur(20px)',
            boxShadow: progress > 0.1
              ? `0 14px 35px rgba(0, 5, 12, 0.75), 0 0 24px rgba(24, 184, 234, ${(progress * 0.22).toFixed(2)})`
              : '0 4px 24px rgba(0, 5, 12, 0.5)'
          }"
        >
          <!-- Brand Logo and Name -->
          <NuxtLink to="/" class="flex items-center gap-3.5 group flex-shrink-0">
            <img
              src="/images/logoOnlyPutih.png"
              alt="Terrabyte Logo"
              class="h-[32px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div class="leading-none">
              <div class="font-display font-bold text-sm tracking-[0.2em] text-white uppercase group-hover:text-[#18b8ea] transition-colors notranslate" translate="no">
                TERRABYTE
              </div>
              <div class="font-ui text-[8px] tracking-[0.24em] uppercase text-[#64748b] notranslate mt-0.5" translate="no">
                GEOSYSTEM INDONESIA
              </div>
            </div>
          </NuxtLink>

          <!-- Desktop Navigation Links (Home, Company, Product, Solutions, News, Contact) -->
          <div
            class="hidden lg:flex items-center transition-all duration-300"
            :style="{ gap: `${(2.0 - progress * 0.4).toFixed(2)}rem` }"
          >
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="relative transition-all duration-200 font-ui font-medium text-[13.5px] text-[#cbd5e1] hover:text-[#18b8ea] py-1"
              :class="$route.path === link.to ? 'text-[#18b8ea] font-semibold' : ''"
            >
              <span>{{ link.label }}</span>
              <span
                v-if="$route.path === link.to"
                class="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#18b8ea] shadow-[0_0_8px_#18b8ea]"
              ></span>
            </NuxtLink>
          </div>

          <!-- Right side items: Language switcher + CTA button + Mobile toggle -->
          <div class="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
            <!-- Language Switcher (Always accessible) -->
            <LanguageSwitcher />

            <!-- Desktop CTA Button: Get in touch -->
            <div class="hidden lg:block flex-shrink-0">
              <NuxtLink
                to="/contact"
                class="inline-flex items-center justify-center font-ui font-bold text-xs tracking-wider uppercase px-5 py-2.5 rounded-full bg-[#18b8ea] text-[#030d17] hover:bg-[#38cbf8] hover:shadow-[0_0_20px_rgba(24,184,234,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                :style="{
                  padding: `${(9 - progress * 2).toFixed(1)}px ${(20 - progress * 4).toFixed(1)}px`,
                  fontSize: `${(11.5 - progress * 0.5).toFixed(1)}px`
                }"
              >
                {{ t('nav.getInTouch') }}
              </NuxtLink>
            </div>

            <!-- Mobile Toggle Button -->
            <button
              class="lg:hidden text-[#94a3b8] p-1.5 focus:outline-none hover:text-[#18b8ea] transition-colors"
              @click="mobileOpen = !mobileOpen"
              aria-label="Toggle Navigation"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path v-if="mobileOpen" stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </nav>

        <!-- Mobile Drawer -->
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-3 scale-95"
          enter-to-class="opacity-100 translate-y-0 scale-100"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0 scale-100"
          leave-to-class="opacity-0 -translate-y-3 scale-95"
        >
          <div
            v-if="mobileOpen"
            class="pointer-events-auto absolute top-full left-4 right-4 mt-2 max-w-md mx-auto p-5 rounded-3xl bg-[#061826]/98 backdrop-blur-2xl border border-[#18b8ea]/45 shadow-[0_20px_45px_rgba(0,0,0,0.85),0_0_24px_rgba(24,184,234,0.25)] flex flex-col gap-3.5 z-50 lg:hidden"
          >
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="text-sm font-medium py-1.5 px-3 rounded-lg hover:bg-white/5 transition-colors"
              :class="$route.path === link.to ? 'text-[#18b8ea] font-semibold' : 'text-[#94a3b8]'"
              @click="mobileOpen = false"
            >
              {{ link.label }}
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="w-full text-center py-2.5 rounded-full bg-[#18b8ea] text-[#030d17] font-ui font-bold text-xs tracking-wider uppercase mt-2 shadow-[0_0_15px_rgba(24,184,234,0.35)]"
              @click="mobileOpen = false"
            >
              {{ t('nav.getInTouch') }}
            </NuxtLink>
          </div>
        </Transition>
      </header>

      <!-- ─── MAIN CONTENT ─────────────────────────────────────────── -->
      <main class="flex-1 relative">
        <slot />
      </main>

      <!-- ─── FOOTER (EXACT HI-FI DESIGN) ───────────────────────────── -->
      <footer class="bg-[#020911] border-t border-white/10 text-white mt-auto relative z-10">
        <div class="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <div class="flex flex-col md:flex-row justify-between items-start gap-10">

            <!-- Brand Column -->
            <div class="space-y-4 max-w-sm">
              <NuxtLink to="/" class="flex items-center gap-3.5 group inline-flex">
                <img src="/images/logoOnlyPutih.png" alt="Terrabyte Logo" class="h-[34px] w-auto object-contain" />
                <div class="leading-none">
                  <div class="font-display font-bold text-sm tracking-[0.2em] text-white uppercase group-hover:text-[#18b8ea] transition-colors notranslate" translate="no">TERRABYTE</div>
                  <div class="font-ui text-[8px] tracking-[0.24em] uppercase text-[#64748b] notranslate mt-0.5" translate="no">GEOSYSTEM INDONESIA</div>
                </div>
              </NuxtLink>
              <p class="font-body font-light text-xs sm:text-[13px] leading-relaxed text-[#8da2b5]">
                {{ t('footer.tagline') }}
              </p>
            </div>

            <!-- Column: ADDRESS (Separate Div) -->
            <div class="space-y-3.5 text-left max-w-xs">
              <p class="font-mono text-[11px] tracking-[0.2em] uppercase text-[#64748b] font-semibold">{{ t('footer.addressLabel') || 'ADDRESS' }}</p>
              <div class="flex items-start gap-2.5 text-xs text-[#94a3b8]">
                <svg class="w-4 h-4 text-[#18b8ea] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p class="leading-relaxed">
                  {{ t('footer.address') }}
                </p>
              </div>
            </div>

            <!-- Column: CONTACT (Phone, Email, Social Logos) -->
            <div class="space-y-3.5 text-left max-w-xs">
              <p class="font-mono text-[11px] tracking-[0.2em] uppercase text-[#64748b] font-semibold">{{ t('footer.contact') }}</p>
              <div class="space-y-3 text-xs text-[#94a3b8]">
                <!-- Phone -->
                <div class="flex items-center gap-2.5">
                  <svg class="w-4 h-4 text-[#18b8ea] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a href="tel:08139840986" class="hover:text-[#18b8ea] transition-colors font-mono">
                    0813 9840 986
                  </a>
                </div>

                <!-- Email -->
                <div class="flex items-center gap-2.5">
                  <svg class="w-4 h-4 text-[#18b8ea] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href="mailto:info.tgi@terrabytegeosystem.com" class="hover:text-[#18b8ea] transition-colors font-mono">
                    info.tgi@terrabytegeosystem.com
                  </a>
                </div>

                <!-- Social Icons (Logo Only) -->
                <div class="flex items-center gap-2.5 pt-1.5">
                  <!-- Instagram -->
                  <a
                    href="https://www.instagram.com/terrabyte.geosystem/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-8 h-8 rounded-xl bg-white/5 hover:bg-[#18b8ea]/20 border border-white/10 hover:border-[#18b8ea] text-[#94a3b8] hover:text-[#18b8ea] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                    aria-label="Instagram"
                    title="Instagram"
                  >
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </a>

                  <!-- LinkedIn -->
                  <a
                    href="https://www.linkedin.com/company/terrabyte-geosystem-indonesia/home/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-8 h-8 rounded-xl bg-white/5 hover:bg-[#18b8ea]/20 border border-white/10 hover:border-[#18b8ea] text-[#94a3b8] hover:text-[#18b8ea] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66 1.66 1.66 0 0 0-1.66-1.66z"/>
                    </svg>
                  </a>
                </div>

              </div>
            </div>

          </div>

          <!-- Bottom Bar Divider -->
          <div class="w-full border-t border-white/5 my-8"></div>

          <!-- Bottom Bar with Stealth Secret Admin Trigger -->
          <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-[#60778c]">
            <p class="flex flex-wrap items-center gap-2">
              <span>
                <span
                  @click="handleSecretAdminClick"
                  class="cursor-default select-none transition-colors duration-200"
                  :class="{ 'text-[#18b8ea]': secretClicks > 0 }"
                >&copy;</span>
                {{ t('footer.rights') }}
              </span>
            </p>
            <p class="font-mono tracking-[0.25em] uppercase text-[10px] text-[#718b9f]">
              {{ t('footer.motto') }}
            </p>
          </div>
        </div>
      </footer>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const scrollY = ref(0)
const mobileOpen = ref(false)

// ─── STEALTH SECRET ADMIN TRIGGER (TRIPLE CLICK COPYRIGHT) ─────────
const secretClicks = ref(0)
let secretTimer: any = null

function handleSecretAdminClick() {
  secretClicks.value++
  clearTimeout(secretTimer)

  if (secretClicks.value >= 3) {
    secretClicks.value = 0
    navigateTo('/ops-system')
    return
  }

  secretTimer = setTimeout(() => {
    secretClicks.value = 0
  }, 1200)
}

const progress = computed(() => {
  return Math.min(1, Math.max(0, scrollY.value / 85))
})

const { t } = useLanguage()

// ─── SITE SETTINGS & SOCIAL LINKS ─────────────────────────────────
const { data: settingsData } = await useAsyncData('site-settings', () => $fetch('/api/settings').catch(() => ({})))
const instagramUrl = computed(() => (settingsData.value as any)?.instagram || 'https://instagram.com/terrabyte.geosystem')
const linkedinUrl = computed(() => (settingsData.value as any)?.linkedin || 'https://www.linkedin.com/company/terrabyte-geosystem-indonesia')

const navLinks = computed(() => [
  { to: '/', label: t('nav.home') },
  { to: '/company', label: t('nav.company') },
  { to: '/products', label: t('nav.products') },
  { to: '/solutions', label: t('nav.solutions') },
  { to: '/articles', label: t('nav.news') },
  { to: '/contact', label: t('nav.contact') },
])

let ticking = false
const onScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      scrollY.value = window.scrollY
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  scrollY.value = window.scrollY
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
