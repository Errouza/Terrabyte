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
          <div class="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#052840]/90 border border-[#00d1b2]/40 text-[#00d1b2] text-xs font-mono tracking-wider mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(0,209,178,0.25)]">
            <span class="w-2 h-2 rounded-full bg-[#00d1b2] animate-ping"></span>
            <span class="w-2 h-2 rounded-full bg-[#00d1b2] -ml-4"></span>
            <span class="text-xs font-mono tracking-widest text-[#00E5FF] uppercase font-bold">
              ACTIVE // GEODESY &amp; RADAR DEFENSE DIVISION
            </span>
            <span class="text-white/30">|</span>
            <span class="text-white/70">TERRABYTE GEOSYSTEMS</span>
          </div>

          <!-- Hero Headline with Radiant High-Impact Neon Accents -->
          <h1 class="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-wide text-white leading-[1.1] mb-6">
            PRECISION POSITIONING &amp;<br>
            RADAR SURVEILLANCE FOR<br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00d1b2] via-[#5ce6d4] to-[#60A5FA] neon-text">
              CRITICAL ENVIRONMENTS
            </span>
          </h1>

          <!-- Subtitle -->
          <p class="font-body font-light text-base sm:text-lg text-[#9db4c8] leading-relaxed max-w-2xl mb-10">
            Carrier-phase GNSS precision, solid-state radar telemetry, and autonomous sensor fusion hardware engineered for severe operational environments across Indonesia's strategic archipelagic domains.
          </p>

          <!-- CTAs -->
          <div class="flex flex-wrap gap-4 items-center mb-16">
            <NuxtLink
              to="/products"
              class="btn-primary"
            >
              EXPLORE PLATFORMS
              <span class="ml-1 font-bold">→</span>
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="btn-secondary"
            >
              REQUEST BRIEFING
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

    <!-- ─── 4 CORE PILLARS (Tactical Glass Cards) ───────────────────────── -->
    <section class="py-24 relative z-10 border-t border-white/10">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="max-w-2xl mb-16">
          <p class="section-label mb-3">Core Engineering Tenets</p>
          <h2 class="font-display font-bold text-3xl sm:text-4xl text-white tracking-wide">
            MISSION-CRITICAL HARDENING
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
    <section class="py-24 bg-[#051d33]/50 relative border-t border-white/10">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="max-w-2xl mb-16">
          <p class="section-label mb-3">System Blueprint</p>
          <h2 class="font-display font-bold text-3xl sm:text-4xl text-white tracking-wide">
            MISSION ARCHITECTURE LAYERS
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
            <p class="section-label mb-3">Field Deployments</p>
            <h2 class="font-display font-bold text-3xl sm:text-4xl text-white tracking-wide">
              PROVEN IN CRITICAL THEATRES
            </h2>
          </div>
          <NuxtLink to="/solutions" class="text-sm font-ui font-semibold text-[#00d1b2] hover:underline inline-flex items-center gap-1.5">
            ALL STRATEGIC MISSIONS →
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
    <section class="py-24 bg-[#051d33]/60 border-t border-white/10">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="max-w-2xl mb-16">
          <p class="section-label mb-3">Partner Endorsements</p>
          <h2 class="font-display font-bold text-3xl sm:text-4xl text-white tracking-wide">
            TRUSTED BY STRATEGIC PARTNERS
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
          <div class="max-w-2xl space-y-3">
            <h3 class="font-display font-bold text-3xl text-white">Ready to Architect Your Mission System?</h3>
            <p class="text-[#9db4c8] text-base leading-relaxed">
              Consult directly with our defense systems engineers for technical datasheets, site evaluation, and integration protocols.
            </p>
          </div>
          <NuxtLink to="/contact" class="btn-primary whitespace-nowrap px-8 py-4 text-sm font-bold tracking-wider">
            CONTACT ENGINEERING TEAM →
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
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

// 5. Strategic Testimonials & Partner Endorsements (Includes BSS Example)
const testimonials = [
  {
    quote: 'Hasil dari pengerjaan yang dilakukan adalah hasil terbaik yang kami dapatkan hingga saat ini, perkembangan teknologi yang terus membantu dunia pertambangan ini lah yang sangat di butuhkan kedepannya.',
    author: 'Fulan Alfulan',
    role: 'Head Direction',
    organization: 'BSS Mining & Energy Services',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&auto=format',
  },
  {
    quote: 'Integrasi receiver GNSS multi-frekuensi Terrabyte pada stasiun CORS nasional memberikan stabilitas baseline sub-sentimeter tanpa degradasi sinyal saat terjadi badai ionosfer tropis.',
    author: 'Dr. Ir. Hendra Prasetyo, M.Sc.',
    role: 'Senior Geodetic Director',
    organization: 'National Survey Authority',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face&auto=format',
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
