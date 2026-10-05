<template>
  <div class="min-h-screen text-white relative bg-[#030d17]">

    <!-- ─── HERO SECTION (PAGE 2 HI-FI) ──────────────────────────────── -->
    <section class="relative pt-32 pb-16 lg:pt-44 lg:pb-24 overflow-hidden">
      <!-- Ambient Radial Glows -->
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#18b8ea]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div class="max-w-4xl mx-auto px-6 lg:px-10 text-center relative z-10">
        <!-- Tag -->
        <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#18b8ea] font-semibold mb-4">
          {{ t('company.tag') }}
        </p>

        <!-- Headline -->
        <h1 class="font-display font-extrabold text-4xl sm:text-5xl lg:text-[58px] leading-tight text-white mb-6">
          {{ t('company.heroTitle1') }} <span class="text-[#18b8ea] drop-shadow-[0_0_30px_rgba(24,184,234,0.35)]">{{ t('company.heroTitle2') }}</span>
        </h1>

        <!-- Subtitle -->
        <p class="font-body text-[#94a3b8] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-light">
          {{ t('company.heroDesc') }}
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
                src="/images/timLapangan.jpeg"
                alt="Terrabyte Geosystem team on site"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#030d17]/80 via-transparent to-transparent"></div>
              <span class="absolute bottom-4 left-4 font-mono text-[10px] tracking-widest uppercase text-white/90 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                {{ t('company.fieldBadge') }}
              </span>
            </div>
          </div>

          <!-- Right Column: 01 - OUR STORY -->
          <div class="lg:col-span-7 space-y-5">
            <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#18b8ea] font-semibold">{{ t('company.storyTag') }}</p>
            <h2 class="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
              {{ t('company.storyTitle') }}
            </h2>
            <div class="space-y-4 font-body text-sm sm:text-base text-[#94a3b8] leading-relaxed font-light">
              <p>
                {{ t('company.storyP1') }}
              </p>
              <p>
                {{ t('company.storyP2') }}
              </p>
            </div>
          </div>

        </div>

        <!-- Vision & Mission Cards -->
        <div class="grid md:grid-cols-2 gap-6">

          <!-- VISION Card -->
          <div class="p-8 sm:p-10 rounded-3xl geo-card flex flex-col justify-between">
            <div>
              <span class="block font-mono text-xs uppercase tracking-[0.2em] text-[#18b8ea] font-semibold mb-5">{{ t('company.visionTag') }}</span>
              <p class="font-display text-xl sm:text-2xl text-white font-medium leading-relaxed">
                {{ t('company.visionText') }}
              </p>
            </div>
          </div>

          <!-- MISSION Card -->
          <div class="p-8 sm:p-10 rounded-3xl geo-card">
            <span class="block font-mono text-xs uppercase tracking-[0.2em] text-[#18b8ea] font-semibold mb-5">{{ t('company.missionTag') }}</span>
            <ul class="space-y-4">
              <li class="flex items-start gap-3.5 text-sm text-[#94a3b8]">
                <span class="font-mono text-sm text-[#18b8ea] font-bold mt-0.5">01</span>
                <span class="text-white font-light">{{ t('company.mission1') }}</span>
              </li>
              <li class="flex items-start gap-3.5 text-sm text-[#94a3b8]">
                <span class="font-mono text-sm text-[#18b8ea] font-bold mt-0.5">02</span>
                <span class="text-white font-light">{{ t('company.mission2') }}</span>
              </li>
              <li class="flex items-start gap-3.5 text-sm text-[#94a3b8]">
                <span class="font-mono text-sm text-[#18b8ea] font-bold mt-0.5">03</span>
                <span class="text-white font-light">{{ t('company.mission3') }}</span>
              </li>
              <li class="flex items-start gap-3.5 text-sm text-[#94a3b8]">
                <span class="font-mono text-sm text-[#18b8ea] font-bold mt-0.5">04</span>
                <span class="text-white font-light">{{ t('company.mission4') }}</span>
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
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#18b8ea] font-semibold mb-2">{{ t('company.valuesTag') }}</p>
          <h2 class="font-display font-bold text-3xl sm:text-4xl text-white">
            {{ t('company.valuesTitle') }}
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
            <h3 class="font-display font-bold text-lg text-white mb-2 group-hover:text-[#18b8ea] transition-colors">{{ t('company.precisionTitle') }}</h3>
            <p class="font-body text-xs text-[#94a3b8] leading-relaxed font-light">
              {{ t('company.precisionDesc') }}
            </p>
          </div>

          <!-- Value 2: Safety -->
          <div class="p-7 rounded-3xl geo-card group">
            <div class="w-11 h-11 rounded-xl bg-[#18b8ea]/10 border border-[#18b8ea]/25 flex items-center justify-center text-[#18b8ea] mb-5 group-hover:scale-110 group-hover:bg-[#18b8ea]/20 transition-all duration-300">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="font-display font-bold text-lg text-white mb-2 group-hover:text-[#18b8ea] transition-colors">{{ t('company.safetyTitle') }}</h3>
            <p class="font-body text-xs text-[#94a3b8] leading-relaxed font-light">
              {{ t('company.safetyDesc') }}
            </p>
          </div>

          <!-- Value 3: Innovation -->
          <div class="p-7 rounded-3xl geo-card group">
            <div class="w-11 h-11 rounded-xl bg-[#18b8ea]/10 border border-[#18b8ea]/25 flex items-center justify-center text-[#18b8ea] mb-5 group-hover:scale-110 group-hover:bg-[#18b8ea]/20 transition-all duration-300">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 class="font-display font-bold text-lg text-white mb-2 group-hover:text-[#18b8ea] transition-colors">{{ t('company.innovationTitle') }}</h3>
            <p class="font-body text-xs text-[#94a3b8] leading-relaxed font-light">
              {{ t('company.innovationDesc') }}
            </p>
          </div>

          <!-- Value 4: Partnership -->
          <div class="p-7 rounded-3xl geo-card group">
            <div class="w-11 h-11 rounded-xl bg-[#18b8ea]/10 border border-[#18b8ea]/25 flex items-center justify-center text-[#18b8ea] mb-5 group-hover:scale-110 group-hover:bg-[#18b8ea]/20 transition-all duration-300">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="font-display font-bold text-lg text-white mb-2 group-hover:text-[#18b8ea] transition-colors">{{ t('company.partnershipTitle') }}</h3>
            <p class="font-body text-xs text-[#94a3b8] leading-relaxed font-light">
              {{ t('company.partnershipDesc') }}
            </p>
          </div>

        </div>

      </div>
    </section>

    <!-- ─── SECTION 03: OUR MANAGEMENT (PAGE 2 HI-FI) ────────────────── -->
    <section class="py-20 lg:py-24 border-t border-white/5 relative bg-[#020b14] overflow-hidden">
      <!-- Glow ambient background -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#18b8ea]/6 rounded-full blur-[140px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <!-- Section Header -->
        <div class="max-w-3xl mb-14 space-y-3">
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#18b8ea] font-semibold">
            {{ t('management.companyTag') }}
          </p>
          <h2 class="font-display font-bold text-3xl sm:text-4xl lg:text-[44px] text-white">
            {{ t('management.title') }}
          </h2>
          <p class="font-body text-[#94a3b8] text-sm sm:text-base leading-relaxed font-light">
            {{ t('management.subtitle') }}
          </p>
        </div>

        <!-- 3 Management Members Grid -->
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

            <!-- Member Info: Name and Title (No bio needed) -->
            <div class="space-y-1">
              <span class="block font-mono text-[10px] uppercase tracking-[0.18em] text-[#18b8ea] font-semibold truncate">
                {{ member.role }}
              </span>
              <h3 class="font-display font-bold text-lg sm:text-xl text-white group-hover:text-[#18b8ea] transition-colors">
                {{ member.name }}
              </h3>
              <p class="font-ui text-xs text-[#94a3b8] font-light">
                {{ member.dept }}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ─── SECTION: OUR PARTNER (PAGE 2 HI-FI) ───────────────────────── -->
    <section class="py-16 bg-[#030d17] border-t border-white/5">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="p-8 sm:p-10 rounded-3xl geo-card flex flex-col md:flex-row items-center gap-8">
          <!-- Lextera Logo / Brand Emblem Badge -->
          <div class="w-28 sm:w-32 h-28 sm:h-32 rounded-2xl bg-white p-3 flex items-center justify-center flex-shrink-0 shadow-[0_8px_25px_rgba(0,0,0,0.4)] border border-white/20">
            <img
              src="/images/logoLextera.png"
              alt="PT Lextera Survey Indonesia Logo"
              class="w-full h-full object-contain"
            />
          </div>
          <!-- Partner Text (Clean Semantics, Natural Bilingual Copy) -->
          <div class="space-y-2 text-center md:text-left">
            <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#18b8ea] font-semibold">
              {{ t('company.partnerBadge') }}
            </p>
            <h3 class="font-display font-bold text-xl sm:text-2xl text-white">
              {{ t('company.partnerTitle') }}
            </h3>
            <p class="font-body text-xs sm:text-sm text-[#94a3b8] leading-relaxed font-light max-w-2xl">
              {{ t('company.partnerDesc') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── PRE-FOOTER BANNER (PAGE 2 HI-FI) ───────────────────────────── -->
    <section class="py-16 bg-[#020b14] border-t border-white/5">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="p-8 sm:p-12 rounded-3xl geo-banner flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="space-y-2 text-center md:text-left">
            <h3 class="font-display font-bold text-2xl sm:text-3xl text-white">
              {{ t('company.bannerTitle') }}
            </h3>
            <p class="font-body text-[#94a3b8] text-sm sm:text-base font-light">
              {{ t('company.bannerDesc') }}
            </p>
          </div>
          <NuxtLink
            to="/contact"
            class="flex-shrink-0 btn-geo-white"
          >
            {{ t('company.bannerCta') }}
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLanguage } from '~/composables/useLanguage'

const { t } = useLanguage()

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
  title: 'Company — Built in the field. Driven by data | Terrabyte',
  meta: [
    {
      name: 'description',
      content: 'We are a geospatial technology company helping Indonesian industries understand, monitor and respond to the ground they work on.'
    }
  ]
})
</script>
