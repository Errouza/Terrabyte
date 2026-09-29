<template>
  <div class="min-h-screen bg-[#001224] text-white flex flex-col font-body selection:bg-[#00d1b2] selection:text-[#001f3f]">

    <!-- ─── WRAPPER ────────────────────────────────────────────────── -->
    <div class="relative flex-1 flex flex-col">

      <!-- ─── HEADER: DYNAMIC ISLAND NAV ─────────────────────────────── -->
      <header
        class="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-300"
        :style="{
          paddingTop: `${(20 - progress * 10).toFixed(1)}px`,
          paddingBottom: '8px'
        }"
      >
        <nav
          class="pointer-events-auto flex items-center justify-between transition-all duration-300 ease-out border"
          :style="{
            width: `${(92 - progress * 8).toFixed(1)}%`,
            maxWidth: `${(1200 - progress * 160).toFixed(0)}px`,
            padding: `${(14 - progress * 4).toFixed(1)}px ${(28 - progress * 6).toFixed(1)}px`,
            backgroundColor: `rgba(0, 31, 63, ${(0.72 + progress * 0.24).toFixed(2)})`,
            borderColor: `rgba(0, 209, 178, ${(0.20 + progress * 0.25).toFixed(2)})`,
            borderRadius: `${Math.round(20 + progress * 80)}px`,
            backdropFilter: 'blur(20px)',
            boxShadow: progress > 0.1
              ? `0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 209, 178, ${(progress * 0.25).toFixed(2)})`
              : '0 4px 20px rgba(0, 0, 0, 0.3)'
          }"
        >
          <!-- Brand Logo and Name -->
          <NuxtLink to="/" class="flex items-center gap-3.5 group flex-shrink-0">
            <img
              src="/images/logoOnlyPutih.png"
              alt="Terrabyte Logo"
              class="h-[34px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div class="leading-tight">
              <div class="font-display font-bold text-sm tracking-[0.2em] text-white uppercase group-hover:text-[#00d1b2] transition-colors notranslate" translate="no">
                Terrabyte
              </div>
              <div class="font-ui text-[8.5px] tracking-[0.22em] uppercase text-[#6c889f] notranslate" translate="no">
                Geosystems Indonesia
              </div>
            </div>
          </NuxtLink>

          <!-- Desktop Navigation Links (Home, Company, Products, Solutions, News/Articles, Inquiry/Contact) -->
          <div
            class="hidden lg:flex items-center transition-all duration-300"
            :style="{ gap: `${(1.6 - progress * 0.35).toFixed(2)}rem` }"
          >
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="nav-link transition-all duration-300 font-ui font-medium tracking-wider"
              :class="$route.path === link.to ? 'active' : ''"
              :style="{
                fontSize: `${(12.5 - progress * 0.5).toFixed(1)}px`,
                padding: `${(8 - progress * 3).toFixed(1)}px 0`
              }"
            >
              {{ link.label }}
            </NuxtLink>
          </div>

          <!-- Desktop CTA Button -->
          <div class="hidden lg:block flex-shrink-0">
            <NuxtLink
              to="/contact?type=demo"
              class="btn-primary transition-all duration-300 flex items-center space-x-1.5"
              :style="{
                padding: `${(10 - progress * 4).toFixed(1)}px ${(22 - progress * 6).toFixed(1)}px`,
                fontSize: `${(12 - progress * 1).toFixed(1)}px`,
                borderRadius: `${Math.round(12 + progress * 88)}px`
              }"
            >
              <span>Request Demo</span>
              <span v-if="progress > 0.6">&rarr;</span>
            </NuxtLink>
          </div>

          <!-- Mobile Toggle Button -->
          <button
            class="lg:hidden text-[#9db4c8] p-1.5 focus:outline-none hover:text-[#00d1b2] transition-colors"
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
            class="pointer-events-auto absolute top-full left-4 right-4 mt-2 max-w-md mx-auto p-5 rounded-3xl bg-[#082e4e]/95 backdrop-blur-2xl border border-[#00d1b2]/45 shadow-[0_20px_45px_rgba(0,0,0,0.6),0_0_24px_rgba(0,209,178,0.25)] flex flex-col gap-4 z-50 lg:hidden"
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
              to="/contact?type=demo"
              class="btn-primary w-full text-center mt-2 rounded-xl"
              @click="mobileOpen = false"
            >
              Request Demo TerraPulse
            </NuxtLink>
          </div>
        </Transition>
      </header>

      <!-- ─── MAIN CONTENT ─────────────────────────────────────────── -->
      <main class="flex-1">
        <slot />
      </main>

      <!-- ─── FOOTER ─────────────────────────────────────────────────── -->
      <footer class="bg-[#001428]/95 backdrop-blur-md border-t border-[#00d1b2]/25">
        <div class="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">

            <!-- Brand Column (2 Cols on lg) -->
            <div class="lg:col-span-2 space-y-4">
              <NuxtLink to="/" class="flex items-center gap-4 group inline-flex">
                <img src="/images/logoOnlyPutih.png" alt="Logo" class="h-[42px] w-auto object-contain -mr-2" />
                <div class="leading-none">
                  <div class="font-display font-bold text-base tracking-[0.2em] text-white uppercase group-hover:text-[#00d1b2] transition-colors notranslate" translate="no">Terrabyte</div>
                  <div class="font-ui text-[9px] tracking-[0.22em] uppercase text-[#6c889f] notranslate" translate="no">Geosystems Indonesia</div>
                </div>
              </NuxtLink>
              <p class="font-body font-light text-xs leading-relaxed text-[#9db4c8]">
                Pengembang platform pemantauan digital <strong>TerraPulse</strong> dan otoritas rekayasa radar ComNav MS-SAR5000 bersama mitra survei terintegrasi PT Lextera Survey Indonesia.
              </p>

              <!-- Official Contact Information -->
              <div class="space-y-2 pt-2 border-t border-white/10 text-xs">
                <div class="flex items-center gap-2.5 text-[#9db4c8]">
                  <span class="text-[#00d1b2] font-mono text-[11px]">EMAIL:</span>
                  <a href="mailto:Info.TGI@terrabyte.com" class="text-white hover:text-[#00d1b2] transition-colors font-mono">
                    Info.TGI@terrabyte.com
                  </a>
                </div>
                <div class="flex items-center gap-2.5 text-[#9db4c8]">
                  <span class="text-[#00d1b2] font-mono text-[11px]">TELP:</span>
                  <a :href="`tel:${(siteSettings?.phone || '+62 813-9840-986').replace(/\s+/g, '')}`" class="text-white hover:text-[#00d1b2] transition-colors font-mono">
                    {{ siteSettings?.phone || '+62 813-9840-986' }}
                  </a>
                </div>
              </div>

              <!-- Official Social Media Channels -->
              <div class="pt-2">
                <p class="font-mono text-[11px] text-[#00d1b2] tracking-wider uppercase font-semibold mb-2.5">
                  Saluran Resmi (Social Media)
                </p>
                <div class="flex flex-wrap gap-2.5">
                  <!-- Instagram -->
                  <a
                    href="https://instagram.com/terrabyte.geosystem"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#00d1b2] hover:bg-[#00d1b2]/10 text-xs text-[#9db4c8] hover:text-white transition-all group"
                  >
                    <svg class="w-3.5 h-3.5 text-[#00d1b2]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>@terrabyte.geosystem</span>
                  </a>

                  <!-- LinkedIn -->
                  <a
                    href="https://www.linkedin.com/company/terrabyte-geosystem-indonesia"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#00d1b2] hover:bg-[#00d1b2]/10 text-xs text-[#9db4c8] hover:text-white transition-all group"
                  >
                    <svg class="w-3.5 h-3.5 text-[#00d1b2]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>Terrabyte Geosystem Indonesia</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Group Links (4 Cols on lg) -->
            <div v-for="col in footerColumns" :key="col.group" class="space-y-4">
              <p class="font-ui text-xs tracking-widest uppercase text-[#00d1b2] font-semibold">{{ col.group }}</p>
              <ul class="space-y-2.5">
                <li v-for="item in col.items" :key="item.label">
                  <NuxtLink :to="item.to" class="font-ui text-xs transition-colors duration-200 text-[#9db4c8] hover:text-white">
                    {{ item.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>

          </div>

          <!-- Divider -->
          <div class="w-full border-t border-white/10 my-8"></div>

          <!-- Bottom Bar -->
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="font-ui text-xs text-[#6c889f]">
              &copy; 2026 PT Terrabyte Geosystems Indonesia. Otoritas Sistem TerraPulse. Sinergi bersama PT Lextera Survey Indonesia &amp; ComNav Technology.
            </p>
            <div class="flex gap-6">
              <NuxtLink to="/admin" class="font-ui text-xs transition-colors duration-200 text-[#6c889f] hover:text-[#00d1b2]">Admin Portal 🔐</NuxtLink>
              <a href="#" class="font-ui text-xs transition-colors duration-200 text-[#6c889f] hover:text-[#9db4c8]">Privacy Policy</a>
              <a href="#" class="font-ui text-xs transition-colors duration-200 text-[#6c889f] hover:text-[#9db4c8]">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const { data: siteSettings } = await useAsyncData('layout-settings', () => $fetch('/api/settings').catch(() => null))
const scrollY = ref(0)
const mobileOpen = ref(false)

// Smooth continuous interpolation between 0px and 85px scroll distance
const progress = computed(() => {
  return Math.min(1, Math.max(0, scrollY.value / 85))
})

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/company', label: 'Company' },
  { to: '/products', label: 'Products' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/articles', label: 'News & Articles' },
  { to: '/contact', label: 'Inquiry / Contact' },
]

const footerColumns = [
  {
    group: 'Perusahaan',
    items: [
      { label: 'Tentang Terrabyte', to: '/company' },
      { label: 'Visi & Misi', to: '/company' },
      { label: 'Tim Manajemen', to: '/company' },
      { label: 'Ekosistem (Lextera & ComNav)', to: '/company' },
    ],
  },
  {
    group: 'Portofolio Produk',
    items: [
      { label: 'Platform TerraPulse', to: '/products' },
      { label: 'Radar ComNav MS-SAR5000', to: '/products' },
      { label: 'ComNav N2 / Laser RTK', to: '/products' },
      { label: 'GNSS RTK & Total Station', to: '/products' },
    ],
  },
  {
    group: 'Solusi TerraPulse',
    items: [
      { label: 'Pemantauan Lereng Tambang', to: '/solutions' },
      { label: 'SHM Infrastruktur Kritis', to: '/solutions' },
      { label: 'Early Warning System (EWS)', to: '/solutions' },
      { label: 'Multi-Sensor Fusion Grid', to: '/solutions' },
    ],
  },
  {
    group: 'Saluran & Bantuan',
    items: [
      { label: 'Inquiry Platform BSS', to: '/contact' },
      { label: 'Request Demo TerraPulse', to: '/contact?type=demo' },
      { label: 'Konsultasi Teknisi Radar', to: '/contact' },
      { label: 'Pengumuman Terrawatch', to: '/articles/pembukaan-terrawatch-opening' },
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
