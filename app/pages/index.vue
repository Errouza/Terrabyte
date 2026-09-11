<template>
  <div>
    <!-- ─── HERO SECTION ──────────────────────────────────────────────── -->
    <section class="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      <!-- ─── DYNAMIC ROTATING HERO BACKGROUND (Cross-fades every 5s) ─── -->
      <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          v-for="(slide, idx) in heroSlides"
          :key="slide.image"
          class="absolute inset-0 transition-all duration-1000 ease-in-out"
          :class="idx === currentSlide ? 'opacity-40 scale-100' : 'opacity-0 scale-105 pointer-events-none'"
        >
          <img
            :src="slide.image"
            :alt="slide.alt"
            class="w-full h-full object-cover object-center filter contrast-115 brightness-90"
          />
        </div>

        <!-- Solid Palette Overlays: Seamless blend into #061219 solid base -->
        <div class="absolute inset-0 bg-gradient-to-t from-[#001224] via-[#001224]/85 to-[#001224]/45"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-[#001224] via-[#001224]/88 to-transparent"></div>
        <div class="absolute inset-0 dot-grid opacity-20"></div>

        <!-- Ambient Glow Elements -->
        <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[750px] h-[500px] bg-[#00d1b2]/15 rounded-full blur-[140px]"></div>
        <div class="absolute bottom-10 right-10 w-[400px] h-[300px] bg-[#3B82F6]/10 rounded-full blur-[120px]"></div>
      </div>

      <div class="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-10">
        <div class="max-w-3.5xl">
          <!-- Live Telemetry Status Pill & Slide Indicator -->
          <div class="flex flex-wrap items-center gap-3 mb-8">
            <div class="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full mica-pill px-3.5 py-1.5 rounded-full border border-[#00d1b2]/40 text-[#00d1b2] text-xs font-mono tracking-wider shadow-[0_0_20px_rgba(0,209,178,0.18)]">
              <span class="w-2 h-2 rounded-full bg-[#00d1b2] animate-ping"></span>
              <span class="w-2 h-2 rounded-full bg-[#00d1b2] -ml-4"></span>
              <span class="text-xs font-mono tracking-widest text-[#00E5FF] uppercase font-bold">
                [STATUS SISTEM // Live Telemetry / Nama Sektor]
              </span>
            </div>

            <!-- Slide Switcher Dots -->
            <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-full mica-pill border border-white/12">
              <button
                v-for="(s, idx) in heroSlides"
                :key="s.image"
                @click="currentSlide = idx"
                class="w-2 h-2 rounded-full transition-all duration-300"
                :class="idx === currentSlide ? 'w-6 bg-[#00d1b2] shadow-[0_0_8px_rgba(0,209,178,0.8)]' : 'bg-white/25 hover:bg-white/50'"
                :aria-label="'Switch to slide ' + (idx + 1)"
              ></button>
            </div>
          </div>

          <!-- Hero Headline with Radiant High-Impact Neon Accents -->
          <h1 class="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-wide text-white leading-[1.1] mb-6">
            [INI UNTUK JUDUL UTAMA // VALUE PROPOSITION]<br>
            [DAN SPESIALISASI TEKNOLOGI]<br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00d1b2] via-[#5ce6d4] to-[#60A5FA] neon-text">
              [SOLUSI OPERASIONAL KRITIS]
            </span>
          </h1>

          <!-- Subtitle -->
          <p class="font-body font-light text-base sm:text-lg text-[#9db4c8] leading-relaxed max-w-2xl mb-10">
            [Ini bisa diisi ringkasan positioning perusahaan: fokus teknologi navigasi satelit GNSS, radar pengawas solid-state, dan ketahanan perangkat di medan operasional kepulauan Indonesia].
          </p>

          <!-- CTAs -->
          <div class="flex flex-wrap gap-4 items-center mb-16">
            <NuxtLink
              to="/products"
              class="btn-primary flex items-center gap-2 group"
            >
              <span>[Ini Tombol: Katalog Produk]</span>
              <span class="text-base group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200">↗</span>
            </NuxtLink>
            <NuxtLink
              to="/solutions"
              class="btn-secondary flex items-center gap-2 group"
            >
              <span>[Ini Tombol: Konsultasi Solusi]</span>
              <span class="text-base group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200 text-[#00d1b2]">↗</span>
            </NuxtLink>
          </div>

          <!-- 4-Stat Metric Grid -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-white/10">
            <div
              v-for="stat in heroStats"
              :key="stat.label"
              class="space-y-1"
            >
              <div class="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                {{ stat.value }}
              </div>
              <div class="font-ui text-xs text-[#00d1b2] uppercase tracking-widest font-semibold">
                {{ stat.label }}
              </div>
              <div class="font-ui text-[11px] text-[#6c889f]">
                {{ stat.sub }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── THE TACTICAL SURVEILLANCE CHALLENGE (DTG mc-rail pattern) ─────── -->
    <section class="py-24 relative overflow-hidden border-t border-white/10 bg-[#001224] border-t border-white/10">
      <!-- Subtle background radar rings & ambient glow -->
      <div class="absolute inset-0 dot-grid opacity-20 pointer-events-none"></div>
      <div class="absolute -top-24 right-1/4 w-[500px] h-[350px] bg-[#00d1b2]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <!-- Header Section with Eyebrow Rule -->
        <div class="max-w-3xl mb-14">
          <div class="flex items-center space-x-3 mb-4">
            <div class="w-8 h-[2px] bg-[#00d1b2]"></div>
            <span class="font-mono text-xs font-bold tracking-[0.2em] uppercase text-[#00d1b2]">
              The Tactical Surveillance Challenge
            </span>
          </div>
          <h2 class="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] text-white tracking-tight leading-[1.2] mb-5">
            [INI UNTUK JUDUL: TANTANGAN MEDAN & INTEGRASI SENSOR]
          </h2>
          <p class="font-body font-light text-base sm:text-lg text-[#9db4c8] leading-relaxed">
            Modern operational theatres are saturated with disparate feeds. What is missing is the sovereign neural layer that unifies fragmented sensors into one verifiable truth state — defended, auditable, and actionable in milliseconds.
          </p>
        </div>

        <!-- 4-Step Progressive Rail -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Step 01 -->
          <div class="p-7 rounded-2xl mica-card flex flex-col justify-between group">
            <div>
              <span class="font-mono text-xs font-bold tracking-widest text-[#6c889f] block mb-4 group-hover:text-white transition-colors">
                // 01
              </span>
              <h3 class="font-display font-bold text-lg text-white mb-2">
                [Tahap 01: Banyak Perangkat]
              </h3>
              <p class="font-body font-light text-sm text-[#9db4c8] leading-relaxed mb-4">
                [Ini bisa diisi kondisi lapangan saat ini: radar, GNSS RTK, sensor optik, dan instrumen dari beragam vendor yang belum terintegrasi].
              </p>
            </div>
            <div class="flex flex-wrap gap-1 pt-3 border-t border-white/5">
              <span class="text-[9px] font-mono tracking-wider px-1.5 py-0.5 rounded bg-white/5 text-[#7c95a8]">RADAR</span>
              <span class="text-[9px] font-mono tracking-wider px-1.5 py-0.5 rounded bg-white/5 text-[#7c95a8]">GNSS</span>
              <span class="text-[9px] font-mono tracking-wider px-1.5 py-0.5 rounded bg-white/5 text-[#7c95a8]">EO/IR</span>
            </div>
          </div>

          <!-- Step 02 -->
          <div class="p-7 rounded-2xl mica-card flex flex-col justify-between group">
            <div>
              <span class="font-mono text-xs font-bold tracking-widest text-[#6c889f] block mb-4 group-hover:text-white transition-colors">
                // 02
              </span>
              <h3 class="font-display font-bold text-lg text-white mb-2">
                [Tahap 02: Data Terfragmentasi]
              </h3>
              <p class="font-body font-light text-sm text-[#9db4c8] leading-relaxed mb-4">
                [Ini bisa diisi masalah yang timbul: delay transmisi, format data tidak seragam, dan kesulitan validasi saat insiden kritis].
              </p>
            </div>
            <div class="flex flex-wrap gap-1 pt-3 border-t border-white/5">
              <span class="text-[9px] font-mono tracking-wider px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300">TELEMETRY LAG</span>
              <span class="text-[9px] font-mono tracking-wider px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300">SILOED DATA</span>
            </div>
          </div>

          <!-- Step 03 (Highlighted DTG-style core step) -->
          <div class="p-7 rounded-2xl bg-gradient-to-b from-[#001f3f]/90 to-[#001428]/95 border border-[#00d1b2]/70 shadow-[0_0_30px_rgba(0,209,178,0.25)] flex flex-col justify-between relative overflow-hidden group">
            <div class="absolute top-0 right-0 w-24 h-24 bg-[#00d1b2]/20 rounded-full blur-xl pointer-events-none"></div>
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="font-mono text-xs font-bold tracking-widest text-[#00d1b2]">
                  // 03 [SOVEREIGN]
                </span>
                <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-[#00d1b2] text-[#001f3f]">
                  Terrabyte
                </span>
              </div>
              <h3 class="font-display font-bold text-lg text-white mb-2">
                [Tahap 03: Integrasi Solusi Terrabyte]
              </h3>
              <p class="font-body font-light text-sm text-[#d4f3ed] leading-relaxed mb-4">
                [Ini bisa diisi keunggulan modul Terrabyte: menyatukan seluruh sinyal sensor secara real-time ke dalam satu dashboard operasional].
              </p>
            </div>
            <div class="flex flex-wrap gap-1 pt-3 border-t border-[#00d1b2]/30">
              <span class="text-[9px] font-mono tracking-wider px-1.5 py-0.5 rounded bg-[#00d1b2]/20 text-[#00d1b2] font-semibold">AIR-GAPPED C2</span>
              <span class="text-[9px] font-mono tracking-wider px-1.5 py-0.5 rounded bg-[#00d1b2]/20 text-[#00d1b2] font-semibold">&lt; 5MS LATENCY</span>
            </div>
          </div>

          <!-- Step 04 -->
          <div class="p-7 rounded-2xl mica-card flex flex-col justify-between group">
            <div>
              <span class="font-mono text-xs font-bold tracking-widest text-[#6c889f] block mb-4 group-hover:text-white transition-colors">
                // 04
              </span>
              <h3 class="font-display font-bold text-lg text-white mb-2">
                [Tahap 04: Keputusan Cepat & Tepat]
              </h3>
              <p class="font-body font-light text-sm text-[#9db4c8] leading-relaxed mb-4">
                [Ini bisa diisi hasil akhir untuk pengguna: pemantauan terpadu, peringatan dini instan, dan data terverifikasi untuk audit].
              </p>
            </div>
            <div class="flex flex-wrap gap-1 pt-3 border-t border-white/5">
              <span class="text-[9px] font-mono tracking-wider px-1.5 py-0.5 rounded bg-[#00d1b2]/10 text-[#00d1b2]">VERIFIED RECORD</span>
              <span class="text-[9px] font-mono tracking-wider px-1.5 py-0.5 rounded bg-[#00d1b2]/10 text-[#00d1b2]">DECISIVE C2</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 4 CORE PILLARS (Tactical Glass Cards) ───────────────────────── -->
    <section class="py-24 relative z-10 border-t border-white/10">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="max-w-2xl mb-16">
          <p class="section-label mb-3">[NILAI UTAMA // Prinsip Rekayasa]</p>
          <h2 class="font-display font-bold text-3xl sm:text-4xl text-white tracking-wide">
            [INI UNTUK JUDUL: 4 PILAR KEUNGGULAN SISTEM TERRABYTE]
          </h2>
          <p class="font-body font-light text-sm sm:text-base text-[#9db4c8] mt-3">
            Engineered from fundamental physics to sovereign operational deployment with zero third-party cloud lock-in.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="pillar in pillars"
            :key="pillar.title"
            class="neon-card p-7 flex flex-col justify-between group cursor-default relative overflow-hidden"
          >
            <!-- Glowing top accent gradient line -->
            <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00d1b2] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div>
              <div class="flex items-center justify-between mb-6">
                <div class="w-12 h-12 rounded-xl bg-[#00d1b2]/10 border border-[#00d1b2]/30 flex items-center justify-center text-[#00d1b2] group-hover:scale-110 group-hover:border-[#00d1b2] transition-all duration-300">
                  <component :is="pillar.icon" class="w-6 h-6" />
                </div>
                <span class="font-mono text-[10px] text-[#00d1b2] bg-[#00d1b2]/10 border border-[#00d1b2]/30 px-2 py-0.5 rounded tracking-widest uppercase">
                  {{ pillar.tag }}
                </span>
              </div>

              <h3 class="font-display font-bold text-lg text-white mb-3 group-hover:text-cyan-100 transition-colors">
                {{ pillar.title }}
              </h3>
              <p class="font-body font-light text-sm leading-relaxed text-[#9db4c8]">
                {{ pillar.description }}
              </p>
            </div>

            <div class="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#6c889f] font-mono">
              <span>SECURITY TIER 1</span>
              <span class="text-[#00d1b2] opacity-0 group-hover:opacity-100 transition-opacity">ENGAGE →</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── MULTI-LAYER ARCHITECTURE CONSOLE ──────────────────────────── -->
    <section class="py-24 bg-[#00172e] border-t border-white/10 relative border-t border-white/10">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="max-w-2xl mb-16">
          <p class="section-label mb-3">System Blueprint</p>
          <h2 class="font-display font-bold text-3xl sm:text-4xl text-white tracking-wide">
            [INI UNTUK JUDUL: INTEGRASI ARSITEKTUR MULTI-LAYER]
          </h2>
          <p class="font-body font-light text-sm sm:text-base text-[#9db4c8] mt-3">
            From raw RF carrier phase capture to multi-sensor fusion and national C2 distribution.
          </p>
        </div>

        <div class="grid lg:grid-cols-12 gap-8 items-start">
          <!-- Left Layer Selector (Interactive Tabs) -->
          <div class="lg:col-span-5 space-y-3">
            <button
              v-for="(layer, idx) in architectureLayers"
              :key="layer.id"
              @click="activeLayerIndex = idx"
              :class="[
                'w-full text-left p-5 rounded-xl transition-all duration-300 border flex items-center justify-between',
                activeLayerIndex === idx
                  ? 'bg-[#00d1b2]/10 border-[#00d1b2] shadow-[0_0_20px_rgba(0,209,178,0.2)]'
                  : 'bg-[#07253d]/50 border-white/10 hover:border-white/20 text-[#9db4c8] hover:text-white'
              ]"
            >
              <div class="flex items-center space-x-3.5">
                <span class="font-mono text-xs text-[#00d1b2] font-bold">0{{ idx + 1 }}</span>
                <div>
                  <div class="font-display font-bold text-sm text-white">{{ layer.title }}</div>
                  <div class="font-ui text-[11px] text-[#6c889f] uppercase tracking-wider">{{ layer.badge }}</div>
                </div>
              </div>
              <span class="font-mono text-xs text-[#00d1b2]">{{ activeLayerIndex === idx ? '● LIVE' : '○' }}</span>
            </button>
          </div>

          <!-- Right Telemetry Terminal (HUD Showcase) -->
          <div class="lg:col-span-7 bg-[#07253d]/80 rounded-2xl p-8 border border-[#00d1b2]/30 shadow-[0_0_30px_rgba(0,209,178,0.15)] relative overflow-hidden backdrop-blur-md">
            <div class="flex items-center justify-between pb-6 mb-6 border-b border-white/10 font-mono text-xs">
              <span class="text-[#00d1b2] flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-[#00d1b2] animate-pulse"></span>
                ACTIVE TELEMETRY HUD // {{ currentLayer.badge }}
              </span>
              <span class="text-[#6c889f]">STATUS: OPTIMAL</span>
            </div>

            <h3 class="font-display font-bold text-2xl text-white mb-3">{{ currentLayer.heading }}</h3>
            <p class="font-body font-light text-sm text-[#9db4c8] leading-relaxed mb-8">{{ currentLayer.description }}</p>

            <div class="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div v-for="spec in currentLayer.specs" :key="spec.label" class="bg-[#051d33] p-4 rounded-lg border border-white/5">
                <div class="font-mono text-[10px] text-[#6c889f] uppercase">{{ spec.label }}</div>
                <div class="font-display font-bold text-sm text-[#00d1b2] mt-1">{{ spec.value }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── STRATEGIC MISSION PROFILES ────────────────────────────────── -->
    <section class="py-24 border-t border-white/10">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p class="section-label mb-3">[STUDI KASUS // Implementasi Nyata]</p>
            <h2 class="font-display font-bold text-3xl sm:text-4xl text-white tracking-wide">
              [INI UNTUK JUDUL: IMPLEMENTASI PADA SEKTOR KRITIS]
            </h2>
          </div>
          <NuxtLink to="/solutions" class="text-sm font-ui font-semibold text-[#00d1b2] hover:underline inline-flex items-center gap-1.5">
            [Ini Link: Lihat Semua Solusi →]
          </NuxtLink>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="mission in missions"
            :key="mission.title"
            class="neon-card rounded-2xl overflow-hidden group flex flex-col justify-between"
          >
            <div class="h-48 overflow-hidden relative">
              <img :src="mission.image" :alt="mission.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-[#07253d] via-transparent to-transparent"></div>
              <span class="absolute top-4 left-4 bg-[#07253d]/90 backdrop-blur-md border border-[#00d1b2]/40 text-[#00d1b2] font-mono text-[10px] uppercase px-2.5 py-1 rounded">
                {{ mission.sector }}
              </span>
            </div>

            <div class="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 class="font-display font-bold text-lg text-white group-hover:text-cyan-200 transition-colors">{{ mission.title }}</h3>
                <p class="font-body font-light text-xs sm:text-sm text-[#9db4c8] mt-2.5 leading-relaxed">{{ mission.summary }}</p>
              </div>

              <div class="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px]">
                <span class="text-[#6c889f]">{{ mission.metricLabel }}</span>
                <span class="text-[#00d1b2] font-bold">{{ mission.metricValue }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── ENTERPRISE TESTIMONIALS ──────────────────────────────────── -->
    <section class="py-24 bg-[#00172e] border-t border-white/10 border-t border-white/10">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="max-w-2xl mb-16">
          <p class="section-label mb-3">[TESTIMONI // Evaluasi Klien]</p>
          <h2 class="font-display font-bold text-3xl sm:text-4xl text-white tracking-wide">
            [INI UNTUK JUDUL: ULASAN & EVALUASI MITRA STRATEGIS]
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="item in testimonials"
            :key="item.author"
            class="p-8 neon-card flex flex-col justify-between relative"
          >
            <div class="text-[#00d1b2] text-3xl font-serif mb-4">“</div>
            <p class="font-body font-light text-sm leading-relaxed text-[#9db4c8] mb-8 flex-grow">
              {{ item.quote }}
            </p>

            <div class="pt-6 border-t border-white/10 flex items-center space-x-3.5">
              <img :src="item.avatar" :alt="item.author" class="w-11 h-11 rounded-full object-cover border border-[#00d1b2]/40" />
              <div>
                <h4 class="font-display font-bold text-xs text-white">{{ item.author }}</h4>
                <p class="font-ui text-[10px] text-[#00d1b2]">{{ item.role }}</p>
                <p class="font-ui text-[10px] text-[#6c889f]">{{ item.organization }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── CALL TO ACTION BANNER ────────────────────────────────────── -->
    <section class="py-20 relative">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="p-10 md:p-14 rounded-3xl mica-panel p-10 md:p-14 rounded-3xl hover:border-[#00d1b2]/50 hover:shadow-[0_0_30px_rgba(0,209,178,0.2)] transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-8">
          <div class="max-w-2xl space-y-3">
            <h3 class="font-display font-bold text-3xl text-white">[INI UNTUK JUDUL AJAKAN: KONSULTASIKAN KEBUTUHAN SISTEM ANDA]</h3>
            <p class="text-[#9db4c8] text-base leading-relaxed">
              [Ini bisa diisi ajakan diskusi langsung dengan tim engineering kami untuk jadwal demonstrasi unit, uji coba medan, atau permintaan dokumen spesifikasi teknis].
            </p>
          </div>
          <NuxtLink to="/contact" class="btn-primary whitespace-nowrap px-8 py-4 text-sm font-bold tracking-wider">
            [Ini Tombol: Hubungi Tim Engineer →]
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

// ─── HERO DYNAMIC ROTATING BACKGROUND SLIDES (Every 5 Seconds) ───
const heroSlides = [
  {
    image: '/images/hero-bg.jpg',
    alt: 'Geospatial Radar & GNSS Constellation Network',
    title: 'Orbital & Ground Radar Net',
    tag: 'RADAR ORBITAL NET'
  },
  {
    image: '/images/hero-surveyor.jpg',
    alt: 'Field RTK Precision Geodesy Deployment',
    title: 'Sub-Millimeter Geodetic Infrastructure',
    tag: 'PRECISION GEODESY'
  },
  {
    image: '/images/solutions-defense.jpg',
    alt: 'Airspace Surveillance & Defense Radar',
    title: 'Air Defense & AESA Tracking',
    tag: 'AIRSPACE DEFENSE'
  },
  {
    image: '/images/solutions-marine.jpg',
    alt: 'Maritime Corridor & Strait Surveillance',
    title: 'Archipelagic Strait Monitoring',
    tag: 'MARITIME VTS NET'
  },
  {
    image: '/images/solutions-autonomous.jpg',
    alt: 'Autonomous UAV Sensor Fusion Operations',
    title: 'Autonomous Reconnaissance & Swarm C2',
    tag: 'AUTONOMOUS SENSORS'
  }
]

const currentSlide = ref(0)
let heroSlideTimer: any = null

onMounted(() => {
  heroSlideTimer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % heroSlides.length
  }, 5000)
})

onUnmounted(() => {
  if (heroSlideTimer) clearInterval(heroSlideTimer)
})

import { ref, computed, h } from 'vue'

useHead({
  title: 'Terrabyte Geosystems — Sovereign GNSS, Radar & Defense Technologies',
  meta: [
    {
      name: 'description',
      content: 'High-precision GNSS receivers, solid-state surveillance radar, and autonomous sensor fusion hardware designed for Indonesia sovereign defense and critical infrastructure.',
    },
  ],
})

// 1. Hero Stats
const heroStats = [
  { value: '[0.8 cm]', label: '[Metrik 1: Akurasi]', sub: '[Ini diisi stabilitas posisi RTK]' },
  { value: '[250 km]', label: '[Metrik 2: Jangkauan]', sub: '[Ini diisi radius deteksi radar]' },
  { value: '[100%]', label: '[Metrik 3: Mandiri]', sub: '[Ini diisi kepemilikan IP domestik]' },
  { value: '[15+ Thn]', label: '[Metrik 4: Pengalaman]', sub: '[Ini diisi rekam jejak implementasi]' },
]

// 2. Multi-Layer Architecture
const activeLayerIndex = ref(0)

const architectureLayers = [
  {
    id: 'sensor',
    title: '[Layer 1: Sensor & Receiver GNSS]',
    badge: 'Layer 01 // Hardware Lapangan',
    heading: '[Ini untuk Judul Modul Receiver & Sensor Lapangan]',
    description: '[Ini bisa diisi pelacakan multi-konstelasi satelit (GPS, GLONASS, Galileo, BeiDou), kestabilan sinyal, dan toleransi cuaca tropis ekstrim].',
    chips: ['[GPS L1/L2/L5]', '[GLONASS]', '[BEIDOU]', '[GALILEO]'],
    specs: [
      { label: '[Parameter 1]', value: '[1.408 Saluran]' },
      { label: '[Parameter 2]', value: '[Sub-Milimeter]' },
      { label: '[Parameter 3]', value: '[Filter Noise]' },
    ],
  },
  {
    id: 'radar',
    title: '[Layer 2: Radar Pengawas Solid-State]',
    badge: 'Layer 02 // Radar Permukaan & Udara',
    heading: '[Ini untuk Judul Radar Pengawas Permukaan & Udara]',
    description: '[Ini bisa diisi teknologi radar solid-state AESA 360°, pendeteksian target cepat, dan cakupan luas di perbatasan atau perairan maritim].',
    chips: ['[AESA S-BAND]', '[360° AZIMUTH]', '[BEAMFORMING]', '[ASTERIX]'],
    specs: [
      { label: '[Jangkauan]', value: '[Radius 250 km]' },
      { label: '[Resolusi]', value: '[0.3° Azimuth]' },
      { label: '[Kecepatan Scan]', value: '[6-12 RPM]' },
    ],
  },
  {
    id: 'fusion',
    title: '[Layer 3: Komputasi & Penyelarasan]',
    badge: 'Layer 03 // Modul Pemrosesan Data',
    heading: '[Ini untuk Judul Pemrosesan & Sinkronisasi Sinyal]',
    description: '[Ini bisa diisi penggabungan data akselerasi IMU, koordinat satelit, dan plot radar menjadi satu jalur data operasional akurat].',
    chips: ['[FPGA REALTIME]', '[KALMAN FILTER]', '[IMU SENSOR]', '[PVT RECON]'],
    specs: [
      { label: '[Latensi Komputasi]', value: '[< 5 milidetik]' },
      { label: '[Drift Sinyal]', value: '[Sangat Rendah]' },
      { label: '[Redundansi]', value: '[Dual Fail-Safe]' },
    ],
  },
  {
    id: 'command',
    title: '[Layer 4: Platform Taktis C2]',
    badge: 'Layer 04 // Software Kendali & Dashboard',
    heading: '[Ini untuk Judul Software Kendali & Dashboard Monitoring]',
    description: '[Ini bisa diisi visualisasi peta real-time, penentuan zona aman (geofencing), dan peringatan tabrakan otomatis tanpa ketergantungan cloud luar].',
    chips: ['[AIR-GAPPED C2]', '[PETA TAKTIS]', '[GEOFENCING]', '[DATA ENKRIPSI]'],
    specs: [
      { label: '[Kapasitas Target]', value: '[> 10.000 Objek]' },
      { label: '[Tipe Sistem]', value: '[On-Premise / Web]' },
      { label: '[Standar Keamanan]', value: '[Terkunci & Aman]' },
    ],
  },
]

const currentLayer = computed(() => architectureLayers[activeLayerIndex.value])

// 3. Core Pillars Icons
const ShieldIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', strokeWidth: '1.5', viewBox: '0 0 24 24' }, [
    h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' }),
  ])

const OrbitIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', strokeWidth: '1.5', viewBox: '0 0 24 24' }, [
    h('circle', { cx: '12', cy: '12', r: '3' }),
    h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M19.07 4.93a10 10 0 010 14.14M4.93 19.07a10 10 0 010-14.14' }),
  ])

const CpuIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', strokeWidth: '1.5', viewBox: '0 0 24 24' }, [
    h('rect', { x: '4', y: '4', width: '16', height: '16', rx: '2' }),
    h('rect', { x: '9', y: '9', width: '6', height: '6' }),
    h('path', { d: 'M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3' }),
  ])

const LockIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', strokeWidth: '1.5', viewBox: '0 0 24 24' }, [
    h('rect', { x: '3', y: '11', width: '18', height: '11', rx: '2' }),
    h('path', { d: 'M7 11V7a5 5 0 0110 0v4' }),
  ])

const pillars = [
  {
    icon: ShieldIcon,
    title: '[Pilar 1: Proteksi Anti-Jamming]',
    description: '[Ini bisa diisi proteksi sinyal dari gangguan frekuensi, cuaca ekstrem tropis, dan interferensi gelombang liar].',
    tag: '[Proteksi Sinyal]',
  },
  {
    icon: OrbitIcon,
    title: '[Pilar 2: Presisi Sub-Milimeter]',
    description: '[Ini bisa diisi keakuratan posisi ultra-tinggi untuk pemantauan pergeseran tanah, jembatan, dan infrastruktur strategis].',
    tag: '[Akurasi RTK]',
  },
  {
    icon: CpuIcon,
    title: '[Pilar 3: Sistem Mandiri / On-Premise]',
    description: '[Ini bisa diisi arsitektur pemrosesan lokal mandiri tanpa wajib ketergantungan koneksi server asing].',
    tag: '[Mandiri / Aman]',
  },
  {
    icon: LockIcon,
    title: '[Pilar 4: 100% Dukungan Domestik]',
    description: '[Ini bisa diisi jaminan layanan teknis lokal langsung dari tim engineer di Indonesia, suku cadang cepat, dan kustomisasi].',
    tag: '[Dukungan Lokal]',
  },
]

// 4. Strategic Mission Profiles
const missions = [
  {
    title: '[Implementasi 1: Sektor Maritim & Selat Strategis]',
    sector: '[Sektor Maritim]',
    image: '/images/solutions-marine.jpg',
    summary: '[Ini bisa diisi contoh implementasi pemantauan kapal laut 24/7 di alur selat pelayaran padat dan integrasi stasiun pantai].',
    metricLabel: '[Cakupan Area]',
    metricValue: '[Alur Selat Strategis]',
  },
  {
    title: '[Implementasi 2: Infrastruktur IKN & Geodesi]',
    sector: '[Sektor Infrastruktur]',
    image: '/images/solutions-cadastre.jpg',
    summary: '[Ini bisa diisi contoh pemasangan stasiun referensi CORS untuk pemetaan elevasi tanah, konstruksi presisi, dan armada survei].',
    metricLabel: '[Tingkat Presisi]',
    metricValue: '[< 5 mm Baseline]',
  },
  {
    title: '[Implementasi 3: Pengawasan Ruang Udara]',
    sector: '[Sektor Keamanan]',
    image: '/images/solutions-defense.jpg',
    summary: '[Ini bisa diisi contoh penempatan radar pengawas di pulau terluar atau perbatasan untuk memantau pergerakan udara rendah].',
    metricLabel: '[Jangkauan Radar]',
    metricValue: '[Radius 250 km]',
  },
]

// 5. Strategic Testimonials & Partner Endorsements (Includes BSS Example)
const testimonials = [
  {
    quote: '[Ini bisa diisi kutipan ulasan dari mitra industri terkait peningkatan efisiensi operasional dan hasil nyata penerapan teknologi Terrabyte di lapangan].',
    author: '[Nama Pimpinan / Klien 1]',
    role: '[Jabatan Klien]',
    organization: '[Nama Perusahaan / Instansi 1]',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&auto=format',
  },
  {
    quote: '[Ini bisa diisi ulasan mengenai keandalan alat dalam menghadapi cuaca tropis ekstrem serta akurasi data yang konsisten saat pengujian].',
    author: '[Nama Pejabat / Peneliti 2]',
    role: '[Kepala Bidang / Direktur]',
    organization: '[Nama Lembaga / Dinas Terkait 2]',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face&auto=format',
  },
  {
    quote: '[Ini bisa diisi ulasan tentang kecepatan dukungan teknis lokal, ketersediaan suku cadang, dan kemudahan pelatihan operator].',
    author: '[Nama Project Manager 3]',
    role: '[Lead Geodesist / Site Manager]',
    organization: '[Nama Kontraktor Proyek 3]',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face&auto=format',
  },
]
</script>
