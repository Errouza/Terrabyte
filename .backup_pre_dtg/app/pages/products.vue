<template>
  <div class="py-24 lg:py-28">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">

      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00d1b2]/10 border border-[#00d1b2]/30 mb-4">
            <span class="w-2 h-2 rounded-full bg-[#00d1b2]"></span>
            <span class="font-ui text-xs font-semibold tracking-widest uppercase text-[#00d1b2]">Hardware &amp; Signal Processing</span>
          </div>
          <h1 class="font-display font-bold text-4xl lg:text-5xl tracking-wide text-white">
            ENGINEERED FOR EXTREME<br />
            FIELD OPERATIONAL INTEGRITY
          </h1>
        </div>
        <NuxtLink to="/contact" class="btn-outline self-start md:self-end">Request Complete Datasheet &rarr;</NuxtLink>
      </div>

      <!-- Industrial Switch Tabs -->
      <div class="flex gap-2 mb-12 p-1.5 rounded-2xl bg-[#07253d]/70 border border-white/10 overflow-x-auto">
        <button
          v-for="(prod, idx) in productList"
          :key="prod.code"
          class="font-ui text-xs font-bold tracking-wider uppercase px-6 py-3 rounded-xl transition-all duration-300 whitespace-nowrap flex items-center space-x-2.5 cursor-pointer"
          :class="activeProductIndex === idx
            ? 'bg-[#00d1b2] text-[#001f3f] shadow-[0_0_20px_rgba(0,209,178,0.4)]'
            : 'text-[#9db4c8] hover:text-white hover:bg-white/5'"
          @click="activeProductIndex = idx"
        >
          <span class="w-1.5 h-1.5 rounded-full" :class="activeProductIndex === idx ? 'bg-[#001f3f]' : 'bg-cyan-400/50'"></span>
          <span>{{ prod.code }} &mdash; {{ prod.tag }}</span>
        </button>
      </div>

      <!-- Featured Product Hardware Showcase Card -->
      <div class="grid lg:grid-cols-12 gap-8 mb-20">
        <!-- Image & Chassis Viewer (7 Cols) -->
        <div class="lg:col-span-7 relative overflow-hidden neon-glass-frame p-4 flex flex-col justify-between" style="min-height: 440px;">
          <div class="relative w-full h-80 rounded-2xl overflow-hidden bg-black/40">
            <img
              :src="currentProduct.img"
              :alt="currentProduct.name"
              class="w-full h-full object-cover transition-opacity duration-300"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#07253d] via-transparent to-transparent opacity-80"></div>

            <!-- Top Left Coordinates HUD Marker -->
            <div class="absolute top-4 left-4 font-mono text-[10px] text-cyan-300/80 bg-slate-900/80 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-md">
              REF: {{ currentProduct.code }} // MIL-SPEC SCREENED
            </div>
            
            <div class="absolute bottom-4 left-4">
              <span class="font-mono text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#00d1b2] text-[#001f3f] shadow-md">
                {{ currentProduct.tag }}
              </span>
            </div>
          </div>

          <!-- Quick Hardware Status -->
          <div class="grid grid-cols-3 gap-3 mt-4 pt-2">
            <div class="p-3 bg-black/30 rounded-xl border border-white/5 text-center">
              <span class="font-mono text-[10px] text-[#6c889f] block uppercase">Chassis Rating</span>
              <span class="font-mono font-bold text-xs text-white">IP68 Submersible</span>
            </div>
            <div class="p-3 bg-black/30 rounded-xl border border-white/5 text-center">
              <span class="font-mono text-[10px] text-[#6c889f] block uppercase">Operational Temp</span>
              <span class="font-mono font-bold text-xs text-white">-40°C to +85°C</span>
            </div>
            <div class="p-3 bg-black/30 rounded-xl border border-white/5 text-center">
              <span class="font-mono text-[10px] text-[#6c889f] block uppercase">Availability</span>
              <span class="font-mono font-bold text-xs text-[#00d1b2]">In Active Production</span>
            </div>
          </div>
        </div>

        <!-- Product Specs & Technical Datasheet (5 Cols) -->
        <div class="lg:col-span-5 p-8 neon-card flex flex-col justify-between">
          <div>
            <div class="flex items-center space-x-2 text-[#00d1b2] mb-2 font-mono text-xs font-bold uppercase tracking-widest">
              <span>{{ currentProduct.code }}</span>
              <span>//</span>
              <span>INDUSTRIAL HARDWARE</span>
            </div>
            <h2 class="font-display font-bold text-2xl tracking-wide text-white mb-3">{{ currentProduct.name }}</h2>
            <p class="font-body font-light text-sm leading-relaxed text-[#9db4c8] mb-6">{{ currentProduct.summary }}</p>
          </div>

          <!-- Specs Matrix -->
          <div class="border-t border-white/10 pt-5">
            <p class="font-mono text-xs tracking-widest uppercase mb-3 text-[#6c889f] font-semibold">Technical Specifications</p>
            <div class="space-y-2 mb-6">
              <div v-for="[label, val] in currentProduct.specs" :key="label" class="flex justify-between py-2 px-3 rounded-lg bg-black/20 border border-white/5">
                <span class="font-ui text-xs text-[#9db4c8]">{{ label }}</span>
                <span class="font-mono text-xs text-right text-white font-bold text-[#00d1b2]">{{ val }}</span>
              </div>
            </div>
            <NuxtLink :to="`/contact?product=${encodeURIComponent(currentProduct.code)}`" class="btn-primary w-full text-center shadow-lg">
              Request Commercial Quote &amp; SLA &rarr;
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- All Systems Product Catalog Grid (3 Industrial Cards) -->
      <div class="pt-14 border-t border-white/10">
        <div class="mb-10">
          <p class="section-label mb-2">Complete System Roster</p>
          <h3 class="font-display font-bold text-2xl text-white">Full Platform Catalog</h3>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(prod, i) in productList"
            :key="prod.code"
            class="p-7 neon-card flex flex-col justify-between group"
          >
            <div>
              <div class="flex items-center justify-between mb-5">
                <span class="font-mono text-xs tracking-widest uppercase text-[#00d1b2] font-bold px-2.5 py-1 rounded bg-[#00d1b2]/10 border border-[#00d1b2]/30">{{ prod.code }}</span>
                <span class="font-ui text-[10px] tracking-wider uppercase px-2.5 py-0.5 border border-white/10 text-[#6c889f] rounded-full">{{ prod.tag }}</span>
              </div>
              <h3 class="font-display font-bold text-lg text-white mb-2 group-hover:text-cyan-100 transition-colors">{{ prod.name }}</h3>
              <p class="font-body font-light text-xs leading-relaxed text-[#9db4c8] mb-6">{{ prod.summary }}</p>
            </div>

            <div class="pt-5 border-t border-white/10 flex items-center justify-between">
              <button @click="activeProductIndex = i" class="font-ui text-xs text-[#00d1b2] hover:text-white uppercase tracking-wider font-bold cursor-pointer">
                View Full Specs &rarr;
              </button>
              <NuxtLink :to="`/contact?product=${encodeURIComponent(prod.code)}`" class="btn-outline text-[11px] py-1.5 px-3 rounded-lg">
                Inquire
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

useHead({
  title: 'Hardware Systems & Platforms — TERRABYTE Geosystems Indonesia',
  meta: [
    {
      name: 'description',
      content: 'Ruggedized multi-frequency GNSS receivers, solid-state phased-array radar, and autonomous sensor fusion hardware platforms built for severe environmental conditions.'
    }
  ]
})

const { getProducts } = useSanityContent()
const { data: productsData } = await useAsyncData('products-catalog', () => getProducts())
const productList = computed(() => productsData.value || [])

const activeProductIndex = ref(0)
const _staticFallbackList = [
  {
    code: 'NX-700',
    tag: 'GNSS Receiver',
    name: 'NX-700 Multi-Constellation GNSS Receiver',
    summary: 'Carrier-phase GNSS engine with 1,408 tracking channels across GPS, GLONASS, Galileo, and BeiDou. Sub-millimeter network RTK sensitivity with integrated anti-jamming spatial nulling antenna arrays.',
    img: '/images/products-nx700.jpg',
    specs: [
      ['Channels', '1,408 Multi-Band'],
      ['RTK Accuracy', 'H: 1mm + 0.5ppm, V: 2.5mm + 0.5ppm'],
      ['Constellations', 'GPS, GLO, GAL, BDS, QZSS, NavIC'],
      ['Anti-Jamming', 'Spatial Adaptive Nulling (CRPA)'],
      ['Interfaces', 'RS-232, RS-422, CAN bus, Ethernet, 4G LTE'],
      ['Enclosure', 'IP68 Milled Aircraft Aluminium'],
    ],
  },
  {
    code: 'NX-500',
    tag: 'Phased-Array Radar',
    name: 'NX-500 Solid-State Surveillance Radar',
    summary: 'S-band active electronically steered array (AESA) radar providing 360° situational tracking for maritime traffic, coastal borders, and low-altitude uncrewed aerial systems with direct ASTERIX integration.',
    img: '/images/products-nx500.jpg',
    specs: [
      ['Frequency Band', 'S-Band Solid-State AESA'],
      ['Instrumented Range', '250 km Radius'],
      ['Azimuth Accuracy', '0.3° Beamwidth'],
      ['Target Tracking', '> 1,000 Simultaneous Tracks'],
      ['Output Formats', 'ASTERIX CAT 048, 062, 240'],
      ['Mean Time Between Failure', '> 65,000 Operational Hours'],
    ],
  },
  {
    code: 'NX-300',
    tag: 'Integrated Platform',
    name: 'NX-300 Tactical Sensor Fusion Unit',
    summary: 'Ruggedized edge computer integrating tactical-grade IMU acceleration, multi-frequency GNSS carrier phase, and radar plots into a single uninterrupted PVT state via FPGA Kalman filtering.',
    img: '/images/products-nx300.jpg',
    specs: [
      ['Compute Core', 'Dual Xilinx UltraScale+ FPGA + ARM Cortex'],
      ['IMU Gyro In-Run Bias', '0.05° / hr Tactical Grade'],
      ['Holdover Drift', '< 0.05% of Distance Traveled'],
      ['Latency', '< 5 ms End-to-End Processing'],
      ['Shock & Vibration', 'MIL-STD-810H Method 514.8'],
      ['Power Input', '9 - 36 VDC Mil-Spec Transient Protection'],
    ],
  },
]

const currentProduct = computed(() => productList.value[activeProductIndex.value] || _staticFallbackList[0])
</script>
