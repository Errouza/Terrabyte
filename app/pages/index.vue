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

          <!-- Right Column: Live Telemetry Widget Card -->
          <div class="lg:col-span-5">
            <div class="rounded-3xl p-6 sm:p-8 bg-[#061c2c]/85 border border-[#18b8ea]/30 shadow-[0_24px_60px_rgba(0,0,0,0.8),0_0_35px_rgba(24,184,234,0.15)] relative overflow-hidden backdrop-blur-xl">
              <!-- Top Header -->
              <div class="flex items-center justify-between pb-4">
                <span class="font-mono text-xs font-semibold text-[#8da2b5] tracking-[0.2em] uppercase">{{ t('home.telemetryTag') }}</span>
                <div class="flex items-center gap-1.5 text-[#cbd5e1] text-xs font-mono font-medium">
                  <span class="w-2 h-2 rounded-full bg-[#18b8ea] shadow-[0_0_8px_#18b8ea] animate-pulse"></span>
                  <span>{{ t('home.telemetryStatus') }}</span>
                </div>
              </div>

              <!-- Widget Title -->
              <h3 class="font-display font-bold text-xl sm:text-2xl text-white mb-6">
                {{ t('home.telemetryTitle') }}
              </h3>

              <!-- Dynamic Chart Canvas / Vector Graphic -->
              <div class="relative h-44 w-full rounded-xl p-2 overflow-hidden flex flex-col justify-end">
                <!-- Background Grid Lines -->
                <div class="absolute inset-0 flex flex-col justify-between py-4 opacity-20 pointer-events-none">
                  <div class="w-full border-b border-[#18b8ea]/40"></div>
                  <div class="w-full border-b border-[#18b8ea]/40"></div>
                  <div class="w-full border-b border-[#18b8ea]/40"></div>
                </div>

                <!-- SVG Exponential Curve matching Figma screenshot -->
                <svg class="w-full h-full overflow-visible" viewBox="0 0 300 120" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="blueCurveGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stop-color="#18b8ea" stop-opacity="0.35" />
                      <stop offset="100%" stop-color="#18b8ea" stop-opacity="0.0" />
                    </linearGradient>
                    <filter id="blueGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3.5" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  <path
                    d="M0,90 Q90,88 160,80 T240,55 T300,18 L300,120 L0,120 Z"
                    fill="url(#blueCurveGradient)"
                  />
                  <path
                    d="M0,90 Q90,88 160,80 T240,55 T300,18"
                    fill="none"
                    stroke="#18b8ea"
                    stroke-width="3"
                    stroke-linecap="round"
                    filter="url(#blueGlow)"
                  />
                  <!-- Animated endpoint beacon -->
                  <circle cx="300" cy="18" r="4.5" fill="#18b8ea" />
                  <circle cx="300" cy="18" r="10" fill="#18b8ea" opacity="0.3" class="animate-ping" />
                </svg>
              </div>

              <!-- Bottom Status Indicators -->
              <div class="grid grid-cols-2 gap-4 mt-6 pt-4">
                <div class="p-3.5 rounded-2xl bg-[#041422]/70 border border-white/10">
                  <span class="block text-[10px] uppercase font-mono tracking-widest text-[#64748b] font-semibold mb-1">{{ t('home.sensorLabel') }}</span>
                  <span class="text-sm font-semibold text-white">{{ t('home.sensorVal') }}</span>
                </div>
                <div class="p-3.5 rounded-2xl bg-[#041422]/70 border border-white/10">
                  <span class="block text-[10px] uppercase font-mono tracking-widest text-[#64748b] font-semibold mb-1">{{ t('home.statusLabel') }}</span>
                  <span class="text-sm font-semibold text-[#18b8ea] flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#18b8ea]"></span>
                    <span>{{ t('home.statusVal') }}</span>
                  </span>
                </div>
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
    <section class="py-20 lg:py-28 border-t border-white/5 relative bg-[#030d17]">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">

        <!-- Header Row -->
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#18b8ea] font-semibold mb-2">{{ t('home.section2Tag') }}</p>
            <h2 class="font-display font-bold text-3xl sm:text-4xl text-white">
              {{ t('home.section2Title') }}
            </h2>
          </div>
          <NuxtLink
            to="/products"
            class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-ui font-bold text-[#18b8ea] hover:text-[#38cbf8] transition-colors tracking-wide"
          >
            <span>{{ t('home.allProducts') }}</span>
            <span>&rarr;</span>
          </NuxtLink>
        </div>

        <!-- 3 Product Cards Grid -->
        <div class="grid md:grid-cols-3 gap-6">

          <!-- Product 1: MS-SAR5000 -->
          <NuxtLink to="/products" class="group rounded-3xl geo-card overflow-hidden transition-all duration-300 flex flex-col">
            <div class="h-60 bg-[#020b14] flex items-center justify-center p-6 relative overflow-hidden border-b border-white/5">
              <img
                src="/images/uploads/1790323048828-sar5000.png"
                alt="MS-SAR5000 Slope Monitoring Radar"
                class="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <span class="absolute top-4 left-4 font-mono text-[9px] uppercase px-2.5 py-0.5 rounded-full bg-black/60 text-[#94a3b8] border border-white/10">RADAR</span>
            </div>
            <div class="p-7 flex-1 flex flex-col justify-between">
              <div>
                <span class="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#18b8ea] font-semibold mb-1.5">{{ t('home.radarTag') }}</span>
                <h3 class="font-display font-bold text-lg text-white mb-2 group-hover:text-[#18b8ea] transition-colors">
                  {{ t('home.radarTitle') }}
                </h3>
                <p class="font-body text-xs text-[#94a3b8] leading-relaxed font-light">
                  {{ t('home.radarDesc') }}
                </p>
              </div>
            </div>
          </NuxtLink>

          <!-- Product 2: ComNav GNSS Receivers -->
          <NuxtLink to="/products" class="group rounded-3xl geo-card overflow-hidden transition-all duration-300 flex flex-col">
            <div class="h-60 bg-[#020b14] flex items-center justify-center p-6 relative overflow-hidden border-b border-white/5">
              <img
                src="/images/uploads/1790317569779-n2.png"
                alt="ComNav GNSS Receiver"
                class="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <span class="absolute top-4 left-4 font-mono text-[9px] uppercase px-2.5 py-0.5 rounded-full bg-black/60 text-[#94a3b8] border border-white/10">GNSS</span>
            </div>
            <div class="p-7 flex-1 flex flex-col justify-between">
              <div>
                <span class="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#18b8ea] font-semibold mb-1.5">{{ t('home.gnssTag') }}</span>
                <h3 class="font-display font-bold text-lg text-white mb-2 group-hover:text-[#18b8ea] transition-colors">
                  {{ t('home.gnssTitle') }}
                </h3>
                <p class="font-body text-xs text-[#94a3b8] leading-relaxed font-light">
                  {{ t('home.gnssDesc') }}
                </p>
              </div>
            </div>
          </NuxtLink>

          <!-- Product 3: SV600 USV -->
          <NuxtLink to="/products" class="group rounded-3xl geo-card overflow-hidden transition-all duration-300 flex flex-col">
            <div class="h-60 bg-[#020b14] flex items-center justify-center p-6 relative overflow-hidden border-b border-white/5">
              <img
                src="/images/solutions-marine.jpg"
                alt="SV600 USV"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85"
              />
              <span class="absolute top-4 left-4 font-mono text-[9px] uppercase px-2.5 py-0.5 rounded-full bg-black/60 text-[#94a3b8] border border-white/10">SURVEY VESSEL</span>
            </div>
            <div class="p-7 flex-1 flex flex-col justify-between">
              <div>
                <span class="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#18b8ea] font-semibold mb-1.5">{{ t('home.marineTag') }}</span>
                <h3 class="font-display font-bold text-lg text-white mb-2 group-hover:text-[#18b8ea] transition-colors">
                  {{ t('home.marineTitle') }}
                </h3>
                <p class="font-body text-xs text-[#94a3b8] leading-relaxed font-light">
                  {{ t('home.marineDesc') }}
                </p>
              </div>
            </div>
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

    <!-- ─── PRE-FOOTER BANNER (PAGE 1 HI-FI) ───────────────────────────── -->
    <section class="py-16 bg-[#030d17]">
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
import { useLanguage } from '~/composables/useLanguage'

const { t } = useLanguage()

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
