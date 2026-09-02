<template>
  <div class="min-h-screen text-white flex flex-col justify-between selection:bg-[#00d1b2]/30 selection:text-[#00d1b2] relative bg-[#0a3357]">

    <!-- ─── FIXED FADED BACKGROUND IMAGE & CINEMATIC GRADIENT ───────── -->
    <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <!-- High-Resolution Faded Background Image -->
      <img
        src="/images/hero-bg.jpg"
        alt="Terrabyte Background Texture"
        class="w-full h-full object-cover opacity-45 filter contrast-110 brightness-90 scale-100"
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
      <!-- ─── FIXED GLASS HEADER / NAVBAR ─────────────────────────────── -->
      <nav
        class="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        :class="scrolled ? 'bg-[#09355a]/92 backdrop-blur-xl border-b border-[#00d1b2]/35 shadow-[0_4px_24px_rgba(0,209,178,0.2)]' : 'bg-transparent'"
      >
        <div class="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">

          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-5 group">
            <img src="/images/logoOnlyPutih.png" alt="Logo" class="h-[40px] w-auto object-contain -mr-3.5" />
            <div class="leading-none">
              <div class="font-display font-bold text-base tracking-[0.2em] text-white uppercase group-hover:text-[#00d1b2] transition-colors notranslate" translate="no">Terrabyte</div>
              <div class="font-ui text-[9px] tracking-[0.22em] uppercase text-[#6c889f] notranslate" translate="no">Geosystems Indonesia</div>
            </div>
          </NuxtLink>

          <!-- Desktop Navigation Links -->
          <div class="hidden md:flex items-center gap-8">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="nav-link"
              :class="$route.path === link.to ? 'active' : ''"
            >
              {{ link.label }}
            </NuxtLink>
          </div>

          <!-- Desktop CTA -->
          <div class="hidden md:block">
            <NuxtLink to="/contact" class="btn-primary">
              Request Info
            </NuxtLink>
          </div>

          <!-- Mobile Toggle Button -->
          <button
            class="md:hidden text-[#9db4c8] p-1.5 focus:outline-none hover:text-[#00d1b2]"
            @click="mobileOpen = !mobileOpen"
            aria-label="Toggle Navigation"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path v-if="mobileOpen" stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

        </div>

        <!-- Mobile Dropdown -->
        <div v-if="mobileOpen" class="md:hidden bg-[#001f3f]/95 backdrop-blur-xl border-t border-[#00d1b2]/20 px-6 py-5 flex flex-col gap-5">
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
            class="btn-primary w-fit mt-2"
            @click="mobileOpen = false"
          >
            Request Info
          </NuxtLink>
        </div>
      </nav>

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
                  <div class="font-display font-bold text-base tracking-[0.2em] text-white uppercase group-hover:text-[#00d1b2] transition-colors">Terrabyte</div>
                  <div class="font-ui text-[9px] tracking-[0.22em] uppercase text-[#6c889f]">Geosystems Indonesia</div>
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
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const footerColumns = [
  {
    group: 'Products & Services',
    items: [
      { label: 'TerraPulse', to: '/products' },
      { label: 'TerraGuard', to: '/products' },
      { label: 'TerraWatch', to: '/products' },
      { label: 'Geospatial Surveying', to: '/products' },
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

const onScroll = () => {
  scrolled.value = window.scrollY > 32
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
