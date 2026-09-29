<template>
  <div class="min-h-screen text-white relative bg-[#030d17]">

    <!-- ─── HERO SECTION (PAGE 2 HI-FI) ──────────────────────────────── -->
    <section class="relative pt-32 pb-16 lg:pt-44 lg:pb-24 overflow-hidden">
      <!-- Ambient Radial Glows -->
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#18b8ea]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div class="max-w-4xl mx-auto px-6 lg:px-10 text-center relative z-10">
        <!-- Tag -->
        <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#18b8ea] font-semibold mb-4">
          COMPANY &middot; ABOUT US
        </p>

        <!-- Headline -->
        <h1 class="font-display font-extrabold text-4xl sm:text-5xl lg:text-[58px] leading-tight text-white mb-6">
          Built in the field. <span class="text-[#18b8ea] drop-shadow-[0_0_30px_rgba(24,184,234,0.35)]">Driven by data.</span>
        </h1>

        <!-- Subtitle -->
        <p class="font-body text-[#94a3b8] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-light">
          We are a geospatial technology company helping Indonesian industries understand, monitor and respond to the ground they work on.
        </p>
      </div>
    </section>

    <!-- ─── SECTION 01: OUR STORY (PAGE 2 HI-FI) ─────────────────────── -->
    <section class="py-16 lg:py-24 border-t border-white/5 bg-[#020b14] relative">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="grid lg:grid-cols-12 gap-12 items-center mb-16">

          <!-- Left Column: Photo [TEAM ON SITE] -->
          <div class="lg:col-span-5">
            <div class="rounded-3xl overflow-hidden geo-card shadow-2xl relative aspect-[4/3] group">
              <img
                src="/images/hero-surveyor.jpg"
                alt="Terrabyte Geosystem team on site"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#030d17]/80 via-transparent to-transparent"></div>
              <span class="absolute bottom-4 left-4 font-mono text-[10px] tracking-widest uppercase text-white/90 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                FIELD OPERATIONS &middot; INDONESIA
              </span>
            </div>
          </div>

          <!-- Right Column: 01 - OUR STORY -->
          <div class="lg:col-span-7 space-y-5">
            <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#18b8ea] font-semibold">01 &mdash; OUR STORY</p>
            <h2 class="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
              Collecting data is only half<br class="hidden sm:block" />
              the job.
            </h2>
            <div class="space-y-4 font-body text-sm sm:text-base text-[#94a3b8] leading-relaxed font-light">
              <p>
                Terrabyte Geosystem Indonesia grew out of real field work. Working alongside PT Lextera Survey Indonesia on radar slope monitoring projects, we saw that the hardest part isn’t gathering data, it’s turning it into clear, timely decisions.
              </p>
              <p>
                So we built TerraPulse-AI, an analytics platform for monitoring data, and TerraWatch, a monitoring center that keeps continuous watch over site conditions. Together with proven instruments, they form one integrated solution.
              </p>
            </div>
          </div>

        </div>

        <!-- Vision & Mission Cards -->
        <div class="grid md:grid-cols-2 gap-6">

          <!-- VISION Card -->
          <div class="p-8 sm:p-10 rounded-3xl geo-card flex flex-col justify-between">
            <div>
              <span class="block font-mono text-xs uppercase tracking-[0.2em] text-[#18b8ea] font-semibold mb-5">VISION</span>
              <p class="font-display text-xl sm:text-2xl text-white font-medium leading-relaxed">
                To be Indonesia’s trusted partner in geospatial intelligence, helping industries work safer and smarter with the earth.
              </p>
            </div>
          </div>

          <!-- MISSION Card -->
          <div class="p-8 sm:p-10 rounded-3xl geo-card">
            <span class="block font-mono text-xs uppercase tracking-[0.2em] text-[#18b8ea] font-semibold mb-5">MISSION</span>
            <ul class="space-y-4">
              <li class="flex items-start gap-3.5 text-sm text-[#94a3b8]">
                <span class="font-mono text-sm text-[#18b8ea] font-bold mt-0.5">01</span>
                <span class="text-white font-light">Deliver reliable survey and monitoring technology with strong local support.</span>
              </li>
              <li class="flex items-start gap-3.5 text-sm text-[#94a3b8]">
                <span class="font-mono text-sm text-[#18b8ea] font-bold mt-0.5">02</span>
                <span class="text-white font-light">Turn field data into decisions through analytics and AI.</span>
              </li>
              <li class="flex items-start gap-3.5 text-sm text-[#94a3b8]">
                <span class="font-mono text-sm text-[#18b8ea] font-bold mt-0.5">03</span>
                <span class="text-white font-light">Put safety first in every operation we support.</span>
              </li>
              <li class="flex items-start gap-3.5 text-sm text-[#94a3b8]">
                <span class="font-mono text-sm text-[#18b8ea] font-bold mt-0.5">04</span>
                <span class="text-white font-light">Keep building new solutions for Indonesian industries.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>

    <!-- ─── SECTION 02: OUR VALUES (PAGE 2 HI-FI) ─────────────────────── -->
    <section class="py-20 lg:py-24 border-t border-white/5 relative bg-[#030d17]">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">

        <div class="mb-14">
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#18b8ea] font-semibold mb-2">02 &mdash; OUR VALUES</p>
          <h2 class="font-display font-bold text-3xl sm:text-4xl text-white">
            What guides our work.
          </h2>
        </div>

        <!-- 4 Values Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <!-- Value 1: Precision -->
          <div class="p-7 rounded-3xl geo-card group">
            <div class="w-11 h-11 rounded-xl bg-[#18b8ea]/10 border border-[#18b8ea]/25 flex items-center justify-center text-[#18b8ea] mb-5 group-hover:scale-110 group-hover:bg-[#18b8ea]/20 transition-all duration-300">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h3 class="font-display font-bold text-lg text-white mb-2 group-hover:text-[#18b8ea] transition-colors">Precision</h3>
            <p class="font-body text-xs text-[#94a3b8] leading-relaxed font-light">
              Accurate data and careful work, every time.
            </p>
          </div>

          <!-- Value 2: Safety -->
          <div class="p-7 rounded-3xl geo-card group">
            <div class="w-11 h-11 rounded-xl bg-[#18b8ea]/10 border border-[#18b8ea]/25 flex items-center justify-center text-[#18b8ea] mb-5 group-hover:scale-110 group-hover:bg-[#18b8ea]/20 transition-all duration-300">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="font-display font-bold text-lg text-white mb-2 group-hover:text-[#18b8ea] transition-colors">Safety</h3>
            <p class="font-body text-xs text-[#94a3b8] leading-relaxed font-light">
              Early warning that protects people and operations.
            </p>
          </div>

          <!-- Value 3: Innovation -->
          <div class="p-7 rounded-3xl geo-card group">
            <div class="w-11 h-11 rounded-xl bg-[#18b8ea]/10 border border-[#18b8ea]/25 flex items-center justify-center text-[#18b8ea] mb-5 group-hover:scale-110 group-hover:bg-[#18b8ea]/20 transition-all duration-300">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 class="font-display font-bold text-lg text-white mb-2 group-hover:text-[#18b8ea] transition-colors">Innovation</h3>
            <p class="font-body text-xs text-[#94a3b8] leading-relaxed font-light">
              Using AI and new technology to solve real field problems.
            </p>
          </div>

          <!-- Value 4: Partnership -->
          <div class="p-7 rounded-3xl geo-card group">
            <div class="w-11 h-11 rounded-xl bg-[#18b8ea]/10 border border-[#18b8ea]/25 flex items-center justify-center text-[#18b8ea] mb-5 group-hover:scale-110 group-hover:bg-[#18b8ea]/20 transition-all duration-300">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="font-display font-bold text-lg text-white mb-2 group-hover:text-[#18b8ea] transition-colors">Partnership</h3>
            <p class="font-body text-xs text-[#94a3b8] leading-relaxed font-light">
              Working closely with clients and partners for the long term.
            </p>
          </div>

        </div>

      </div>
    </section>

    <!-- ─── SECTION: OUR PARTNER (PAGE 2 HI-FI) ───────────────────────── -->
    <section class="py-16 bg-[#020b14] border-t border-white/5">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="p-8 sm:p-10 rounded-3xl geo-card flex flex-col md:flex-row items-center gap-8">
          <!-- Lextera Logo / Brand Emblem -->
          <div class="w-36 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-4 flex-shrink-0">
            <span class="font-display font-extrabold text-lg tracking-widest text-white">LEXTERA</span>
          </div>
          <!-- Partner Text -->
          <div class="space-y-2 text-center md:text-left">
            <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#18b8ea] font-semibold">OUR PARTNER</p>
            <h3 class="font-display font-bold text-xl sm:text-2xl text-white">
              Authorized partner of PT Lextera Survey Indonesia
            </h3>
            <p class="font-body text-xs sm:text-sm text-[#94a3b8] leading-relaxed font-light max-w-2xl">
              We supply Lextera’s survey and monitoring instruments and pair them with our own analytics, so clients get hardware and intelligence from one team.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── PRE-FOOTER BANNER (PAGE 2 HI-FI) ───────────────────────────── -->
    <section class="py-16 bg-[#030d17]">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="p-8 sm:p-12 rounded-3xl geo-banner flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="space-y-2 text-center md:text-left">
            <h3 class="font-display font-bold text-2xl sm:text-3xl text-white">
              Let&rsquo;s build something together.
            </h3>
            <p class="font-body text-[#94a3b8] text-sm sm:text-base font-light">
              Partner with us on your next monitoring or survey project.
            </p>
          </div>
          <NuxtLink
            to="/contact"
            class="flex-shrink-0 btn-geo-white"
          >
            Contact us
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Company — Built in the field. Driven by data | Terrabyte',
  meta: [
    {
      name: 'description',
      content: 'We are a geospatial technology company helping Indonesian industries understand, monitor and respond to the ground they work on.'
    }
  ]
})
</script>
