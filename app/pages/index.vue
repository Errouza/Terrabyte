<template>
  <div>
    <!-- ─── HERO SECTION ──────────────────────────────────────────────── -->
    <section class="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      <!-- Background Radar Overlay & Ambient Glows -->
      <div class="absolute inset-0 dot-grid opacity-35 pointer-events-none"></div>
      <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[750px] h-[500px] bg-[#00d1b2]/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div class="absolute bottom-10 right-10 w-[400px] h-[300px] bg-[#3B82F6]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <!-- Radiant Neon Light Beams (Speed/Laser Effect) -->
      <div class="absolute -top-20 -right-20 w-[900px] h-[120px] neon-light-beam"></div>
      <div class="absolute top-1/3 -left-32 w-[700px] h-[80px] neon-light-beam opacity-30"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-10">
        <div class="max-w-3.5xl">
          <!-- Live Telemetry Status Pill -->
          <div class="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#00d1b2]/10 border border-[#00d1b2]/30 mb-6 backdrop-blur-md">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d1b2] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-[#00d1b2]"></span>
            </span>
            <span class="font-ui text-xs font-semibold tracking-widest uppercase text-[#00d1b2]">
              Sovereign Geodesy &amp; Radar Integration
            </span>
          </div>

          <!-- Hero Headline -->
          <h1 class="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-wide text-white leading-[1.1] mb-6">
            PRECISION POSITIONING &amp;<br />
            RADAR SURVEILLANCE FOR<br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00d1b2] via-[#5ce6d4] to-[#60A5FA] neon-text">
              CRITICAL ENVIRONMENTS
            </span>
          </h1>

          <!-- Subtitle -->
          <p class="font-body font-light text-base sm:text-lg leading-relaxed text-[#9db4c8] max-w-2xl mb-10">
            Terrabyte Geosystems designs and manufactures high-integrity GNSS receivers, solid-state phased-array radar, and autonomous sensor fusion engines engineered for zero-compromise sovereign missions.
          </p>

          <!-- CTAs -->
          <div class="flex flex-wrap items-center gap-4">
            <NuxtLink to="/products" class="btn-primary shadow-[0_0_25px_rgba(0,209,178,0.4)]">
              <span>Explore Platforms</span>
              <span>&rarr;</span>
            </NuxtLink>
            <NuxtLink to="/solutions" class="btn-outline">
              Domain Solutions
            </NuxtLink>
            <NuxtLink to="/contact" class="px-5 py-3 text-xs font-semibold tracking-wider text-[#9db4c8] hover:text-white uppercase transition-colors">
              Speak With An Engineer &rarr;
            </NuxtLink>
          </div>
        </div>

        <!-- 4-Stat Metric Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-20 pt-10 border-t border-white/10">
          <div v-for="stat in heroStats" :key="stat.label" class="p-5 rounded-2xl neon-card group cursor-default">
            <div class="stat-num text-[#00d1b2] group-hover:text-cyan-200 transition-colors" style="text-shadow: 0 0 16px rgba(0,209,178,0.5);">{{ stat.value }}</div>
            <div class="font-ui text-xs font-semibold tracking-wider uppercase text-white mt-1.5">{{ stat.label }}</div>
            <div class="font-body font-light text-[11px] text-[#6c889f] mt-0.5">{{ stat.sub }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 4 CORE PILLARS (Tactical Glass Cards) ───────────────────────── -->
    <section class="py-24 relative z-10 border-t border-white/10">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="max-w-2xl mb-16">
          <p class="section-label mb-3">Core Engineering Tenets</p>
          <h2 class="font-display font-bold text-3xl sm:text-4xl text-white tracking-wide">
            MISSION-CRITICAL HARDENING
          </h2>
          <p class="font-body font-light text-sm sm:text-base text-[#9db4c8] mt-3">
            Every hardware subsystem and sensor algorithm is developed to eliminate common points of failure in congested or contested electromagnetic zones.
          </p>
        </div>

        <!-- Distinctive Tactical Cards with Corner Accents -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="pillar in pillars"
            :key="pillar.title"
            class="relative group p-7 neon-card flex flex-col justify-between overflow-hidden"
          >
            <!-- Glowing top accent gradient line -->
            <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00d1b2]/0 group-hover:via-[#00d1b2] to-transparent transition-all duration-500"></div>

            <!-- Ambient Glow Effect -->
            <div class="absolute -top-12 -right-12 w-28 h-28 bg-[#00d1b2]/5 rounded-full blur-xl group-hover:bg-[#00d1b2]/15 transition-all duration-500 pointer-events-none"></div>

            <div>
              <!-- Icon Header + Tactical Tag -->
              <div class="flex items-center justify-between mb-6">
                <div class="w-12 h-12 rounded-xl bg-[#00d1b2]/10 border border-[#00d1b2]/30 flex items-center justify-center text-[#00d1b2] group-hover:scale-110 group-hover:bg-[#00d1b2]/20 transition-all duration-300">
                  <component :is="pillar.icon" class="w-6 h-6" />
                </div>
                <span class="font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded bg-white/5 border border-white/10 text-cyan-300/80">
                  {{ pillar.tag }}
                </span>
              </div>

              <!-- Title & Description -->
              <h3 class="font-display font-bold text-lg text-white mb-3 group-hover:text-cyan-100 transition-colors">
                {{ pillar.title }}
              </h3>
              <p class="font-body font-light text-xs sm:text-sm leading-relaxed text-[#9db4c8]">
                {{ pillar.description }}
              </p>
            </div>

            <!-- Bottom Tactical Indicator -->
            <div class="pt-5 mt-6 border-t border-white/10 flex items-center justify-between">
              <span class="font-mono text-[10px] text-[#6c889f] uppercase tracking-widest flex items-center space-x-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-[#00d1b2]"></span>
                <span>SEC-VERIFIED</span>
              </span>
              <span class="text-[#00d1b2] text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                &rarr;
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── MULTI-LAYER ARCHITECTURE CONSOLE ──────────────────────────── -->
    <section class="py-24 bg-[#051d33]/50 relative border-t border-white/10">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="max-w-2xl mb-14">
          <p class="section-label mb-3">End-to-End System Architecture</p>
          <h2 class="font-display font-bold text-3xl sm:text-4xl text-white tracking-wide">
            THE TERRABYTE FUSION STACK
          </h2>
          <p class="font-body font-light text-sm sm:text-base text-[#9db4c8] mt-3">
            An integrated four-tier architecture connecting raw RF front-ends to zero-latency situational mission control.
          </p>
        </div>

        <div class="grid lg:grid-cols-12 gap-8 items-start">
          <!-- Left Layer Selector (Interactive Tabs) -->
          <div class="lg:col-span-5 space-y-3">
            <button
              v-for="(layer, idx) in architectureLayers"
              :key="layer.id"
              @click="activeLayerIndex = idx"
              class="w-full text-left p-5 rounded-2xl transition-all duration-300 border flex items-center justify-between group cursor-pointer"
              :class="activeLayerIndex === idx
                ? 'neon-glass-frame translate-x-1'
                : 'neon-card'"
            >
              <div class="space-y-1">
                <div class="flex items-center space-x-2.5">
                  <span class="w-2 h-2 rounded-full" :class="activeLayerIndex === idx ? 'bg-[#00d1b2] shadow-[0_0_8px_#00d1b2]' : 'bg-gray-600'"></span>
                  <span class="font-mono text-xs font-semibold" :class="activeLayerIndex === idx ? 'text-[#00d1b2]' : 'text-[#6c889f]'">
                    0{{ idx + 1 }} // {{ layer.badge }}
                  </span>
                </div>
                <h4 class="font-display font-bold text-base text-white group-hover:text-cyan-200 transition-colors">{{ layer.title }}</h4>
              </div>
              <span class="text-sm font-bold" :class="activeLayerIndex === idx ? 'text-[#00d1b2]' : 'text-gray-600'">&rarr;</span>
            </button>
          </div>

          <!-- Right Telemetry Terminal (HUD Showcase) -->
          <div class="lg:col-span-7 p-8 sm:p-10 neon-glass-frame relative overflow-hidden">
            <!-- Corner Brackets HUD -->
            <div class="absolute top-4 left-4 text-[#00d1b2]/40 font-mono text-xs">+</div>
            <div class="absolute top-4 right-4 text-[#00d1b2]/40 font-mono text-xs">+</div>
            <div class="absolute bottom-4 left-4 text-[#00d1b2]/40 font-mono text-xs">+</div>
            <div class="absolute bottom-4 right-4 text-[#00d1b2]/40 font-mono text-xs">+</div>

            <div class="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <span class="font-mono text-xs text-[#00d1b2] uppercase tracking-wider font-semibold">
                {{ currentLayer.badge }} // TELEMETRY TERMINAL
              </span>
              <span class="font-mono text-[11px] text-[#6c889f]">STATUS: LIVE 100% NOMINAL</span>
            </div>

            <h3 class="font-display font-bold text-2xl text-white mb-3">{{ currentLayer.heading }}</h3>
            <p class="font-body font-light text-sm leading-relaxed text-[#9db4c8] mb-8">{{ currentLayer.description }}</p>

            <!-- Spec Grid -->
            <div class="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div v-for="spec in currentLayer.specs" :key="spec.label" class="p-3.5 rounded-xl bg-black/30 border border-white/5">
                <span class="font-mono text-[10px] text-[#6c889f] block uppercase tracking-wider">{{ spec.label }}</span>
                <span class="font-mono font-bold text-sm text-white mt-1 block text-[#00d1b2]">{{ spec.value }}</span>
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
            <p class="section-label mb-3">Field Deployments</p>
            <h2 class="font-display font-bold text-3xl sm:text-4xl text-white tracking-wide">
              PROVEN IN CRITICAL THEATRES
            </h2>
          </div>
          <NuxtLink to="/solutions" class="btn-outline self-start md:self-auto">
            View All Sectors &rarr;
          </NuxtLink>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="mission in missions"
            :key="mission.title"
            class="group neon-card overflow-hidden flex flex-col justify-between"
          >
            <div class="relative h-52 overflow-hidden">
              <img :src="mission.image" :alt="mission.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-[#092c4a] via-transparent to-transparent opacity-90"></div>
              <div class="absolute top-3 left-3">
                <span class="font-ui text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900/80 text-[#00d1b2] border border-[#00d1b2]/30 backdrop-blur-md">
                  {{ mission.sector }}
                </span>
              </div>
            </div>

            <div class="p-6 space-y-4 flex-grow flex flex-col justify-between">
              <div>
                <h3 class="font-display font-bold text-lg text-white group-hover:text-cyan-200 transition-colors">{{ mission.title }}</h3>
                <p class="font-body font-light text-xs leading-relaxed text-[#9db4c8] mt-2">{{ mission.summary }}</p>
              </div>

              <div class="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span class="font-mono text-[10px] text-[#6c889f] block uppercase">{{ mission.metricLabel }}</span>
                  <span class="font-mono font-bold text-xs text-white">{{ mission.metricValue }}</span>
                </div>
                <span class="text-[#00d1b2] text-xs font-bold">&rarr;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── ENTERPRISE TESTIMONIALS ──────────────────────────────────── -->
    <section class="py-24 bg-[#051d33]/60 border-t border-white/10">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="max-w-2xl mb-16">
          <p class="section-label mb-3">Partner Endorsements</p>
          <h2 class="font-display font-bold text-3xl sm:text-4xl text-white tracking-wide">
            TRUSTED BY NATIONAL AUTHORITIES
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
        <div class="p-10 md:p-14 rounded-3xl bg-gradient-to-r from-[#07253d]/90 via-[#0b3e64]/80 to-[#07253d]/90 border border-white/15 hover:border-[#00d1b2]/50 hover:shadow-[0_0_30px_rgba(0,209,178,0.2)] transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-8">
          <div class="max-w-2xl space-y-2">
            <span class="font-ui text-xs font-bold tracking-widest text-[#00d1b2] uppercase">Direct Technical Consultation</span>
            <h3 class="font-display font-bold text-3xl text-white">Ready to Architect Your Mission System?</h3>
            <p class="font-body font-light text-sm text-[#9db4c8]">
              Connect with our senior RF and geodetic engineers to review datasheets, run simulation modeling, or schedule an on-site demonstration.
            </p>
          </div>
          <NuxtLink to="/contact" class="btn-primary shadow-xl whitespace-nowrap">
            Schedule Engineering Briefing &rarr;
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, h } from 'vue'

useHead({
  title: 'TERRABYTE Geosystems Indonesia — Sovereign Geodesy & Radar Systems',
  meta: [
    {
      name: 'description',
      content: 'High-integrity GNSS positioning receivers, solid-state phased-array radar, and autonomous sensor fusion engines engineered for critical operations across Indonesia and Southeast Asia.',
    },
  ],
})

// 1. Hero Stats
const heroStats = [
  { value: '< 1 mm', label: 'Network RTK Sensitivity', sub: 'Sub-millimeter baseline stability' },
  { value: '250 km', label: 'Radar Coverage Radius', sub: 'Solid-state phased-array range' },
  { value: '100%', label: 'Sovereign Domestic IP', sub: 'Zero mandatory external cloud dependencies' },
  { value: '15+ Yrs', label: 'Field-Proven Track Record', sub: 'Deployed across critical archipelagic straits' },
]

// 2. Multi-Layer Architecture
const activeLayerIndex = ref(0)

const architectureLayers = [
  {
    id: 'sensor',
    title: 'Multi-Constellation GNSS Receivers',
    badge: 'Layer 01 // Hardware Subsystems',
    heading: 'High-Integrity Multi-Band RF Receivers',
    description: 'Triple-frequency tracking across GPS, GLONASS, Galileo, and BeiDou with embedded anti-jamming spatial filters and ionospheric equatorial scintillation mitigation.',
    specs: [
      { label: 'Tracking Channels', value: '1,408 Channels' },
      { label: 'RTK Baseline', value: 'Sub-Millimeter' },
      { label: 'Jamming Protection', value: 'Spatial Nulling' },
    ],
  },
  {
    id: 'radar',
    title: 'Solid-State Phased-Array Radar',
    badge: 'Layer 02 // Surveillance Radar',
    heading: 'Digital Beamforming & Microsecond Target Tracking',
    description: 'S-band solid-state active electronically steered array (AESA) radar providing 360° situational tracking for maritime traffic, coastal borders, and low-altitude uncrewed aerial systems.',
    specs: [
      { label: 'Coverage', value: '250 km Radius' },
      { label: 'Resolution', value: '0.3° Azimuth' },
      { label: 'Scan Rate', value: '6 - 12 RPM Agility' },
    ],
  },
  {
    id: 'fusion',
    title: 'Autonomous Sensor Fusion',
    badge: 'Layer 03 // Edge Compute Core',
    heading: 'FPGA-Accelerated Real-Time Kalman Filtering',
    description: 'Tight integration of raw inertial measurement unit (IMU) acceleration, GNSS carrier phase, AIS vessel telemetry, and radar plots into a single uninterrupted position-velocity-time (PVT) truth state.',
    specs: [
      { label: 'Compute Latency', value: '< 5 ms End-to-End' },
      { label: 'Outage Holdover', value: '< 0.05% Drift/hr' },
      { label: 'Redundancy', value: 'Dual Fail-Safe Nodes' },
    ],
  },
  {
    id: 'command',
    title: 'Sovereign C2 Tactical Platform',
    badge: 'Layer 04 // Operational Picture',
    heading: 'Zero-Latency Sovereign Mission Control Software',
    description: 'Web-based tactical situational map displaying fused tracks, automatic collision prediction vectors, and geofenced alert triggers with zero cloud dependencies and air-gapped readiness.',
    specs: [
      { label: 'Simultaneous Tracks', value: '> 10,000 Targets' },
      { label: 'Architecture', value: 'Air-Gapped Sovereign' },
      { label: 'Compliance', value: 'IEC 62443 Security' },
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
    title: 'Anti-Jamming & EW Hardening',
    description: 'Multi-nulling spatial adaptive array antenna filters and digital signal sanitization to defeat spoofing and hostile RF interference.',
    tag: 'EW Protection',
  },
  {
    icon: OrbitIcon,
    title: 'Sub-Millimeter Geodetic Baseline',
    description: 'Continuous tectonic and infrastructure deformation monitoring with sub-millimeter precision for bridges, dams, and seismic fault lines.',
    tag: 'Millimeter RTK',
  },
  {
    icon: CpuIcon,
    title: 'Edge-First Air-Gapped Autonomy',
    description: 'Zero external cloud dependency. Dedicated FPGA signal processors process all sensor telemetry directly on-premise in real time.',
    tag: 'Zero Cloud Lock-in',
  },
  {
    icon: LockIcon,
    title: '100% Sovereign Domestic IP',
    description: 'Designed and manufactured in Indonesia with open, non-proprietary standards ensuring sovereign technology autonomy and NATO interoperability.',
    tag: 'Sovereign Integrity',
  },
]

// 4. Strategic Mission Profiles
const missions = [
  {
    title: 'Archipelagic Maritime Corridor',
    sector: 'Maritime Defense & Safety',
    image: '/images/solutions-marine.jpg',
    summary: '24/7 radar and AIS sensor fusion tracking over 120,000 critical vessel transits annually across the Malacca & Sunda Straits with integrated tsunami sensor telemetry.',
    metricLabel: 'Coverage Realm',
    metricValue: 'Sunda & Malacca Straits',
  },
  {
    title: 'Smart Capital Geodetic Grid',
    sector: 'IKN Nusantara Infrastructure',
    image: '/images/solutions-cadastre.jpg',
    summary: 'Multi-station continuous RTK GNSS network providing real-time millimeter-level reference baselines for autonomous construction fleets and UAV aerial surveys.',
    metricLabel: 'Positioning Sensitivity',
    metricValue: '< 5 mm Baseline Vector',
  },
  {
    title: 'Airspace Secondary Radar Net',
    sector: 'Airspace Surveillance',
    image: '/images/solutions-defense.jpg',
    summary: 'Phased-array secondary surveillance radar deployed across outer island chains, feeding ASTERIX CAT 48/62 track plots directly into national air traffic management.',
    metricLabel: 'Radar Detection Reach',
    metricValue: '250 km Radius / Node',
  },
]

// 5. Enterprise Testimonials
const testimonials = [
  {
    quote: 'Integrasi receiver GNSS multi-frekuensi Terrabyte pada stasiun CORS nasional memberikan stabilitas baseline sub-sentimeter tanpa degradasi sinyal saat terjadi badai ionosfer tropis.',
    author: 'Dr. Ir. Hendra Prasetyo, M.Sc.',
    role: 'Senior Geodetic Director',
    organization: 'National Survey Authority',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face&auto=format',
  },
  {
    quote: 'Radar solid-state dan engine sensor fusion Terrabyte berhasil mengotomatisasi pemantauan lebih dari 300 pergerakan kapal per hari dengan zero-downtime selama 3 tahun berturut-turut di perairan tersibuk.',
    author: 'Capt. Michael R. Sitorus',
    role: 'Head of Vessel Traffic Services (VTS)',
    organization: 'Port Operations Command',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&auto=format',
  },
  {
    quote: 'Untuk konstruksi skala masif di IKN, kecepatan akuisisi RTK Terrabyte di bawah 2 detik sangat menghemat waktu survei topografi dan pemancangan struktur kritis di medan yang menantang.',
    author: 'Ir. Dian Anggraini, IPU',
    role: 'Lead Infrastructure Geodesist',
    organization: 'IKN Strategic Projects',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face&auto=format',
  },
]
</script>
