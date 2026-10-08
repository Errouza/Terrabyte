<template>
  <div class="min-h-screen text-white relative bg-[#030d17]">

    <!-- ─── HERO SECTION (PAGE 1 HI-FI) ──────────────────────────────── -->
    <section class="relative pt-32 pb-24 lg:pt-40 lg:pb-36 overflow-hidden">
      <!-- Ambient Radial Color Glows -->
      <div class="absolute top-1/4 left-1/4 w-[650px] h-[650px] bg-[#18b8ea]/12 rounded-full blur-[160px] pointer-events-none"></div>
      <div class="absolute top-1/3 right-0 w-[550px] h-[550px] bg-[#0284c7]/15 rounded-full blur-[170px] pointer-events-none"></div>

      <!-- Sweeping Contour Waves & Rolling Terrain from the Figma design -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <svg class="w-full h-full object-cover min-h-[650px]" viewBox="0 0 1440 680" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <!-- Dark rolling terrain layers at bottom -->
          <path d="M0,520 C320,480 600,600 950,560 C1200,530 1350,580 1440,600 L1440,680 L0,680 Z" fill="#041624" opacity="0.85" />
          <path d="M0,560 C380,510 680,640 1020,590 C1260,560 1380,620 1440,640 L1440,680 L0,680 Z" fill="#052033" opacity="0.7" />
          <path d="M0,600 C420,570 760,680 1100,630 C1300,600 1400,650 1440,660 L1440,680 L0,680 Z" fill="#06283d" opacity="0.55" />

          <!-- Multiple sweeping contour lines traversing across -->
          <path d="M-50,420 C250,380 500,550 850,500 C1150,460 1350,500 1500,480" stroke="#18b8ea" stroke-opacity="0.38" stroke-width="1.5" />
          <path d="M-50,450 C260,410 520,580 870,530 C1170,490 1360,525 1500,505" stroke="#18b8ea" stroke-opacity="0.30" stroke-width="1.5" />
          <path d="M-50,480 C270,440 540,610 890,560 C1190,520 1370,550 1500,530" stroke="#18b8ea" stroke-opacity="0.24" stroke-width="1.5" />
          <path d="M-50,510 C280,470 560,640 910,590 C1210,550 1380,575 1500,555" stroke="#18b8ea" stroke-opacity="0.18" stroke-width="1.5" />
          <path d="M-50,540 C290,500 580,670 930,620 C1230,580 1390,600 1500,580" stroke="#18b8ea" stroke-opacity="0.12" stroke-width="1.5" />
          <path d="M-50,570 C300,530 600,700 950,650 C1250,610 1400,625 1500,605" stroke="#18b8ea" stroke-opacity="0.08" stroke-width="1.5" />
        </svg>
      </div>

      <div class="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div class="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          <!-- Left Column: Copy & Actions -->
          <div class="lg:col-span-7 space-y-6">
            <!-- Pill / Category -->
            <div class="inline-flex items-center gap-2.5 px-3 py-1 rounded-full text-[#18b8ea] font-mono text-[11px] tracking-[0.2em] uppercase font-semibold">
              <span class="w-1.5 h-1.5 rounded-full bg-[#18b8ea] shadow-[0_0_8px_#18b8ea]"></span>
              <span>{{ t('home.tag') }}</span>
            </div>

            <!-- Hero Headline -->
            <h1 class="font-display font-bold text-4xl sm:text-5xl lg:text-[68px] leading-[1.05] text-white tracking-tight">
              {{ t('home.heroTitle1') }}<br />
              <span class="text-[#18b8ea] drop-shadow-[0_0_40px_rgba(24,184,234,0.45)]">{{ t('home.heroTitle2') }}</span>
            </h1>

            <!-- Subtitle -->
            <p class="font-body text-[#94a3b8] text-base sm:text-lg leading-relaxed max-w-xl font-light">
              {{ t('home.heroDesc') }}
            </p>

            <!-- CTA Actions -->
            <div class="flex flex-wrap items-center gap-4 pt-3">
              <NuxtLink
                to="/solutions"
                class="btn-geo-primary"
              >
                {{ t('home.exploreSolutions') }}
              </NuxtLink>
              <NuxtLink
                to="/products"
                class="btn-geo-outline"
              >
                {{ t('home.viewProducts') }}
              </NuxtLink>
            </div>
          </div>

          <!-- Right Column: Live Telemetry Interactive Widget Card -->
          <div class="lg:col-span-5">
            <HeroTelemetryWidget />
          </div>

        </div>
      </div>
    </section>

    <!-- ─── TRUST & PARTNERS STRIP (CLIENT: BSS & TECH PARTNER: LEXTERA) ── -->
    <section class="py-8 lg:py-10 bg-[#010810]/95 border-y border-white/5 relative z-10 backdrop-blur-md">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
          
          <!-- Trust Intro -->
          <div class="max-w-md space-y-1.5">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#18b8ea] animate-pulse"></span>
              <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#18b8ea] font-semibold">
                {{ t('home.trustTag') }}
              </p>
            </div>
            <p class="font-body text-xs sm:text-sm text-[#94a3b8] leading-relaxed font-light">
              {{ t('home.trustDesc') }}
            </p>
          </div>

          <!-- Entity Badges Grid: Clean, static, no running content -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 flex-1 max-w-2xl">
            
            <!-- BSS Card (Active Operational Client) -->
            <div class="p-4 rounded-2xl bg-[#030d17]/80 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex items-center gap-4 group">
              <div class="w-24 h-14 rounded-xl bg-white p-2 flex items-center justify-center flex-shrink-0 shadow-sm border border-white/20 group-hover:scale-105 transition-transform">
                <img
                  src="/images/BSS.png"
                  alt="PT Bina Sarana Sukses"
                  class="h-9 w-auto max-w-full object-contain"
                />
              </div>
              <div class="min-w-0">
                <span class="inline-flex items-center text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 mb-1">
                  {{ t('home.trustClientBadge') }}
                </span>
                <h4 class="font-display font-semibold text-sm text-white truncate">
                  {{ t('home.trustClientTitle') }}
                </h4>
                <p class="font-body text-xs text-[#94a3b8] truncate">
                  {{ t('home.trustClientSub') }}
                </p>
              </div>
            </div>

            <!-- Lextera Card (Authorized Tech Partner) -->
            <div class="p-4 rounded-2xl bg-[#030d17]/80 border border-white/10 hover:border-[#18b8ea]/40 transition-all duration-300 flex items-center gap-4 group">
              <div class="w-24 h-14 rounded-xl bg-white p-2 flex items-center justify-center flex-shrink-0 shadow-sm border border-white/20 group-hover:scale-105 transition-transform">
                <img
                  src="/images/logoLextera.png"
                  alt="PT Lextera Survey Indonesia"
                  class="h-9 w-auto max-w-full object-contain"
                />
              </div>
              <div class="min-w-0">
                <span class="inline-flex items-center text-[10px] font-mono uppercase tracking-wider text-[#18b8ea] bg-[#18b8ea]/10 px-2 py-0.5 rounded-full border border-[#18b8ea]/20 mb-1">
                  {{ t('home.trustPartnerBadge') }}
                </span>
                <h4 class="font-display font-semibold text-sm text-white truncate">
                  {{ t('home.trustPartnerTitle') }}
                </h4>
                <p class="font-body text-xs text-[#94a3b8] truncate">
                  {{ t('home.trustPartnerSub') }}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>

    <!-- ─── SECTION 01: WHAT WE DO (PAGE 1 HI-FI) ─────────────────────── -->
    <section class="py-20 lg:py-28 border-t border-white/5 bg-[#020b14] relative">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">

        <!-- Section Header Row -->
        <div class="grid lg:grid-cols-12 gap-6 items-end mb-16">
          <div class="lg:col-span-7 space-y-3">
            <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#18b8ea] font-semibold">{{ t('home.section1Tag') }}</p>
            <h2 class="font-display font-bold text-3xl sm:text-4xl lg:text-[44px] leading-tight text-white">
              {{ t('home.section1Title') }}
            </h2>
          </div>
          <div class="lg:col-span-5">
            <p class="font-body text-[#94a3b8] text-sm sm:text-base leading-relaxed font-light">
              {{ t('home.section1Desc') }}
            </p>
          </div>
        </div>

        <!-- 3 Feature Cards (MONITOR, ANALYZE, RESPOND) -->
        <div class="grid md:grid-cols-3 gap-6">

          <!-- Card 1: Precision instruments -->
          <div class="p-8 rounded-3xl geo-card group flex flex-col justify-between">
            <div>
              <div class="w-11 h-11 rounded-xl bg-[#18b8ea]/10 border border-[#18b8ea]/25 flex items-center justify-center text-[#18b8ea] mb-6 group-hover:scale-110 group-hover:bg-[#18b8ea]/20 transition-all duration-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                </svg>
              </div>
              <span class="block font-mono text-[11px] uppercase tracking-[0.2em] text-[#18b8ea] font-semibold mb-2">{{ t('home.monitorTag') }}</span>
              <h3 class="font-display font-bold text-xl text-white mb-3 group-hover:text-[#18b8ea] transition-colors">
                {{ t('home.monitorTitle') }}
              </h3>
              <p class="font-body text-xs sm:text-sm text-[#94a3b8] leading-relaxed font-light">
                {{ t('home.monitorDesc') }}
              </p>
            </div>
          </div>

          <!-- Card 2: TerraPulse-AI -->
          <div class="p-8 rounded-3xl geo-card-highlight group flex flex-col justify-between">
            <div>
              <div class="w-11 h-11 rounded-xl bg-[#18b8ea]/20 border border-[#18b8ea]/40 flex items-center justify-center text-[#18b8ea] mb-6 group-hover:scale-110 transition-all duration-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span class="block font-mono text-[11px] uppercase tracking-[0.2em] text-[#18b8ea] font-semibold mb-2">{{ t('home.analyzeTag') }}</span>
              <h3 class="font-display font-bold text-xl text-white mb-3 group-hover:text-[#18b8ea] transition-colors">
                {{ t('home.analyzeTitle') }}
              </h3>
              <p class="font-body text-xs sm:text-sm text-[#94a3b8] leading-relaxed font-light">
                {{ t('home.analyzeDesc') }}
              </p>
            </div>
          </div>

          <!-- Card 3: TerraWatch center -->
          <div class="p-8 rounded-3xl geo-card group flex flex-col justify-between">
            <div>
              <div class="w-11 h-11 rounded-xl bg-[#18b8ea]/10 border border-[#18b8ea]/25 flex items-center justify-center text-[#18b8ea] mb-6 group-hover:scale-110 group-hover:bg-[#18b8ea]/20 transition-all duration-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span class="block font-mono text-[11px] uppercase tracking-[0.2em] text-[#18b8ea] font-semibold mb-2">{{ t('home.respondTag') }}</span>
              <h3 class="font-display font-bold text-xl text-white mb-3 group-hover:text-[#18b8ea] transition-colors">
                {{ t('home.respondTitle') }}
              </h3>
              <p class="font-body text-xs sm:text-sm text-[#94a3b8] leading-relaxed font-light">
                {{ t('home.respondDesc') }}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- ─── SECTION 02: PRODUCTS (PAGE 1 HI-FI) ────────────────────────── -->
    <!-- ─── SECTION 02: PRODUCTS (SLIDING CAROUSEL + 3D FLIP CARDS) ────── -->
    <section class="py-20 lg:py-28 border-t border-white/5 relative bg-[#030d17] overflow-hidden">
      
      <!-- Ambient Backlight -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#18b8ea]/6 rounded-full blur-[170px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        <!-- Header Row with Slider Navigation Buttons -->
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="w-2 h-2 rounded-full bg-[#18b8ea]"></span>
              <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#18b8ea] font-semibold">{{ t('home.section2Tag') }}</p>
            </div>
            <h2 class="font-display font-bold text-3xl sm:text-4xl text-white">
              {{ t('home.section2Title') }}
            </h2>
          </div>

          <!-- Carousel Controls & All Products Link -->
          <div class="flex items-center gap-4">
            <!-- Prev & Next Arrow Buttons -->
            <div class="flex items-center gap-2">
              <button
                type="button"
                @click="slideProducts('prev')"
                class="w-10 h-10 rounded-full border border-white/10 bg-[#020b14]/80 hover:border-[#18b8ea] hover:bg-[#18b8ea]/10 text-white hover:text-[#18b8ea] flex items-center justify-center transition-all duration-200 shadow-md active:scale-95"
                title="Produk Sebelumnya"
              >
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                @click="slideProducts('next')"
                class="w-10 h-10 rounded-full border border-white/10 bg-[#020b14]/80 hover:border-[#18b8ea] hover:bg-[#18b8ea]/10 text-white hover:text-[#18b8ea] flex items-center justify-center transition-all duration-200 shadow-md active:scale-95"
                title="Produk Berikutnya"
              >
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <NuxtLink
              to="/products"
              class="hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm font-ui font-bold text-[#18b8ea] hover:text-[#38cbf8] transition-colors tracking-wide ml-2"
            >
              <span>{{ t('home.allProducts') }}</span>
              <span>&rarr;</span>
            </NuxtLink>
          </div>
        </div>

        <!-- Sliding Track Container -->
        <div
          ref="productSliderRef"
          @scroll="handleSliderScroll"
          class="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-2 -mx-6 px-6 lg:-mx-10 lg:px-10"
          style="scrollbar-width: none; -ms-overflow-style: none;"
        >
          <!-- 3D Flipping Card Item -->
          <div
            v-for="item in homeProducts"
            :key="item.id || item.code"
            class="product-flip-card h-[590px] w-[86vw] sm:w-[360px] lg:w-[380px] flex-shrink-0 snap-start select-none"
            style="perspective: 1200px;"
          >
            <div
              class="relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
              :class="{ '[transform:rotateY(180deg)]': isFlipped(item.id || item.code) }"
              style="transform-style: preserve-3d;"
            >
              
              <!-- ─── FRONT FACE (EXACT MATCH TO USER REFERENCE) ────────── -->
              <div
                class="absolute inset-0 rounded-3xl geo-card p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-2xl border border-white/10 hover:border-[#18b8ea]/50 transition-colors group"
                style="backface-visibility: hidden; -webkit-backface-visibility: hidden;"
              >
                <div>
                  <!-- Top Isolated Product Box (NO badges, NO watermarks!) -->
                  <div class="h-60 rounded-2xl bg-[#020b14] border border-white/5 relative flex items-center justify-center p-6 overflow-hidden mb-5">
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
                      class="absolute top-3.5 right-3.5 w-7 h-7 rounded-full bg-black/40 hover:bg-[#18b8ea] text-[#94a3b8] hover:text-[#030d17] border border-white/10 flex items-center justify-center text-xs transition-all shadow-md group/flip"
                      title="Balik kartu untuk lihat spesifikasi"
                    >
                      <span class="group-hover/flip:rotate-180 transition-transform duration-300">↻</span>
                    </button>
                  </div>

                  <!-- Category Tag -->
                  <span class="block font-mono text-[11px] uppercase tracking-[0.18em] text-[#18b8ea] font-semibold mb-2 truncate">
                    {{ loc(item, 'tag') || 'HARDWARE · SLOPE MONITORING' }}
                  </span>

                  <!-- Product Name -->
                  <h3 class="font-display font-bold text-lg sm:text-xl text-white mb-2.5 leading-snug line-clamp-2 group-hover:text-[#18b8ea] transition-colors">
                    <NuxtLink :to="`/products/${item.id || item.code}`">
                      {{ loc(item, 'name') }}
                    </NuxtLink>
                  </h3>

                  <!-- Short Description -->
                  <p class="font-body text-xs sm:text-sm text-[#94a3b8] leading-relaxed font-light line-clamp-3">
                    {{ loc(item, 'summary') }}
                  </p>
                </div>

                <!-- Card Footer Bar -->
                <div class="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span class="font-mono text-xs text-[#64748b] uppercase tracking-wider truncate max-w-[130px]">
                    {{ item.code || 'TERRABYTE' }}
                  </span>

                  <div class="flex items-center gap-2.5">
                    <!-- 3D Flip Action -->
                    <button
                      type="button"
                      @click="toggleFlip(item.id || item.code)"
                      class="px-2.5 py-1 rounded-full bg-white/5 hover:bg-[#18b8ea]/15 text-[#94a3b8] hover:text-[#18b8ea] text-[11px] font-mono border border-white/10 hover:border-[#18b8ea]/30 transition-all flex items-center gap-1"
                      :title="locale === 'en' ? 'View Specifications on Back of Card' : 'Lihat Spesifikasi di Belakang Kartu'"
                    >
                      <span>{{ locale === 'en' ? 'Specs' : 'Spek' }}</span>
                      <span class="text-xs">↻</span>
                    </button>

                    <!-- Direct Details Link to Dedicated Product Page -->
                    <NuxtLink
                      :to="`/products/${item.id || item.code}`"
                      class="inline-flex items-center gap-1 font-ui font-bold text-xs text-[#18b8ea] hover:text-[#38cbf8] transition-colors group/link"
                    >
                      <span>{{ t('home.details') }}</span>
                      <span class="text-sm transition-transform group-hover/link:translate-x-1">&rarr;</span>
                    </NuxtLink>
                  </div>
                </div>
              </div>

              <!-- ─── BACK FACE (FLIPPED FACE: TECHNICAL SPECIFICATIONS) ─ -->
              <div
                class="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#051f38] via-[#041628] to-[#020b14] p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-2xl border border-[#18b8ea]/40"
                style="backface-visibility: hidden; -webkit-backface-visibility: hidden; transform: rotateY(180deg);"
              >
                <div>
                  <!-- Back Face Header -->
                  <div class="flex items-center justify-between pb-3 border-b border-white/10 mb-3.5">
                    <span class="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase text-[#18b8ea] font-bold bg-[#18b8ea]/10 px-2.5 py-1 rounded-full border border-[#18b8ea]/20">
                      <span class="w-1.5 h-1.5 rounded-full bg-[#18b8ea] animate-pulse"></span>
                      {{ locale === 'en' ? 'TECHNICAL SPECIFICATIONS' : 'SPESIFIKASI TEKNIS' }}
                    </span>
                    <button
                      type="button"
                      @click="toggleFlip(item.id || item.code)"
                      class="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs transition-colors"
                      :title="locale === 'en' ? 'Back to Front Photo' : 'Kembali ke Foto Depan'"
                    >
                      ✕
                    </button>
                  </div>

                  <h4 class="font-display font-bold text-base text-white truncate mb-1">
                    {{ loc(item, 'name') }}
                  </h4>
                  <p class="font-mono text-[10px] text-[#64748b] uppercase mb-3">
                    MODEL: {{ item.code }}
                  </p>

                  <!-- Technical Specs Rows -->
                  <div class="space-y-2 max-h-[310px] overflow-y-auto pr-1">
                    <div
                      v-for="(spec, sIdx) in locSpecs(item).slice(0, 6)"
                      :key="sIdx"
                      class="p-2.5 rounded-xl bg-[#020b14]/80 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs"
                    >
                      <span class="text-[#94a3b8] font-mono text-[11px] flex-shrink-0">{{ spec[0] }}</span>
                      <span class="text-white font-medium text-right text-[11px] sm:max-w-[200px] truncate" :title="spec[1]">{{ spec[1] }}</span>
                    </div>
                  </div>
                </div>

                <!-- Back Face Footer Action Buttons -->
                <div class="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    @click="toggleFlip(item.id || item.code)"
                    class="px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-all flex items-center gap-1.5"
                  >
                    <span>↺</span>
                    <span>{{ locale === 'en' ? 'Photo' : 'Foto' }}</span>
                  </button>

                  <NuxtLink
                    :to="`/products/${item.id || item.code}`"
                    class="btn-geo-primary !py-2 !px-4 !text-xs !font-bold flex items-center gap-1.5 flex-1 justify-center shadow-lg"
                  >
                    <span>{{ locale === 'en' ? 'Full Page' : 'Halaman Lengkap' }}</span>
                    <span>&rarr;</span>
                  </NuxtLink>
                </div>
              </div>

            </div>
          </div>
        </div>

        <!-- Slider Pagination Dots Indicator -->
        <div class="flex items-center justify-center gap-2 mt-8">
          <button
            v-for="(_, dIdx) in homeProducts"
            :key="dIdx"
            type="button"
            @click="(() => {
              if (productSliderRef) {
                const card = productSliderRef.querySelector('.product-flip-card') as HTMLElement
                const scrollStep = card ? card.offsetWidth + 24 : 380
                productSliderRef.scrollTo({ left: dIdx * scrollStep, behavior: 'smooth' })
              }
            })()"
            class="h-1.5 rounded-full transition-all duration-300"
            :class="activeSlideIndex === dIdx ? 'w-8 bg-[#18b8ea]' : 'w-2 bg-white/20 hover:bg-white/40'"
            :title="`Slide ${dIdx + 1}`"
          ></button>
        </div>

        <!-- Mobile All Products CTA -->
        <div class="mt-8 text-center sm:hidden">
          <NuxtLink
            to="/products"
            class="btn-geo-outline !py-2.5 !px-6 text-xs inline-flex items-center gap-2"
          >
            <span>{{ t('home.allProducts') }}</span>
            <span>&rarr;</span>
          </NuxtLink>
        </div>

      </div>
    </section>

    <!-- ─── SECTION 03: SOLUTION (PAGE 1 HI-FI) ────────────────────────── -->
    <section class="py-20 lg:py-28 border-t border-white/5 bg-[#020b14] relative">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="grid lg:grid-cols-12 gap-12 items-center">

          <!-- Left Column: Copy & Checklist -->
          <div class="lg:col-span-6 space-y-6">
            <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#18b8ea] font-semibold">{{ t('home.section3Tag') }}</p>
            <h2 class="font-display font-bold text-3xl sm:text-4xl lg:text-[44px] leading-tight text-white">
              {{ t('home.section3Title1') }} <span class="text-[#18b8ea]">{{ t('home.section3TitlePulse') }}</span><br />
              {{ t('home.section3Title2') }}
            </h2>
            <p class="font-body text-[#94a3b8] text-sm sm:text-base leading-relaxed font-light">
              {{ t('home.section3Desc') }}
            </p>

            <ul class="space-y-3.5 pt-2">
              <li class="flex items-center gap-3 text-sm text-white font-medium">
                <span class="w-5 h-5 rounded-full bg-[#18b8ea]/20 text-[#18b8ea] flex items-center justify-center text-xs font-bold shadow-[0_0_10px_rgba(24,184,234,0.3)]">&check;</span>
                <span>{{ t('home.feature1') }}</span>
              </li>
              <li class="flex items-center gap-3 text-sm text-white font-medium">
                <span class="w-5 h-5 rounded-full bg-[#18b8ea]/20 text-[#18b8ea] flex items-center justify-center text-xs font-bold shadow-[0_0_10px_rgba(24,184,234,0.3)]">&check;</span>
                <span>{{ t('home.feature2') }}</span>
              </li>
              <li class="flex items-center gap-3 text-sm text-white font-medium">
                <span class="w-5 h-5 rounded-full bg-[#18b8ea]/20 text-[#18b8ea] flex items-center justify-center text-xs font-bold shadow-[0_0_10px_rgba(24,184,234,0.3)]">&check;</span>
                <span>{{ t('home.feature3') }}</span>
              </li>
            </ul>

            <div class="pt-4">
              <NuxtLink
                to="/solutions"
                class="btn-geo-primary"
              >
                {{ t('home.discoverCta') }}
              </NuxtLink>
            </div>
          </div>

          <!-- Right Column: High-Tech Mockup of TerraPulse-AI Dashboard -->
          <div class="lg:col-span-6">
            <div class="rounded-3xl bg-gradient-to-b from-[#092338] to-[#051624] border border-[#18b8ea]/35 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(24,184,234,0.15)] overflow-hidden">
              <!-- Window Top Bar -->
              <div class="px-5 py-3.5 bg-[#020b14] border-b border-white/10 flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  <span class="text-xs font-mono text-[#94a3b8] ml-2">terrapulse.tgi.id/dashboard/pit-04</span>
                </div>
                <span class="text-[10px] font-mono font-bold text-[#18b8ea] bg-[#18b8ea]/10 border border-[#18b8ea]/30 px-2.5 py-0.5 rounded-full">CONNECTED</span>
              </div>

              <!-- Dashboard Body -->
              <div class="p-6 space-y-4">
                <!-- Top Status Bar -->
                <div class="grid grid-cols-3 gap-3 text-center">
                  <div class="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span class="block text-[10px] font-mono text-[#64748b]">ACTIVE SENSORS</span>
                    <span class="text-lg font-bold text-white">48 / 48</span>
                  </div>
                  <div class="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span class="block text-[10px] font-mono text-[#64748b]">MAX VELOCITY</span>
                    <span class="text-lg font-bold text-[#18b8ea]">0.8 mm/h</span>
                  </div>
                  <div class="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span class="block text-[10px] font-mono text-[#64748b]">ALERT LEVEL</span>
                    <span class="text-lg font-bold text-emerald-400">NORMAL</span>
                  </div>
                </div>

                <!-- Heatmap / Vector Display Simulation -->
                <div class="h-48 rounded-xl bg-[#020810] border border-white/5 relative p-4 flex flex-col justify-between overflow-hidden">
                  <div class="absolute inset-0 bg-[radial-gradient(#18b8ea_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-25"></div>
                  <!-- Heatmap contour glow -->
                  <div class="absolute top-1/3 left-1/3 w-32 h-32 bg-[#18b8ea]/20 rounded-full blur-xl"></div>
                  <div class="absolute top-1/2 right-1/4 w-20 h-20 bg-sky-400/20 rounded-full blur-lg"></div>

                  <div class="relative z-10 flex justify-between items-center text-[11px] font-mono text-[#94a3b8]">
                    <span>RADAR SCAN: SECTOR B3</span>
                    <span class="text-[#18b8ea]">AZ: 142&deg; | EL: -12&deg;</span>
                  </div>

                  <!-- Waveform -->
                  <div class="relative z-10">
                    <div class="h-12 w-full flex items-end gap-1">
                      <div v-for="(h, i) in [20, 35, 45, 30, 60, 80, 50, 40, 70, 90, 65, 45, 30, 55, 40, 25, 35, 60, 45, 20]" :key="i"
                        class="flex-1 bg-[#18b8ea]/75 rounded-t-sm"
                        :style="{ height: `${h}%` }"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ─── SECTION 04: OUR MANAGEMENT (HOME SUMMARY) ──────────────────── -->
    <section class="py-20 lg:py-24 border-t border-white/5 bg-[#020b14] relative overflow-hidden">
      <!-- Glow ambient background -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#18b8ea]/6 rounded-full blur-[140px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        <!-- Header Row -->
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div class="max-w-2xl space-y-2">
            <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#18b8ea] font-semibold">{{ t('management.tag') }}</p>
            <h2 class="font-display font-bold text-3xl sm:text-4xl text-white">
              {{ t('management.title') }}
            </h2>
            <p class="font-body text-[#94a3b8] text-xs sm:text-sm font-light leading-relaxed">
              {{ t('management.subtitle') }}
            </p>
          </div>
          <NuxtLink
            to="/company"
            class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-ui font-bold text-[#18b8ea] hover:text-[#38cbf8] transition-colors tracking-wide flex-shrink-0"
          >
            <span>{{ t('management.viewAll') }}</span>
            <span>&rarr;</span>
          </NuxtLink>
        </div>

        <!-- 3 Management Members Summary Grid -->
        <div class="grid sm:grid-cols-3 gap-6 lg:gap-8">
          <div
            v-for="(member, idx) in managementList"
            :key="idx"
            class="rounded-3xl geo-card border border-white/10 p-5 sm:p-6 flex flex-col justify-between group hover:border-[#18b8ea]/60 transition-all duration-300 hover:shadow-[0_15px_35px_rgba(24,184,234,0.1)] hover:-translate-y-1"
          >
            <!-- Member Visual / Portrait Frame -->
            <div class="w-full aspect-[4/5] rounded-2xl bg-[#030d17] border border-white/10 overflow-hidden relative mb-5 flex flex-col items-center justify-center group-hover:border-[#18b8ea]/40 transition-colors">
              <img
                v-if="member.img"
                :src="member.img"
                :alt="member.name"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                :class="member.imgPosition || 'object-center'"
              />
              <div v-if="member.img" class="absolute inset-0 bg-gradient-to-t from-[#030d17]/50 via-transparent to-transparent pointer-events-none"></div>
              <div v-else class="flex flex-col items-center justify-center p-6 text-center space-y-3">
                <div class="w-20 h-20 rounded-full bg-[#18b8ea]/10 border border-[#18b8ea]/25 text-[#18b8ea] flex items-center justify-center shadow-[0_0_20px_rgba(24,184,234,0.15)] group-hover:scale-110 transition-transform">
                  <svg class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <div class="space-y-1">
                  <span class="font-mono text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#94a3b8] block">
                    Official Portrait
                  </span>
                  <span class="font-ui text-[11px] text-[#64748b] block">
                    {{ member.dept }}
                  </span>
                </div>
              </div>

              <!-- Top Index Pill -->
              <span class="absolute top-3 right-3 font-mono text-[9px] tracking-wider uppercase font-semibold px-2 py-0.5 rounded-full bg-[#030d17]/85 backdrop-blur-md border border-white/10 text-[#18b8ea]">
                0{{ idx + 1 }}
              </span>
            </div>

            <!-- Member Info: Role and Name (Dept removed, tuned to 1 single line) -->
            <div class="space-y-1.5 pt-1">
              <span class="block font-mono text-[11px] sm:text-xs uppercase tracking-[0.14em] text-[#18b8ea] font-bold truncate">
                {{ member.role }}
              </span>
              <h3 class="font-display font-bold text-base sm:text-[17px] xl:text-lg text-white group-hover:text-[#18b8ea] transition-colors tracking-tight whitespace-nowrap truncate">
                {{ member.name }}
              </h3>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ─── PRE-FOOTER BANNER (PAGE 1 HI-FI) ───────────────────────────── -->
    <section class="py-16 bg-[#030d17] border-t border-white/5">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="p-8 sm:p-12 rounded-3xl geo-banner flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="space-y-2 text-center md:text-left">
            <h3 class="font-display font-bold text-2xl sm:text-3xl text-white">
              {{ t('home.bannerTitle') }}
            </h3>
            <p class="font-body text-[#94a3b8] text-sm sm:text-base font-light">
              {{ t('home.bannerDesc') }}
            </p>
          </div>
          <NuxtLink
            to="/contact"
            class="flex-shrink-0 btn-geo-white"
          >
            {{ t('home.bannerCta') }}
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useLanguage } from '~/composables/useLanguage'

const { t, locale, loc, locSpecs } = useLanguage()

const { data: productsData } = await useAsyncData('home-products', () => $fetch('/api/products').catch(() => []))

// ─── 3D CARD FLIP STATE & TOGGLE ──────────────────────────────────────────
const flippedCards = ref<Record<string, boolean>>({})

const toggleFlip = (id: string) => {
  if (!id) return
  flippedCards.value[id] = !flippedCards.value[id]
}

const isFlipped = (id: string) => {
  return !!flippedCards.value[id]
}

// ─── SLIDING CAROUSEL CONTROLS & ACTIVE INDEX ─────────────────────────────
const productSliderRef = ref<HTMLElement | null>(null)
const activeSlideIndex = ref(0)

const slideProducts = (direction: 'prev' | 'next') => {
  if (!productSliderRef.value) return
  const container = productSliderRef.value
  const card = container.querySelector('.product-flip-card') as HTMLElement
  const scrollStep = card ? card.offsetWidth + 24 : 380

  container.scrollBy({
    left: direction === 'prev' ? -scrollStep : scrollStep,
    behavior: 'smooth'
  })
}

const handleSliderScroll = () => {
  if (!productSliderRef.value) return
  const container = productSliderRef.value
  const card = container.querySelector('.product-flip-card') as HTMLElement
  const scrollStep = card ? card.offsetWidth + 24 : 380
  const index = Math.round(container.scrollLeft / scrollStep)
  activeSlideIndex.value = Math.max(0, Math.min(index, homeProducts.value.length - 1))
}

const homeProducts = computed(() => {
  if (!Array.isArray(productsData.value) || productsData.value.length === 0) return []
  const list = productsData.value.filter((p: any) => {
    const s = `${p.id || ''} ${p.code || ''} ${p.name || ''} ${p.img || ''}`.toLowerCase()
    return !s.includes('sv600') && !s.includes('solutions-marine')
  })

  // Priority: 1. Radar MS-SAR5000, 2. N2 Palm, 3. T20 GNSS, 4. Mars Laser RTK
  list.sort((a: any, b: any) => {
    const score = (item: any) => {
      const txt = `${item.name || ''} ${item.code || ''} ${item.id || ''}`.toLowerCase()
      if (txt.includes('sar5000') || txt.includes('radar')) return 10
      if (txt.includes('n2') || txt.includes('palm')) return 9
      if (txt.includes('t20')) return 8
      if (txt.includes('mars')) return 7
      return 1
    }
    return score(b) - score(a)
  })

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

const managementList = computed(() => [
  {
    name: t('management.member1Name'),
    role: t('management.member1Role'),
    dept: t('management.member1Dept'),
    img: '/images/Rifqi.jpg',
    imgPosition: 'object-center'
  },
  {
    name: t('management.member2Name'),
    role: t('management.member2Role'),
    dept: t('management.member2Dept'),
    img: '/images/Lyque.jpg',
    imgPosition: 'object-top'
  },
  {
    name: t('management.member3Name'),
    role: t('management.member3Role'),
    dept: t('management.member3Dept'),
    img: '/images/Tin.jpg',
    imgPosition: 'object-center'
  }
])

useHead({
  title: 'Terrabyte Geosystem Indonesia — Where Earth Meets Intelligence',
  meta: [
    {
      name: 'description',
      content: 'Terrabyte Geosystem Indonesia combines precision survey and monitoring technology with AI analytics, turning earth data into clear, timely decisions.'
    }
  ]
})
</script>
