<template>
  <div class="min-h-screen text-white flex flex-col justify-between selection:bg-[#00d1b2]/30 selection:text-[#00d1b2] relative bg-[#0a3357]">

    <!-- ─── FIXED FADED BACKGROUND IMAGE & CINEMATIC GRADIENT ───────── -->
    <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <!-- High-Resolution Faded Background Image -->
      <img
        src="/images/hero-bg.jpg"
        alt="Terrabyte Background Texture"
        class="w-full h-full object-cover opacity-35 filter contrast-115 brightness-95 scale-100"
      />
      <!-- Atmospheric Vignette & Deep Ocean-Teal Gradient Blend -->
      <div
        class="absolute inset-0"
        style="background: 
          radial-gradient(ellipse 90% 55% at 50% 10%, rgba(0, 209, 178, 0.28), transparent 75%),
          radial-gradient(ellipse 70% 50% at 85% 60%, rgba(59, 130, 246, 0.25), transparent 70%),
          linear-gradient(160deg, rgba(10, 48, 80, 0.78) 0%, rgba(14, 62, 102, 0.72) 30%, rgba(18, 76, 122, 0.68) 55%, rgba(13, 56, 94, 0.76) 80%, rgba(9, 42, 70, 0.84) 100%);"
      ></div>
      <!-- Subtle Tactical Dot Grid Overlay -->
      <div class="absolute inset-0 dot-grid opacity-20"></div>
    </div>

    <div class="relative z-10 flex flex-col min-h-screen justify-between">
      <!-- ─── CONTINUOUS SCROLL-DRIVEN DYNAMIC ISLAND NAVBAR ───────────── -->
      <header class="fixed top-0 inset-x-0 z-50 pointer-events-none flex justify-center px-3 sm:px-6">
        <nav
          class="pointer-events-auto dynamic-island-nav w-full flex items-center justify-between relative border"
          :style="{
            transform: `translate3d(0, ${progress * 18}px, 0)`,
            maxWidth: `${1280 - progress * (1280 - 940)}px`,
            height: `${76 - progress * 20}px`,
            borderRadius: `${progress * 50}px`,
            backgroundColor: `rgba(${Math.round(10 - progress * 2)}, ${Math.round(48 - progress * 6)}, ${Math.round(80 - progress * 8)}, ${(0.25 + progress * 0.62).toFixed(2)})`,
            borderColor: progress > 0.05 ? `rgba(0, 209, 178, ${(0.12 + progress * 0.36).toFixed(2)})` : 'rgba(255, 255, 255, 0.08)',
            boxShadow: progress > 0.05
              ? `0 ${Math.round(4 + progress * 12)}px ${Math.round(16 + progress * 24)}px rgba(0, 0, 0, ${(0.15 + progress * 0.35).toFixed(2)}), 0 0 ${Math.round(progress * 26)}px rgba(0, 209, 178, ${(progress * 0.24).toFixed(2)}), inset 0 0 ${Math.round(progress * 14)}px rgba(0, 209, 178, ${(progress * 0.12).toFixed(2)})`
              : '0 4px 16px rgba(0, 0, 0, 0.1)',
            padding: `0 ${(2.0 - progress * 0.5).toFixed(2)}rem`
          }"
        >
          <!-- Brand Logo -->
          <NuxtLink to="/" class="flex items-center gap-3 sm:gap-4 group flex-shrink-0">
            <img
              src="/images/logoOnlyPutih.png"
              alt="Logo"
              class="w-auto object-contain transition-all duration-300"
              :style="{
                height: `${Math.round(36 - progress * 8)}px`,
                marginRight: `-${(12 - progress * 4)}px`
              }"
            />
            <div class="leading-none">
              <div
                class="font-display font-bold tracking-[0.2em] text-white uppercase group-hover:text-[#00d1b2] transition-all duration-300 notranslate"
                :style="{ fontSize: `${(15 - progress * 2).toFixed(1)}px` }"
                translate="no"
              >
                Terrabyte
              </div>
              <div
                class="font-ui tracking-[0.22em] uppercase text-[#8daac2] notranslate transition-all duration-300"
                :style="{ fontSize: `${(9 - progress * 1).toFixed(1)}px` }"
                translate="no"
              >
                Geosystems Indonesia
              </div>
            </div>
          </NuxtLink>

          <!-- Desktop Navigation Links -->
          <div
            class="hidden md:flex items-center transition-all duration-300"
            :style="{ gap: `${(2.0 - progress * 0.5).toFixed(2)}rem` }"
          >
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="nav-link transition-all duration-300"
              :class="$route.path === link.to ? 'active' : ''"
              :style="{
                fontSize: `${(13 - progress * 1).toFixed(1)}px`,
                padding: `${(8 - progress * 3).toFixed(1)}px 0`
              }"
            >
              {{ link.label }}
            </NuxtLink>
          </div>

          <!-- Desktop CTA Button -->
          <div class="hidden md:block flex-shrink-0">
            <NuxtLink
              to="/contact"
              class="btn-primary transition-all duration-300 flex items-center space-x-1.5"
              :style="{
                padding: `${(10 - progress * 4).toFixed(1)}px ${(24 - progress * 8).toFixed(1)}px`,
                fontSize: `${(12 - progress * 1).toFixed(1)}px`,
                borderRadius: `${Math.round(12 + progress * 88)}px`
              }"
            >
              <span>Request Info</span>
              <span v-if="progress > 0.6">&rarr;</span>
            </NuxtLink>
          </div>

          <!-- Mobile Toggle Button -->
          <button
            class="md:hidden text-[#9db4c8] p-1.5 focus:outline-none hover:text-[#00d1b2] transition-colors"
            @click="mobileOpen = !mobileOpen"
            aria-label="Toggle Navigation"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path v-if="mobileOpen" stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </nav>

        <!-- Mobile Dynamic Island Expansion Drawer -->
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
            class="pointer-events-auto absolute top-full left-4 right-4 mt-2 max-w-md mx-auto p-5 rounded-3xl bg-[#082e4e]/95 backdrop-blur-2xl border border-[#00d1b2]/45 shadow-[0_20px_45px_rgba(0,0,0,0.6),0_0_24px_rgba(0,209,178,0.25)] flex flex-col gap-4 z-50 md:hidden"
          >
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="nav-link text-sm"
              @click="mobileOpen = false"
            >
              {{ link.label }}
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="btn-primary w-full text-center mt-2 rounded-xl"
              @click="mobileOpen = false"
            >
              Request Info
            </NuxtLink>
          </div>
        </Transition>
      </header>

      <!-- ─── MAIN CONTENT ─────────────────────────────────────────── -->
      <main class="flex-1">
        <slot />
      </main>

      <!-- ─── FOOTER ─────────────────────────────────────────────────── -->
      <footer class="bg-[#082d4d]/85 backdrop-blur-md border-t border-[#00d1b2]/25">
        <div class="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <div class="grid md:grid-cols-5 gap-12">

            <!-- Brand Column -->
            <div class="md:col-span-1">
              <NuxtLink to="/" class="flex items-center gap-5 mb-5 group inline-flex">
                <img src="/images/logoOnlyPutih.png" alt="Logo" class="h-[40px] w-auto object-contain -mr-3.5" />
                <div class="leading-none">
                  <div class="font-display font-bold text-base tracking-[0.2em] text-white uppercase group-hover:text-[#00d1b2] transition-colors notranslate" translate="no">Terrabyte</div>
                  <div class="font-ui text-[9px] tracking-[0.22em] uppercase text-[#6c889f] notranslate" translate="no">Geosystems Indonesia</div>
                </div>
              </NuxtLink>
              <p class="font-body font-light text-xs leading-relaxed text-[#6c889f]">
                GNSS &amp; Radar Systems<br>
                Precision navigation for critical operations worldwide.
              </p>
            </div>

            <!-- Group Links -->
            <div v-for="col in footerColumns" :key="col.group">
              <p class="font-ui text-xs tracking-widest uppercase mb-5 text-[#00d1b2] font-semibold">{{ col.group }}</p>
              <ul class="space-y-3">
                <li v-for="item in col.items" :key="item.label">
                  <NuxtLink :to="item.to" class="font-ui text-xs transition-colors duration-200 text-[#9db4c8] hover:text-white">
                    {{ item.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>

          </div>

          <!-- Divider -->
          <div class="w-full border-t rule my-8"></div>

          <!-- Bottom Bar -->
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="font-ui text-xs text-[#6c889f]">
              &copy; 2025 PT Terrabyte Systems Indonesia. All rights reserved.
            </p>
            <div class="flex gap-6">
              <a href="#" class="font-ui text-xs transition-colors duration-200 text-[#6c889f] hover:text-[#9db4c8]">Privacy Policy</a>
              <a href="#" class="font-ui text-xs transition-colors duration-200 text-[#6c889f] hover:text-[#9db4c8]">Terms of Use</a>
              <a href="#" class="font-ui text-xs transition-colors duration-200 text-[#6c889f] hover:text-[#9db4c8]">Export Compliance</a>
            </div>
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

// Smooth continuous interpolation between 0px and 85px scroll distance
const progress = computed(() => {
  return Math.min(1, Math.max(0, scrollY.value / 85))
})

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/articles', label: 'Articles' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const footerColumns = [
  {
    group: 'Products',
    items: [
      { label: 'NX-700 GNSS Receiver', to: '/products' },
      { label: 'NX-500 Radar', to: '/products' },
      { label: 'NX-300 Platform', to: '/products' },
      { label: 'Accessories & Antennas', to: '/products' },
    ],
  },
  {
    group: 'Solutions',
    items: [
      { label: 'Maritime Navigation', to: '/solutions' },
      { label: 'Airspace Surveillance', to: '/solutions' },
      { label: 'Critical Infrastructure', to: '/solutions' },
      { label: 'Defense & Security', to: '/solutions' },
    ],
  },
  {
    group: 'Company',
    items: [
      { label: 'About Us', to: '/about' },
      { label: 'Leadership', to: '/about' },
      { label: 'Certifications', to: '/about' },
      { label: 'Articles & Intel', to: '/articles' },
      { label: 'Careers', to: '/about' },
    ],
  },
  {
    group: 'Support',
    items: [
      { label: 'Documentation', to: '/contact' },
      { label: 'Technical Support', to: '/contact' },
      { label: 'Training & Integration', to: '/contact' },
      { label: 'RMA Service', to: '/contact' },
    ],
  },
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
