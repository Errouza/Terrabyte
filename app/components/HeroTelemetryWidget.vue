<template>
  <div class="rounded-3xl p-4 sm:p-5 bg-[#041220]/95 border border-[#18b8ea]/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden backdrop-blur-xl select-none group w-full">
    
    <!-- Subtle Ambient Cyan Glow in Corner -->
    <div class="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#18b8ea]/10 blur-[100px] pointer-events-none"></div>

    <!-- ─── TOP HEADER BAR ─────────────────────────────────────────── -->
    <div class="flex items-center justify-between pb-2.5 border-b border-white/5 relative z-10 gap-2">
      <!-- Brand Identifier -->
      <div class="flex items-center gap-2">
        <div class="w-5 h-5 rounded-md bg-[#18b8ea]/15 border border-[#18b8ea]/30 flex items-center justify-center text-[#18b8ea]">
          <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 12h4l3 8 4-16 3 8h4" />
          </svg>
        </div>
        <span class="font-mono text-[11px] font-bold text-[#cbd5e1] tracking-[0.2em] uppercase">
          TERRAPULSE-AI
        </span>
      </div>

      <!-- Live Stream Pill with Real-time Clock Sync -->
      <div class="flex items-center gap-1.5">
        <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 font-semibold shadow-sm">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>LIVE · SYNC {{ syncTime }}</span>
        </span>
      </div>
    </div>

    <!-- ─── TITLE & TIMEFRAME SELECTOR ─────────────────────────────── -->
    <div class="pt-2.5 pb-1 relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
      <div>
        <h3 class="font-display font-bold text-lg sm:text-xl text-white tracking-tight leading-tight">
          Slope displacement trend
        </h3>
        <p class="font-body text-[11px] text-[#64748b] tracking-wide mt-0.5">
          Smart Radar Monitoring Project · point HW IPD 90_3
        </p>
      </div>

      <!-- 24H / 7D / 30D Selector -->
      <div class="inline-flex rounded-lg bg-[#020b14] border border-white/10 p-0.5 text-[11px] font-mono self-start sm:self-auto">
        <button
          v-for="tf in (['24H', '7D', '30D'] as const)"
          :key="tf"
          type="button"
          @click="selectedTimeframe = tf"
          class="px-2.5 py-0.5 rounded-md transition-all duration-200 font-bold tracking-wide"
          :class="selectedTimeframe === tf 
            ? 'bg-[#18b8ea] text-[#020b14] shadow-[0_0_10px_rgba(24,184,234,0.4)]' 
            : 'text-[#64748b] hover:text-white'"
        >
          {{ tf }}
        </button>
      </div>
    </div>

    <!-- ─── 4 METRIC KPI CARDS ROW ─────────────────────────────────── -->
    <div class="grid grid-cols-4 gap-2 my-2.5 relative z-10">
      
      <!-- Card 1: POINTS -->
      <div class="p-2 sm:p-2.5 rounded-xl bg-[#020b14]/80 border border-white/5">
        <span class="block font-mono text-[9px] text-[#64748b] uppercase tracking-wider font-semibold">
          POINTS
        </span>
        <span class="block font-display font-bold text-lg sm:text-xl text-white mt-0.5 leading-none">
          {{ activeData.points }}
        </span>
      </div>

      <!-- Card 2: AVG VELOCITY -->
      <div class="p-2 sm:p-2.5 rounded-xl bg-[#020b14]/80 border border-white/5">
        <span class="block font-mono text-[9px] text-[#64748b] uppercase tracking-wider font-semibold">
          AVG VELOCITY
        </span>
        <div class="font-display font-bold text-lg sm:text-xl text-white mt-0.5 flex items-baseline gap-1 leading-none">
          <span>{{ activeData.avgVelocity }}</span>
          <span class="text-[10px] font-normal text-[#64748b]">mm/d</span>
        </div>
      </div>

      <!-- Card 3: VELOCITY TREND -->
      <div class="p-2 sm:p-2.5 rounded-xl bg-[#020b14]/80 border border-white/5">
        <span class="block font-mono text-[9px] text-[#64748b] uppercase tracking-wider font-semibold">
          VELOCITY TREND
        </span>
        <span class="block font-display font-bold text-lg sm:text-xl text-[#f59e0b] mt-0.5 leading-none">
          {{ activeData.velocityTrend }}
        </span>
      </div>

      <!-- Card 4: ACTIVE ALERTS -->
      <div class="p-2 sm:p-2.5 rounded-xl bg-[#020b14]/80 border border-white/5">
        <span class="block font-mono text-[9px] text-[#64748b] uppercase tracking-wider font-semibold">
          ACTIVE ALERTS
        </span>
        <span class="block font-display font-bold text-lg sm:text-xl text-emerald-400 mt-0.5 leading-none">
          {{ activeData.activeAlerts }}
        </span>
      </div>

    </div>

    <!-- ─── COMPACT CHART SECTION (EXACT MATCH TO REFERENCE SCREENSHOT) ────── -->
    <div class="rounded-xl bg-[#020b14]/90 border border-white/5 p-3 sm:p-3.5 relative overflow-hidden z-10">
      
      <!-- SVG Canvas -->
      <div class="w-full relative">
        <svg
          class="w-full h-auto overflow-visible"
          viewBox="0 0 500 155"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <!-- Cyan-to-Amber Curve Gradient matching Screenshot -->
            <linearGradient id="curveLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#0284c7" />
              <stop offset="35%" stop-color="#0ea5e9" />
              <stop offset="72%" stop-color="#38cbf8" />
              <stop offset="86%" stop-color="#f59e0b" />
              <stop offset="100%" stop-color="#fbbf24" />
            </linearGradient>

            <!-- Subtle Area Gradient under Curve -->
            <linearGradient id="curveAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#18b8ea" stop-opacity="0.20" />
              <stop offset="80%" stop-color="#18b8ea" stop-opacity="0.03" />
              <stop offset="100%" stop-color="#18b8ea" stop-opacity="0" />
            </linearGradient>

            <!-- Acceleration Zone Subtle Gradient -->
            <linearGradient id="accelZoneGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#18b8ea" stop-opacity="0.02" />
              <stop offset="100%" stop-color="#18b8ea" stop-opacity="0.08" />
            </linearGradient>

            <!-- Glow Filter for the Electric Line -->
            <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <!-- Reference Grid Threshold Lines -->
          <!-- Threshold 1: CRITICAL · 200 mm -->
          <g>
            <text x="30" y="22" fill="#f43f5e" font-size="8.5" font-family="monospace" font-weight="600" opacity="0.9">
              CRITICAL · 200 mm
            </text>
            <line x1="30" y1="27" x2="475" y2="27" stroke="#f43f5e" stroke-width="1.1" stroke-dasharray="4 4" stroke-opacity="0.45" />
          </g>

          <!-- Threshold 2: WARNING · 100 mm -->
          <g>
            <text x="30" y="64" fill="#f59e0b" font-size="8.5" font-family="monospace" font-weight="600" opacity="0.9">
              WARNING · 100 mm
            </text>
            <line x1="30" y1="69" x2="475" y2="69" stroke="#f59e0b" stroke-width="1.1" stroke-dasharray="4 4" stroke-opacity="0.45" />
          </g>

          <!-- Acceleration Shaded Zone on Right (exact match to screenshot) -->
          <g>
            <rect
              x="370"
              y="14"
              width="105"
              height="112"
              rx="4"
              fill="url(#accelZoneGrad)"
              stroke="rgba(24,184,234,0.1)"
              stroke-width="1"
            />
            <line x1="370" y1="14" x2="370" y2="126" stroke="rgba(24,184,234,0.22)" stroke-width="1" stroke-dasharray="3 3" />
          </g>

          <!-- Area fill beneath cyan curve -->
          <path
            :d="activeData.areaPath"
            fill="url(#curveAreaGrad)"
            class="transition-all duration-700 ease-out"
          />

          <!-- Main Electric Cyan & Amber Curve (calming blue data line, NO alarm red!) -->
          <path
            :d="activeData.linePath"
            stroke="url(#curveLineGrad)"
            stroke-width="2.8"
            stroke-linecap="round"
            filter="url(#cyanGlow)"
            class="transition-all duration-700 ease-out"
          />

          <!-- Active End Point Callout & Badges -->
          <g class="transition-all duration-700 ease-out" :transform="`translate(${activeData.endPoint.x}, ${activeData.endPoint.y})`">
            <!-- Pulsing outer halo -->
            <circle cx="0" cy="0" r="7" fill="#f59e0b" fill-opacity="0.25">
              <animate attributeName="r" values="6;12;6" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0.1;0.8" dur="2.4s" repeatCount="indefinite" />
            </circle>

            <!-- Amber marker dot with white border -->
            <circle cx="0" cy="0" r="4" fill="#f59e0b" stroke="#ffffff" stroke-width="1.8" />

            <!-- Guide line from tooltip to dot -->
            <line x1="-24" y1="-14" x2="0" y2="0" stroke="rgba(255,255,255,0.2)" stroke-width="1" stroke-dasharray="2 2" />

            <!-- Value Badge Callout Tooltip: 85.4 mm -->
            <g transform="translate(-54, -25)">
              <rect x="0" y="0" width="54" height="19" rx="9.5" fill="#041220" stroke="rgba(255,255,255,0.3)" stroke-width="1" />
              <text x="27" y="13" fill="#ffffff" font-size="9.5" font-family="monospace" font-weight="700" text-anchor="middle">
                {{ activeData.currentMm }}
              </text>
            </g>

            <!-- ACCELERATING Badge Callout inside shaded zone -->
            <g transform="translate(-76, 9)">
              <rect x="0" y="0" width="74" height="17" rx="3.5" fill="#f59e0b" fill-opacity="0.12" stroke="#f59e0b" stroke-opacity="0.5" stroke-width="1" />
              <text x="37" y="11.5" fill="#f59e0b" font-size="7.5" font-family="monospace" font-weight="700" text-anchor="middle" letter-spacing="0.5">
                ACCELERATING
              </text>
            </g>
          </g>

          <!-- Time Labels on bottom horizontal baseline -->
          <line x1="30" y1="126" x2="475" y2="126" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
          <text x="30" y="142" fill="#64748b" font-size="9" font-family="monospace">{{ activeData.timeLabels[0] }}</text>
          <text x="175" y="142" fill="#64748b" font-size="9" font-family="monospace">{{ activeData.timeLabels[1] }}</text>
          <text x="320" y="142" fill="#64748b" font-size="9" font-family="monospace">{{ activeData.timeLabels[2] }}</text>
          <g transform="translate(450, 142)">
            <circle cx="-5" cy="-3" r="1.8" fill="#18b8ea" />
            <text x="0" y="0" fill="#cbd5e1" font-size="9" font-family="monospace" font-weight="600">{{ activeData.timeLabels[3] }}</text>
          </g>
        </svg>
      </div>

      <!-- Legend Row below SVG Chart -->
      <div class="flex flex-wrap items-center gap-4 pt-2.5 border-t border-white/5 text-[10px] font-mono text-[#64748b]">
        <div class="flex items-center gap-1.5">
          <span class="w-3 h-0.5 bg-[#18b8ea] rounded-full inline-block"></span>
          <span>Displacement</span>
        </div>
        <div class="flex items-center gap-1.5">
          <span class="w-3 h-0.5 border-b border-dashed border-[#f59e0b] inline-block"></span>
          <span>TARP thresholds</span>
        </div>
        <div class="flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-[#f59e0b] inline-block"></span>
          <span>Trend change</span>
        </div>
      </div>

    </div>

    <!-- ─── TWO METRIC PANELS: TARP STATUS & MOVEMENT CLASS ────────── -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 relative z-10">
      
      <!-- Panel 1: TARP STATUS -->
      <div class="p-2.5 sm:p-3 rounded-xl bg-[#020b14]/80 border border-white/5 flex flex-col justify-between">
        <div class="flex items-center justify-between mb-1.5">
          <span class="font-mono text-[9px] text-[#64748b] uppercase tracking-wider font-semibold">
            TARP STATUS
          </span>
          <!-- Mini 4-dot Status Indicator -->
          <div class="flex items-center gap-1">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span class="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
            <span class="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
            <span class="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
          </div>
        </div>

        <div class="grid grid-cols-4 gap-1 text-center py-0.5">
          <div>
            <span class="block font-display font-bold text-base sm:text-lg text-emerald-400 leading-tight">
              {{ activeData.tarpNormal }}
            </span>
            <span class="block text-[10px] text-[#94a3b8] font-medium">Normal</span>
          </div>
          <div>
            <span class="block font-display font-bold text-base sm:text-lg text-white leading-tight">0</span>
            <span class="block text-[10px] text-[#64748b]">Attention</span>
          </div>
          <div>
            <span class="block font-display font-bold text-base sm:text-lg text-white leading-tight">0</span>
            <span class="block text-[10px] text-[#64748b]">Warning</span>
          </div>
          <div>
            <span class="block font-display font-bold text-base sm:text-lg text-white leading-tight">0</span>
            <span class="block text-[10px] text-[#64748b]">Critical</span>
          </div>
        </div>

        <!-- Solid Green underline bar -->
        <div class="w-full h-1 bg-emerald-500 rounded-full mt-1.5"></div>
      </div>

      <!-- Panel 2: MOVEMENT CLASS -->
      <div class="p-2.5 sm:p-3 rounded-xl bg-[#020b14]/80 border border-white/5">
        <span class="block font-mono text-[9px] text-[#64748b] uppercase tracking-wider font-semibold mb-1.5">
          MOVEMENT CLASS
        </span>

        <div class="space-y-1.5 text-xs">
          <!-- Row 1: Static -->
          <div class="flex items-center justify-between gap-2.5">
            <span class="text-[10px] text-[#94a3b8] w-20 flex-shrink-0">Static</span>
            <div class="flex-1 bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div class="bg-[#18b8ea] h-full rounded-full" :style="`width: ${activeData.staticPercent}%`"></div>
            </div>
            <span class="font-mono text-[11px] text-white w-5 text-right font-semibold">{{ activeData.staticCount }}</span>
          </div>

          <!-- Row 2: Accelerating -->
          <div class="flex items-center justify-between gap-2.5">
            <span class="text-[10px] text-[#94a3b8] w-20 flex-shrink-0">Accelerating</span>
            <div class="flex-1 bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div class="bg-amber-400 h-full rounded-full" :style="`width: ${activeData.accelPercent}%`"></div>
            </div>
            <span class="font-mono text-[11px] text-white w-5 text-right font-semibold">{{ activeData.accelCount }}</span>
          </div>

          <!-- Row 3: Linear / Rapid -->
          <div class="flex items-center justify-between gap-2.5">
            <span class="text-[10px] text-[#94a3b8] w-20 flex-shrink-0">Linear / Rapid</span>
            <div class="flex-1 bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div class="bg-rose-500 h-full rounded-full" style="width: 0%"></div>
            </div>
            <span class="font-mono text-[11px] text-[#64748b] w-5 text-right">0</span>
          </div>
        </div>
      </div>

    </div>

    <!-- ─── BOTTOM AI SUMMARY BANNER ───────────────────────────────── -->
    <div class="mt-2 p-2.5 rounded-xl bg-[#020b14]/80 border border-white/5 flex items-start gap-2.5 relative z-10">
      <div class="w-6 h-6 rounded-md bg-[#18b8ea]/15 border border-[#18b8ea]/30 flex items-center justify-center text-[#18b8ea] flex-shrink-0 mt-0.5">
        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2v4m0 12v4M2 12h4m12 0h4m-3.5-6.5l-2.8 2.8m-7.4 7.4l-2.8 2.8m0-13l2.8 2.8m7.4 7.4l2.8 2.8" />
        </svg>
      </div>
      <div>
        <span class="font-mono text-[9px] text-[#18b8ea] tracking-wider uppercase font-bold block mb-0.5">
          AI SUMMARY
        </span>
        <p class="text-[11px] text-[#cbd5e1] leading-relaxed font-light">
          {{ activeData.summaryText }}
        </p>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

type Timeframe = '24H' | '7D' | '30D'
const selectedTimeframe = ref<Timeframe>('30D')

// Live Clock Sync formatted as "05:38"
const syncTime = ref('05:38')
let timer: any = null

onMounted(() => {
  const updateClock = () => {
    const d = new Date()
    const hh = String(d.getHours()).padStart(2, '0')
    const mm = String(d.getMinutes()).padStart(2, '0')
    syncTime.value = `${hh}:${mm}`
  }
  updateClock()
  timer = setInterval(updateClock, 30000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

// Data sets for each timeframe matching Image 2 exactly
const timeframeData = {
  '30D': {
    points: 62,
    avgVelocity: '0.32',
    velocityTrend: '↑ 235%',
    activeAlerts: 0,
    currentMm: '85.4 mm',
    tarpNormal: 62,
    staticCount: 54,
    staticPercent: 87,
    accelCount: 8,
    accelPercent: 13,
    timeLabels: ['-30d', '-20d', '-10d', 'NOW'],
    // Spline curve starting flat, curving up smoothly to (465, 77)
    linePath: 'M 30 126 C 120 126 220 124 300 118 C 360 112 420 96 465 77',
    areaPath: 'M 30 126 C 120 126 220 124 300 118 C 360 112 420 96 465 77 L 465 126 L 30 126 Z',
    endPoint: { x: 465, y: 77 },
    summaryText: 'All parameters within safe range. Accelerating movement at 8 points — continue routine monitoring.'
  },
  '7D': {
    points: 62,
    avgVelocity: '0.28',
    velocityTrend: '↑ 118%',
    activeAlerts: 0,
    currentMm: '34.2 mm',
    tarpNormal: 62,
    staticCount: 58,
    staticPercent: 93,
    accelCount: 4,
    accelPercent: 7,
    timeLabels: ['-7d', '-5d', '-2d', 'NOW'],
    linePath: 'M 30 126 C 130 126 240 125 325 121 C 385 117 430 110 465 104',
    areaPath: 'M 30 126 C 130 126 240 125 325 121 C 385 117 430 110 465 104 L 465 126 L 30 126 Z',
    endPoint: { x: 465, y: 104 },
    summaryText: 'Displacement velocity within expected seasonal variance. 4 points under minor acceleration.'
  },
  '24H': {
    points: 62,
    avgVelocity: '0.24',
    velocityTrend: '→ 12%',
    activeAlerts: 0,
    currentMm: '8.1 mm',
    tarpNormal: 62,
    staticCount: 61,
    staticPercent: 98,
    accelCount: 1,
    accelPercent: 2,
    timeLabels: ['-24h', '-16h', '-8h', 'NOW'],
    linePath: 'M 30 126 C 140 126 260 126 340 124 C 400 123 440 122 465 120',
    areaPath: 'M 30 126 C 140 126 260 126 340 124 C 400 123 440 122 465 120 L 465 126 L 30 126 Z',
    endPoint: { x: 465, y: 120 },
    summaryText: 'Short-term vector stable across all radar sectors. No immediate geotechnical advisory.'
  }
}

const activeData = computed(() => timeframeData[selectedTimeframe.value])
</script>
