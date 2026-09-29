<template>
  <div class="py-24 lg:py-28">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">

      <!-- ─── HEADER / HERO SHOWCASE TERRAPULSE ───────────────────────── -->
      <div class="mb-16">
        <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#00d1b2]/10 border border-[#00d1b2]/30 mb-4">
          <span class="w-2 h-2 rounded-full bg-[#00d1b2] animate-pulse"></span>
          <span class="font-ui text-xs font-semibold tracking-widest uppercase text-[#00d1b2]">
            SOLUSI UNGGULAN TERRABYTE // PLATFORM TERRAPULSE
          </span>
        </div>
        <h1 class="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-wide text-white leading-tight">
          TERRAPULSE MONITORING &amp;<br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00d1b2] via-[#5ce6d4] to-[#60A5FA]">
            REAL-TIME DEFORMATION ANALYTICS
          </span>
        </h1>
        <p class="font-body font-light text-base sm:text-lg leading-relaxed text-[#9db4c8] mt-5 max-w-3xl">
          Solusi intelijen digital unggulan dari PT Terrabyte Geosystems Indonesia yang dirancang khusus untuk memadukan telemetri radar ComNav MS-SAR5000, GNSS RTK presisi tinggi, dan multi-sensor geoteknik menjadi visualisasi 3D serta peringatan dini real-time berlatensi &lt; 5 milidetik.
        </p>

        <!-- Live Telemetry KPI Bar -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 p-5 rounded-2xl bg-[#001f3f]/40 border border-[#00d1b2]/30 backdrop-blur-md">
          <div class="space-y-1">
            <span class="font-mono text-[10px] text-[#6c889f] uppercase block">LATENSI SISTEM</span>
            <span class="font-display font-bold text-xl text-[#00d1b2]">&lt; 5 Milidetik</span>
            <span class="font-ui text-[11px] text-[#9db4c8] block">Real-time Stream Ingest</span>
          </div>
          <div class="space-y-1">
            <span class="font-mono text-[10px] text-[#6c889f] uppercase block">RESOLUSI DETEKSI</span>
            <span class="font-display font-bold text-xl text-white">Sub-0.1 mm</span>
            <span class="font-ui text-[11px] text-[#9db4c8] block">Vektor Deformasi Lereng</span>
          </div>
          <div class="space-y-1">
            <span class="font-mono text-[10px] text-[#6c889f] uppercase block">JANGKAUAN RADAR</span>
            <span class="font-display font-bold text-xl text-cyan-300">Radius 5.000 m</span>
            <span class="font-ui text-[11px] text-[#9db4c8] block">360° All-Weather Scan</span>
          </div>
          <div class="space-y-1">
            <span class="font-mono text-[10px] text-[#6c889f] uppercase block">DEPLOYMENT MODEL</span>
            <span class="font-display font-bold text-xl text-white">Air-Gapped / Cloud</span>
            <span class="font-ui text-[11px] text-[#00d1b2] block">Kedaulatan Data Penuh</span>
          </div>
        </div>
      </div>

      <!-- ─── 6 PILAR PENERAPAN SOLUSI TERRAPULSE ─────────────────────── -->
      <div class="mb-24">
        <div class="max-w-3xl mb-12">
          <p class="section-label mb-2">MODUL IMPLEMENTASI INDUSTRI</p>
          <h2 class="font-display font-bold text-2xl sm:text-3xl text-white">
            Pilar Solusi TerraPulse di Sektor Strategis
          </h2>
          <p class="font-body font-light text-sm text-[#9db4c8] mt-2">
            Dari dinding tambang pit terbuka hingga jembatan bentang panjang nasional, TerraPulse memberikan kepastian analitik dan keandalan proteksi aset.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div
            v-for="sol in solutionsList"
            :key="sol.num"
            class="relative group p-8 neon-card flex flex-col justify-between overflow-hidden"
          >
            <!-- Ambient Glow -->
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
              <h3 class="font-display font-bold text-xl tracking-wide text-white mb-3 group-hover:text-cyan-100 transition-colors">
                {{ sol.title }}
              </h3>
              <p class="font-body font-light text-sm leading-relaxed text-[#9db4c8] mb-5">
                {{ sol.desc }}
              </p>

              <!-- Sensor Chips -->
              <div class="flex flex-wrap gap-1.5 mb-6">
                <span
                  v-for="tag in sol.tags"
                  :key="tag"
                  class="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase bg-[#001f3f]/80 text-[#00d1b2] border border-[#00d1b2]/30 group-hover:border-[#00d1b2]/50 transition-colors"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- Bottom Footer: Compliance Standard & Action -->
            <div class="pt-5 border-t border-white/10 flex items-center justify-between">
              <span class="font-ui text-[11px] tracking-wider uppercase text-[#6c889f] group-hover:text-[#9db4c8] transition-colors flex items-center space-x-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-[#00d1b2]"></span>
                <span>{{ sol.compliance }}</span>
              </span>
              <NuxtLink
                :to="`/contact?interest=${encodeURIComponent('Solusi TerraPulse: ' + sol.title)}`"
                class="text-xs font-semibold text-[#00d1b2] hover:text-white flex items-center space-x-1"
              >
                <span>Konsultasi</span>
                <span>&rarr;</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- ─── ARSITEKTUR ALUR KERJA TERRAPULSE ────────────────────────── -->
      <div class="mb-24 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-[#001428] via-[#002447] to-[#001428] border border-[#00d1b2]/40 shadow-2xl">
        <div class="max-w-3xl mb-10">
          <p class="section-label mb-2 text-[#00d1b2]">ARSITEKTUR END-TO-END</p>
          <h2 class="font-display font-bold text-2xl sm:text-3xl text-white">
            Bagaimana Platform TerraPulse Bekerja di Lokasi Proyek
          </h2>
          <p class="font-body font-light text-sm text-[#9db4c8] mt-2">
            Dari tangkapan radar fisik di medan tambang hingga visualisasi real-time di pusat komando Terrawatch.
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-6">
          <div class="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-3">
            <span class="font-mono text-xs font-bold text-[#00d1b2]">TAHAP 01 // AKUISISI</span>
            <h4 class="font-display font-bold text-base text-white">Pemindaian Radar &amp; Sensor</h4>
            <p class="font-body font-light text-xs text-[#9db4c8] leading-relaxed">
              Radar ComNav MS-SAR5000 melakukan pemindaian 360° secara terus-menerus memancarkan sinyal mikro ke dinding batuan, dipadukan dengan titik CORS GNSS K8.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-3">
            <span class="font-mono text-xs font-bold text-[#00d1b2]">TAHAP 02 // TRANSMISI</span>
            <h4 class="font-display font-bold text-base text-white">Edge Gateway Ingestion</h4>
            <p class="font-body font-light text-xs text-[#9db4c8] leading-relaxed">
              Data telemetri mentah dikompresi dan dikirim melalui jaringan fiber optic, radio UHF industri, atau satelit Starlink ke server lokal TerraPulse.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-3">
            <span class="font-mono text-xs font-bold text-[#00d1b2]">TAHAP 03 // ANALITIK</span>
            <h4 class="font-display font-bold text-base text-white">Engine Pemrosesan TerraPulse</h4>
            <p class="font-body font-light text-xs text-[#9db4c8] leading-relaxed">
              Algoritma interferometri fase diferensial mengekstraksi vektor pergeseran tanah sub-milimeter, menghitung gradien laju percepatan pergerakan secara instan.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-3">
            <span class="font-mono text-xs font-bold text-[#00d1b2]">TAHAP 04 // RESPON</span>
            <h4 class="font-display font-bold text-base text-white">Alerting &amp; Mitigasi Terrawatch</h4>
            <p class="font-body font-light text-xs text-[#9db4c8] leading-relaxed">
              Jika terjadi anomali melampaui batas ambang, sirine lapangan terpicu otomatis dan notifikasi multi-kanal dikirimkan ke command center Terrawatch.
            </p>
          </div>
        </div>
      </div>

      <!-- ─── CALL TO ACTION BANNER ───────────────────────────────────── -->
      <div class="p-8 md:p-12 rounded-3xl mica-panel hover:border-[#00d1b2]/50 hover:shadow-[0_0_30px_rgba(0,209,178,0.2)] transition-all duration-300 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div class="space-y-3 max-w-2xl">
          <div class="flex items-center space-x-2">
            <span class="px-2.5 py-0.5 rounded-full bg-[#00d1b2]/20 text-[#00d1b2] font-ui text-[11px] font-bold uppercase tracking-wider">
              Live Demo &amp; Integrasi BSS
            </span>
          </div>
          <h3 class="font-display font-bold text-2xl sm:text-3xl text-white">
            Siap Menguji Coba Keandalan Platform TerraPulse di Site Anda?
          </h3>
          <p class="font-body font-light text-sm leading-relaxed text-[#9db4c8]">
            Hubungi tim spesialis arsitektur sistem dan engineer radar Terrabyte untuk penjadwalan demo sistem atau integrasi tiket langsung melalui platform BSS kami.
          </p>
        </div>
        <div class="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <NuxtLink to="/contact?type=demo" class="btn-primary whitespace-nowrap shadow-lg">
            Request Demo TerraPulse &rarr;
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-outline whitespace-nowrap">
            Konsultasi Engineer (BSS) &rarr;
          </NuxtLink>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'

useHead({
  title: 'Solusi Unggulan TerraPulse — PT Terrabyte Geosystems Indonesia',
  meta: [
    {
      name: 'description',
      content: 'Showcase solusi unggulan TerraPulse dari PT Terrabyte Geosystems Indonesia: pemantauan stabilitas lereng tambang, Structural Health Monitoring (SHM), dan Early Warning System real-time.'
    }
  ]
})

// Custom SVG Icons
const SlopeIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', strokeWidth: '1.5', viewBox: '0 0 24 24' }, [
    h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941' }),
  ])

const StructureIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', strokeWidth: '1.5', viewBox: '0 0 24 24' }, [
    h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' }),
  ])

const AlertIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', strokeWidth: '1.5', viewBox: '0 0 24 24' }, [
    h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5' }),
  ])

const FusionIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', strokeWidth: '1.5', viewBox: '0 0 24 24' }, [
    h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.942a4.5 4.5 0 01-4.66 0l-1.57-.942m7.8 0A4.478 4.478 0 0121 18.75V21H3v-2.25c0-1.428.67-2.73 1.8-3.45l1.57-.942a4.5 4.5 0 014.66 0l1.57.942' }),
  ])

const TwinIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', strokeWidth: '1.5', viewBox: '0 0 24 24' }, [
    h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9' }),
  ])

const ShieldIcon = () =>
  h('svg', { fill: 'none', stroke: 'currentColor', strokeWidth: '1.5', viewBox: '0 0 24 24' }, [
    h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' }),
  ])

const solutionsList = [
  {
    num: '01',
    icon: SlopeIcon,
    title: 'Stabilitas Lereng Pit Tambang Terbuka',
    desc: 'Pemantauan deformasi lereng dinding tambang secara kontinu dengan mengolah data Radar ComNav MS-SAR5000, mendeteksi pergeseran sub-milimeter dan memproyeksikan potensi runtuhan.',
    tags: ['MS-SAR5000 GB-SAR', 'SUB-MM DEFORMASI', 'PIT MINE SAFETY', '360° COVERAGE'],
    compliance: 'Kepmen ESDM 1827 K/2018 (K3 Tambang)',
  },
  {
    num: '02',
    icon: StructureIcon,
    title: 'Structural Health Monitoring (SHM) Sipil',
    desc: 'Pengawasan integritas struktur jembatan bentang panjang, tubuh bendungan, dermaga, dan terowongan dengan stasiun GNSS CORS kontinu serta tiltmeter presisi tinggi.',
    tags: ['GNSS CORS', 'DAM INTEGRITY', 'BRIDGE DEFLECTION', 'ACCELEROMETER'],
    compliance: 'Standar Kemen PUPR & Keamanan Bendungan',
  },
  {
    num: '03',
    icon: AlertIcon,
    title: 'Automated Early Warning System (EWS)',
    desc: 'Pembangkitan alarm multi-tingkat (Advisory, Alert, Danger) saat laju percepatan pergeseran tanah melewati ambang batas, diteruskan ke sirene dan pesan broadcast dalam < 5 milidetik.',
    tags: ['< 5MS ALERT', 'AI ACCELERATION', 'SMS / WA NOTIF', 'SIRENE OTOMATIS'],
    compliance: 'ISO 22320 Manajemen Bencana Darurat',
  },
  {
    num: '04',
    icon: FusionIcon,
    title: 'Multi-Sensor Telemetry Fusion Grid',
    desc: 'Integrasi simultan beragam jenis instrumen: radar darat, receiver GNSS K8/Venus, piezometer pori air, inklinometer otomatis, hingga Automatic Weather Station (AWS).',
    tags: ['SENSOR FUSION', 'PIEZOMETER', 'WEATHER STATION', 'MQTT / REST API'],
    compliance: 'Standar Open Geospatial Consortium (OGC)',
  },
  {
    num: '05',
    icon: TwinIcon,
    title: '3D Digital Twin & Heatmap Pergeseran',
    desc: 'Visualisasi interaktif penampang lereng dan kontur topografi 3D dengan overlay heatmap gradien warna deformasi kumulatif maupun laju kecepatan harian yang mudah dianalisis.',
    tags: ['3D DIGITAL TWIN', 'VECTOR HEATMAP', 'WEBGL ENGINE', 'CONTOUR OVERLAY'],
    compliance: 'Standar Spesifikasi Informasi Geospasial BIG',
  },
  {
    num: '06',
    icon: ShieldIcon,
    title: 'Air-Gapped & Kedaulatan Data Mandiri',
    desc: 'Dukungan arsitektur on-premise tertutup (air-gapped) tanpa ketergantungan koneksi publik untuk menjamin kerahasiaan data cadangan tambang dan instalasi strategis nasional.',
    tags: ['AIR-GAPPED SYSTEM', 'DATA SOVEREIGNTY', 'HYBRID CLOUD', 'ROLE-BASED RBAC'],
    compliance: 'Standar Keamanan BSSN & ISO 27001',
  },
]
</script>
