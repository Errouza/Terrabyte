<template>
  <Teleport to="body">
    <Transition name="intro-fade">
      <div
        v-if="showIntro"
        class="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#041627] text-white overflow-hidden select-none cursor-pointer"
        @click="skipIntro"
      >
        <!-- Background Ambient Glow & Grid -->
        <div class="absolute inset-0 dot-grid opacity-25"></div>
        <div class="absolute w-[600px] h-[600px] bg-[#00d1b2]/10 rounded-full blur-[140px] pointer-events-none"></div>

        <!-- Rotating Radar Sweep Ring -->
        <div class="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-[#00d1b2]/20 flex items-center justify-center pointer-events-none">
          <div class="w-full h-full rounded-full border border-dashed border-[#00d1b2]/30 animate-spin" style="animation-duration: 12s;"></div>
          <div class="absolute inset-4 rounded-full border border-[#00d1b2]/15"></div>
          <div class="absolute inset-16 rounded-full border border-[#00d1b2]/10"></div>
          <!-- Crosshairs -->
          <div class="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#00d1b2]/30 to-transparent"></div>
          <div class="absolute inset-y-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#00d1b2]/30 to-transparent"></div>
        </div>

        <!-- Center Content Box -->
        <div class="relative z-10 flex flex-col items-center text-center px-6 max-w-md">
          <!-- Glowing Logo -->
          <div class="relative mb-6">
            <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#092c4a] to-[#07253d] border border-[#00d1b2]/40 flex items-center justify-center shadow-[0_0_35px_rgba(0,209,178,0.35)] transform transition-transform duration-700 scale-100">
              <img src="/images/logoOnlyPutih.png" alt="Terrabyte Logo" class="h-12 w-auto object-contain animate-pulse" />
            </div>
            <!-- Orbiting Radar Blip -->
            <div class="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#00d1b2] shadow-[0_0_10px_#00d1b2] animate-ping"></div>
          </div>

          <!-- Brand Title -->
          <h1 class="font-display font-bold text-2xl sm:text-3xl tracking-[0.25em] text-white uppercase mb-1">
            Terrabyte
          </h1>
          <p class="font-ui text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#00d1b2] font-semibold mb-8">
            Geosystems Indonesia
          </p>

          <!-- Dynamic Telemetry Log -->
          <div class="h-6 mb-3 flex items-center justify-center">
            <span class="font-mono text-[11px] text-[#9db4c8] tracking-wider uppercase">
              {{ telemetryStatus }}
            </span>
          </div>

          <!-- High-Tech Progress Bar -->
          <div class="w-64 sm:w-80 h-1.5 bg-slate-900 rounded-full overflow-hidden border border-white/10 relative mb-3">
            <div
              class="h-full bg-gradient-to-r from-[#00d1b2] via-[#5ce6d4] to-[#60a5fa] transition-all duration-100 ease-out shadow-[0_0_12px_rgba(0,209,178,0.8)]"
              :style="{ width: progress + '%' }"
            ></div>
          </div>

          <!-- Percentage & Coordinates -->
          <div class="w-64 sm:w-80 flex justify-between items-center font-mono text-[10px] text-[#6c889f]">
            <span>SYSTEM INIT</span>
            <span class="text-[#00d1b2] font-bold">{{ Math.round(progress) }}%</span>
            <span>JKT 106.84°E</span>
          </div>
        </div>

        <!-- Discreet Skip Prompt -->
        <div class="absolute bottom-8 text-center">
          <span class="font-ui text-[10px] tracking-widest uppercase text-[#6c889f] hover:text-[#00d1b2] transition-colors">
            Click anywhere or press ESC to enter
          </span>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const showIntro = ref(true)
const progress = ref(0)
const telemetryStatus = ref('INITIALIZING MULTI-BAND RF CORE...')

let intervalId: any = null

const skipIntro = () => {
  showIntro.value = false
  if (intervalId) clearInterval(intervalId)
}

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
    skipIntro()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)

  const startTime = Date.now()
  const duration = 2000 // 2 seconds total smooth animation

  intervalId = setInterval(() => {
    const elapsed = Date.now() - startTime
    const currentProgress = Math.min(100, (elapsed / duration) * 100)
    progress.value = currentProgress

    if (currentProgress < 35) {
      telemetryStatus.value = 'INITIALIZING MULTI-BAND RF CORE...'
    } else if (currentProgress < 75) {
      telemetryStatus.value = 'ACQUIRING GNSS CARRIER PHASE...'
    } else if (currentProgress < 95) {
      telemetryStatus.value = 'CALIBRATING S-BAND RADAR MESH...'
    } else {
      telemetryStatus.value = 'SYSTEM READY // 100% NOMINAL'
    }

    if (currentProgress >= 100) {
      clearInterval(intervalId)
      setTimeout(() => {
        showIntro.value = false
      }, 250)
    }
  }, 30)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
  if (intervalId) clearInterval(intervalId)
})
</script>

<style scoped>
.intro-fade-enter-active,
.intro-fade-leave-active {
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.intro-fade-enter-from {
  opacity: 0;
}

.intro-fade-leave-to {
  opacity: 0;
  transform: scale(1.05);
}
</style>
