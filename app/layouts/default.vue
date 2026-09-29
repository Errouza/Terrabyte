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
              Get in touch
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
              Get in touch
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
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

            <!-- Brand Column (2 Cols on lg) -->
            <div class="lg:col-span-2 space-y-4">
              <NuxtLink to="/" class="flex items-center gap-3.5 group inline-flex">
                <img src="/images/logoOnlyPutih.png" alt="Terrabyte Logo" class="h-[34px] w-auto object-contain" />
                <div class="leading-none">
                  <div class="font-display font-bold text-sm tracking-[0.2em] text-white uppercase group-hover:text-[#18b8ea] transition-colors notranslate" translate="no">TERRABYTE</div>
                  <div class="font-ui text-[8px] tracking-[0.24em] uppercase text-[#64748b] notranslate mt-0.5" translate="no">GEOSYSTEM INDONESIA</div>
                </div>
              </NuxtLink>
              <p class="font-body font-light text-xs sm:text-[13px] leading-relaxed text-[#8da2b5] max-w-sm">
                Geospatial technology, monitoring and AI analytics. Turning earth data into smarter decisions.
              </p>
            </div>

            <!-- Column 1: PAGES -->
            <div class="space-y-3.5">
              <p class="font-mono text-[11px] tracking-[0.2em] uppercase text-[#64748b] font-semibold">PAGES</p>
              <ul class="space-y-2.5">
                <li>
                  <NuxtLink to="/company" class="font-ui text-xs text-[#94a3b8] hover:text-[#18b8ea] transition-colors">
                    Company
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/articles" class="font-ui text-xs text-[#94a3b8] hover:text-[#18b8ea] transition-colors">
                    News &amp; Articles
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/contact" class="font-ui text-xs text-[#94a3b8] hover:text-[#18b8ea] transition-colors">
                    Contact
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/admin" class="font-ui text-xs text-[#64748b] hover:text-[#18b8ea] transition-colors flex items-center gap-1.5">
                    <span>Admin CMS</span>
                    <span class="text-[10px]">🔐</span>
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <!-- Column 2: OFFERING -->
            <div class="space-y-3.5">
              <p class="font-mono text-[11px] tracking-[0.2em] uppercase text-[#64748b] font-semibold">OFFERING</p>
              <ul class="space-y-2.5">
                <li>
                  <NuxtLink to="/products" class="font-ui text-xs text-[#94a3b8] hover:text-[#18b8ea] transition-colors">
                    Products
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/solutions" class="font-ui text-xs text-[#94a3b8] hover:text-[#18b8ea] transition-colors">
                    TerraPulse-AI
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/solutions#terrawatch" class="font-ui text-xs text-[#94a3b8] hover:text-[#18b8ea] transition-colors">
                    TerraWatch
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <!-- Column 3: CONTACT -->
            <div class="space-y-3.5">
              <p class="font-mono text-[11px] tracking-[0.2em] uppercase text-[#64748b] font-semibold">CONTACT</p>
              <div class="space-y-2 text-xs text-[#94a3b8]">
                <p class="leading-relaxed">
                  Jl. Raya Semplak No.52, Semplak, Bogor, Indonesia
                </p>
                <p>
                  <a href="tel:08139840986" class="hover:text-[#18b8ea] transition-colors font-mono">
                    0813 9840 986
                  </a>
                </p>
                <p>
                  <a href="mailto:info.TGI@terrabytegeosystem.com" class="hover:text-[#18b8ea] transition-colors font-mono">
                    info.TGI@terrabytegeosystem.com
                  </a>
                </p>
              </div>
            </div>

          </div>

          <!-- Bottom Bar Divider -->
          <div class="w-full border-t border-white/5 my-8"></div>

          <!-- Bottom Bar -->
          <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-[#60778c]">
            <p class="flex flex-wrap items-center gap-2">
              <span>&copy; 2026 Terrabyte Geosystem Indonesia. All rights reserved.</span>
              <span class="text-[#334155]">&bull;</span>
              <NuxtLink to="/admin" class="hover:text-[#18b8ea] transition-colors flex items-center gap-1">
                <span>Admin Portal</span>
                <span class="text-[10px]">🔐</span>
              </NuxtLink>
            </p>
            <p class="font-mono tracking-[0.25em] uppercase text-[10px] text-[#718b9f]">
              WHERE EARTH MEETS INTELLIGENCE
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

const progress = computed(() => {
  return Math.min(1, Math.max(0, scrollY.value / 85))
})

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/company', label: 'Company' },
  { to: '/products', label: 'Product' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/articles', label: 'News' },
  { to: '/contact', label: 'Contact' },
]

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
