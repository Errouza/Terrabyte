<template>
  <div class="py-24 lg:py-28">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">

      <!-- ─── HEADER ────────────────────────────────────────────────── -->
      <div class="mb-14">
        <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#00d1b2]/10 border border-[#00d1b2]/30 mb-4">
          <span class="w-2 h-2 rounded-full bg-[#00d1b2] animate-pulse"></span>
          <span class="font-ui text-xs font-semibold tracking-widest uppercase text-[#00d1b2]">
            SALURAN RESMI // Form Inquiry &amp; Integrasi Platform BSS
          </span>
        </div>
        <h1 class="font-display font-bold text-4xl lg:text-5xl tracking-wide text-white leading-tight">
          INQUIRY SISTEM &amp;<br />INTEGRASI TIKET PLATFORM BSS
        </h1>
        <p class="font-body font-light text-base leading-relaxed text-[#9db4c8] mt-4 max-w-2xl">
          Konsultasikan kebutuhan operasional Anda dengan tim engineer Terrabyte. Seluruh formulir inquiry, permohonan demo TerraPulse, dan pengadaan alat survei diarahkan langsung ke antrean tiket platform Business Support System (BSS) Terrabyte.
        </p>
      </div>

      <div class="grid lg:grid-cols-12 gap-12 mt-10">

        <!-- Left: Inquiry Console (7 Cols) -->
        <div class="lg:col-span-7">
          <div class="p-8 sm:p-10 neon-glass-frame">
            <div class="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div class="flex items-center space-x-2">
                <span class="w-2 h-2 rounded-full bg-[#00d1b2] animate-ping"></span>
                <span class="font-mono text-xs text-[#00d1b2] uppercase tracking-wider font-semibold">
                  TIKET INQUIRY BSS // OPERATIONAL GATEWAY
                </span>
              </div>
              <span class="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">
                BSS ONLINE &bull; SLA &lt; 24 JAM
              </span>
            </div>

            <!-- Success State with BSS Ticket ID -->
            <div
              v-if="formSubmitted"
              class="flex flex-col items-center justify-center text-center py-12 px-6 rounded-2xl bg-black/40 border border-[#00d1b2]/40"
            >
              <div class="w-16 h-16 rounded-full bg-[#00d1b2]/20 border border-[#00d1b2] flex items-center justify-center text-[#00d1b2] mb-4">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 class="font-display font-bold text-2xl text-white mb-2">Tiket Inquiry BSS Berhasil Dibuat!</h3>
              <div class="my-4 px-4 py-2 rounded-xl bg-[#001f3f] border border-[#00d1b2]/50 font-mono text-sm text-[#00d1b2]">
                KODE TIKET: <span class="font-bold text-white">{{ submittedTicketId }}</span>
              </div>
              <p class="font-body font-light text-sm text-[#9db4c8] max-w-md leading-relaxed">
                Permintaan Anda telah tercatat pada platform BSS Terrabyte dan diteruskan ke tim spesialis terkait. Tim teknis kami akan menghubungi Anda sesuai SLA operasional.
              </p>
              <button @click="resetForm" class="btn-outline text-xs mt-6 cursor-pointer">
                Kirim Inquiry BSS Lain &rarr;
              </button>
            </div>

            <!-- Inquiry Form -->
            <form v-else @submit.prevent="submitInquiry" class="space-y-5">
              <div v-if="submitError" class="p-4 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-mono">
                {{ submitError }}
              </div>

              <div class="grid sm:grid-cols-2 gap-5">
                <div>
                  <label class="font-mono text-xs uppercase tracking-wider block mb-2 text-[#9db4c8]">
                    Nama Lengkap / PIC <span class="text-[#00d1b2]">*</span>
                  </label>
                  <input
                    class="pro-input"
                    placeholder="Contoh: Ir. Hendra Gunawan"
                    v-model="form.name"
                    required
                  />
                </div>
                <div>
                  <label class="font-mono text-xs uppercase tracking-wider block mb-2 text-[#9db4c8]">
                    Instansi / Perusahaan <span class="text-[#00d1b2]">*</span>
                  </label>
                  <input
                    class="pro-input"
                    placeholder="Contoh: PT Tambang Prima / BUMN Karya"
                    v-model="form.org"
                    required
                  />
                </div>
              </div>

              <div class="grid sm:grid-cols-2 gap-5">
                <div>
                  <label class="font-mono text-xs uppercase tracking-wider block mb-2 text-[#9db4c8]">
                    Email Perusahaan / Dinas <span class="text-[#00d1b2]">*</span>
                  </label>
                  <input
                    type="email"
                    class="pro-input"
                    placeholder="hendra@perusahaan.co.id"
                    v-model="form.email"
                    required
                  />
                </div>
                <div>
                  <label class="font-mono text-xs uppercase tracking-wider block mb-2 text-[#9db4c8]">
                    Kategori Alur BSS <span class="text-[#00d1b2]">*</span>
                  </label>
                  <select class="pro-input cursor-pointer" v-model="form.interest" required>
                    <option value="" disabled>Pilih kategori...</option>
                    <option value="Platform TerraPulse (Demo & Lisensi BSS)">Platform TerraPulse (Demo &amp; Lisensi BSS)</option>
                    <option value="Pengadaan Radar ComNav MS-SAR5000 (via Lextera)">Pengadaan Radar ComNav MS-SAR5000 (via Lextera)</option>
                    <option value="Pengadaan Alat Survei (GNSS RTK, Laser RTK, Total Station)">Pengadaan Alat Survei (GNSS RTK, Laser RTK, Total Station)</option>
                    <option value="Layanan Teknisi & Maintenance Radar On-Site">Layanan Teknisi &amp; Maintenance Radar On-Site</option>
                    <option value="Konsultasi Integrasi Sistem Tambang & Geoteknik">Konsultasi Integrasi Sistem Tambang &amp; Geoteknik</option>
                    <option value="Tiket Dukungan Teknis BSS Enterprise">Tiket Dukungan Teknis BSS Enterprise</option>
                    <option value="Kemitraan Strategis & Kerjasama Operasi">Kemitraan Strategis &amp; Kerjasama Operasi</option>
                  </select>
                </div>
              </div>

              <div>
                <label class="font-mono text-xs uppercase tracking-wider block mb-2 text-[#9db4c8]">
                  Deskripsi Kebutuhan Site / Rincian Tiket <span class="text-[#00d1b2]">*</span>
                </label>
                <textarea
                  class="pro-input resize-none"
                  rows="4"
                  placeholder="Jelaskan kebutuhan site operasional (lokasi tambang/proyek, lereng yang dipantau, radar MS-SAR5000, alat survei Lextera, atau demo TerraPulse)..."
                  v-model="form.message"
                  required
                ></textarea>
              </div>

              <div class="p-3.5 rounded-xl bg-[#00172e] border border-white/10 text-xs text-[#9db4c8] flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
                  <span class="font-mono text-[11px] text-white">Platform BSS: Otomatisasi Tiket Terpusat</span>
                </div>
                <span class="font-mono text-[10px] text-[#00d1b2]">ENKRIPSI SSL</span>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="btn-primary w-full shadow-lg text-center cursor-pointer flex items-center justify-center space-x-2"
              >
                <span v-if="isSubmitting">Mengirimkan ke Platform BSS...</span>
                <span v-else>Transmisikan Inquiry ke Platform BSS &rarr;</span>
              </button>
            </form>
          </div>
        </div>

        <!-- Right: Support Hubs & Operational Contacts (5 Cols) -->
        <div class="lg:col-span-5 space-y-6">
          <div class="flex items-center justify-between mb-2">
            <p class="font-mono text-xs tracking-widest uppercase text-[#00d1b2] font-semibold">
              KANTOR PUSAT &amp; LAYANAN OPERASIONAL
            </p>
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>

          <!-- Headquarters Card -->
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
              <p class="font-mono text-white font-medium pt-1">
                <span class="text-[#00d1b2]">TELP:</span> {{ off.phone }}
              </p>
              <p class="font-mono text-[#00d1b2] font-bold">
                <span class="text-[#6c889f]">EMAIL:</span>
                <a :href="`mailto:${off.email}`" class="hover:underline ml-1 text-white hover:text-[#00d1b2]">{{ off.email }}</a>
              </p>
            </div>
          </div>

          <!-- Official Social Media Channels Card -->
          <div class="p-6 neon-card space-y-3">
            <div class="flex items-center justify-between border-b border-white/10 pb-3">
              <span class="font-mono text-xs text-[#00d1b2] font-bold uppercase tracking-wider">
                SALURAN RESMI (SOCIAL MEDIA)
              </span>
              <span class="font-mono text-[10px] text-[#6c889f]">VERIFIED CHANNELS</span>
            </div>
            <div class="space-y-2 pt-1">
              <!-- Instagram -->
              <a
                href="https://instagram.com/terrabyte.geosystem"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#00d1b2] hover:bg-[#00d1b2]/10 transition-all group"
              >
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="font-display font-semibold text-xs text-white group-hover:text-[#00d1b2] transition-colors">Instagram Resmi</div>
                    <div class="font-mono text-[11px] text-[#9db4c8]">@terrabyte.geosystem</div>
                  </div>
                </div>
                <span class="text-xs text-[#00d1b2] group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>

              <!-- LinkedIn -->
              <a
                href="https://www.linkedin.com/company/terrabyte-geosystem-indonesia"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#00d1b2] hover:bg-[#00d1b2]/10 transition-all group"
              >
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="font-display font-semibold text-xs text-white group-hover:text-[#00d1b2] transition-colors">LinkedIn Resmi</div>
                    <div class="font-mono text-[11px] text-[#9db4c8]">Terrabyte Geosystem Indonesia</div>
                  </div>
                </div>
                <span class="text-xs text-[#00d1b2] group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </div>
          </div>

          <!-- Fast Contact Note -->
          <div class="p-5 rounded-2xl bg-[#001f3f]/40 border border-white/10 text-xs text-[#9db4c8] space-y-2">
            <div class="font-mono text-white font-semibold text-[11px] flex items-center space-x-2">
              <span class="w-1.5 h-1.5 rounded-full bg-[#00d1b2]"></span>
              <span>Layanan Cepat WhatsApp / Telp</span>
            </div>
            <p>
              Untuk kebutuhan darurat pemantauan lereng tambang atau kendala radar di site, hubungi narahubung Terrabyte di
              <a :href="`tel:${(siteSettings?.phone || '+62 813-9840-986').replace(/\s+/g, '')}`" class="text-white font-mono font-bold hover:text-[#00d1b2] transition-colors">
                {{ siteSettings?.phone || '+62 813-9840-986' }}
              </a>
              atau email langsung ke
              <a href="mailto:Info.TGI@terrabyte.com" class="text-[#00d1b2] font-mono hover:underline">Info.TGI@terrabyte.com</a>.
            </p>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

useHead({
  title: 'Inquiry & Integrasi Platform BSS — PT Terrabyte Geosystems Indonesia',
  meta: [
    {
      name: 'description',
      content: 'Saluran resmi inquiry dan integrasi tiket platform BSS PT Terrabyte Geosystems Indonesia untuk demo platform TerraPulse, konsultasi radar ComNav MS-SAR5000, dan pengadaan alat survei Lextera.'
    }
  ]
})

const route = useRoute()

const form = ref({
  name: '',
  org: '',
  email: '',
  interest: 'Platform TerraPulse (Demo & Lisensi BSS)',
  message: '',
})

const isSubmitting = ref(false)
const submitError = ref('')
const formSubmitted = ref(false)
const submittedTicketId = ref('')

const resetForm = () => {
  form.value = {
    name: '',
    org: '',
    email: '',
    interest: 'Platform TerraPulse (Demo & Lisensi BSS)',
    message: '',
  }
  formSubmitted.value = false
  submitError.value = ''
  submittedTicketId.value = ''
}

const submitInquiry = async () => {
  isSubmitting.value = true
  submitError.value = ''
  try {
    const res: any = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.value.name,
        email: form.value.email,
        organization: form.value.org,
        domain: form.value.interest || 'Platform TerraPulse (Demo & Lisensi BSS)',
        message: form.value.message,
      }
    })
    submittedTicketId.value = res?.ticketId || ('BSS-TGI-' + Math.floor(100000 + Math.random() * 900000))
    formSubmitted.value = true
  } catch (err: any) {
    submitError.value = err?.data?.statusMessage || 'Gagal mengirim formulir ke platform BSS. Silakan coba kembali.'
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  if (route.query.type === 'demo') {
    form.value.interest = 'Platform TerraPulse (Demo & Lisensi BSS)'
    form.value.message = 'Halo tim engineer Terrabyte, kami tertarik menjadwalkan demonstrasi langsung platform TerraPulse untuk kebutuhan pemantauan operasional site kami.'
  } else if (route.query.interest) {
    form.value.interest = String(route.query.interest)
  } else if (route.query.product) {
    const p = String(route.query.product).toUpperCase()
    if (p.includes('TERRAPULSE')) {
      form.value.interest = 'Platform TerraPulse (Demo & Lisensi BSS)'
    } else if (p.includes('SAR5000') || p.includes('RADAR')) {
      form.value.interest = 'Pengadaan Radar ComNav MS-SAR5000 (via Lextera)'
    } else if (p.includes('SVC') || p.includes('ENGINEERING')) {
      form.value.interest = 'Layanan Teknisi & Maintenance Radar On-Site'
    } else if (p.includes('COMNAV') || p.includes('K8') || p.includes('CTS') || p.includes('N2')) {
      form.value.interest = 'Pengadaan Alat Survei (GNSS RTK, Laser RTK, Total Station)'
    }
  }
})

const { data: siteSettings } = await useAsyncData('contact-settings', () => $fetch('/api/settings').catch(() => null))

const officeList = computed(() => [
  {
    city: 'Jakarta, Indonesia',
    type: 'Pusat Operasional & Rekayasa Sistem',
    status: 'BSS ONLINE (WIB)',
    address: siteSettings.value?.address || 'Menara Prima, Lantai 22, Mega Kuningan, Jakarta Selatan 12950',
    phone: siteSettings.value?.phone || '+62 813-9840-986',
    email: siteSettings.value?.email || 'Info.TGI@terrabyte.com',
  },
  {
    city: 'Bandung, Indonesia',
    type: 'Divisi Integrasi Lapangan & Survei (Lextera)',
    status: 'ONLINE (WIB)',
    address: 'Kawasan Riset & Teknologi Geospasial\nJawa Barat 40132',
    phone: '+62 (022) 8731-5500',
    email: 'operations@lextera.id',
  }
])
</script>
