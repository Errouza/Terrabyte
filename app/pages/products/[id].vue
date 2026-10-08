<template>
  <div class="min-h-screen text-white relative bg-[#030d17]">

    <!-- Loading State -->
    <div v-if="pending" class="min-h-[60vh] flex items-center justify-center">
      <div class="flex flex-col items-center gap-4">
        <div class="w-12 h-12 rounded-full border-2 border-[#18b8ea] border-t-transparent animate-spin"></div>
        <p class="font-mono text-xs uppercase tracking-widest text-[#18b8ea]">Memuat Detail Produk...</p>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="!product" class="min-h-[60vh] flex items-center justify-center px-6">
      <div class="max-w-md text-center space-y-4">
        <div class="w-16 h-16 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center justify-center mx-auto text-2xl">
          ⚠️
        </div>
        <h2 class="font-display font-bold text-2xl text-white">Produk Tidak Ditemukan</h2>
        <p class="font-body text-sm text-[#94a3b8]">
          Produk yang Anda cari tidak tersedia atau tautan telah dipindahkan.
        </p>
        <NuxtLink to="/products" class="btn-geo-primary inline-flex">
          &larr; {{ t('products.backToProducts') }}
        </NuxtLink>
      </div>
    </div>

    <!-- Main Product Detail View -->
    <div v-else>

      <!-- ─── TOP BREADCRUMB BAR ────────────────────────────────────── -->
      <div class="border-b border-white/5 bg-[#020b14]/70 backdrop-blur-md sticky top-16 sm:top-20 z-20">
        <div class="max-w-7xl mx-auto px-6 lg:px-10 py-3.5 flex items-center justify-between text-xs font-mono">
          <NuxtLink
            to="/products"
            class="inline-flex items-center gap-2 text-[#94a3b8] hover:text-[#18b8ea] transition-colors group"
          >
            <span class="transition-transform group-hover:-translate-x-1">&larr;</span>
            <span>{{ t('products.backToProducts') }}</span>
          </NuxtLink>

          <div class="hidden sm:flex items-center gap-2 text-[11px] text-[#64748b]">
            <NuxtLink to="/" class="hover:text-white transition-colors">Home</NuxtLink>
            <span>/</span>
            <NuxtLink to="/products" class="hover:text-white transition-colors">Products</NuxtLink>
            <span>/</span>
            <span class="text-[#18b8ea] truncate max-w-[240px]">{{ loc(product, 'name') }}</span>
          </div>
        </div>
      </div>

      <!-- ─── TOP PRODUCT HEADER BANNER (MATCHES USER'S REFERENCE) ──── -->
      <section class="relative py-12 lg:py-16 bg-gradient-to-b from-[#02182b] via-[#052642] to-[#030d17] border-b border-white/10 overflow-hidden">
        <!-- Glow accents -->
        <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-[#18b8ea]/15 rounded-full blur-[120px] pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 text-center space-y-3">
          <!-- Tag / Category -->
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18b8ea]/10 border border-[#18b8ea]/25 text-[#18b8ea] text-[11px] font-mono tracking-widest uppercase">
            <span>{{ loc(product, 'tag') || (product.category?.toUpperCase() || 'PRECISION HARDWARE') }}</span>
          </div>

          <!-- Product Title -->
          <h1 class="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase max-w-4xl mx-auto drop-shadow-sm">
            {{ loc(product, 'name') }}
          </h1>

          <!-- SPECIFICATIONS Subtitle -->
          <p class="font-mono text-sm sm:text-base uppercase tracking-[0.3em] text-[#38cbf8] font-bold pt-1">
            {{ t('products.specifications') }}
          </p>
        </div>
      </section>

      <!-- ─── MAIN SPECIFICATIONS & PHOTO SECTION ─────────────────────── -->
      <section class="py-14 lg:py-20 relative z-10">
        <div class="max-w-7xl mx-auto px-6 lg:px-10">
          <div class="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            <!-- LEFT COLUMN: Product Photo Presentation Container -->
            <div class="lg:col-span-5 space-y-4">
              <!-- Framed White Container matching user reference -->
              <div class="rounded-3xl bg-white p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20 relative flex flex-col items-center justify-center min-h-[380px] sm:min-h-[440px] group overflow-hidden">
                <!-- Status badge on photo -->
                <div class="absolute top-4 right-4 z-10">
                  <span class="font-mono text-[10px] tracking-wider uppercase font-bold px-3 py-1 rounded-full bg-[#030d17] text-[#18b8ea] border border-white/10 shadow-md">
                    {{ product.status || 'AVAILABLE' }}
                  </span>
                </div>

                <!-- Principal Badge -->
                <div class="absolute top-4 left-4 z-10">
                  <span class="font-mono text-[10px] tracking-wider uppercase font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {{ product.code || 'TERRABYTE' }}
                  </span>
                </div>

                <!-- High-Res Product Image -->
                <img
                  :src="product.img || '/images/hero-bg.jpg'"
                  :alt="product.name"
                  class="max-h-[320px] sm:max-h-[380px] w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-xl"
                />

                <!-- Bottom Watermark inside container -->
                <div class="w-full pt-4 mt-auto border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Mitra Resmi Lextera</span>
                  <span class="text-slate-400 font-sans">Garansi Resmi Lokal</span>
                </div>
              </div>

              <!-- Quick action links below image on mobile/tablet -->
              <div class="p-4 rounded-2xl bg-[#020b14] border border-white/10 flex items-center justify-between text-xs text-[#94a3b8]">
                <span class="font-mono text-[11px]">Kode Produk: <strong class="text-white">{{ product.code || product.id }}</strong></span>
                <span class="text-emerald-400 font-mono flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Siap Uji / Demo
                </span>
              </div>
            </div>

            <!-- RIGHT COLUMN: Specification Table & CTAs -->
            <div class="lg:col-span-7 space-y-6">

              <!-- Product Summary Header -->
              <div class="space-y-3 pb-4 border-b border-white/10">
                <div class="flex items-center gap-3">
                  <span class="font-mono text-xs font-bold text-[#18b8ea] tracking-wider uppercase">
                    {{ product.category?.toUpperCase() || 'HARDWARE' }}
                  </span>
                  <span class="text-white/20">•</span>
                  <span class="text-xs text-[#94a3b8] font-mono">Original Manufactured Unit</span>
                </div>
                <h2 class="font-display font-bold text-2xl sm:text-3xl text-white">
                  {{ loc(product, 'name') }}
                </h2>
                <p class="font-body text-sm sm:text-base text-[#94a3b8] leading-relaxed font-light">
                  {{ loc(product, 'summary') }}
                </p>
              </div>

              <!-- Specification Rows (Clean horizontal dividers matching user reference) -->
              <div class="rounded-2xl bg-[#020b14] border border-white/10 overflow-hidden shadow-lg">
                <div class="px-6 py-4 border-b border-white/10 bg-white/[0.02] flex items-center justify-between">
                  <h3 class="font-mono text-xs uppercase tracking-wider text-[#18b8ea] font-bold">
                    {{ locale === 'id' ? 'Tabel Parameter Teknis' : 'Technical Specifications Table' }}
                  </h3>
                  <span class="font-mono text-[11px] text-[#64748b]">
                    {{ formattedSpecs.length }} Parameter
                  </span>
                </div>

                <div class="divide-y divide-white/5">
                  <div
                    v-for="(spec, sIdx) in formattedSpecs"
                    :key="sIdx"
                    class="px-6 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-6 hover:bg-white/[0.02] transition-colors"
                  >
                    <!-- Left Spec Label (Bold) -->
                    <span class="font-display font-bold text-white text-sm sm:text-base sm:w-5/12">
                      {{ spec.label }}
                    </span>
                    <!-- Right Spec Value -->
                    <span class="font-body text-[#cbd5e1] text-sm sm:text-base sm:w-7/12 font-light">
                      {{ spec.value }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Action CTAs: Request Quote & WhatsApp Buttons -->
              <div class="pt-3 flex flex-wrap items-center gap-4">
                <NuxtLink
                  :to="`/contact?product=${encodeURIComponent(product.name)}`"
                  class="btn-geo-primary flex-1 sm:flex-initial text-center justify-center text-sm py-3.5 px-7"
                >
                  {{ t('products.requestQuote') }} &rarr;
                </NuxtLink>

                <a
                  :href="`https://wa.me/628123456789?text=${encodeURIComponent('Halo Tim Terrabyte, saya tertarik untuk meminta informasi dan penawaran produk ' + product.name)}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-ui font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:scale-105"
                >
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                  <span>{{ t('products.whatsappInquiry') }}</span>
                </a>

                <NuxtLink
                  :to="`/contact?type=brochure&product=${encodeURIComponent(product.name)}`"
                  class="btn-geo-outline flex-1 sm:flex-initial text-center justify-center text-sm py-3.5 px-6"
                >
                  {{ t('products.downloadBrochure') }}
                </NuxtLink>
              </div>

            </div>

          </div>
        </div>
      </section>

      <!-- ─── KEY ADVANTAGES SECTION (MATCHES USER'S REFERENCE) ────────── -->
      <section class="py-20 lg:py-24 border-t border-white/5 bg-[#020b14] relative">
        <!-- Radial ambient cyan highlight -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#18b8ea]/8 rounded-full blur-[140px] pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

          <!-- Section Title & Cyan Accent Bar -->
          <div class="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 class="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-white tracking-tight uppercase">
              {{ t('products.keyAdvantages') }}
            </h2>
            <!-- Centered Cyan Underline matching reference -->
            <div class="w-16 h-1 bg-[#18b8ea] mx-auto rounded-full shadow-[0_0_12px_rgba(24,184,234,0.6)]"></div>
            <p class="font-body text-[#94a3b8] text-xs sm:text-sm font-light pt-2">
              {{ locale === 'id' ? 'Fitur unggulan yang dirancang untuk performa tangguh, efisiensi maksimal, dan akurasi tinggi di medan survei.' : 'Key engineered capabilities designed for field durability, maximal efficiency, and uncompromised precision.' }}
            </p>
          </div>

          <!-- Key Advantages Grid (2 Columns on tablet/desktop matching reference) -->
          <div class="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div
              v-for="(adv, aIdx) in productAdvantages"
              :key="aIdx"
              class="p-6 sm:p-7 rounded-2xl geo-card border border-white/10 hover:border-[#18b8ea]/60 transition-all duration-300 flex items-start gap-5 group"
            >
              <!-- Icon Container -->
              <div class="w-14 h-14 rounded-2xl bg-[#18b8ea]/10 border border-[#18b8ea]/30 text-[#18b8ea] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#18b8ea] group-hover:text-[#020b14] transition-all shadow-[0_0_15px_rgba(24,184,234,0.15)]">
                <!-- Battery Icon -->
                <svg v-if="adv.icon === 'battery'" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="1" y="6" width="18" height="12" rx="2" ry="2"/>
                  <line x1="23" y1="11" x2="23" y2="13"/>
                  <line x1="6" y1="10" x2="6" y2="14"/>
                  <line x1="10" y1="10" x2="10" y2="14"/>
                  <line x1="14" y1="10" x2="14" y2="14"/>
                </svg>

                <!-- Satellite / Channels Icon -->
                <svg v-else-if="adv.icon === 'satellite'" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
                  <path d="M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"/>
                  <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
                </svg>

                <!-- IMU / Compass Icon -->
                <svg v-else-if="adv.icon === 'compass'" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
                </svg>

                <!-- WiFi / NFC Icon -->
                <svg v-else-if="adv.icon === 'wifi'" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
                  <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
                  <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
                  <line x1="12" y1="20" x2="12.01" y2="20"/>
                </svg>

                <!-- Radar / Target Icon -->
                <svg v-else-if="adv.icon === 'target' || adv.icon === 'radar'" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="6"/>
                  <circle cx="12" cy="12" r="2"/>
                  <line x1="12" y1="2" x2="12" y2="22"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                </svg>

                <!-- Zap / Speed Icon -->
                <svg v-else-if="adv.icon === 'zap'" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>

                <!-- Cloud Icon -->
                <svg v-else-if="adv.icon === 'cloud'" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
                </svg>

                <!-- Laser / Eye Icon -->
                <svg v-else-if="adv.icon === 'laser' || adv.icon === 'eye'" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>

                <!-- Feather / Light Icon -->
                <svg v-else-if="adv.icon === 'feather'" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/>
                  <line x1="16" y1="8" x2="2" y2="22"/>
                  <line x1="17.5" y1="15" x2="9" y2="15"/>
                </svg>

                <!-- Marine / Anchor Icon -->
                <svg v-else-if="adv.icon === 'anchor'" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="5" r="3"/>
                  <line x1="12" y1="22" x2="12" y2="8"/>
                  <path d="M5 12H2a10 10 0 0 0 20 0h-3"/>
                </svg>

                <!-- Fallback Shield / Star Icon -->
                <svg v-else class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>

              <!-- Content -->
              <div class="space-y-1.5 flex-1">
                <h3 class="font-display font-bold text-base sm:text-lg text-white group-hover:text-[#18b8ea] transition-colors">
                  {{ adv.title }}
                </h3>
                <p class="font-body text-xs sm:text-sm text-[#94a3b8] leading-relaxed font-light">
                  {{ adv.desc }}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ─── FLOATING ACTION PILL (MATCHES USER REFERENCE BOTTOM RIGHT) ─ -->
      <div class="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        <!-- Floating Pill with Product Name -->
        <NuxtLink
          :to="`/contact?product=${encodeURIComponent(product.name)}`"
          class="hidden sm:inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#005088] hover:bg-[#006bb5] text-white font-ui font-bold text-xs uppercase tracking-wider shadow-[0_8px_30px_rgba(0,80,136,0.6)] border border-[#18b8ea]/30 transition-all hover:scale-105 backdrop-blur-md"
        >
          <span class="text-sm">&uarr;</span>
          <span class="max-w-[200px] truncate">{{ product.name }}</span>
        </NuxtLink>

        <!-- Floating WhatsApp Quick Button -->
        <a
          :href="`https://wa.me/628123456789?text=${encodeURIComponent('Halo Terrabyte, saya ingin bertanya tentang ' + product.name)}`"
          target="_blank"
          rel="noopener noreferrer"
          class="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110"
          title="Chat WhatsApp"
        >
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
          </svg>
        </a>
      </div>

      <!-- ─── RELATED PRODUCTS BROWSER ─────────────────────────────────── -->
      <section v-if="relatedProducts.length > 0" class="py-16 border-t border-white/5 bg-[#030d17]">
        <div class="max-w-7xl mx-auto px-6 lg:px-10">
          <div class="flex items-center justify-between mb-8">
            <div>
              <p class="font-mono text-xs uppercase tracking-widest text-[#18b8ea] font-semibold">{{ t('products.relatedProducts') }}</p>
              <h3 class="font-display font-bold text-2xl text-white">Instrumen Lainnya</h3>
            </div>
            <NuxtLink to="/products" class="font-mono text-xs text-[#18b8ea] hover:underline flex items-center gap-1">
              <span>{{ t('products.allCategories') }}</span>
              <span>&rarr;</span>
            </NuxtLink>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <NuxtLink
              v-for="rel in relatedProducts"
              :key="rel.id || rel.code"
              :to="`/products/${rel.id || rel.code}`"
              class="group p-5 rounded-2xl geo-card border border-white/10 hover:border-[#18b8ea]/60 transition-all flex items-center gap-4"
            >
              <div class="w-16 h-16 rounded-xl bg-white p-2 flex items-center justify-center flex-shrink-0">
                <img :src="rel.img || '/images/hero-bg.jpg'" :alt="rel.name" class="max-h-full max-w-full object-contain" />
              </div>
              <div class="overflow-hidden">
                <span class="block font-mono text-[9px] text-[#18b8ea] uppercase tracking-wider truncate mb-1">
                  {{ rel.tag || rel.category }}
                </span>
                <h4 class="font-display font-bold text-sm text-white group-hover:text-[#18b8ea] transition-colors truncate">
                  {{ rel.name }}
                </h4>
                <span class="font-mono text-[10px] text-[#64748b] block mt-1">
                  Lihat Detail &rarr;
                </span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- ─── PRE-FOOTER BANNER ───────────────────────────────────────── -->
      <section class="py-16 bg-[#020b14] border-t border-white/5">
        <div class="max-w-7xl mx-auto px-6 lg:px-10">
          <div class="p-8 sm:p-12 rounded-3xl geo-banner flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="space-y-2 text-center md:text-left">
              <h3 class="font-display font-bold text-2xl sm:text-3xl text-white">
                Butuh Demo Unit atau Penawaran Resmi?
              </h3>
              <p class="font-body text-[#94a3b8] text-sm sm:text-base font-light">
                Diskusikan kebutuhan teknis instrumen {{ product.name }} bersama engineering kami.
              </p>
            </div>
            <NuxtLink
              :to="`/contact?product=${encodeURIComponent(product.name)}`"
              class="flex-shrink-0 btn-geo-white"
            >
              Hubungi Tim Teknis
            </NuxtLink>
          </div>
        </div>
      </section>

    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useLanguage } from '~/composables/useLanguage'

const route = useRoute()
const { t, locale, loc, locSpecs, locAdvantages } = useLanguage()

const productId = computed(() => String(route.params.id || ''))

// Fetch all products to reliably find the matching product even if slug/ID varies
const { data: allProductsData, pending } = await useAsyncData('all-products-list', () => $fetch('/api/products').catch(() => []))

const product = computed(() => {
  const list = Array.isArray(allProductsData.value) ? allProductsData.value : []
  const rawId = productId.value.toLowerCase().trim()
  if (!rawId) return list[0] || null

  // 1. Exact match on id, code, or slug
  const exact = list.find((p: any) => {
    if (!p) return false
    const id = String(p.id || '').toLowerCase()
    const code = String(p.code || '').toLowerCase()
    const slug = String(p.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    return id === rawId || code === rawId || slug === rawId
  })
  if (exact) return exact

  // 2. Partial match
  const partial = list.find((p: any) => {
    if (!p) return false
    const id = String(p.id || '').toLowerCase()
    const code = String(p.code || '').toLowerCase()
    const slug = String(p.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    return (
      (rawId.length > 2 && (id.includes(rawId) || code.includes(rawId) || slug.includes(rawId))) ||
      (code.length > 2 && rawId.includes(code)) ||
      (id.length > 2 && rawId.includes(id))
    )
  })
  if (partial) return partial

  return list[0] || null
})

// Specifications formatted cleanly
const formattedSpecs = computed(() => {
  if (!product.value) return []

  const rawSpecs = locSpecs(product.value)
  if (Array.isArray(rawSpecs) && rawSpecs.length > 0) {
    return rawSpecs.map((s: any) => {
      if (Array.isArray(s)) {
        return { label: s[0] || '', value: s[1] || '' }
      }
      if (typeof s === 'object' && s !== null) {
        return { label: s.key || s.label || s.title || '', value: s.val || s.value || '' }
      }
      return { label: 'Spesifikasi', value: String(s) }
    })
  }

  // Fallback defaults if specs array is empty
  return [
    { label: locale.value === 'en' ? 'Manufacturing Status' : 'Status Manufaktur', value: product.value.status || 'Active' },
    { label: locale.value === 'en' ? 'Instrument Category' : 'Kategori Alat', value: product.value.category?.toUpperCase() || 'Survey Instrument' },
    { label: locale.value === 'en' ? 'Authorized Support' : 'Dukungan Lokal', value: 'PT Lextera Survey Indonesia' }
  ]
})

// Knowledge base of rich advantages matching user reference and real instruments
const fallbackAdvantages: Record<string, Array<{ title: string; desc: string; icon: string }>> = {
  'COMNAV-T20-GNSS': [
    {
      title: '10,000mAh Battery',
      desc: 'Up to 20 hours of work, 5 hours of fast charging.',
      icon: 'battery'
    },
    {
      title: '1590 Tracking Channels',
      desc: 'Full constellation tracking for a rock-solid fix.',
      icon: 'satellite'
    },
    {
      title: '3rd Generation IMU',
      desc: '60° tilt compensation with auto-calibration and magnetic immunity.',
      icon: 'compass'
    },
    {
      title: 'NFC Fast Connection',
      desc: 'Automatic pairing with data collector or Android device with just a touch.',
      icon: 'wifi'
    }
  ],
  'RADAR-MS-SAR5000': [
    {
      title: '0.1 mm Sub-Milimeter Detection',
      desc: 'Deteksi dini pergeseran lereng tambang sebelum retakan memicu kelongsoran massal.',
      icon: 'target'
    },
    {
      title: 'Radius 5.000 Meter Reflectorless',
      desc: 'Cakupan dinding tambang hingga 5 km dalam satu unit tanpa reflektor fisik.',
      icon: 'radar'
    },
    {
      title: '< 2 Menit Rapid Scan Cycle',
      desc: 'Interferometri radar cepat memberikan pembaruan data deformasi mendekati real-time.',
      icon: 'zap'
    },
    {
      title: 'Integrasi Langsung TerraPulse-AI',
      desc: 'Sinkronisasi otomatis dengan monitoring center TerraWatch 24/7 dan sistem alarm.',
      icon: 'cloud'
    }
  ],
  'COMNAV-N2-PALM': [
    {
      title: 'Modul Laser EDM Terintegrasi',
      desc: 'Ukur titik tersembunyi, tebing curam, atau area bahaya tanpa harus menempatkan jalon pole.',
      icon: 'laser'
    },
    {
      title: 'Augmented Reality (AR) Stakeout',
      desc: 'Kamera HD menampilkan panduan navigasi stakeout langsung di layar secara visual.',
      icon: 'eye'
    },
    {
      title: 'Ukuran Saku Ultra Ringan 170g',
      desc: 'Desain ultra ringkas seukuran genggaman tangan, nyaman digunakan sepanjang hari.',
      icon: 'feather'
    },
    {
      title: 'IMU 60° Bebas Kalibrasi',
      desc: 'Pengukuran tetap presisi walau pole miring tanpa interferensi medan magnetik.',
      icon: 'compass'
    }
  ],
  'SV600-USV': [
    {
      title: 'Propulsi Dual Jet Anti-Sampah',
      desc: 'Sistem jet air internal tanpa baling-baling terbuka, aman dari lilitan lumut dan eceng gondok.',
      icon: 'anchor'
    },
    {
      title: 'Auto-Return Fail Safe',
      desc: 'Otomatis kembali ke titik awal peluncuran saat baterai lemah atau sinyal telemetri terputus.',
      icon: 'shield'
    },
    {
      title: 'Sensor Modular Echo-Sounder',
      desc: 'Mendukung integrasi sensor akustik single-beam, multi-beam, hingga sensor kualitas air.',
      icon: 'layers'
    },
    {
      title: 'Navigasi Otonom Waypoint',
      desc: 'Misi pemetaan batimetri otomatis mengikuti rute grid yang telah diprogram dengan akurasi sentimeter.',
      icon: 'navigation'
    }
  ]
}

const productAdvantages = computed(() => {
  if (!product.value) return []

  // If product has explicit advantages in data
  if (Array.isArray(product.value.advantages) && product.value.advantages.length > 0) {
    return locAdvantages(product.value)
  }

  // Check fallback knowledge base by code
  const code = String(product.value.code || '').toUpperCase()
  for (const [key, advList] of Object.entries(fallbackAdvantages)) {
    if (code.includes(key) || key.includes(code) || product.value.name?.toLowerCase().includes(key.toLowerCase())) {
      return advList
    }
  }

  // If T20 is detected by name/code
  if (product.value.name?.toLowerCase().includes('t20') || code.includes('T20')) {
    return fallbackAdvantages['COMNAV-T20-GNSS']
  }
  // If SAR5000 is detected
  if (product.value.name?.toLowerCase().includes('sar5000') || code.includes('SAR5000')) {
    return fallbackAdvantages['RADAR-MS-SAR5000']
  }
  // If N2 is detected
  if (product.value.name?.toLowerCase().includes('n2') || code.includes('N2')) {
    return fallbackAdvantages['COMNAV-N2-PALM']
  }

  // General fallback advantages
  return [
    {
      title: 'High Precision Sensor Engine',
      desc: 'Designed for sub-centimeter stability in harsh industrial and remote conditions.',
      icon: 'target'
    },
    {
      title: 'Rugged All-Weather Enclosure',
      desc: 'Certified industrial ingress protection engineered for extreme rain, dust, and temperature.',
      icon: 'shield'
    },
    {
      title: 'Full Day Field Endurance',
      desc: 'Optimized low-power electronics allowing continuous operational monitoring.',
      icon: 'battery'
    },
    {
      title: 'Direct Terrabyte Local Support',
      desc: 'Backed by factory-certified calibration and technical assistance in Indonesia.',
      icon: 'wifi'
    }
  ]
})

// Related products (exclude current product)
const relatedProducts = computed(() => {
  const list = Array.isArray(allProductsData.value) ? allProductsData.value : []
  if (!product.value) return []
  return list.filter((p: any) => p.id !== product.value.id && p.code !== product.value.code).slice(0, 3)
})

useHead({
  title: computed(() => product.value ? `${loc(product.value, 'name')} — Specifications | Terrabyte` : 'Product Details — Terrabyte'),
  meta: [
    {
      name: 'description',
      content: computed(() => loc(product.value, 'summary') || 'Precision surveying and geotechnical monitoring hardware.')
    }
  ]
})
</script>

<style scoped>
</style>
