<template>
  <div class="py-24 lg:py-28">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">

      <!-- Header Section -->
      <div class="mb-16">
        <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00d1b2]/10 border border-[#00d1b2]/30 mb-4">
          <span class="w-2 h-2 rounded-full bg-[#00d1b2] animate-pulse"></span>
          <span class="font-ui text-xs font-semibold tracking-widest uppercase text-[#00d1b2]">Domain Solutions</span>
        </div>
        <h1 class="font-display font-bold text-4xl lg:text-5xl tracking-wide text-white leading-tight">
          MISSION-CRITICAL ARCHITECTURES<br />
          ACROSS STRATEGIC SECTORS
        </h1>
        <p class="font-body font-light text-base leading-relaxed text-[#9db4c8] mt-4 max-w-3xl">
          High-integrity positioning, phased-array radar, and autonomous sensor fusion platforms engineered to operate reliably in contested RF environments and mission-critical operations.
        </p>
      </div>

      <!-- 6 Sector Elegant Cards Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div
          v-for="(sol, idx) in solutionsList"
          :key="sol.num"
          class="relative group p-8 rounded-2xl bg-[#092c4a]/40 hover:bg-[#0c375b]/60 backdrop-blur-md border border-white/10 hover:border-[#00d1b2]/50 transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,209,178,0.12)] flex flex-col justify-between overflow-hidden"
        >
          <!-- Subtle Top Right Ambient Glow -->
          <div class="absolute -top-10 -right-10 w-32 h-32 bg-[#00d1b2]/5 rounded-full blur-2xl group-hover:bg-[#00d1b2]/15 transition-all duration-500 pointer-events-none"></div>

          <!-- Top Row: Icon + Number Index -->
          <div>
            <div class="flex items-center justify-between mb-6">
              <div class="w-12 h-12 rounded-xl bg-[#00d1b2]/10 border border-[#00d1b2]/30 flex items-center justify-center text-[#00d1b2] group-hover:scale-110 group-hover:bg-[#00d1b2]/20 transition-all duration-300">
                <component :is="sol.icon" class="w-6 h-6" />
              </div>
              <span class="font-mono font-bold text-2xl text-[#00d1b2]/40 group-hover:text-[#00d1b2] transition-colors">
                {{ sol.num }}
              </span>
            </div>

            <!-- Title & Description -->
            <h2 class="font-display font-bold text-xl tracking-wide text-white mb-3 group-hover:text-cyan-100 transition-colors">
              {{ sol.title }}
            </h2>
            <p class="font-body font-light text-sm leading-relaxed text-[#9db4c8] mb-6">
              {{ sol.desc }}
            </p>
          </div>

          <!-- Bottom Footer: Compliance Standard -->
          <div class="pt-5 border-t border-white/10 flex items-center justify-between">
            <span class="font-ui text-[11px] tracking-wider uppercase text-[#6c889f] group-hover:text-[#9db4c8] transition-colors flex items-center space-x-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-[#00d1b2]/70"></span>
              <span>{{ sol.compliance }}</span>
            </span>
            <NuxtLink to="/contact" class="text-xs font-semibold text-[#00d1b2] hover:text-white flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Inquire</span>
              <span>&rarr;</span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Sector Capabilities Highlight Banner -->
      <div class="mt-20 p-8 md:p-12 bg-gradient-to-r from-[#07253d]/90 via-[#0a3556]/80 to-[#07253d]/90 backdrop-blur-md border border-[#00d1b2]/25 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_12px_40px_rgba(0,209,178,0.08)]">
        <div class="space-y-2 max-w-2xl">
          <div class="flex items-center space-x-2">
            <span class="px-2.5 py-0.5 rounded-full bg-[#00d1b2]/20 text-[#00d1b2] font-ui text-[11px] font-bold uppercase tracking-wider">Engineering SLA & Custom Integration</span>
          </div>
          <h3 class="font-display font-bold text-2xl text-white">Need a Specialized Custom Architecture?</h3>
          <p class="font-body font-light text-sm leading-relaxed text-[#9db4c8]">
            Our field applications engineering team provides on-site geodetic calibration, custom protocol translation, and 24/7 mission support across Southeast Asia.
          </p>
        </div>
        <NuxtLink to="/contact" class="btn-primary flex-shrink-0 whitespace-nowrap shadow-lg">
          Speak With An Engineer &rarr;
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'

useHead({
  title: 'Application Solutions — TERRABYTE Geosystems Indonesia',
  meta: [
    {
      name: 'description',
      content: 'Mission-critical positioning, radar integration, and sensor fusion architectures across Maritime, Airspace, Critical Infrastructure, Defense, Agriculture, and Intelligent Transport.'
    }
  ]
})

// Custom SVG Icons for each domain
const MaritimeIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', strokeWidth: '1.5', viewBox: '0 0 24 24' }, [
    h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253' }),
  ])

const AirspaceIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', strokeWidth: '1.5', viewBox: '0 0 24 24' }, [
    h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5' }),
  ])

const InfrastructureIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', strokeWidth: '1.5', viewBox: '0 0 24 24' }, [
    h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' }),
  ])

const DefenseIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', strokeWidth: '1.5', viewBox: '0 0 24 24' }, [
    h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' }),
  ])

const AgricultureIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', strokeWidth: '1.5', viewBox: '0 0 24 24' }, [
    h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M12 3v18m0-18l-8 8m8-8l8 8M4 11a8 8 0 0116 0' }),
  ])

const TransportIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', strokeWidth: '1.5', viewBox: '0 0 24 24' }, [
    h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z' }),
  ])

const solutionsList = [
  {
    num: '01',
    icon: MaritimeIcon,
    title: 'Maritime Navigation & VTS',
    desc: 'High-integrity positioning and radar integration for port traffic services, vessel tracking, and offshore operations. Compliant with IMO and IEC 61162 standards.',
    compliance: 'IMO · IEC 61162 · IHO S-44',
  },
  {
    num: '02',
    icon: AirspaceIcon,
    title: 'Airspace Surveillance',
    desc: 'Multi-sensor fusion for approach, terminal, and en-route radar. ASTERIX CAT 48/62 output integrates directly with ATM platforms.',
    compliance: 'ASTERIX Cat. 48/62 · DO-178C',
  },
  {
    num: '03',
    icon: InfrastructureIcon,
    title: 'Critical Infrastructure',
    desc: 'Continuous structural deformation monitoring for bridges, dams, and tunnels using network RTK with sub-millimeter sensitivity.',
    compliance: 'Network RTK · < 1mm Precision',
  },
  {
    num: '04',
    icon: DefenseIcon,
    title: 'Defense & Border Security',
    desc: 'Classification-grade sensor fusion for perimeter surveillance, drone detection, and tactical positioning in congested RF environments.',
    compliance: 'STANAG 4586 · MIL-STD-810H',
  },
  {
    num: '05',
    icon: AgricultureIcon,
    title: 'Precision Agriculture',
    desc: 'Sub-centimeter RTK GNSS guidance for autonomous machinery, variable-rate application mapping, and field boundary management.',
    compliance: 'ISOBUS · Dual Frequency RTK',
  },
  {
    num: '06',
    icon: TransportIcon,
    title: 'Intelligent Transport & V2X',
    desc: 'Vehicle-to-infrastructure positioning, cooperative awareness, and traffic management backed by GNSS-grade timing references.',
    compliance: 'IEEE 1588 PTP · V2X Standards',
  },
]
</script>
