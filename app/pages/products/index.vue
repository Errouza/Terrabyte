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

        <!-- Product Cards Grid: Equal proportions, square photo frames, clear typography -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          <div
            v-for="item in allProducts"
            :key="item.id || item.code"
            class="rounded-3xl geo-card border border-white/10 p-4 sm:p-5 flex flex-col justify-between group hover:border-[#18b8ea]/60 transition-all duration-300 hover:shadow-[0_12px_35px_rgba(24,184,234,0.12)] hover:-translate-y-1"
          >
            <!-- Card Top: Framed Square Image (fits frame cleanly, no blur) -->
            <div>
              <NuxtLink
                :to="`/products/${item.id || item.code}`"
                class="block w-full aspect-square rounded-2xl bg-[#020b14] border border-white/10 overflow-hidden relative mb-5 group-hover:border-[#18b8ea]/40 transition-colors p-4 flex items-center justify-center"
              >
                <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,184,234,0.1)_0%,rgba(2,11,20,0.95)_75%)] pointer-events-none"></div>
                <img
                  :src="item.img || '/images/hero-bg.jpg'"
                  :alt="item.name"
                  class="max-h-[90%] max-w-[90%] object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-105"
                />
              </NuxtLink>

              <!-- Product Info: Centered matching user reference -->
              <div class="text-center px-1">
                <span class="block font-mono text-[10px] uppercase tracking-[0.15em] text-[#18b8ea] font-semibold mb-1.5 truncate">
                  {{ item.tag || (item.category?.toUpperCase() || 'SURVEY INSTRUMENT') }}
                </span>
                <h3 class="font-display font-bold text-base sm:text-lg text-white mb-2 leading-snug group-hover:text-[#18b8ea] transition-colors line-clamp-2">
                  <NuxtLink :to="`/products/${item.id || item.code}`">
                    {{ item.name }}
                  </NuxtLink>
                </h3>
                <p class="font-body text-xs sm:text-sm text-[#94a3b8] leading-relaxed font-light line-clamp-3">
                  {{ item.summary }}
                </p>
              </div>
            </div>

            <!-- Card Bottom Action Link -->
            <div class="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
              <span class="font-mono text-[10px] text-white/40 uppercase tracking-wider truncate max-w-[130px]">
                {{ item.code || 'TERRABYTE' }}
              </span>
              <NuxtLink
                :to="`/products/${item.id || item.code}`"
                class="inline-flex items-center gap-1.5 font-ui font-bold text-[#18b8ea] hover:text-[#38cbf8] transition-colors group/btn"
              >
                <span>{{ t('products.details') }}</span>
                <span class="text-sm transition-transform group-hover/btn:translate-x-1">&rarr;</span>
              </NuxtLink>
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
import { computed } from 'vue'
import { useLanguage } from '~/composables/useLanguage'

const { t, locale } = useLanguage()

const { data: productsData } = await useAsyncData('products-catalog', () => $fetch('/api/products').catch(() => []))

const allProducts = computed(() => {
  if (!Array.isArray(productsData.value) || productsData.value.length === 0) return []
  // Deduplicate products by code/name to prevent duplicate entries
  const seen = new Set<string>()
  const unique: any[] = []
  for (const p of productsData.value) {
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
