<template>
  <div class="min-h-screen text-white relative bg-[#030d17]">

    <!-- ─── HERO SECTION (PAGE 3 HI-FI) ──────────────────────────────── -->
    <section class="relative pt-32 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
      <!-- Ambient Radial Glows -->
      <div class="absolute top-1/4 left-1/3 w-[550px] h-[350px] bg-[#18b8ea]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div class="max-w-3xl space-y-4">
          <!-- Tag -->
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#18b8ea] font-semibold">
            {{ t('products.tag') }}
          </p>

          <!-- Headline -->
          <h1 class="font-display font-extrabold text-4xl sm:text-5xl lg:text-[58px] leading-tight text-white">
            {{ t('products.title1') }}<br />
            <span class="text-[#18b8ea] drop-shadow-[0_0_30px_rgba(24,184,234,0.35)]">{{ t('products.title2') }}</span>
          </h1>

          <!-- Subtitle -->
          <p class="font-body text-[#94a3b8] text-base sm:text-lg leading-relaxed font-light">
            {{ t('products.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- ─── FEATURED PRODUCT: RADAR / PRIMARY (PAGE 3 HI-FI) ─────── -->
    <section v-if="featuredProduct" class="pb-20 relative z-10">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="rounded-3xl geo-card-highlight overflow-hidden">
          <div class="grid lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">

            <!-- Left: Product Photo & Featured Badge (Fitted edge-to-edge to border) -->
            <div class="lg:col-span-5 relative">
              <NuxtLink
                :to="`/products/${featuredProduct.id || featuredProduct.code}`"
                class="block w-full aspect-[825/903] rounded-2xl bg-[#020b14] border border-white/10 overflow-hidden relative group/feat shadow-2xl p-6 flex items-center justify-center"
              >
                <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,184,234,0.12)_0%,rgba(2,11,20,0.95)_75%)] pointer-events-none"></div>
                <img
                  :src="featuredProduct.img || '/images/uploads/1790323048828-sar5000.png'"
                  :alt="featuredProduct.name"
                  class="max-h-[90%] max-w-[90%] object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover/feat:scale-105"
                />
                <span class="absolute top-4 left-4 z-20 font-mono text-[10px] tracking-widest uppercase font-bold px-3 py-1 rounded-full bg-[#18b8ea] text-[#030d17] shadow-[0_0_15px_rgba(24,184,234,0.4)]">
                  FEATURED
                </span>
              </NuxtLink>
            </div>

            <!-- Right: Product Details & CTAs -->
            <div class="lg:col-span-7 space-y-6">
              <div>
                <span class="block font-mono text-xs uppercase tracking-[0.2em] text-[#18b8ea] font-semibold mb-2">
                  {{ featuredProduct.tag || (featuredProduct.category?.toUpperCase() || 'SLOPE STABILITY MONITORING RADAR') }}
                </span>
                <h2 class="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
                  <NuxtLink
                    :to="`/products/${featuredProduct.id || featuredProduct.code}`"
                    class="hover:text-[#18b8ea] transition-colors"
                  >
                    {{ featuredProduct.name }}
                  </NuxtLink>
                </h2>
                <p class="font-body text-sm sm:text-base text-[#94a3b8] leading-relaxed font-light">
                  {{ featuredProduct.summary }}
                </p>
              </div>

              <!-- Bullet Points / Key Specs -->
              <ul v-if="featuredProduct.specs && featuredProduct.specs.length > 0" class="space-y-3 pt-1">
                <li
                  v-for="(spec, sIdx) in featuredProduct.specs.slice(0, 4)"
                  :key="sIdx"
                  class="flex items-start gap-3 text-sm text-white font-medium"
                >
                  <span class="w-5 h-5 rounded-full bg-[#18b8ea]/20 text-[#18b8ea] flex items-center justify-center text-xs font-bold shadow-[0_0_10px_rgba(24,184,234,0.3)] mt-0.5 flex-shrink-0">&check;</span>
                  <span>
                    <strong class="text-white font-semibold">{{ spec[0] }}:</strong>
                    <span class="text-[#cbd5e1] font-light ml-1.5">{{ spec[1] }}</span>
                  </span>
                </li>
              </ul>

              <!-- Action Buttons -->
              <div class="flex flex-wrap items-center gap-4 pt-4">
                <NuxtLink
                  :to="`/products/${featuredProduct.id || featuredProduct.code}`"
                  class="btn-geo-primary"
                >
                  {{ locale === 'id' ? 'Lihat Spesifikasi Detail' : 'View Full Specifications' }} &rarr;
                </NuxtLink>
                <NuxtLink
                  :to="`/contact?product=${encodeURIComponent(featuredProduct.name)}`"
                  class="btn-geo-outline"
                >
                  {{ locale === 'id' ? 'Minta Penawaran' : 'Request a quote' }}
                </NuxtLink>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- ─── SECTION: OUR PRODUCTS (CATALOG GRID LIKE USER'S REFERENCE) ──── -->
    <section v-if="allProducts.length > 0" class="py-20 lg:py-24 border-t border-white/5 bg-[#020b14] relative">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">

        <!-- Header: Centered "OUR PRODUCTS" -->
        <div class="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <p class="font-mono text-xs uppercase tracking-[0.25em] text-[#18b8ea] font-semibold">{{ locale === 'id' ? 'KATALOG HARDWARE PRESISI' : 'PRECISION HARDWARE CATALOG' }}</p>
          <h2 class="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
            {{ locale === 'id' ? 'KATALOG PRODUK' : 'OUR PRODUCTS' }}
          </h2>
          <p class="font-body text-[#94a3b8] text-sm sm:text-base font-light">
            {{ locale === 'id' ? 'Solusi penentuan posisi satelit, radar lereng, dan survei hidrografi teruji dengan kalibrasi dan dukungan teknis lokal.' : 'Engineered positioning, radar, and hydrographic solutions backed by authorized local support and calibration.' }}
          </p>
        </div>

        <!-- Product Cards Grid with 3D Flipping Cards (Matches Home Page) -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          <!-- 3D Flipping Card Item -->
          <div
            v-for="item in allProducts"
            :key="item.id || item.code"
            class="product-flip-card h-[540px] sm:h-[560px] select-none"
            style="perspective: 1200px;"
          >
            <div
              class="relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
              :class="{ '[transform:rotateY(180deg)]': isFlipped(item.id || item.code) }"
              style="transform-style: preserve-3d;"
            >
              
              <!-- ─── FRONT FACE (MATCHES USER REFERENCE & HOME PAGE) ────────── -->
              <div
                class="absolute inset-0 rounded-3xl geo-card p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-2xl border border-white/10 hover:border-[#18b8ea]/50 transition-colors group"
                style="backface-visibility: hidden; -webkit-backface-visibility: hidden;"
              >
                <div>
                  <!-- Top Isolated Product Box -->
                  <div class="h-48 sm:h-52 rounded-2xl bg-[#020b14] border border-white/5 relative flex items-center justify-center p-4 overflow-hidden mb-4">
                    <!-- Subtle Radial Spotlight Glow -->
                    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,184,234,0.12)_0%,rgba(2,11,20,0.95)_75%)] pointer-events-none"></div>

                    <!-- Clean isolated product hardware image -->
                    <img
                      :src="item.img || '/images/hero-bg.jpg'"
                      :alt="item.name"
                      class="max-h-[88%] max-w-[88%] object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-105"
                    />

                    <!-- Quick Flip Hint Icon (Top Right) -->
                    <button
                      type="button"
                      @click.stop="toggleFlip(item.id || item.code)"
                      class="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/40 hover:bg-[#18b8ea] text-[#94a3b8] hover:text-[#030d17] border border-white/10 flex items-center justify-center text-xs transition-all shadow-md group/flip"
                      title="Balik kartu untuk lihat spesifikasi"
                    >
                      <span class="group-hover/flip:rotate-180 transition-transform duration-300">↻</span>
                    </button>
                  </div>

                  <!-- Category Tag -->
                  <span class="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#18b8ea] font-semibold mb-1.5 truncate">
                    {{ item.tag || (item.category?.toUpperCase() || 'SURVEY INSTRUMENT') }}
                  </span>

                  <!-- Product Name -->
                  <h3 class="font-display font-bold text-base sm:text-lg text-white mb-2 leading-snug line-clamp-2 group-hover:text-[#18b8ea] transition-colors">
                    <NuxtLink :to="`/products/${item.id || item.code}`">
                      {{ item.name }}
                    </NuxtLink>
                  </h3>

                  <!-- Short Description -->
                  <p class="font-body text-xs text-[#94a3b8] leading-relaxed font-light line-clamp-3">
                    {{ item.summary }}
                  </p>
                </div>

                <!-- Card Footer Bar -->
                <div class="pt-3 border-t border-white/5 flex items-center justify-between">
                  <span class="font-mono text-[10px] text-[#64748b] uppercase tracking-wider truncate max-w-[110px]">
                    {{ item.code || 'TERRABYTE' }}
                  </span>

                  <div class="flex items-center gap-2">
                    <!-- 3D Flip Action -->
                    <button
                      type="button"
                      @click="toggleFlip(item.id || item.code)"
                      class="px-2.5 py-1 rounded-full bg-white/5 hover:bg-[#18b8ea]/15 text-[#94a3b8] hover:text-[#18b8ea] text-[11px] font-mono border border-white/10 hover:border-[#18b8ea]/30 transition-all flex items-center gap-1"
                      title="Lihat Spesifikasi di Belakang Kartu"
                    >
                      <span>Spek</span>
                      <span class="text-xs">↻</span>
                    </button>

                    <!-- Direct Details Link to Dedicated Product Page -->
                    <NuxtLink
                      :to="`/products/${item.id || item.code}`"
                      class="inline-flex items-center gap-1 font-ui font-bold text-xs text-[#18b8ea] hover:text-[#38cbf8] transition-colors group/link"
                    >
                      <span>{{ t('products.details') }}</span>
                      <span class="text-sm transition-transform group-hover/link:translate-x-1">&rarr;</span>
                    </NuxtLink>
                  </div>
                </div>
              </div>

              <!-- ─── BACK FACE (FLIPPED FACE: TECHNICAL SPECIFICATIONS) ─ -->
              <div
                class="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#051f38] via-[#041628] to-[#020b14] p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-2xl border border-[#18b8ea]/40"
                style="backface-visibility: hidden; -webkit-backface-visibility: hidden; transform: rotateY(180deg);"
              >
                <div>
                  <!-- Back Face Header -->
                  <div class="flex items-center justify-between pb-2.5 border-b border-white/10 mb-3">
                    <span class="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase text-[#18b8ea] font-bold bg-[#18b8ea]/10 px-2.5 py-1 rounded-full border border-[#18b8ea]/20">
                      <span class="w-1.5 h-1.5 rounded-full bg-[#18b8ea] animate-pulse"></span>
                      {{ locale === 'id' ? 'SPESIFIKASI TEKNIS' : 'TECHNICAL SPECS' }}
                    </span>
                    <button
                      type="button"
                      @click="toggleFlip(item.id || item.code)"
                      class="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs transition-colors"
                      title="Kembali ke Foto Depan"
                    >
                      ✕
                    </button>
                  </div>

                  <h4 class="font-display font-bold text-sm sm:text-base text-white truncate mb-1">
                    {{ item.name }}
                  </h4>
                  <p class="font-mono text-[10px] text-[#64748b] uppercase mb-2.5">
                    MODEL: {{ item.code }}
                  </p>

                  <!-- Technical Specs Rows -->
                  <div class="space-y-1.5 max-h-[270px] sm:max-h-[290px] overflow-y-auto pr-1">
                    <div
                      v-for="(spec, sIdx) in (item.specs || []).slice(0, 6)"
                      :key="sIdx"
                      class="p-2 rounded-xl bg-[#020b14]/80 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs"
                    >
                      <span class="text-[#94a3b8] font-mono text-[10px] sm:text-[11px] flex-shrink-0">{{ spec[0] }}</span>
                      <span class="text-white font-medium text-right text-[10px] sm:text-[11px] sm:max-w-[170px] truncate" :title="spec[1]">{{ spec[1] }}</span>
                    </div>
                    <div v-if="!item.specs || item.specs.length === 0" class="p-3 text-center text-xs text-[#64748b]">
                      {{ locale === 'id' ? 'Spesifikasi tersedia di halaman detail.' : 'Specifications available on detail page.' }}
                    </div>
                  </div>
                </div>

                <!-- Back Face Footer Action Buttons -->
                <div class="pt-3 border-t border-white/10 flex items-center justify-between gap-2.5">
                  <button
                    type="button"
                    @click="toggleFlip(item.id || item.code)"
                    class="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-all flex items-center gap-1"
                  >
                    <span>↺</span>
                    <span>Foto</span>
                  </button>

                  <NuxtLink
                    :to="`/products/${item.id || item.code}`"
                    class="btn-geo-primary !py-1.5 !px-3.5 !text-xs !font-bold flex items-center gap-1 flex-1 justify-center shadow-lg"
                  >
                    <span>{{ locale === 'id' ? 'Halaman Lengkap' : 'Full Page' }}</span>
                    <span>&rarr;</span>
                  </NuxtLink>
                </div>
              </div>

            </div>
          </div>
        </div>

        <!-- Centered Pill Button (matches reference screenshot) -->
        <div class="mt-14 text-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#18b8ea] text-[#030d17] font-ui font-extrabold text-xs sm:text-sm tracking-widest uppercase shadow-[0_0_25px_rgba(24,184,234,0.35)] hover:bg-[#38cbf8] hover:shadow-[0_0_35px_rgba(24,184,234,0.5)] transition-all hover:scale-105"
          >
            <span>MORE PRODUCTS</span>
            <span class="text-base">&rarr;</span>
          </NuxtLink>
        </div>

      </div>
    </section>

    <!-- ─── SECTION: AFTER-SALES (PAGE 3 HI-FI) ───────────────────────── -->
    <section class="py-20 lg:py-24 border-t border-white/5 relative bg-[#030d17]">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">

        <!-- Header Row -->
        <div class="grid lg:grid-cols-12 gap-6 items-end mb-14">
          <div class="lg:col-span-7 space-y-2">
            <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#18b8ea] font-semibold">{{ locale === 'id' ? 'LAYANAN PURNA JUAL' : 'AFTER-SALES' }}</p>
            <h2 class="font-display font-bold text-3xl sm:text-4xl text-white">
              {{ locale === 'id' ? 'Dukungan teknis yang selalu mendampingi Anda.' : 'Support that stays with you.' }}
            </h2>
          </div>
          <div class="lg:col-span-5">
            <p class="font-body text-[#94a3b8] text-sm sm:text-base leading-relaxed font-light">
              {{ locale === 'id' ? 'Setiap instrumen didukung oleh layanan teknis dan kalibrasi lokal, memastikan operasional tim Anda tetap berjalan lancar.' : 'Every instrument comes with local service, so your team keeps working with confidence.' }}
            </p>
          </div>
        </div>

        <!-- 4 After-Sales Cards with Large Cyan Numbers -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div class="p-7 rounded-3xl geo-card">
            <span class="block font-mono text-2xl text-[#18b8ea] font-bold mb-3">01</span>
            <h3 class="font-display font-bold text-lg text-white mb-2">After-sales service</h3>
            <p class="font-body text-xs text-[#94a3b8] leading-relaxed font-light">
              Maintenance and repair handled locally.
            </p>
          </div>

          <div class="p-7 rounded-3xl geo-card">
            <span class="block font-mono text-2xl text-[#18b8ea] font-bold mb-3">02</span>
            <h3 class="font-display font-bold text-lg text-white mb-2">Technical training</h3>
            <p class="font-body text-xs text-[#94a3b8] leading-relaxed font-light">
              Hands-on training for your operators.
            </p>
          </div>

          <div class="p-7 rounded-3xl geo-card">
            <span class="block font-mono text-2xl text-[#18b8ea] font-bold mb-3">03</span>
            <h3 class="font-display font-bold text-lg text-white mb-2">Technical support</h3>
            <p class="font-body text-xs text-[#94a3b8] leading-relaxed font-light">
              Help when you need it, on site or remote.
            </p>
          </div>

          <div class="p-7 rounded-3xl geo-card">
            <span class="block font-mono text-2xl text-[#18b8ea] font-bold mb-3">04</span>
            <h3 class="font-display font-bold text-lg text-white mb-2">Calibration</h3>
            <p class="font-body text-xs text-[#94a3b8] leading-relaxed font-light">
              Keeping instruments accurate over time.
            </p>
          </div>

        </div>

      </div>
    </section>

    <!-- ─── PRE-FOOTER BANNER (PAGE 3 HI-FI) ───────────────────────────── -->
    <section class="py-16 bg-[#020b14]">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="p-8 sm:p-12 rounded-3xl geo-banner flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="space-y-2 text-center md:text-left">
            <h3 class="font-display font-bold text-2xl sm:text-3xl text-white">
              Not sure which instrument fits?
            </h3>
            <p class="font-body text-[#94a3b8] text-sm sm:text-base font-light">
              Tell us about your site and we&rsquo;ll recommend the right setup.
            </p>
          </div>
          <NuxtLink
            to="/contact"
            class="flex-shrink-0 btn-geo-white"
          >
            Talk to our team
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useLanguage } from '~/composables/useLanguage'

const { t, locale } = useLanguage()

const { data: productsData } = await useAsyncData('products-catalog', () => $fetch('/api/products').catch(() => []))

// ─── 3D CARD FLIP STATE & TOGGLE ──────────────────────────────────────────
const flippedCards = ref<Record<string, boolean>>({})

const toggleFlip = (id: string) => {
  if (!id) return
  flippedCards.value[id] = !flippedCards.value[id]
}

const isFlipped = (id: string) => {
  return !!flippedCards.value[id]
}

const allProducts = computed(() => {
  if (!Array.isArray(productsData.value) || productsData.value.length === 0) return []
  // Filter out any unauthorized or dummy products (e.g. sv600 bicycle)
  const list = productsData.value.filter((p: any) => {
    const s = `${p.id || ''} ${p.code || ''} ${p.name || ''} ${p.img || ''}`.toLowerCase()
    return !s.includes('sv600') && !s.includes('solutions-marine')
  })

  // Deduplicate products by code/name to prevent duplicate entries
  const seen = new Set<string>()
  const unique: any[] = []
  for (const p of list) {
    const key = String(p.code || p.name || p.id || '').toUpperCase()
    if (!seen.has(key)) {
      seen.add(key)
      unique.push(p)
    }
  }
  return unique
})

const featuredProduct = computed(() => {
  if (allProducts.value.length === 0) return null
  return allProducts.value.find((p: any) =>
    p.category?.toLowerCase() === 'radar' ||
    p.code?.toLowerCase().includes('sar5000') ||
    p.name?.toLowerCase().includes('sar5000')
  ) || allProducts.value[0]
})

const otherProducts = computed(() => {
  if (!featuredProduct.value) return allProducts.value
  return allProducts.value.filter((p: any) => p.id !== featuredProduct.value.id)
})

useHead({
  title: 'Products — Precision instruments for every ground | Terrabyte',
  meta: [
    {
      name: 'description',
      content: 'Survey and monitoring technology supplied through PT Lextera Survey Indonesia, with local support from our team.'
    }
  ]
})
</script>

<style scoped>
</style>
