<template>
  <div class="py-24 lg:py-28">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">

      <!-- Header -->
      <div class="mb-14">
        <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00d1b2]/10 border border-[#00d1b2]/30 mb-4">
          <span class="w-2 h-2 rounded-full bg-[#00d1b2] animate-ping"></span>
          <span class="font-ui text-xs font-semibold tracking-widest uppercase text-[#00d1b2]">Secure Direct Channel</span>
        </div>
        <h1 class="font-display font-bold text-4xl lg:text-5xl tracking-wide text-white leading-tight">
          SPEAK WITH AN<br />
          APPLICATION ENGINEER
        </h1>
        <p class="font-body font-light text-base leading-relaxed text-[#9db4c8] mt-4 max-w-2xl">
          Direct access to our senior hardware and field deployment engineering team. We provide simulation validation, link-budget calculations, and commercial quotation within one business day.
        </p>
      </div>

      <div class="grid lg:grid-cols-12 gap-12 mt-10">

        <!-- Left: High-Impact Inquiry Console (7 Cols) -->
        <div class="lg:col-span-7">
          <div class="p-8 sm:p-10 neon-glass-frame">
            <div class="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <span class="font-mono text-xs text-[#00d1b2] uppercase tracking-wider font-semibold">
                COMMUNICATION DISPATCH // ENCRYPTED
              </span>
              <span class="font-mono text-[10px] text-[#6c889f]">SLA: &lt; 24H RESPONSE</span>
            </div>

            <!-- Success State -->
            <div
              v-if="formSubmitted"
              class="flex flex-col items-center justify-center text-center py-16 rounded-2xl bg-black/40 border border-[#00d1b2]/40"
            >
              <div class="w-16 h-16 rounded-full bg-[#00d1b2]/20 border border-[#00d1b2] flex items-center justify-center text-[#00d1b2] mb-4">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 class="font-display font-bold text-2xl text-white mb-2">Inquiry Successfully Transmitted</h3>
              <p class="font-body font-light text-sm text-[#9db4c8] max-w-md">
                Our application engineering team in Jakarta has received your requirements and will reach out with technical documentation shortly.
              </p>
              <button @click="formSubmitted = false" class="btn-outline text-xs mt-6">
                Submit Another Request
              </button>
            </div>

            <!-- Inquiry Form -->
            <form v-else @submit.prevent="formSubmitted = true" class="space-y-5">
              <div class="grid sm:grid-cols-2 gap-5">
                <div>
                  <label class="font-mono text-xs uppercase tracking-wider block mb-2 text-[#9db4c8]">Full Name <span class="text-[#00d1b2]">*</span></label>
                  <input class="pro-input" placeholder="e.g. Dr. Andriani Kusuma" v-model="form.name" required />
                </div>
                <div>
                  <label class="font-mono text-xs uppercase tracking-wider block mb-2 text-[#9db4c8]">Organisation / Agency <span class="text-[#00d1b2]">*</span></label>
                  <input class="pro-input" placeholder="e.g. Ministry of Transport / Port Auth" v-model="form.org" required />
                </div>
              </div>

              <div class="grid sm:grid-cols-2 gap-5">
                <div>
                  <label class="font-mono text-xs uppercase tracking-wider block mb-2 text-[#9db4c8]">Work Email <span class="text-[#00d1b2]">*</span></label>
                  <input type="email" class="pro-input" placeholder="a.kusuma@domain.gov" v-model="form.email" required />
                </div>
                <div>
                  <label class="font-mono text-xs uppercase tracking-wider block mb-2 text-[#9db4c8]">Product / Solution Interest</label>
                  <select class="pro-input" v-model="form.interest">
                    <option value="" disabled selected>Select a platform...</option>
                    <option>NX-700 GNSS Receiver</option>
                    <option>NX-500 Phased-Array Radar</option>
                    <option>NX-300 Tactical Fusion Unit</option>
                    <option>Custom Architectural Project</option>
                  </select>
                </div>
              </div>

              <div>
                <label class="font-mono text-xs uppercase tracking-wider block mb-2 text-[#9db4c8]">Mission Application &amp; Requirements</label>
                <textarea
                  class="pro-input resize-none"
                  rows="4"
                  placeholder="Describe target operating environment, protocol integration, baseline requirements..."
                  v-model="form.message"
                  required
                ></textarea>
              </div>

              <button type="submit" class="btn-primary w-full shadow-lg text-center cursor-pointer">
                Transmit Technical Inquiry &rarr;
              </button>
            </form>
          </div>
        </div>

        <!-- Right: Global Operations Centers (5 Cols) -->
        <div class="lg:col-span-5 space-y-6">
          <div class="flex items-center justify-between mb-2">
            <p class="font-mono text-xs tracking-widest uppercase text-[#00d1b2] font-semibold">Operations &amp; Support Hubs</p>
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>

          <div
            v-for="off in officeList"
            :key="off.city"
            class="p-6 neon-card"
          >
            <div class="flex items-center justify-between mb-3 border-b border-white/10 pb-3">
              <div>
                <h4 class="font-display font-bold text-lg text-white">{{ off.city }}</h4>
                <span class="font-mono text-[10px] text-[#00d1b2] uppercase tracking-widest">{{ off.type }}</span>
              </div>
              <span class="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">
                {{ off.status }}
              </span>
            </div>

            <div class="space-y-1.5 text-xs">
              <p class="font-body text-[#9db4c8] leading-relaxed whitespace-pre-line">{{ off.address }}</p>
              <p class="font-mono text-white font-medium pt-1">{{ off.phone }}</p>
              <p class="font-mono text-[#00d1b2] font-bold">{{ off.email }}</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

useHead({
  title: 'Contact & Engineering Consultation — TERRABYTE Geosystems Indonesia',
  meta: [
    {
      name: 'description',
      content: 'Speak with Terrabyte application engineers in Jakarta, Singapore, and The Hague for datasheets, technical integration, and mission quotations.'
    }
  ]
})

const route = useRoute()

const form = ref({
  name: '',
  org: '',
  email: '',
  interest: '',
  message: '',
})

onMounted(() => {
  if (route.query.product) {
    const p = String(route.query.product)
    if (p.includes('NX-700')) form.value.interest = 'NX-700 GNSS Receiver'
    else if (p.includes('NX-500')) form.value.interest = 'NX-500 Phased-Array Radar'
    else if (p.includes('NX-300')) form.value.interest = 'NX-300 Tactical Fusion Unit'
    else form.value.interest = 'Custom Architectural Project'
  }
})

const formSubmitted = ref(false)

const officeList = [
  {
    city: 'Jakarta, Indonesia',
    type: 'Global HQ & Anechoic Labs',
    status: 'ONLINE (UTC+7)',
    address: 'Jl. Jend. Sudirman Kav. 52–53, SCBD\nJakarta Selatan 12190, Indonesia',
    phone: '+62 21 5799 4200',
    email: 'hq@terrabyte.id',
  },
  {
    city: 'Singapore',
    type: 'Regional Engineering & Integration',
    status: 'ONLINE (UTC+8)',
    address: 'Science Park Drive, #05-01\nSingapore 118229',
    phone: '+65 6570 3800',
    email: 'sg@terrabyte.id',
  },
  {
    city: 'The Hague, Netherlands',
    type: 'European Defense Liaison Office',
    status: 'ONLINE (UTC+1)',
    address: 'Bezuidenhoutseweg 12\n2594 AV Den Haag, Netherlands',
    phone: '+31 70 302 5400',
    email: 'eu@terrabyte.id',
  },
]
</script>
