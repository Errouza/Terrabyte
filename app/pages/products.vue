<template>
  <div class="py-24 lg:py-28">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">

      <!-- ─── HEADER ────────────────────────────────────────────────── -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#00d1b2]/10 border border-[#00d1b2]/30 mb-4">
            <span class="w-2 h-2 rounded-full bg-[#00d1b2] animate-pulse"></span>
            <span class="font-ui text-xs font-semibold tracking-widest uppercase text-[#00d1b2]">
              KATALOG LENGKAP // Produk Survei, Geospasial &amp; Sistem TerraPulse
            </span>
          </div>
          <h1 class="font-display font-bold text-4xl lg:text-5xl tracking-wide text-white leading-tight">
            INSTRUMEN SURVEI, RADAR MS-SAR5000 &amp;<br />PLATFORM INTELIJEN TERRAPULSE
          </h1>
          <p class="font-body font-light text-base text-[#9db4c8] mt-3 max-w-2xl">
            Solusi instrumen geospasial terlengkap: jajaran produk survei Lextera &amp; ComNav (GNSS RTK, Laser RTK, Total Station, Leveling, Echo Sounder), Radar GB-SAR <strong>ComNav MS-SAR5000</strong>, serta platform pemantauan digital mandiri <strong>TerraPulse</strong>.
          </p>
        </div>
        <NuxtLink to="/contact?type=demo" class="btn-outline self-start md:self-end">
          Konsultasi &amp; Request Penawaran &rarr;
        </NuxtLink>
      </div>

      <!-- ─── CATEGORY FILTER SWITCHER ───────────────────────────────── -->
      <div class="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div class="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#001f3f]/60 backdrop-blur-xl border border-white/12">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="activeCategory = cat.id"
            class="font-ui text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-xl transition-all duration-300 flex items-center space-x-2 cursor-pointer"
            :class="activeCategory === cat.id
              ? 'bg-[#00d1b2] text-[#001f3f] shadow-[0_0_15px_rgba(0,209,178,0.4)]'
              : 'text-[#9db4c8] hover:text-white hover:bg-white/5'"
          >
            <span>{{ cat.label }}</span>
            <span class="text-[10px] px-1.5 py-0.2 rounded-full" :class="activeCategory === cat.id ? 'bg-[#001f3f]/20 text-[#001f3f]' : 'bg-white/10 text-[#9db4c8]'">
              {{ getCategoryCount(cat.id) }}
            </span>
          </button>
        </div>

        <span class="font-mono text-xs text-[#00d1b2] hidden sm:block">
          ● {{ filteredProductList.length }} ITEM TERSEDIA
        </span>
      </div>

      <!-- ─── PRODUCT SELECTOR TABS ─────────────────────────────────── -->
      <div class="flex gap-2.5 mb-10 overflow-x-auto pb-2 scrollbar-thin">
        <button
          v-for="prod in filteredProductList"
          :key="prod.code"
          class="font-ui text-xs font-bold tracking-wider uppercase px-5 py-3 rounded-xl transition-all duration-300 whitespace-nowrap flex items-center space-x-2.5 cursor-pointer border"
          :class="activeProductCode === prod.code
            ? 'bg-[#001f3f] border-[#00d1b2] text-white shadow-[0_0_20px_rgba(0,209,178,0.3)]'
            : 'bg-black/30 border-white/10 text-[#9db4c8] hover:border-white/20 hover:text-white'"
          @click="activeProductCode = prod.code"
        >
          <span class="w-1.5 h-1.5 rounded-full" :class="activeProductCode === prod.code ? 'bg-[#00d1b2] shadow-[0_0_6px_#00d1b2]' : 'bg-white/30'"></span>
          <span>{{ prod.name.split(' ')[0] }} // {{ prod.code }}</span>
        </button>
      </div>

      <!-- ─── FEATURED PRODUCT SHOWCASE CARD ────────────────────────── -->
      <div class="grid lg:grid-cols-12 gap-8 mb-20">
        <!-- Visual & HUD Frame (7 Cols) -->
        <div class="lg:col-span-7 relative overflow-hidden neon-glass-frame p-5 flex flex-col justify-between" style="min-height: 460px;">
          <div class="relative w-full h-80 rounded-2xl overflow-hidden bg-black/50 border border-white/5">
            <img
              :src="currentProduct.img"
              :alt="currentProduct.name"
              class="w-full h-full object-cover transition-opacity duration-300"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#001428] via-transparent to-transparent opacity-80"></div>

            <!-- Top Left HUD Pill -->
            <div class="absolute top-4 left-4 font-mono text-[10px] text-cyan-300 bg-slate-900/90 px-3 py-1 rounded-md border border-[#00d1b2]/30 backdrop-blur-md">
              REF: {{ currentProduct.code }} // TERRABYTE ECOSYSTEM
            </div>

            <!-- Bottom Left Category Badge -->
            <div class="absolute bottom-4 left-4">
              <span class="font-mono text-xs font-bold tracking-wider uppercase px-3.5 py-1 rounded-full bg-[#00d1b2] text-[#001f3f] shadow-lg">
                {{ currentProduct.tag }}
              </span>
            </div>
          </div>

          <!-- Quick Metric Badges -->
          <div class="grid grid-cols-3 gap-3 mt-4 pt-2">
            <div class="p-3 bg-black/40 rounded-xl border border-white/10 text-center">
              <span class="font-mono text-[10px] text-[#6c889f] block uppercase">KLASIFIKASI</span>
              <span class="font-mono font-bold text-xs text-white">
                {{ getProductBadge(currentProduct) }}
              </span>
            </div>
            <div class="p-3 bg-black/40 rounded-xl border border-white/10 text-center">
              <span class="font-mono text-[10px] text-[#6c889f] block uppercase">KEMAMPUAN UTAMA</span>
              <span class="font-mono font-bold text-xs text-[#00d1b2]">
                {{ getProductCapability(currentProduct) }}
              </span>
            </div>
            <div class="p-3 bg-black/40 rounded-xl border border-white/10 text-center">
              <span class="font-mono text-[10px] text-[#6c889f] block uppercase">STATUS PRODUK</span>
              <span class="font-mono font-bold text-xs text-white">
                {{ currentProduct.status || 'Active Deployment' }}
              </span>
            </div>
          </div>
        </div>

        <!-- Product Specs & Technical Datasheet (5 Cols) -->
        <div class="lg:col-span-5 p-8 neon-card flex flex-col justify-between">
          <div>
            <div class="flex items-center space-x-2 text-[#00d1b2] mb-2 font-mono text-xs font-bold uppercase tracking-widest">
              <span>{{ currentProduct.code }}</span>
              <span>//</span>
              <span>{{ getProductBadge(currentProduct) }}</span>
            </div>
            <h2 class="font-display font-bold text-2xl tracking-wide text-white mb-3">
              {{ currentProduct.name }}
            </h2>
            <p class="font-body font-light text-sm leading-relaxed text-[#9db4c8] mb-6">
              {{ currentProduct.summary }}
            </p>
          </div>

          <!-- Specs Matrix -->
          <div class="border-t border-white/10 pt-5">
            <p class="font-mono text-xs tracking-widest uppercase mb-3 text-[#6c889f] font-semibold">
              Rincian Spesifikasi &amp; Fitur
            </p>
            <div class="space-y-2 mb-6">
              <div
                v-for="[label, val] in currentProduct.specs"
                :key="label"
                class="flex justify-between py-2 px-3 rounded-lg bg-black/30 border border-white/5"
              >
                <span class="font-ui text-xs text-[#9db4c8]">{{ label }}</span>
                <span class="font-mono text-xs text-right text-[#00d1b2] font-semibold">{{ val }}</span>
              </div>
            </div>
            <NuxtLink
              :to="`/contact?product=${encodeURIComponent(currentProduct.code)}&interest=${encodeURIComponent(currentProduct.name)}`"
              class="btn-primary w-full text-center shadow-lg block"
            >
              Ajukan Konsultasi / Request Penawaran &rarr;
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- ─── ALL PRODUCTS & SERVICES CATALOG GRID ─────────────────────── -->
      <div class="pt-14 border-t border-white/10">
        <div class="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p class="section-label mb-2">KATALOG LENGKAP // Alat Survei, Radar &amp; Sistem</p>
            <h3 class="font-display font-bold text-2xl sm:text-3xl text-white">
              Seluruh Lini Solusi Terrabyte &amp; Mitra Lextera
            </h3>
          </div>
          <span class="font-mono text-xs text-[#6c889f]">
            Menampilkan {{ filteredProductList.length }} dari {{ productList.length }} entitas
          </span>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="prod in filteredProductList"
            :key="prod.code"
            class="p-6 neon-card flex flex-col justify-between group cursor-pointer transition-all duration-300"
            :class="activeProductCode === prod.code ? 'border-[#00d1b2] shadow-[0_0_20px_rgba(0,209,178,0.25)]' : ''"
            @click="activeProductCode = prod.code"
          >
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="font-mono text-[11px] tracking-widest uppercase text-[#00d1b2] font-bold px-2 py-0.5 rounded bg-[#00d1b2]/10 border border-[#00d1b2]/30">
                  {{ prod.code }}
                </span>
                <span class="font-ui text-[10px] tracking-wider uppercase px-2 py-0.5 border border-white/10 text-[#6c889f] rounded-full">
                  {{ getProductBadge(prod) }}
                </span>
              </div>

              <div class="h-40 rounded-xl overflow-hidden mb-4 bg-black/40 relative">
                <img :src="prod.img" :alt="prod.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div class="absolute inset-0 bg-gradient-to-t from-[#001428] via-transparent to-transparent opacity-60"></div>
              </div>

              <h4 class="font-display font-bold text-base text-white mb-2 group-hover:text-[#00d1b2] transition-colors leading-snug">
                {{ prod.name }}
              </h4>
              <p class="font-body font-light text-xs leading-relaxed text-[#9db4c8] line-clamp-3 mb-4">
                {{ prod.summary }}
              </p>
            </div>

            <div class="pt-4 border-t border-white/10 flex items-center justify-between">
              <span class="font-ui text-xs text-[#00d1b2] font-bold">
                Pilih Produk &rarr;
              </span>
              <NuxtLink
                :to="`/contact?product=${encodeURIComponent(prod.code)}&interest=${encodeURIComponent(prod.name)}`"
                class="btn-outline text-[10px] py-1 px-2.5 rounded-lg"
                @click.stop
              >
                Inquiry
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
  title: 'Katalog Produk Survei & Geospasial, Radar ComNav & TerraPulse — PT Terrabyte Geosystems Indonesia',
  meta: [
    {
      name: 'description',
      content: 'Katalog lengkap instrumen survei geospasial (GNSS RTK, Laser RTK, Total Station, Optical Level, Bathymetry), Radar GB-SAR ComNav MS-SAR5000, serta platform software TerraPulse.'
    }
  ]
})

const { data: productsData } = await useAsyncData('products-catalog', () => $fetch('/api/products').catch(() => []))
const productList = computed(() => (productsData.value && productsData.value.length > 0) ? productsData.value : _staticFallbackList)

// Comprehensive Surveying & Geospatial Categories
const categories = [
  { id: 'all', label: 'Semua Portofolio' },
  { id: 'software', label: 'Platform TerraPulse' },
  { id: 'radar', label: 'Radar GB-SAR' },
  { id: 'laser-rtk', label: 'Laser RTK' },
  { id: 'gnss', label: 'GNSS RTK' },
  { id: 'total-station', label: 'Total Station & Optik' },
  { id: 'bathymetry', label: 'Batimetri' },
  { id: 'service', label: 'Layanan & Maintenance' },
]

const activeCategory = ref('all')

const getProductBadge = (prod: any) => {
  const cat = (prod.category || '').toLowerCase()
  const text = ((prod.tag || '') + ' ' + (prod.name || '') + ' ' + (prod.code || '')).toLowerCase()
  if (cat === 'service' || text.includes('layanan') || text.includes('engineering') || text.includes('maintenance')) return 'LAYANAN TEKNISI'
  if (cat === 'software' || text.includes('terrapulse') || text.includes('software') || text.includes('platform')) return 'PLATFORM SOFTWARE'
  if (cat === 'radar' || text.includes('sar5000') || text.includes('radar')) return 'RADAR GB-SAR'
  if (cat === 'laser-rtk' || text.includes('n2') || text.includes('venus') || text.includes('laser rtk')) return 'LASER RTK'
  if (cat === 'gnss' || text.includes('k8') || text.includes('gnss')) return 'GNSS RTK'
  if (cat === 'total-station' || text.includes('cts') || text.includes('station') || text.includes('dsz') || text.includes('level')) return 'TOTAL STATION & OPTIK'
  if (cat === 'bathymetry' || text.includes('echo') || text.includes('hydro') || text.includes('bathymetric')) return 'BATIMETRI'
  return 'INSTRUMEN SURVEI'
}

const getProductCapability = (prod: any) => {
  const text = ((prod.tag || '') + ' ' + (prod.name || '') + ' ' + (prod.code || '') + ' ' + (prod.category || '')).toLowerCase()
  if (text.includes('terrapulse')) return 'Telemetri Real-Time & Anomali'
  if (text.includes('sar5000') || text.includes('radar')) return 'Sub-mm Slope Deformasi'
  if (text.includes('n2') || text.includes('venus') || text.includes('laser')) return 'Laser EDM Tanpa Pole'
  if (text.includes('station') || text.includes('cts')) return '1.000m Reflectorless EDM'
  if (text.includes('level') || text.includes('dsz')) return '0.5 mm Levelling Presisi'
  if (text.includes('echo') || text.includes('hydro')) return 'Pemeruman Kedalaman 300m'
  if (text.includes('service') || text.includes('layanan')) return 'Kalibrasi & Perawatan Lapangan'
  return 'Multi-Band RTK Sub-cm'
}

const getCategoryCount = (catId: string) => {
  if (catId === 'all') return productList.value.length
  return productList.value.filter((p: any) => {
    if (p.category === catId) return true
    const b = getProductBadge(p).toLowerCase()
    if (catId === 'software' && b.includes('software')) return true
    if (catId === 'radar' && b.includes('radar')) return true
    if (catId === 'laser-rtk' && b.includes('laser')) return true
    if (catId === 'gnss' && b.includes('gnss')) return true
    if (catId === 'total-station' && (b.includes('station') || b.includes('optik'))) return true
    if (catId === 'bathymetry' && b.includes('batimetri')) return true
    if (catId === 'service' && b.includes('layanan')) return true
    return false
  }).length
}

const filteredProductList = computed(() => {
  if (activeCategory.value === 'all') return productList.value
  return productList.value.filter((p: any) => {
    if (p.category === activeCategory.value) return true
    const b = getProductBadge(p).toLowerCase()
    if (activeCategory.value === 'software' && b.includes('software')) return true
    if (activeCategory.value === 'radar' && b.includes('radar')) return true
    if (activeCategory.value === 'laser-rtk' && b.includes('laser')) return true
    if (activeCategory.value === 'gnss' && b.includes('gnss')) return true
    if (activeCategory.value === 'total-station' && (b.includes('station') || b.includes('optik'))) return true
    if (activeCategory.value === 'bathymetry' && b.includes('batimetri')) return true
    if (activeCategory.value === 'service' && b.includes('layanan')) return true
    return false
  })
})

const activeProductCode = ref('TERRAPULSE-CORE')

const currentProduct = computed(() => {
  const found = productList.value.find((p: any) => p.code === activeProductCode.value)
  if (found) return found
  return filteredProductList.value[0] || productList.value[0] || _staticFallbackList[0]
})

const _staticFallbackList = [
  {
    id: "prod-terrapulse",
    code: "TERRAPULSE-CORE",
    tag: "Platform Software // Sistem Unggulan Terrabyte",
    name: "TerraPulse Monitoring & Analytics Platform",
    summary: "Brand sistem software pemantauan digital milik Terrabyte yang dirancang untuk mengolah telemetri radar MS-SAR5000 dan multi-sensor fisik menjadi analisis deformasi, deteksi anomali, dan peringatan dini real-time.",
    img: "/images/hero-bg.jpg",
    status: "Active Platform IP",
    specs: [
      ["Pengembang & Pemilik IP", "PT Terrabyte Geosystems Indonesia"],
      ["Arsitektur Sistem", "Cloud-Native Hybrid & Air-Gapped On-Premise"],
      ["Latensi Pemrosesan", "< 5 milidetik (Real-Time Ingestion)"],
      ["Dukungan Instrumen", "Radar ComNav MS-SAR5000, GNSS RTK, Sensor Fisik"],
      ["Analisis Deformasi", "Pemetaan Vektor Pergeseran Tanah Sub-Milimeter"],
      ["Protokol Komunikasi", "MQTT, WebSocket, REST API, Kafka, ASTERIX"]
    ]
  },
  {
    id: "prod-radar-sar5000",
    code: "RADAR-MS-SAR5000",
    tag: "Hardware Radar // Principal ComNav (via Lextera)",
    name: "ComNav MS-SAR5000 Ground-Based Radar",
    summary: "Radar berpresisi tinggi tipe Ground-Based Synthetic Aperture Radar (GB-SAR) dari principal ComNav yang dihadirkan melalui Lextera untuk monitoring stabilitas lereng tambang dan deformasi dinding batuan secara kontinu.",
    img: "/images/products-nx500.jpg",
    status: "In Field Deployment",
    specs: [
      ["Tipe Radar", "Ground-Based Synthetic Aperture Radar (GB-SAR)"],
      ["Akurasi Pengukuran", "Sub-milimeter (Hingga 0.1 mm deteksi pergeseran)"],
      ["Jangkauan Pantau", "Radius hingga 5.000 meter (5 km coverage)"],
      ["Siklus Pemindaian", "< 2 menit per siklus pemindaian penuh"],
      ["Ketahanan Lingkungan", "IP67 All-Weather (Kondisi Hujan, Kabut, Debu Tambang)"],
      ["Integrasi Perangkat", "Didukung langsung oleh platform TerraPulse"]
    ]
  }
]
</script>
