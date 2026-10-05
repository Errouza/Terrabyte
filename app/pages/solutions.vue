<template>
  <div class="min-h-screen text-white relative bg-[#030d17]">

    <!-- ─── HERO SECTION (PAGE 4 HI-FI) ──────────────────────────────── -->
    <section class="relative pt-32 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
      <!-- Ambient Radial Glows -->
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#18b8ea]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div class="max-w-4xl mx-auto px-6 lg:px-10 text-center relative z-10">
        <!-- Tag -->
        <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#18b8ea] font-semibold mb-4">
          {{ t('solutions.tag') }}
        </p>

        <!-- Headline -->
        <h1 class="font-display font-extrabold text-4xl sm:text-5xl lg:text-[60px] leading-tight text-white mb-6">
          {{ t('solutions.title1') }} <span class="text-[#18b8ea] drop-shadow-[0_0_30px_rgba(24,184,234,0.4)]">{{ t('solutions.titlePulse') }}</span> {{ t('solutions.title2') }}
        </h1>

        <!-- Subtitle -->
        <p class="font-body text-[#94a3b8] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-light mb-8">
          {{ t('solutions.subtitle') }}
        </p>

        <!-- CTAs -->
        <div class="flex flex-wrap items-center justify-center gap-4">
          <NuxtLink
            to="/contact?type=demo"
            class="btn-geo-primary"
          >
            {{ t('solutions.requestDemo') }}
          </NuxtLink>
          <a
            href="#how-it-works"
            class="btn-geo-outline"
          >
            {{ t('solutions.howItWorks') }}
          </a>
        </div>
      </div>

      <!-- ─── BAGIAN ATAS: DIAGRAM INTERAKTIF + PENJELASAN DI SAMPINGNYA ──── -->
      <div class="max-w-7xl mx-auto px-6 lg:px-10 mt-14 sm:mt-16 relative z-10">
        <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          <!-- Kiri: Interactive HeroTelemetryWidget Component -->
          <div class="lg:col-span-7">
            <HeroTelemetryWidget />
          </div>

          <!-- Kanan: Penjelasan di Sampingnya -->
          <div class="lg:col-span-5 space-y-6">
            <div class="space-y-2.5">
              <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#18b8ea] font-semibold">
                {{ t('solutions.telemetrySectionTag') }}
              </p>
              <h2 class="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
                {{ t('solutions.telemetrySectionTitle') }}
              </h2>
            </div>

            <div class="space-y-4 font-body text-sm sm:text-base text-[#94a3b8] leading-relaxed font-light">
              <p>
                {{ t('solutions.telemetryP1') }}
              </p>
              <p>
                {{ t('solutions.telemetryP2') }}
              </p>
            </div>

            <!-- Feature Highlights Checklist -->
            <ul class="space-y-3.5 pt-1">
              <li class="flex items-start gap-3 text-xs sm:text-sm text-white">
                <span class="w-5 h-5 rounded-full bg-[#18b8ea]/20 text-[#18b8ea] flex items-center justify-center text-xs font-bold shadow-[0_0_10px_rgba(24,184,234,0.3)] mt-0.5 flex-shrink-0">&check;</span>
                <span class="font-light">{{ t('solutions.telemetryFeat1') }}</span>
              </li>
              <li class="flex items-start gap-3 text-xs sm:text-sm text-white">
                <span class="w-5 h-5 rounded-full bg-[#18b8ea]/20 text-[#18b8ea] flex items-center justify-center text-xs font-bold shadow-[0_0_10px_rgba(24,184,234,0.3)] mt-0.5 flex-shrink-0">&check;</span>
                <span class="font-light">{{ t('solutions.telemetryFeat2') }}</span>
              </li>
              <li class="flex items-start gap-3 text-xs sm:text-sm text-white">
                <span class="w-5 h-5 rounded-full bg-[#18b8ea]/20 text-[#18b8ea] flex items-center justify-center text-xs font-bold shadow-[0_0_10px_rgba(24,184,234,0.3)] mt-0.5 flex-shrink-0">&check;</span>
                <span class="font-light">{{ t('solutions.telemetryFeat3') }}</span>
              </li>
            </ul>

            <div class="pt-2 flex flex-wrap items-center gap-4">
              <NuxtLink
                to="/contact?type=demo"
                class="btn-geo-primary"
              >
                {{ t('solutions.requestDemo') }}
              </NuxtLink>
              <a
                href="#gis-map"
                class="btn-geo-outline"
              >
                Lihat Peta Radar &darr;
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ─── BAGIAN BAWAH: MAP GIS LENGKAP + PENJELASAN DI BAWAHNYA ──────── -->
    <section id="gis-map" class="py-20 lg:py-28 border-t border-white/5 bg-[#020b14] relative">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">

        <!-- Header Penjelas Section Map -->
        <div class="max-w-3xl mb-12 space-y-3">
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#18b8ea] font-semibold">
            {{ t('solutions.mapSectionTag') }}
          </p>
          <h2 class="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] text-white leading-tight">
            {{ t('solutions.mapSectionTitle') }}
          </h2>
          <p class="font-body text-[#94a3b8] text-sm sm:text-base leading-relaxed font-light">
            {{ t('solutions.mapSectionDesc') }}
          </p>
        </div>

        <!-- Full Map Showcase Card -->
        <div class="rounded-3xl geo-card-highlight overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.85),0_0_40px_rgba(24,184,234,0.18)] mb-14">
          <!-- Window Header Bar -->
          <div class="px-5 sm:px-6 py-4 bg-[#020b14] border-b border-white/10 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-rose-500/80"></span>
              <span class="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span class="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              <span class="font-mono text-xs text-[#94a3b8] ml-3 hidden sm:inline">{{ t('solutions.mapWindowBadge') }}</span>
            </div>
            <div class="flex items-center gap-2.5">
              <span class="w-2 h-2 rounded-full bg-[#18b8ea] animate-pulse"></span>
              <span class="font-mono text-[11px] text-[#18b8ea] tracking-wider uppercase font-semibold">{{ t('solutions.mapLiveBadge') }}</span>
            </div>
          </div>

          <!-- Real Full Map Image -->
          <div class="relative bg-[#020b14] overflow-hidden group">
            <img
              src="/images/contohTerrapulseAI.png"
              alt="TerraPulse-AI Operations Center - Monitoring Map"
              class="w-full h-auto object-contain block transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </div>
        </div>

        <!-- Penjelasan di Bawah Map (4 Kolom Grid Fitur) -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <!-- Feature 1: Heatmap Kontur Deformasi -->
          <div class="p-7 rounded-3xl geo-card group hover:border-[#18b8ea]/50 transition-all duration-300">
            <div class="w-10 h-10 rounded-xl bg-[#18b8ea]/10 border border-[#18b8ea]/25 flex items-center justify-center text-[#18b8ea] mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="font-display font-bold text-lg text-white mb-2 group-hover:text-[#18b8ea] transition-colors">
              {{ t('solutions.mapCol1Title') }}
            </h3>
            <p class="font-body text-xs text-[#94a3b8] leading-relaxed font-light">
              {{ t('solutions.mapCol1Desc') }}
            </p>
          </div>

          <!-- Feature 2: Georeferensi DTM/DEM Presisi -->
          <div class="p-7 rounded-3xl geo-card group hover:border-[#18b8ea]/50 transition-all duration-300">
            <div class="w-10 h-10 rounded-xl bg-[#18b8ea]/10 border border-[#18b8ea]/25 flex items-center justify-center text-[#18b8ea] mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="font-display font-bold text-lg text-white mb-2 group-hover:text-[#18b8ea] transition-colors">
              {{ t('solutions.mapCol2Title') }}
            </h3>
            <p class="font-body text-xs text-[#94a3b8] leading-relaxed font-light">
              {{ t('solutions.mapCol2Desc') }}
            </p>
          </div>

          <!-- Feature 3: Zonasi Bahaya Dinamis -->
          <div class="p-7 rounded-3xl geo-card group hover:border-[#18b8ea]/50 transition-all duration-300">
            <div class="w-10 h-10 rounded-xl bg-[#18b8ea]/10 border border-[#18b8ea]/25 flex items-center justify-center text-[#18b8ea] mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 class="font-display font-bold text-lg text-white mb-2 group-hover:text-[#18b8ea] transition-colors">
              {{ t('solutions.mapCol3Title') }}
            </h3>
            <p class="font-body text-xs text-[#94a3b8] leading-relaxed font-light">
              {{ t('solutions.mapCol3Desc') }}
            </p>
          </div>

          <!-- Feature 4: Integrasi Komando TerraWatch -->
          <div class="p-7 rounded-3xl geo-card group hover:border-[#18b8ea]/50 transition-all duration-300">
            <div class="w-10 h-10 rounded-xl bg-[#18b8ea]/10 border border-[#18b8ea]/25 flex items-center justify-center text-[#18b8ea] mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="font-display font-bold text-lg text-white mb-2 group-hover:text-[#18b8ea] transition-colors">
              {{ t('solutions.mapCol4Title') }}
            </h3>
            <p class="font-body text-xs text-[#94a3b8] leading-relaxed font-light">
              {{ t('solutions.mapCol4Desc') }}
            </p>
          </div>

        </div>

      </div>
    </section>

    <!-- ─── SECTION 01: HOW IT WORKS (PAGE 4 HI-FI) ──────────────────── -->
    <section id="how-it-works" class="py-20 lg:py-28 border-t border-white/5 bg-[#020b14] relative">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">

        <div class="mb-14">
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#18b8ea] font-semibold mb-2">01 &mdash; HOW IT WORKS</p>
          <h2 class="font-display font-bold text-3xl sm:text-4xl text-white">
            From signal to decision in four steps.
          </h2>
        </div>

        <!-- 4 Step Cards Grid with Large Blue Numbers -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <!-- Step 1: Collect -->
          <div class="p-7 rounded-3xl geo-card">
            <span class="block font-mono text-2xl text-[#18b8ea] font-bold mb-3">01</span>
            <h3 class="font-display font-bold text-lg text-white mb-2">Collect</h3>
            <p class="font-body text-xs text-[#94a3b8] leading-relaxed font-light">
              Data flows in from radar, GNSS and other field sensors.
            </p>
          </div>

          <!-- Step 2: Process -->
          <div class="p-7 rounded-3xl geo-card">
            <span class="block font-mono text-2xl text-[#18b8ea] font-bold mb-3">02</span>
            <h3 class="font-display font-bold text-lg text-white mb-2">Process</h3>
            <p class="font-body text-xs text-[#94a3b8] leading-relaxed font-light">
              Readings are cleaned, organized and brought into one place.
            </p>
          </div>

          <!-- Step 3: Analyze -->
          <div class="p-7 rounded-3xl geo-card">
            <span class="block font-mono text-2xl text-[#18b8ea] font-bold mb-3">03</span>
            <h3 class="font-display font-bold text-lg text-white mb-2">Analyze</h3>
            <p class="font-body text-xs text-[#94a3b8] leading-relaxed font-light">
              AI models track trends and detect unusual movement.
            </p>
          </div>

          <!-- Step 4: Alert & act -->
          <div class="p-7 rounded-3xl geo-card">
            <span class="block font-mono text-2xl text-[#18b8ea] font-bold mb-3">04</span>
            <h3 class="font-display font-bold text-lg text-white mb-2">Alert &amp; act</h3>
            <p class="font-body text-xs text-[#94a3b8] leading-relaxed font-light">
              Early warnings reach your team and TerraWatch in time to respond.
            </p>
          </div>

        </div>

      </div>
    </section>

    <!-- ─── SECTION 02: CAPABILITIES (PAGE 4 HI-FI) ──────────────────── -->
    <section class="py-20 lg:py-28 border-t border-white/5 relative bg-[#030d17]">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">

        <div class="mb-14">
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#18b8ea] font-semibold mb-2">02 &mdash; CAPABILITIES</p>
          <h2 class="font-display font-bold text-3xl sm:text-4xl text-white">
            Everything in one platform.
          </h2>
        </div>

        <!-- 6 Capabilities Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div class="p-8 rounded-3xl geo-card">
            <h3 class="font-display font-bold text-lg text-white mb-2">Data integration</h3>
            <p class="font-body text-xs sm:text-sm text-[#94a3b8] leading-relaxed font-light">
              Connect monitoring instruments into a single source of truth.
            </p>
          </div>

          <div class="p-8 rounded-3xl geo-card">
            <h3 class="font-display font-bold text-lg text-white mb-2">Displacement trends</h3>
            <p class="font-body text-xs sm:text-sm text-[#94a3b8] leading-relaxed font-light">
              See how the ground is moving over hours, days and months.
            </p>
          </div>

          <div class="p-8 rounded-3xl geo-card">
            <h3 class="font-display font-bold text-lg text-white mb-2">Early warning alerts</h3>
            <p class="font-body text-xs sm:text-sm text-[#94a3b8] leading-relaxed font-light">
              Threshold and anomaly alerts sent to the right people.
            </p>
          </div>

          <div class="p-8 rounded-3xl geo-card">
            <h3 class="font-display font-bold text-lg text-white mb-2">Dashboards &amp; reports</h3>
            <p class="font-body text-xs sm:text-sm text-[#94a3b8] leading-relaxed font-light">
              Clear visuals and reports for field teams and management.
            </p>
          </div>

          <div class="p-8 rounded-3xl geo-card">
            <h3 class="font-display font-bold text-lg text-white mb-2">Remote access</h3>
            <p class="font-body text-xs sm:text-sm text-[#94a3b8] leading-relaxed font-light">
              Check site conditions from the office or on the move.
            </p>
          </div>

          <div class="p-8 rounded-3xl geo-card">
            <h3 class="font-display font-bold text-lg text-white mb-2">Expert support</h3>
            <p class="font-body text-xs sm:text-sm text-[#94a3b8] leading-relaxed font-light">
              Our team helps you set up, interpret and act on the data.
            </p>
          </div>

        </div>

      </div>
    </section>

    <!-- ─── SECTION 03: TERRAWATCH (PAGE 4 HI-FI) ─────────────────────── -->
    <section id="terrawatch" class="py-20 lg:py-28 border-t border-white/5 bg-[#020b14] relative">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="grid lg:grid-cols-12 gap-12 items-center">

          <!-- Left Column: Copy & Checklist -->
          <div class="lg:col-span-6 space-y-6">
            <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#18b8ea] font-semibold">03 &mdash; TERRAWATCH</p>
            <h2 class="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
              A monitoring center<br />that never looks<br />away.
            </h2>
            <p class="font-body text-[#94a3b8] text-sm sm:text-base leading-relaxed font-light">
              TerraWatch is our monitoring center. It keeps continuous watch over site conditions using TerraPulse-AI, so warnings are seen, checked and passed on quickly.
            </p>

            <ul class="space-y-3.5 pt-2">
              <li class="flex items-center gap-3 text-sm text-white font-medium">
                <span class="w-5 h-5 rounded-full bg-[#18b8ea]/20 text-[#18b8ea] flex items-center justify-center text-xs font-bold shadow-[0_0_10px_rgba(24,184,234,0.3)]">&check;</span>
                <span>Continuous monitoring</span>
              </li>
              <li class="flex items-center gap-3 text-sm text-white font-medium">
                <span class="w-5 h-5 rounded-full bg-[#18b8ea]/20 text-[#18b8ea] flex items-center justify-center text-xs font-bold shadow-[0_0_10px_rgba(24,184,234,0.3)]">&check;</span>
                <span>Alert verification and escalation</span>
              </li>
              <li class="flex items-center gap-3 text-sm text-white font-medium">
                <span class="w-5 h-5 rounded-full bg-[#18b8ea]/20 text-[#18b8ea] flex items-center justify-center text-xs font-bold shadow-[0_0_10px_rgba(24,184,234,0.3)]">&check;</span>
                <span>Regular condition reports</span>
              </li>
            </ul>
          </div>

          <!-- Right Column: Control Room Image -->
          <div class="lg:col-span-6">
            <div class="rounded-3xl overflow-hidden geo-card shadow-2xl relative aspect-[16/10] group">
              <img
                src="/images/actionWork.jpeg"
                alt="TerraWatch Operations Control Room"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#030d17]/80 via-transparent to-transparent"></div>
              <span class="absolute bottom-4 left-4 font-mono text-[10px] tracking-widest uppercase text-white/90 bg-black/60 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/10">
                TERRAWATCH CONTROL ROOM &middot; 24/7 MONITORING
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ─── SECTION 04: INDUSTRIES (PAGE 4 HI-FI) ─────────────────────── -->
    <section class="py-20 border-t border-white/5 relative bg-[#030d17]">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 text-center">

        <div class="mb-10">
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#18b8ea] font-semibold mb-2">04 &mdash; INDUSTRIES</p>
          <h2 class="font-display font-bold text-3xl sm:text-4xl text-white">
            Built for anyone who depends on the ground.
          </h2>
        </div>

        <!-- 5 Industry Pills -->
        <div class="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <div
            v-for="ind in ['Mining', 'Infrastructure', 'Construction', 'Energy', 'Environment']"
            :key="ind"
            class="px-6 py-3 rounded-full bg-[#071d2e] border border-white/10 hover:border-[#18b8ea] text-sm text-white font-semibold hover:text-[#18b8ea] transition-colors shadow-sm cursor-default"
          >
            {{ ind }}
          </div>
        </div>

      </div>
    </section>

    <!-- ─── PRE-FOOTER BANNER (PAGE 4 HI-FI) ───────────────────────────── -->
    <section class="py-16 bg-[#020b14]">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="p-8 sm:p-12 rounded-3xl geo-banner flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="space-y-2 text-center md:text-left">
            <h3 class="font-display font-bold text-2xl sm:text-3xl text-white">
              See TerraPulse-AI in action.
            </h3>
            <p class="font-body text-[#94a3b8] text-sm sm:text-base font-light">
              Book a demo and we’ll walk you through it with your own use case.
            </p>
          </div>
          <NuxtLink
            to="/contact?type=demo"
            class="flex-shrink-0 btn-geo-white"
          >
            {{ t('solutions.requestDemo') }}
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
  title: 'Solutions — Feel the pulse of your ground | TerraPulse-AI',
  meta: [
    {
      name: 'description',
      content: 'TerraPulse-AI is our analytics platform for monitoring data. It brings your sensors into one view, finds the patterns that matter and flags risk before it becomes a problem.'
    }
  ]
})
</script>
