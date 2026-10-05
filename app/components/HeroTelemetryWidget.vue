<template>
  <div class="rounded-3xl p-5 sm:p-7 bg-[#051726]/90 border transition-all duration-500 relative overflow-hidden backdrop-blur-xl group select-none shadow-[0_25px_65px_rgba(0,0,0,0.85)]"
    :class="cardBorderClass"
  >
    <!-- Background Ambient Glow based on Risk State -->
    <div
      class="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-[110px] pointer-events-none transition-all duration-700 opacity-30"
      :class="ambientGlowClass"
    ></div>

    <!-- ─── TOP HEADER BAR ─────────────────────────────────────────── -->
    <div class="flex items-center justify-between pb-3.5 border-b border-white/5 relative z-10 gap-2">
      <!-- Brand & Version Tag -->
      <div class="flex items-center gap-2">
        <span class="font-mono text-[11px] font-bold text-[#18b8ea] tracking-[0.2em] uppercase">
          {{ t('home.telemetryTag') }}
        </span>
        <span class="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[#64748b] hidden xs:inline">
          v4.2-AI
        </span>
      </div>

      <!-- Live Stream Pill & Timeframe Switcher -->
      <div class="flex items-center gap-2">
        <!-- Timeframe selector -->
        <div class="inline-flex rounded-lg bg-black/40 border border-white/10 p-0.5 text-[10px] font-mono">
          <button
            v-for="tf in (['1h', '6h', '24h'] as const)"
            :key="tf"
            type="button"
            @click="selectedTimeframe = tf"
            class="px-2 py-0.5 rounded transition-all duration-200 uppercase font-semibold"
            :class="selectedTimeframe === tf ? 'bg-[#18b8ea] text-[#030d17] shadow-[0_0_10px_rgba(24,184,234,0.4)]' : 'text-[#64748b] hover:text-white'"
          >
            {{ tf }}
          </button>
        </div>

        <!-- Live Pulsing Status Button (Clickable to pause/resume) -->
        <button
          type="button"
          @click="isLive = !isLive"
          class="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold transition-all border"
          :class="isLive ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-white/5 text-[#94a3b8] border-white/10'"
          :title="isLive ? 'Klik untuk menjeda simulasi live' : 'Klik untuk mengaktifkan simulasi live'"
        >
          <span class="w-1.5 h-1.5 rounded-full" :class="isLive ? 'bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse' : 'bg-gray-400'"></span>
          <span>{{ isLive ? t('home.telemetryStatus') : 'PAUSED' }}</span>
        </button>
      </div>
    </div>

    <!-- ─── METRIC READOUT & SECTOR SELECTOR ───────────────────────── -->
    <div class="pt-4 pb-3 relative z-10">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-3">
        <!-- Main Displacement Value Display -->
        <div>
          <span class="block text-[10px] uppercase font-mono tracking-widest text-[#64748b] font-semibold mb-0.5">
            {{ t('home.telemetryTitle') }}
          </span>
          <div class="flex items-baseline gap-3">
            <span
              class="font-display font-extrabold text-3xl sm:text-4xl tracking-tight transition-colors duration-300"
              :class="accentTextClass"
            >
              +{{ currentDisplacement.toFixed(1) }} <span class="text-sm font-mono font-semibold text-[#8da2b5]">mm</span>
            </span>
            <div class="flex items-center gap-1 font-mono text-xs font-semibold px-2 py-0.5 rounded-full border"
              :class="velocityBadgeClass"
            >
              <span>{{ currentVelocity >= 0 ? '▲' : '▼' }}</span>
              <span>{{ Math.abs(currentVelocity).toFixed(2) }} mm/h</span>
            </div>
          </div>
        </div>

        <!-- Sector Pills (Interactive) -->
        <div class="space-y-1">
          <span class="block text-[9px] uppercase font-mono tracking-widest text-[#64748b]">
            {{ t('home.sectorTitle') }}
          </span>
          <div class="flex flex-wrap gap-1.5">
            <button
              v-for="sector in sectorOptions"
              :key="sector.id"
              type="button"
              @click="selectSector(sector.id)"
              class="px-2.5 py-1 rounded-lg text-[10px] font-ui font-semibold transition-all duration-200 border"
              :class="selectedSector === sector.id ? sector.activeClass : 'bg-white/5 border-white/10 text-[#94a3b8] hover:text-white hover:bg-white/10'"
            >
              {{ sector.label }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- ─── INTERACTIVE SVG CHART CANVAS ──────────────────────────── -->
    <div
      ref="chartContainer"
      class="relative h-44 sm:h-48 w-full rounded-2xl p-2 overflow-hidden flex flex-col justify-end bg-[#020b14]/75 border border-white/5 group-hover:border-white/10 transition-colors"
      @mousemove="handleChartHover"
      @mouseleave="hoverPoint = null"
      @touchmove="handleTouchHover"
      @touchend="hoverPoint = null"
    >
      <!-- Background Radar Scanning Grid -->
      <div class="absolute inset-0 flex flex-col justify-between py-3 px-3 pointer-events-none opacity-25">
        <div class="w-full border-b border-[#18b8ea]/30 flex justify-between text-[9px] font-mono text-[#64748b]">
          <span>40mm</span>
          <span>MAX DISPLACEMENT</span>
        </div>
        <div class="w-full border-b border-rose-500/40 border-dashed flex justify-between text-[9px] font-mono text-rose-400 font-semibold">
          <span>25mm</span>
          <span class="bg-rose-500/10 px-1 rounded">{{ t('home.thresholdLabel') }} (CRITICAL)</span>
        </div>
        <div class="w-full border-b border-[#18b8ea]/30 flex justify-between text-[9px] font-mono text-[#64748b]">
          <span>15mm</span>
          <span>ADVISORY LIMIT</span>
        </div>
        <div class="w-full border-b border-[#18b8ea]/20 flex justify-between text-[9px] font-mono text-[#64748b]">
          <span>0mm</span>
          <span>BASELINE 0.00</span>
        </div>
      </div>

      <!-- Radar Sweep Beam Effect (Subtle, soundless) -->
      <div class="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-[#18b8ea]/10 to-transparent pointer-events-none animate-radar-sweep"></div>

      <!-- Dynamic SVG Curve Graphic -->
      <svg class="w-full h-full overflow-visible relative z-10" viewBox="0 0 340 130" preserveAspectRatio="none">
        <defs>
          <!-- Dynamic Area Gradient -->
          <linearGradient :id="`chartAreaGrad-${uniqueId}`" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" :stop-color="gradientColor" stop-opacity="0.38" />
            <stop offset="60%" :stop-color="gradientColor" stop-opacity="0.10" />
            <stop offset="100%" :stop-color="gradientColor" stop-opacity="0.0" />
          </linearGradient>

          <!-- Dynamic Curve Stroke Gradient (Cyan -> Amber -> Rose if high) -->
          <linearGradient :id="`chartLineGrad-${uniqueId}`" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#18b8ea" />
            <stop offset="60%" :stop-color="currentDisplacement > 20 ? '#f59e0b' : '#18b8ea'" />
            <stop offset="100%" :stop-color="currentDisplacement > 25 ? '#f43f5e' : (currentDisplacement > 15 ? '#f59e0b' : '#38cbf8')" />
          </linearGradient>

          <!-- High-Tech Glow Filter -->
          <filter :id="`chartGlow-${uniqueId}`" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <!-- Area Fill Under Curve -->
        <path
          :d="areaPath"
          :fill="`url(#chartAreaGrad-${uniqueId})`"
          class="transition-all duration-300 ease-out"
        />

        <!-- Alarm Threshold Line (25mm line at y = 47.5) -->
        <line
          x1="0"
          y1="47.5"
          x2="340"
          y2="47.5"
          stroke="#f43f5e"
          stroke-width="1"
          stroke-dasharray="3,3"
          stroke-opacity="0.65"
        />

        <!-- Dynamic Main Spline Curve -->
        <path
          :d="curvePath"
          fill="none"
          :stroke="`url(#chartLineGrad-${uniqueId})`"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          :filter="`url(#chartGlow-${uniqueId})`"
          class="transition-all duration-300 ease-out"
        />

        <!-- Animated Endpoint Beacon at latest point -->
        <g :transform="`translate(${endPoint.x}, ${endPoint.y})`" class="transition-transform duration-300 ease-out">
          <circle r="4.5" :fill="beaconColor" class="shadow-[0_0_15px_currentColor]" />
          <circle r="11" :fill="beaconColor" opacity="0.3" class="animate-ping origin-center" />
          <circle r="18" :fill="beaconColor" opacity="0.1" />
        </g>

        <!-- Interactive Crosshair & Hover Tooltip Marker -->
        <g v-if="hoverPoint" class="pointer-events-none">
          <!-- Vertical Laser Crosshair Line -->
          <line
            :x1="hoverPoint.x"
            y1="0"
            :x2="hoverPoint.x"
            y2="130"
            stroke="#18b8ea"
            stroke-width="1.2"
            stroke-dasharray="2,2"
            stroke-opacity="0.8"
          />
          <!-- Intersection Circle Marker -->
          <circle
            :cx="hoverPoint.x"
            :cy="hoverPoint.y"
            r="5"
            fill="#020b14"
            stroke="#18b8ea"
            stroke-width="2"
          />
          <circle
            :cx="hoverPoint.x"
            :cy="hoverPoint.y"
            r="2.5"
            fill="#18b8ea"
          />
        </g>
      </svg>

      <!-- Floating HUD Tooltip when Hovered -->
      <div
        v-if="hoverPoint"
        class="absolute pointer-events-none z-30 px-3 py-1.5 rounded-xl bg-[#030d17]/95 border border-[#18b8ea]/60 shadow-[0_8px_25px_rgba(0,0,0,0.85),0_0_15px_rgba(24,184,234,0.3)] backdrop-blur-md text-[11px] font-mono space-y-0.5 -translate-y-full transition-transform"
        :style="{
          left: `${Math.min(Math.max(hoverClientX - 70, 10), containerWidth - 150)}px`,
          top: `${Math.max(hoverClientY - 12, 10)}px`
        }"
      >
        <div class="flex items-center justify-between gap-3 text-[#94a3b8] text-[9px]">
          <span>OFFSET: {{ hoverPoint.time }}</span>
          <span class="text-[#18b8ea] font-bold">{{ hoverPoint.velocity.toFixed(2) }} mm/h</span>
        </div>
        <div class="text-white font-bold flex items-center gap-1.5">
          <span class="text-xs" :class="hoverPoint.val > 25 ? 'text-rose-400' : (hoverPoint.val > 15 ? 'text-amber-400' : 'text-[#18b8ea]')">
            +{{ hoverPoint.val.toFixed(2) }} mm
          </span>
          <span class="text-[9px] text-[#64748b]">PHASE NOISE &plusmn;0.04</span>
        </div>
      </div>

      <!-- Time Axis Labels at Bottom -->
      <div class="relative z-10 flex justify-between items-center text-[9px] font-mono text-[#64748b] pt-1">
        <span>-24h</span>
        <span>-18h</span>
        <span>-12h</span>
        <span>-6h</span>
        <span class="text-[#18b8ea] font-semibold flex items-center gap-1">
          <span class="w-1.5 h-1.5 rounded-full bg-[#18b8ea] inline-block"></span>
          <span>NOW</span>
        </span>
      </div>
    </div>

    <!-- ─── INTERACTIVE CONTROL: PORE PRESSURE / RAINFALL SLIDER ────── -->
    <div class="mt-4 pt-3 border-t border-white/5 space-y-2 relative z-10">
      <div class="flex items-center justify-between text-xs">
        <label for="pore-pressure-slider" class="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[#94a3b8]">
          <svg class="w-3.5 h-3.5 text-[#18b8ea]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <span>{{ t('home.simulationLabel') }}</span>
        </label>
        <div class="flex items-center gap-2 font-mono text-[11px]">
          <span class="font-bold" :class="porePressure > 65 ? 'text-rose-400' : (porePressure > 40 ? 'text-amber-400' : 'text-[#18b8ea]')">
            {{ porePressure }}% <span class="text-[#64748b] font-normal">({{ (porePressure * 0.28).toFixed(1) }} kPa)</span>
          </span>
          <button
            type="button"
            @click="resetPorePressure"
            class="text-[9px] uppercase px-1.5 py-0.5 rounded bg-white/5 hover:bg-white/10 text-[#64748b] hover:text-white transition-colors"
            title="Reset simulasi"
          >
            {{ t('home.resetSimulation') }}
          </button>
        </div>
      </div>

      <!-- Modern Cyber Range Slider -->
      <div class="relative flex items-center">
        <input
          id="pore-pressure-slider"
          type="range"
          min="0"
          max="100"
          step="1"
          v-model.number="porePressure"
          class="w-full h-1.5 bg-[#030d17] rounded-lg appearance-none cursor-pointer accent-[#18b8ea] focus:outline-none transition-all"
          :style="sliderTrackStyle"
        />
      </div>
      <div class="flex justify-between text-[9px] font-mono text-[#64748b]">
        <span>0% (Kering / Baseline)</span>
        <span>50% (Hujan Normal)</span>
        <span class="text-rose-400/90 font-semibold">100% (Saturasi Pori Puncak)</span>
      </div>
    </div>

    <!-- ─── BOTTOM HARDWARE & RISK STATUS CARDS ─────────────────────── -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 pt-3 border-t border-white/5 relative z-10">
      <!-- SENSOR SELECTION CARD -->
      <div class="p-3 sm:p-3.5 rounded-2xl bg-[#030d17]/80 border border-white/10 space-y-1.5 group/sensor">
        <div class="flex items-center justify-between">
          <span class="text-[9px] uppercase font-mono tracking-widest text-[#64748b] font-semibold">
            {{ t('home.sensorLabel') }}
          </span>
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]"></span>
        </div>
        <!-- Clickable Sensor Cycler -->
        <button
          type="button"
          @click="cycleSensor"
          class="text-left w-full hover:text-[#18b8ea] transition-colors"
        >
          <div class="text-xs font-bold text-white flex items-center justify-between gap-1">
            <span class="truncate">{{ activeSensorObj.name }}</span>
            <span class="text-[10px] text-[#18b8ea] opacity-70 group-hover/sensor:opacity-100">&harr;</span>
          </div>
          <span class="block text-[10px] font-mono text-[#64748b] truncate">
            {{ activeSensorObj.spec }}
          </span>
        </button>
      </div>

      <!-- RISK STATUS & AI VERDICT CARD -->
      <div class="p-3 sm:p-3.5 rounded-2xl bg-[#030d17]/80 border border-white/10 space-y-1.5">
        <div class="flex items-center justify-between">
          <span class="text-[9px] uppercase font-mono tracking-widest text-[#64748b] font-semibold">
            {{ t('home.statusLabel') }}
          </span>
          <span class="text-[9px] font-mono font-medium text-[#18b8ea]">{{ t('home.aiConfidence') }}</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full flex-shrink-0" :class="riskStatusDotClass"></span>
          <span class="text-xs font-bold truncate" :class="riskStatusTextClass">
            {{ riskStatusText }}
          </span>
        </div>
        <span class="block text-[10px] font-mono text-[#64748b] truncate">
          {{ riskSecondaryText }}
        </span>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '~/composables/useLanguage'

const { t } = useLanguage()

// Unique ID for SVG gradients to prevent DOM collisions
const uniqueId = Math.random().toString(36).substring(2, 8)

// ─── Reactive State ──────────────────────────────────────────────────
const selectedSector = ref<'critical' | 'warning' | 'stable'>('critical')
const porePressure = ref(65)
const selectedTimeframe = ref<'1h' | '6h' | '24h'>('24h')
const selectedSensor = ref<'radar' | 'gnss' | 'insar'>('radar')
const isLive = ref(true)
const liveNoise = ref(0)

// Hover tracking
const chartContainer = ref<HTMLElement | null>(null)
const containerWidth = ref(340)
const hoverClientX = ref(0)
const hoverClientY = ref(0)
const hoverPoint = ref<{ x: number; y: number; time: string; val: number; velocity: number } | null>(null)

// ─── Sector Configuration ────────────────────────────────────────────
const sectorOptions = computed(() => [
  {
    id: 'critical' as const,
    label: t('home.sectorCritical'),
    defaultPressure: 68,
    activeClass: 'bg-rose-500/20 border-rose-500/50 text-rose-300 shadow-[0_0_12px_rgba(244,63,94,0.3)]'
  },
  {
    id: 'warning' as const,
    label: t('home.sectorWarning'),
    defaultPressure: 42,
    activeClass: 'bg-amber-500/20 border-amber-500/50 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.3)]'
  },
  {
    id: 'stable' as const,
    label: t('home.sectorStable'),
    defaultPressure: 15,
    activeClass: 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.3)]'
  }
])

function selectSector(sectorId: 'critical' | 'warning' | 'stable') {
  selectedSector.value = sectorId
  const found = sectorOptions.value.find(s => s.id === sectorId)
  if (found) {
    porePressure.value = found.defaultPressure
  }
}

function resetPorePressure() {
  const found = sectorOptions.value.find(s => s.id === selectedSector.value)
  porePressure.value = found ? found.defaultPressure : 50
}

// ─── Sensor Options ──────────────────────────────────────────────────
const sensorList = computed(() => [
  { id: 'radar', name: t('home.sensorRadar'), spec: 'Ku-Band 24.15 GHz · Sub-mm Precision' },
  { id: 'gnss', name: t('home.sensorGnss'), spec: 'RTK Dual-Band · 10 Hz Displacement' },
  { id: 'insar', name: t('home.sensorInsar'), spec: 'SAR Sentinel-1 · C-Band Wide-Area' }
])

const activeSensorObj = computed(() => {
  return sensorList.value.find(s => s.id === selectedSensor.value) || sensorList.value[0]
})

function cycleSensor() {
  const ids: ('radar' | 'gnss' | 'insar')[] = ['radar', 'gnss', 'insar']
  const idx = ids.indexOf(selectedSensor.value)
  selectedSensor.value = ids[(idx + 1) % ids.length]
}

// ─── Math & Dynamic Curve Computation ────────────────────────────────
// Generate 12 data points along the 24h timeline
const dataPoints = computed(() => {
  // Pressure multiplier: 0% -> 0.55x, 50% -> 1.0x, 100% -> 1.55x
  const pFactor = 0.55 + (porePressure.value / 100) * 1.0

  const timeOffsets = [
    '-24h', '-21h', '-18h', '-15h', '-12h', '-9h', '-6h', '-4h', '-3h', '-2h', '-1h', 'NOW'
  ]

  // Base profile arrays (displacement in mm)
  let baseCurve: number[] = []

  if (selectedSector.value === 'critical') {
    // S-curve exponential tertiary creep towards failure
    baseCurve = [1.2, 1.8, 2.4, 3.2, 4.5, 6.5, 9.8, 14.5, 19.8, 25.4, 31.2, 36.8]
  } else if (selectedSector.value === 'warning') {
    // Steady progressive secondary creep
    baseCurve = [1.0, 1.4, 2.0, 2.8, 3.9, 5.4, 7.2, 9.5, 11.8, 14.2, 16.5, 18.4]
  } else {
    // Stable baseline micro-vibrations
    baseCurve = [0.8, 0.9, 1.1, 1.0, 1.3, 1.2, 1.4, 1.3, 1.6, 1.5, 1.7, 1.9]
  }

  // Width is 340, points distributed from x = 10 to x = 330
  const xStart = 10
  const xEnd = 330
  const stepX = (xEnd - xStart) / (baseCurve.length - 1)

  return baseCurve.map((baseVal, i) => {
    const isLast = i === baseCurve.length - 1
    // Apply pressure factor and live noise
    let val = baseVal * pFactor + (isLast ? liveNoise.value : Math.sin(i * 1.5) * 0.15)
    if (val < 0) val = 0.05

    // SVG coordinates:
    // x: 10 -> 330
    // y: 15 (max 40mm) -> 122 (0mm)
    // Formula: y = 122 - (val / 40) * (122 - 15)
    const yMaxVal = 42
    const yTop = 15
    const yBottom = 122
    const clampedVal = Math.min(val, yMaxVal)
    const y = yBottom - (clampedVal / yMaxVal) * (yBottom - yTop)

    // Rough instantaneous velocity (mm/h)
    const prevVal = i > 0 ? baseCurve[i - 1] * pFactor : val
    const velocity = Math.max(0.01, (val - prevVal) / 2)

    return {
      x: Number((xStart + i * stepX).toFixed(1)),
      y: Number(y.toFixed(1)),
      val,
      velocity,
      time: timeOffsets[i]
    }
  })
})

// Current summary metrics
const currentDisplacement = computed(() => {
  const last = dataPoints.value[dataPoints.value.length - 1]
  return last ? last.val : 0
})

const currentVelocity = computed(() => {
  const last = dataPoints.value[dataPoints.value.length - 1]
  return last ? last.velocity * (porePressure.value / 45) : 0.08
})

const endPoint = computed(() => {
  const last = dataPoints.value[dataPoints.value.length - 1]
  return last ? { x: last.x, y: last.y } : { x: 330, y: 30 }
})

// Catmull-Rom to Cubic Bezier path generation
const curvePath = computed(() => {
  const pts = dataPoints.value
  if (pts.length === 0) return ''
  let d = `M ${pts[0].x},${pts[0].y}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i === 0 ? 0 : i - 1]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[i + 2 >= pts.length ? pts.length - 1 : i + 2]

    const cp1x = p1.x + (p2.x - p0.x) / 6
    const cp1y = p1.y + (p2.y - p0.y) / 6
    const cp2x = p2.x - (p3.x - p1.x) / 6
    const cp2y = p2.y - (p3.y - p1.y) / 6

    d += ` C ${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`
  }
  return d
})

// Closed area path for gradient under the curve
const areaPath = computed(() => {
  const pts = dataPoints.value
  if (pts.length === 0) return ''
  const first = pts[0]
  const last = pts[pts.length - 1]
  return `${curvePath.value} L ${last.x},130 L ${first.x},130 Z`
})

// ─── Dynamic Visual Aesthetics & Colors ──────────────────────────────
const gradientColor = computed(() => {
  if (currentDisplacement.value > 25) return '#f43f5e' // Rose Red
  if (currentDisplacement.value > 15) return '#f59e0b' // Amber
  return '#18b8ea' // Terrabyte Cyan
})

const beaconColor = computed(() => {
  if (currentDisplacement.value > 25) return '#f43f5e'
  if (currentDisplacement.value > 15) return '#f59e0b'
  return '#38cbf8'
})

const cardBorderClass = computed(() => {
  if (currentDisplacement.value > 25) return 'border-rose-500/40 hover:border-rose-500/60 shadow-[0_20px_50px_rgba(244,63,94,0.15)]'
  if (currentDisplacement.value > 15) return 'border-amber-500/40 hover:border-amber-500/60 shadow-[0_20px_50px_rgba(245,158,11,0.15)]'
  return 'border-[#18b8ea]/30 hover:border-[#18b8ea]/60 shadow-[0_20px_50px_rgba(24,184,234,0.15)]'
})

const ambientGlowClass = computed(() => {
  if (currentDisplacement.value > 25) return 'bg-rose-500'
  if (currentDisplacement.value > 15) return 'bg-amber-500'
  return 'bg-[#18b8ea]'
})

const accentTextClass = computed(() => {
  if (currentDisplacement.value > 25) return 'text-rose-400 drop-shadow-[0_0_20px_rgba(244,63,94,0.4)]'
  if (currentDisplacement.value > 15) return 'text-amber-400 drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]'
  return 'text-[#18b8ea] drop-shadow-[0_0_20px_rgba(24,184,234,0.4)]'
})

const velocityBadgeClass = computed(() => {
  if (currentDisplacement.value > 25) return 'bg-rose-500/10 border-rose-500/30 text-rose-300'
  if (currentDisplacement.value > 15) return 'bg-amber-500/10 border-amber-500/30 text-amber-300'
  return 'bg-[#18b8ea]/10 border-[#18b8ea]/30 text-[#18b8ea]'
})

const riskStatusDotClass = computed(() => {
  if (currentDisplacement.value > 25) return 'bg-rose-500 shadow-[0_0_10px_#f43f5e] animate-pulse'
  if (currentDisplacement.value > 15) return 'bg-amber-400 shadow-[0_0_8px_#fbbf24]'
  return 'bg-emerald-400 shadow-[0_0_8px_#34d399]'
})

const riskStatusTextClass = computed(() => {
  if (currentDisplacement.value > 25) return 'text-rose-400'
  if (currentDisplacement.value > 15) return 'text-amber-300'
  return 'text-emerald-400'
})

const riskStatusText = computed(() => {
  if (currentDisplacement.value > 25) return t('home.statusCritical')
  if (currentDisplacement.value > 15) return t('home.statusWarning')
  return t('home.statusStable')
})

const riskSecondaryText = computed(() => {
  if (currentDisplacement.value > 25) return 'Inverse-Velocity Model: Akselerasi Tinggi'
  if (currentDisplacement.value > 15) return 'Deformasi Aktif: Peningkatan Frekuensi Pindai'
  return 'Siklus Normal: 0.08 mm/h Rata-rata'
})

const sliderTrackStyle = computed(() => {
  const p = porePressure.value
  let trackColor = '#18b8ea'
  if (p > 65) trackColor = '#f43f5e'
  else if (p > 40) trackColor = '#f59e0b'
  return {
    background: `linear-gradient(to right, ${trackColor} 0%, ${trackColor} ${p}%, #030d17 ${p}%, #030d17 100%)`
  }
})

// ─── Hover & Touch Interaction on SVG ────────────────────────────────
function updateHoverCoordinates(clientX: number, clientY: number) {
  if (!chartContainer.value) return
  const rect = chartContainer.value.getBoundingClientRect()
  containerWidth.value = rect.width
  const relX = clientX - rect.left
  const relY = clientY - rect.top

  hoverClientX.value = relX
  hoverClientY.value = relY

  // Map relX to SVG coordinate space (0 -> 340)
  const svgX = (relX / rect.width) * 340

  // Find nearest data point on the curve
  const pts = dataPoints.value
  if (!pts.length) return

  let nearest = pts[0]
  let minDist = Math.abs(pts[0].x - svgX)
  for (const pt of pts) {
    const dist = Math.abs(pt.x - svgX)
    if (dist < minDist) {
      minDist = dist
      nearest = pt
    }
  }

  hoverPoint.value = {
    x: nearest.x,
    y: nearest.y,
    time: nearest.time,
    val: nearest.val,
    velocity: nearest.velocity
  }
}

function handleChartHover(e: MouseEvent) {
  updateHoverCoordinates(e.clientX, e.clientY)
}

function handleTouchHover(e: TouchEvent) {
  if (e.touches && e.touches.length > 0) {
    updateHoverCoordinates(e.touches[0].clientX, e.touches[0].clientY)
  }
}

// ─── Real-time Live Telemetry Noise Loop ─────────────────────────────
let liveInterval: any = null

onMounted(() => {
  liveInterval = setInterval(() => {
    if (!isLive.value) return
    // Natural micro-jitter simulation
    liveNoise.value = (Math.random() - 0.5) * 0.18
  }, 1600)
})

onUnmounted(() => {
  if (liveInterval) clearInterval(liveInterval)
})
</script>

<style scoped>
@keyframes radarSweep {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(450%);
  }
}

.animate-radar-sweep {
  animation: radarSweep 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

/* Custom styled range slider thumb */
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 18px;
  width: 18px;
  border-radius: 9999px;
  background: #ffffff;
  border: 2px solid #18b8ea;
  box-shadow: 0 0 10px rgba(24, 184, 234, 0.7);
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

input[type=range]::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 0 15px rgba(24, 184, 234, 1);
}

input[type=range]::-moz-range-thumb {
  height: 18px;
  width: 18px;
  border-radius: 9999px;
  background: #ffffff;
  border: 2px solid #18b8ea;
  box-shadow: 0 0 10px rgba(24, 184, 234, 0.7);
  cursor: pointer;
}
</style>
