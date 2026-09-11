<template>
  <div class="py-24 lg:py-28">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">

      <!-- Header -->
      <div class="mb-14">
        <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00d1b2]/10 border border-[#00d1b2]/30 mb-4">
          <span class="w-2 h-2 rounded-full bg-[#00d1b2]"></span>
          <span class="font-ui text-xs font-semibold tracking-widest uppercase text-[#00d1b2]">Institutional Heritage</span>
        </div>
        <h1 class="font-display font-bold text-4xl lg:text-5xl tracking-wide text-white leading-tight">
          FIFTEEN YEARS OF<br />
          FIELD-PROVEN PERFORMANCE
        </h1>
        <p class="font-body font-light text-base leading-relaxed text-[#9db4c8] mt-4 max-w-3xl">
          Founded in Jakarta in 2010 by senior satellite communication and defense electronics engineers, Terrabyte Geosystems has evolved into Southeast Asia’s foremost developer of sovereign positioning and radar technologies.
        </p>
      </div>

      <!-- Heritage Story & Headquarter Display Grid -->
      <div class="grid lg:grid-cols-2 gap-12 mt-12 mb-24 items-center">
        <!-- Left: Story Narrative -->
        <div class="space-y-6">
          <h2 class="font-display font-bold text-2xl text-white">Engineering Autonomous Sovereign Technology</h2>
          <p class="font-body font-light text-sm leading-relaxed text-[#9db4c8]">
            In mission-critical maritime defense, airspace control, and strategic infrastructure, dependence on closed, proprietary foreign technology creates unacceptable security risks. Terrabyte was established with a singular doctrine: build sovereign, open-standard, and zero-compromise hardware and signal processing architectures domestically.
          </p>
          <p class="font-body font-light text-sm leading-relaxed text-[#9db4c8]">
            Today, our systems monitor strategic straits, provide millimeter reference baselines for smart capital infrastructure, and secure airspace perimeters across the Asia-Pacific theatre.
          </p>

          <!-- 3 Institutional Milestones -->
          <div class="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
            <div class="p-4 neon-card text-center">
              <span class="font-display font-bold text-2xl text-[#00d1b2]">2010</span>
              <span class="font-ui text-[10px] text-[#6c889f] block uppercase mt-1">Founded in Jakarta</span>
            </div>
            <div class="p-4 neon-card text-center">
              <span class="font-display font-bold text-2xl text-[#00d1b2]">1,200+</span>
              <span class="font-ui text-[10px] text-[#6c889f] block uppercase mt-1">Field Deployments</span>
            </div>
            <div class="p-4 neon-card text-center">
              <span class="font-display font-bold text-2xl text-[#00d1b2]">100%</span>
              <span class="font-ui text-[10px] text-[#6c889f] block uppercase mt-1">Domestic IP</span>
            </div>
          </div>
        </div>

        <!-- Right: HQ Photo Showcase Card -->
        <div class="relative overflow-hidden rounded-3xl bg-[#092c4a]/40 border border-[#00d1b2]/30 p-3 shadow-2xl">
          <div class="relative h-96 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1572224104782-91a08d296390?w=900&h=600&fit=crop&auto=format"
              alt="Satellite & Radar Calibration Facility"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#07253d] via-transparent to-transparent opacity-85"></div>
            <div class="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
              <span class="font-mono text-xs font-bold text-[#00d1b2] block">TERRABYTE CALIBRATION &amp; ANECHOIC LAB</span>
              <span class="font-ui text-[11px] text-[#9db4c8]">Jakarta Technology Corridor · ISO 9001:2015 Certified</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Core Values (4 Distinct Heritage Cards) -->
      <div class="mb-28">
        <div class="max-w-2xl mb-12">
          <p class="section-label mb-2">Our Operating Philosophy</p>
          <h2 class="font-display font-bold text-3xl text-white">FOUR DOCTRINES OF RELIABILITY</h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="val in coreValues"
            :key="val.num"
            class="p-7 neon-card flex flex-col justify-between"
          >
            <div>
              <div class="flex items-center justify-between mb-5">
                <span class="font-mono text-2xl font-bold text-[#00d1b2]">0{{ val.num }}</span>
                <span class="font-mono text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded bg-[#00d1b2]/10 border border-[#00d1b2]/30 text-[#00d1b2]">
                  {{ val.badge }}
                </span>
              </div>
              <h3 class="font-display font-bold text-lg text-white mb-2">{{ val.title }}</h3>
              <p class="font-body font-light text-xs leading-relaxed text-[#9db4c8]">{{ val.desc }}</p>
            </div>
            <div class="pt-4 mt-6 border-t border-white/10 font-mono text-[10px] text-[#6c889f]">
              MISSION AXIOM // 0{{ val.num }}
            </div>
          </div>
        </div>
      </div>

      <!-- Leadership & Senior Engineering Board (4 Distinguished Cards) -->
      <div class="mb-28">
        <div class="max-w-2xl mb-14">
          <p class="section-label mb-3">Executive &amp; Technical Leadership</p>
          <h2 class="font-display font-bold text-3xl sm:text-4xl text-white tracking-wide">
            THE ARCHITECTS OF TERRABYTE
          </h2>
          <p class="font-body font-light text-sm sm:text-base text-[#9db4c8] mt-3">
            Led by veterans of national aerospace agencies, defense communication labs, and hydrographic survey authorities.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="leader in leaders"
            :key="leader.name"
            class="p-6 neon-card group flex flex-col justify-between"
          >
            <div>
              <div class="relative overflow-hidden rounded-xl mb-5 h-56">
                <img
                  :src="leader.photo"
                  :alt="leader.name"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#092c4a] via-transparent to-transparent opacity-85"></div>
                <div class="absolute bottom-3 left-3">
                  <span class="px-2.5 py-0.5 rounded-full bg-slate-900/90 border border-[#00d1b2]/40 text-[#00d1b2] font-mono text-[10px] font-semibold uppercase backdrop-blur-md">
                    {{ leader.experience }}
                  </span>
                </div>
              </div>
              <h3 class="font-display font-bold text-base text-white group-hover:text-[#00d1b2] transition-colors">{{ leader.name }}</h3>
              <p class="font-ui text-xs text-[#00d1b2] mt-0.5 font-semibold">{{ leader.role }}</p>
              <p class="font-body font-light text-xs text-[#9db4c8] mt-3 leading-relaxed">{{ leader.bio }}</p>
            </div>
            <div class="pt-4 mt-4 border-t border-white/10 font-mono text-[10px] text-[#6c889f]">
              BOARD OF DIRECTORS
            </div>
          </div>
        </div>
      </div>

      <!-- Global Accreditations & Standards Card -->
      <div class="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-[#07253d]/90 via-[#0a3556]/80 to-[#07253d]/90 border border-white/15 hover:border-[#00d1b2]/50 hover:shadow-[0_0_30px_rgba(0,209,178,0.15)] transition-all duration-300">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p class="section-label mb-2">Accredited Worldwide</p>
            <h3 class="font-display font-bold text-2xl text-white">Full Defense &amp; Aerospace Compliance</h3>
            <p class="font-body font-light text-xs sm:text-sm text-[#9db4c8] mt-2">All hardware manufactured under stringent ISO 9001 and MIL-STD-810H environmental stress screening.</p>
          </div>
          <div class="flex flex-wrap items-center gap-3">
            <span v-for="std in standards" :key="std" class="px-4 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-xs font-mono text-cyan-300 font-semibold shadow-xs">
              {{ std }}
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Our Story & Heritage — TERRABYTE Geosystems Indonesia',
  meta: [
    {
      name: 'description',
      content: 'Discover the 15-year journey of TERRABYTE Geosystems: from a sovereign RF electronics lab in Jakarta to a globally certified aerospace and radar technology leader.',
    },
  ],
})

const coreValues = [
  {
    num: 1,
    title: 'Zero Compromise on Integrity',
    desc: 'Positioning and radar signals in mission-critical environments cannot afford drift, false-locks, or unverified approximations.',
    badge: 'Precision First',
  },
  {
    num: 2,
    title: '100% Sovereign Domestic IP',
    desc: 'We design all RF front-ends, FPGA DSP algorithms, and mechanical housings domestically with zero foreign backdoors.',
    badge: 'National Security',
  },
  {
    num: 3,
    title: 'Air-Gapped Autonomous Compute',
    desc: 'Our sensor fusion engines execute entirely on edge hardware with zero mandatory cloud connectivity or external subscriptions.',
    badge: 'Zero Cloud Lock-in',
  },
  {
    num: 4,
    title: 'Open Standard Interoperability',
    desc: 'Full native compatibility with NATO STANAG, ASTERIX, RTCM, and NMEA protocols for frictionless mission integration.',
    badge: 'Universal Connect',
  },
]

const leaders = [
  {
    name: 'Ir. Budi Santoso, M.Eng.',
    role: 'Chief Executive & Co-Founder',
    experience: '22+ Yrs Experience',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face&auto=format',
    bio: 'Former senior satellite communication engineer at national aerospace institutes; founded Terrabyte to pioneer sovereign GNSS receivers.',
  },
  {
    name: 'Dr. Henrik Lindqvist',
    role: 'Chief Technology Officer',
    experience: '19+ Yrs RF & Phased Array',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face&auto=format',
    bio: 'Pioneered digital beamforming algorithms in Delft; leads radar architecture and high-frequency FPGA sensor fusion stacks.',
  },
  {
    name: 'Siti Rahmawati, S.T., M.Sc.',
    role: 'VP of Geodetic Systems',
    experience: '16+ Yrs Satellite Geodesy',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face&auto=format',
    bio: 'Expert in crustal deformation modeling and RTK carrier phase ambiguity resolution across equatorial ionospheric zones.',
  },
  {
    name: 'Capt. Ahmad Fauzi',
    role: 'Director of Maritime Operations',
    experience: '18+ Yrs Hydrographic Survey',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face&auto=format',
    bio: 'Former naval hydrographer overseeing vessel traffic service (VTS) radar installations across strategic archipelagic straits.',
  },
]

const standards = [
  'STANAG 4586',
  'ICAO Annex 10',
  'IMO IEC 61162',
  'ISO 9001:2015',
  'DO-178C Level B',
  'RTCA DO-160G',
  'MIL-STD-810H',
]
</script>
