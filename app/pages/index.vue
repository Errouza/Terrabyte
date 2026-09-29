<template>
  <div>
    <!-- ─── 1. HERO SECTION ──────────────────────────────────────────── -->
    <section class="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      <!-- Dynamic Rotating Hero Background -->
      <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          v-for="(slide, idx) in heroSlides"
          :key="slide.image"
          class="absolute inset-0 transition-all duration-1000 ease-in-out"
          :class="idx === currentSlide ? 'opacity-40 scale-100' : 'opacity-0 scale-105 pointer-events-none'"
        >
          <img
            :src="slide.image"
            :alt="slide.alt"
            class="w-full h-full object-cover object-center filter contrast-115 brightness-90"
          />
        </div>

        <!-- Palette Overlays -->
        <div class="absolute inset-0 bg-gradient-to-t from-[#001224] via-[#001224]/85 to-[#001224]/45"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-[#001224] via-[#001224]/88 to-transparent"></div>
        <div class="absolute inset-0 dot-grid opacity-20"></div>

        <!-- Ambient Glow Elements -->
        <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[750px] h-[500px] bg-[#00d1b2]/15 rounded-full blur-[140px]"></div>
        <div class="absolute bottom-10 right-10 w-[400px] h-[300px] bg-[#3B82F6]/10 rounded-full blur-[120px]"></div>
      </div>

      <div class="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-10">
        <div class="max-w-3.5xl">
          <!-- Live Telemetry Status Pill & Slide Indicator -->
          <div class="flex flex-wrap items-center gap-3 mb-8">
            <div class="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full mica-pill border border-[#00d1b2]/40 text-[#00d1b2] text-xs font-mono tracking-wider shadow-[0_0_20px_rgba(0,209,178,0.18)]">
              <span class="w-2 h-2 rounded-full bg-[#00d1b2] animate-ping"></span>
              <span class="w-2 h-2 rounded-full bg-[#00d1b2] -ml-4"></span>
              <span class="text-xs font-mono tracking-widest text-[#00E5FF] uppercase font-bold">
                TERRABYTE // PEMILIK SISTEM TERRAPULSE &amp; REKAYASA RADAR
              </span>
            </div>

            <!-- Slide Switcher Dots -->
            <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-full mica-pill border border-white/12">
              <button
                v-for="(s, idx) in heroSlides"
                :key="s.image"
                @click="currentSlide = idx"
                class="w-2 h-2 rounded-full transition-all duration-300 cursor-pointer"
                :class="idx === currentSlide ? 'w-6 bg-[#00d1b2] shadow-[0_0_8px_rgba(0,209,178,0.8)]' : 'bg-white/25 hover:bg-white/50'"
                :aria-label="'Switch to slide ' + (idx + 1)"
              ></button>
            </div>
          </div>

          <!-- Hero Headline with Radiant Neon Accents -->
          <h1 class="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-wide text-white leading-[1.1] mb-6">
            <template v-if="heroHeadlineParts.length > 1">
              <span v-for="(part, idx) in heroHeadlineParts.slice(0, -1)" :key="idx" class="block">
                {{ part }}
              </span>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00d1b2] via-[#5ce6d4] to-[#60A5FA] neon-text block">
                {{ heroHeadlineParts[heroHeadlineParts.length - 1] }}
              </span>
            </template>
            <template v-else>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00d1b2] via-[#5ce6d4] to-[#60A5FA] neon-text">
                {{ siteSettings?.heroHeadline || 'OTORITAS SISTEM TERRAPULSE & REKAYASA RADAR PRESISI' }}
              </span>
            </template>
          </h1>

          <!-- Subtitle -->
          <p class="font-body font-light text-base sm:text-lg text-[#9db4c8] leading-relaxed max-w-2xl mb-10 whitespace-pre-line">
            {{ siteSettings?.heroSubtitle || 'Pengembang platform monitoring TerraPulse dan penyedia tim engineer spesialis radar ComNav MS-SAR5000 untuk keandalan operasional sektor tambang, maritim, dan infrastruktur strategis.' }}
          </p>

          <!-- CTAs -->
          <div class="flex flex-wrap gap-4 items-center mb-16">
            <NuxtLink
              to="/solutions"
              class="btn-primary flex items-center gap-2 group"
            >
              <span>Solusi Unggulan TerraPulse</span>
              <span class="text-base group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200">↗</span>
            </NuxtLink>
            <NuxtLink
              to="/products"
              class="btn-secondary flex items-center gap-2 group"
            >
              <span>Katalog Alat Survei &amp; Radar</span>
              <span class="text-base group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200 text-[#00d1b2]">↗</span>
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="btn-outline flex items-center gap-2 group"
            >
              <span>Inquiry Platform BSS</span>
              <span class="text-xs">&rarr;</span>
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

    <!-- ─── 2. COMPANY SUMMARY SECTION (Cuplikan /company) ───────────── -->
    <section class="py-24 bg-[#00172e] border-t border-white/10 relative">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00d1b2]/10 border border-[#00d1b2]/30 mb-3">
              <span class="w-2 h-2 rounded-full bg-[#00d1b2]"></span>
              <span class="font-ui text-xs font-semibold tracking-widest uppercase text-[#00d1b2]">
                TENTANG PERUSAHAAN // Ringkasan Profil &amp; Visi Misi
              </span>
            </div>
            <h2 class="font-display font-bold text-3xl sm:text-4xl text-white tracking-wide">
              Penyokong Sistem Utama &amp; Arsitek Intelijen Pemantauan
            </h2>
            <p class="font-body font-light text-sm sm:text-base text-[#9db4c8] mt-3 max-w-2xl">
              PT Terrabyte Geosystems Indonesia memegang peranan inti sebagai entitas pengembang sistem software mandiri (TerraPulse) dan penyedia engineer radar bersertifikasi yang memperkuat ekosistem geospasial bersama Lextera &amp; ComNav.
            </p>
          </div>
          <NuxtLink to="/company" class="btn-outline self-start md:self-end whitespace-nowrap">
            Profil Lengkap, Visi Misi &amp; Manajemen &rarr;
          </NuxtLink>
        </div>

        <!-- 3 Ecosystem Pillars Preview -->
        <div class="grid md:grid-cols-3 gap-6 items-stretch mb-10">
          <div class="p-7 rounded-2xl bg-gradient-to-b from-[#001f3f] to-[#001428] border border-[#00d1b2] shadow-[0_0_25px_rgba(0,209,178,0.2)] flex flex-col justify-between">
            <div>
              <span class="font-mono text-xs font-bold text-[#001f3f] bg-[#00d1b2] px-2.5 py-0.5 rounded uppercase tracking-wider inline-block mb-3">
                OTORITAS SISTEM
              </span>
              <h3 class="font-display font-bold text-xl text-white mb-2">PT Terrabyte Geosystems Indonesia</h3>
              <p class="font-body text-xs text-[#d4f3ed] leading-relaxed">
                Pemilik hak cipta sistem <strong>TerraPulse</strong> dan sentra insinyur spesialis yang memelihara serta mengkalibrasi Radar ComNav MS-SAR5000 di lapangan.
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-[#00d1b2]/30 font-mono text-[11px] text-[#00d1b2]">
              FOKUS: Platform TerraPulse &amp; Radar Services
            </div>
          </div>

          <div class="p-7 neon-card rounded-2xl flex flex-col justify-between">
            <div>
              <span class="font-mono text-xs font-bold text-[#FBBF24] bg-[#F59E0B]/10 border border-[#F59E0B]/30 px-2.5 py-0.5 rounded uppercase tracking-wider inline-block mb-3">
                INTEGRASI LAPANGAN
              </span>
              <h3 class="font-display font-bold text-lg text-white mb-2">PT Lextera Survey Indonesia</h3>
              <p class="font-body text-xs text-[#9db4c8] leading-relaxed">
                Mitra survei lapangan dan penyedia lini peralatan geospasial terintegrasi (GNSS RTK, Laser RTK, Total Station, Echo Sounder) yang disokong sistem Terrabyte.
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-white/10 font-mono text-[11px] text-[#6c889f]">
              FOKUS: Integrasi Survei &amp; Alat Ukur
            </div>
          </div>

          <div class="p-7 neon-card rounded-2xl flex flex-col justify-between">
            <div>
              <span class="font-mono text-xs font-bold text-[#60A5FA] bg-[#3B82F6]/10 border border-[#3B82F6]/30 px-2.5 py-0.5 rounded uppercase tracking-wider inline-block mb-3">
                PRINCIPAL HARDWARE
              </span>
              <h3 class="font-display font-bold text-lg text-white mb-2">ComNav Technology Ltd.</h3>
              <p class="font-body text-xs text-[#9db4c8] leading-relaxed">
                Produsen perangkat keras radar darat canggih <strong>MS-SAR5000</strong> dan sensor GNSS RTK presisi tinggi dunia yang dioperasikan tim Terrabyte.
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-white/10 font-mono text-[11px] text-[#6c889f]">
              FOKUS: Manufaktur Radar &amp; Sensor GNSS
            </div>
          </div>
        </div>

        <!-- Vision Snippet Banner -->
        <div class="p-6 rounded-2xl bg-[#001224]/80 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex items-center space-x-3">
            <span class="w-2.5 h-2.5 rounded-full bg-[#00d1b2] shadow-[0_0_8px_#00d1b2]"></span>
            <p class="font-body text-xs sm:text-sm text-[#9db4c8] italic">
              "Menjadi pionir penyedia sistem intelijen pemantauan geospasial dan otoritas rekayasa radar terdepan di Indonesia, menjamin keselamatan operasional industri kritis."
            </p>
          </div>
          <NuxtLink to="/company" class="text-xs font-mono text-[#00d1b2] hover:underline whitespace-nowrap">
            Visi, Misi &amp; Profil Manajemen &rarr;
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ─── 3. PRODUCTS HIGHLIGHT SECTION (Cuplikan /products) ────────── -->
    <section class="py-24 bg-[#001224] border-t border-white/10 relative">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00d1b2]/10 border border-[#00d1b2]/30 mb-3">
              <span class="w-2 h-2 rounded-full bg-[#00d1b2] animate-pulse"></span>
              <span class="font-ui text-xs font-semibold tracking-widest uppercase text-[#00d1b2]">
                KATALOG PRODUK // Cuplikan Portofolio Survei &amp; Geospasial
              </span>
            </div>
            <h2 class="font-display font-bold text-3xl sm:text-4xl text-white tracking-wide">
              Instrumen Survei, Radar MS-SAR5000 &amp; Platform TerraPulse
            </h2>
            <p class="font-body font-light text-sm sm:text-base text-[#9db4c8] mt-3 max-w-2xl">
              Koleksi lengkap produk survei dan pemetaan mitra Lextera (GNSS RTK, Laser RTK, Total Station, Leveling, Echo Sounder), Radar GB-SAR ComNav, dan software TerraPulse.
            </p>
          </div>
          <NuxtLink to="/products" class="btn-primary self-start md:self-end whitespace-nowrap">
            Lihat Seluruh Katalog Produk ({{ featuredProducts.length }} Item) &rarr;
          </NuxtLink>
        </div>

        <!-- Featured Products 4-Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="prod in featuredProducts"
            :key="prod.code"
            class="p-6 neon-card flex flex-col justify-between group hover:border-[#00d1b2]/70 transition-all duration-300"
          >
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="font-mono text-[10px] tracking-widest uppercase text-[#00d1b2] font-bold px-2 py-0.5 rounded bg-[#00d1b2]/10 border border-[#00d1b2]/30">
                  {{ prod.code }}
                </span>
                <span class="font-ui text-[9px] uppercase px-2 py-0.5 border border-white/10 text-[#6c889f] rounded-full">
                  {{ prod.tag ? prod.tag.split('//')[0] : 'PRODUK' }}
                </span>
              </div>

              <div class="h-36 rounded-xl overflow-hidden mb-4 bg-black/40 relative">
                <img :src="prod.img" :alt="prod.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div class="absolute inset-0 bg-gradient-to-t from-[#001428] via-transparent to-transparent opacity-60"></div>
              </div>

              <h3 class="font-display font-bold text-base text-white mb-2 group-hover:text-[#00d1b2] transition-colors leading-snug">
                {{ prod.name }}
              </h3>
              <p class="font-body font-light text-xs leading-relaxed text-[#9db4c8] line-clamp-3 mb-4">
                {{ prod.summary }}
              </p>
            </div>

            <div class="pt-4 border-t border-white/10 flex items-center justify-between">
              <NuxtLink
                to="/products"
                class="font-ui text-xs text-[#00d1b2] font-bold hover:underline"
              >
                Spesifikasi &rarr;
              </NuxtLink>
              <NuxtLink
                :to="`/contact?product=${encodeURIComponent(prod.code)}&interest=${encodeURIComponent(prod.name)}`"
                class="btn-outline text-[10px] py-1 px-2.5 rounded-lg"
              >
                Inquiry
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 4. SOLUTIONS PREVIEW SECTION (Fokus TerraPulse /solutions) ── -->
    <section class="py-24 bg-[#00172e] border-t border-white/10 relative">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00d1b2]/10 border border-[#00d1b2]/30 mb-3">
              <span class="w-2 h-2 rounded-full bg-[#00d1b2] animate-pulse"></span>
              <span class="font-ui text-xs font-semibold tracking-widest uppercase text-[#00d1b2]">
                SOLUSI UNGGULAN // Showcase Platform TerraPulse
              </span>
            </div>
            <h2 class="font-display font-bold text-3xl sm:text-4xl text-white tracking-wide">
              Platform TerraPulse: Solusi Intelijen Deformasi Real-Time
            </h2>
            <p class="font-body font-light text-sm sm:text-base text-[#9db4c8] mt-3 max-w-2xl">
              Fokus solusi unggulan Terrabyte dalam mengolah feed data radar ComNav MS-SAR5000, receiver GNSS RTK, dan sensor fisika menjadi peringatan dini dalam hitungan milidetik.
            </p>
          </div>
          <NuxtLink to="/solutions" class="text-sm font-ui font-semibold text-[#00d1b2] hover:underline inline-flex items-center gap-1.5 self-start md:self-end">
            Eksplorasi Seluruh Kapabilitas Solusi TerraPulse &rarr;
          </NuxtLink>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="sol in highlightedSolutions"
            :key="sol.title"
            class="neon-card p-7 rounded-2xl flex flex-col justify-between group hover:border-[#00d1b2]/60 transition-all duration-300"
          >
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="font-mono text-[10px] text-[#00d1b2] bg-[#00d1b2]/10 border border-[#00d1b2]/30 px-2.5 py-1 rounded tracking-wider uppercase font-semibold">
                  {{ sol.badge }}
                </span>
                <span class="font-mono text-sm text-[#00d1b2]/60 group-hover:text-[#00d1b2] transition-colors">0{{ sol.idx }}</span>
              </div>
              <h3 class="font-display font-bold text-xl text-white mb-2 group-hover:text-cyan-200 transition-colors">
                {{ sol.title }}
              </h3>
              <p class="font-body font-light text-xs sm:text-sm text-[#9db4c8] leading-relaxed mb-6">
                {{ sol.description }}
              </p>
            </div>

            <div class="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px]">
              <span class="text-[#6c889f]">FOKUS APLIKASI</span>
              <span class="text-[#00d1b2] font-semibold">{{ sol.focus }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 5. DIAGRAM ALUR SISTEM (DATA -> TERRAPULSE -> KEPUTUSAN) ──── -->
    <section class="py-24 bg-[#001224] border-t border-white/10 relative">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="max-w-3xl mb-14">
          <div class="flex items-center space-x-3 mb-3">
            <div class="w-8 h-[2px] bg-[#00d1b2]"></div>
            <span class="font-mono text-xs font-bold tracking-[0.2em] uppercase text-[#00d1b2]">
              ALUR KERJA TERPADU // Dari Sensor ke Keputusan Lapangan
            </span>
          </div>
          <h2 class="font-display font-bold text-3xl sm:text-4xl text-white tracking-wide">
            Integrasi Radar MS-SAR5000, Platform TerraPulse &amp; Terrawatch
          </h2>
          <p class="font-body font-light text-sm sm:text-base text-[#9db4c8] mt-3">
            Ekosistem pemantauan tanpa henti yang memadukan keandalan instrumen ComNav, instalasi presisi Lextera, komputasi cerdas software TerraPulse, dan pendampingan teknisi Terrabyte.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="p-6 rounded-2xl mica-card flex flex-col justify-between">
            <div>
              <span class="font-mono text-xs font-bold tracking-widest text-[#6c889f] block mb-3">// 01 [INSTRUMEN]</span>
              <h3 class="font-display font-bold text-lg text-white mb-2">Radar MS-SAR5000 &amp; GNSS</h3>
              <p class="font-body font-light text-xs text-[#9db4c8] leading-relaxed mb-4">
                Akuisisi data kontinu dari Radar GB-SAR ComNav dengan pemindaian 360° berakurasi sub-0.1 mm dan modul GNSS RTK presisi.
              </p>
            </div>
            <div class="pt-3 border-t border-white/5 font-mono text-[10px] text-[#00d1b2]">
              RADIUS 5 KM &bull; SUB-MM
            </div>
          </div>

          <div class="p-6 rounded-2xl mica-card flex flex-col justify-between">
            <div>
              <span class="font-mono text-xs font-bold tracking-widest text-[#FBBF24] block mb-3">// 02 [INTEGRASI LEXTERA]</span>
              <h3 class="font-display font-bold text-lg text-white mb-2">Penyetelan Medan &amp; Survei</h3>
              <p class="font-body font-light text-xs text-[#9db4c8] leading-relaxed mb-4">
                Penyetelan posisi instrumen pada baseline stabil di lokasi proyek tambang atau infrastruktur bersama tim ahli Lextera.
              </p>
            </div>
            <div class="pt-3 border-t border-white/5 font-mono text-[10px] text-amber-300">
              SITE DEPLOYMENT &bull; KALIBRASI
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-gradient-to-b from-[#001f3f]/90 to-[#001428]/95 border border-[#00d1b2] shadow-[0_0_25px_rgba(0,209,178,0.25)] flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="font-mono text-xs font-bold tracking-widest text-[#00d1b2]">// 03 [SISTEM TERRAPULSE]</span>
                <span class="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-[#00d1b2] text-[#001f3f]">Terrabyte IP</span>
              </div>
              <h3 class="font-display font-bold text-lg text-white mb-2">Pemrosesan Deformasi &amp; Alert</h3>
              <p class="font-body font-light text-xs text-[#d4f3ed] leading-relaxed mb-4">
                Software <strong>TerraPulse</strong> mengolah data mentah radar, mendeteksi laju deformasi mikro, dan memicu early warning &lt; 5 milidetik.
              </p>
            </div>
            <div class="pt-3 border-t border-[#00d1b2]/30 font-mono text-[10px] text-[#00d1b2]">
              &lt; 5MS DISPATCH &bull; 3D HEATMAP
            </div>
          </div>

          <div class="p-6 rounded-2xl mica-card flex flex-col justify-between">
            <div>
              <span class="font-mono text-xs font-bold tracking-widest text-[#6c889f] block mb-3">// 04 [TERRAWATCH &amp; RESPON]</span>
              <h3 class="font-display font-bold text-lg text-white mb-2">Pusat Komando &amp; Rawat On-Site</h3>
              <p class="font-body font-light text-xs text-[#9db4c8] leading-relaxed mb-4">
                Pengawasan 24/7 di Terrawatch Command Center dan kesiapan teknisi Terrabyte melakukan perawatan preventif instrumen di lokasi.
              </p>
            </div>
            <div class="pt-3 border-t border-white/5 font-mono text-[10px] text-[#00d1b2]">
              TERRAWATCH 24/7 &bull; RADAR ENGINEERS
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 6. LATEST NEWS & ARTICLES (Cuplikan /articles) ───────────── -->
    <section class="py-24 bg-[#00172e] border-t border-white/10 relative">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00d1b2]/10 border border-[#00d1b2]/30 mb-3">
              <span class="w-2 h-2 rounded-full bg-[#00d1b2] animate-pulse"></span>
              <span class="font-ui text-xs font-semibold tracking-widest uppercase text-[#00d1b2]">
                WARTA &amp; PUBLIKASI // Berita Terkini &amp; Pengumuman
              </span>
            </div>
            <h2 class="font-display font-bold text-3xl sm:text-4xl text-white tracking-wide">
              Kabar Terbaru dari Ekosistem Terrabyte Geosystems
            </h2>
            <p class="font-body font-light text-sm sm:text-base text-[#9db4c8] mt-3 max-w-2xl">
              Ikuti pengumuman operasional penting, studi kasus pemantauan lereng tambang, dan riset teknologi terkini kami.
            </p>
          </div>
          <NuxtLink to="/articles" class="btn-outline self-start md:self-end whitespace-nowrap">
            Baca Seluruh Artikel &amp; Publikasi &rarr;
          </NuxtLink>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Featured Terrawatch Opening Article -->
          <article
            v-for="(art, idx) in latestArticles"
            :key="art.slug"
            class="group rounded-2xl bg-[#092b47]/60 backdrop-blur-md border border-white/10 hover:border-cyan-400/50 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1"
            :class="idx === 0 ? 'md:col-span-2 border-[#00d1b2]/40 bg-[#001f3f]/80' : ''"
          >
            <div class="relative overflow-hidden bg-black/40" :class="idx === 0 ? 'h-64 md:h-72' : 'h-48'">
              <img
                :src="art.mainImage"
                :alt="art.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#092b47] via-transparent to-transparent"></div>
              <div class="absolute top-4 left-4 flex gap-2">
                <span class="px-3 py-1 rounded-full text-xs font-semibold bg-[#00d1b2] text-[#001f3f] tracking-wide">
                  {{ art.category }}
                </span>
                <span v-if="idx === 0" class="px-3 py-1 rounded-full text-xs font-semibold bg-amber-400 text-black tracking-wide font-mono">
                  PENGUMUMAN UTAMA
                </span>
              </div>
            </div>

            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div class="flex items-center gap-3 text-xs text-[#9db4c8] mb-3 font-mono">
                  <span>{{ art.publishedAt }}</span>
                  <span>•</span>
                  <span>{{ art.readTime }} min read</span>
                </div>
                <h3
                  class="font-display font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-snug"
                  :class="idx === 0 ? 'text-xl sm:text-2xl' : 'text-lg'"
                >
                  {{ art.title }}
                </h3>
                <p class="font-body font-light text-xs sm:text-sm text-[#9db4c8] line-clamp-3 mb-6 leading-relaxed">
                  {{ art.excerpt }}
                </p>
              </div>

              <div class="pt-4 border-t border-white/10 flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <div class="w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-xs font-bold text-cyan-400">
                    {{ art.author?.name ? art.author.name.charAt(0).toUpperCase() : 'T' }}
                  </div>
                  <span class="text-xs text-white font-medium">{{ art.author?.name || 'Tim TGI' }}</span>
                </div>
                <NuxtLink
                  :to="'/articles/' + art.slug"
                  class="text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                >
                  Baca Selengkapnya &rarr;
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ─── 7. INQUIRY & CONTACT CTA SECTION (Cuplikan /contact - BSS) ─ -->
    <section class="py-20 relative border-t border-white/10 bg-[#001224]">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="p-8 sm:p-12 rounded-3xl mica-panel hover:border-[#00d1b2]/50 hover:shadow-[0_0_30px_rgba(0,209,178,0.2)] transition-all duration-300">
          <div class="grid lg:grid-cols-12 gap-8 items-center">

            <!-- Left Info (7 Cols) -->
            <div class="lg:col-span-7 space-y-4">
              <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00d1b2]/10 border border-[#00d1b2]/30 text-[#00d1b2] font-mono text-xs uppercase tracking-wider">
                <span class="w-2 h-2 rounded-full bg-[#00d1b2] animate-ping"></span>
                <span>INTEGRASI ALUR PLATFORM BSS // SLA RESPON CEPAT</span>
              </div>
              <h2 class="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
                Siap Memperkuat Pemantauan Operasional dengan Ekosistem Terrabyte?
              </h2>
              <p class="text-[#9db4c8] text-sm sm:text-base leading-relaxed max-w-xl">
                Ajukan permohonan demo live platform TerraPulse, konsultasi penempatan teknisi radar ComNav MS-SAR5000, atau pengadaan alat survei Lextera. Seluruh inquiry diarahkan langsung ke antrean tiket platform Business Support System (BSS).
              </p>

              <!-- Quick Contact Badges -->
              <div class="flex flex-wrap gap-4 pt-3 text-xs font-mono">
                <div class="flex items-center gap-2 text-[#9db4c8]">
                  <span class="text-[#00d1b2]">EMAIL:</span>
                  <a href="mailto:Info.TGI@terrabyte.com" class="text-white hover:text-[#00d1b2] transition-colors">
                    Info.TGI@terrabyte.com
                  </a>
                </div>
                <div class="flex items-center gap-2 text-[#9db4c8]">
                  <span class="text-[#00d1b2]">TELP:</span>
                  <a :href="`tel:${(siteSettings?.phone || '+62 813-9840-986').replace(/\s+/g, '')}`" class="text-white hover:text-[#00d1b2] transition-colors">
                    {{ siteSettings?.phone || '+62 813-9840-986' }}
                  </a>
                </div>
                <div class="flex items-center gap-2 text-[#9db4c8]">
                  <span class="text-[#00d1b2]">INSTAGRAM:</span>
                  <a href="https://instagram.com/terrabyte.geosystem" target="_blank" class="text-white hover:text-[#00d1b2]">
                    @terrabyte.geosystem
                  </a>
                </div>
              </div>
            </div>

            <!-- Right Buttons & Actions (5 Cols) -->
            <div class="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
              <NuxtLink
                to="/contact?type=demo"
                class="btn-primary w-full text-center py-4 text-sm font-bold tracking-wider shadow-lg"
              >
                Request Demo TerraPulse Live &rarr;
              </NuxtLink>
              <NuxtLink
                to="/contact"
                class="btn-outline w-full text-center py-4 text-sm font-semibold tracking-wider"
              >
                Kirim Formulir Inquiry ke Platform BSS &rarr;
              </NuxtLink>
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

useHead({
  title: 'Terrabyte Geosystems Indonesia — Otoritas Sistem TerraPulse & Rekayasa Radar Presisi',
  meta: [
    {
      name: 'description',
      content: 'PT Terrabyte Geosystems Indonesia: Pengembang platform monitoring TerraPulse dan penyedia tim engineer radar ComNav MS-SAR5000 bersama mitra survei terintegrasi PT Lextera Survey Indonesia.'
    }
  ]
})

const { data: siteSettings } = await useAsyncData('home-settings', () => $fetch('/api/settings').catch(() => null))
const { data: productsData } = await useAsyncData('home-products', () => $fetch('/api/products').catch(() => []))
const { data: articlesData } = await useAsyncData('home-articles', () => $fetch('/api/articles').catch(() => []))

const heroHeadlineParts = computed(() => {
  const text = siteSettings.value?.heroHeadline || 'OTORITAS SISTEM TERRAPULSE & REKAYASA RADAR PRESISI'
  return text.split(' // ')
})

// Dynamic Rotating Slides
const heroSlides = [
  {
    image: '/images/hero-bg.jpg',
    alt: 'Platform Monitoring TerraPulse oleh Terrabyte',
    title: 'TerraPulse Monitoring Platform',
    tag: 'SISTEM TERRAPULSE'
  },
  {
    image: '/images/hero-surveyor.jpg',
    alt: 'Layanan Teknisi & Engineer Radar Terrabyte di Lapangan',
    title: 'Terrabyte Radar Engineering Services',
    tag: 'RADAR ENGINEERS'
  },
  {
    image: '/images/solutions-defense.jpg',
    alt: 'Radar ComNav MS-SAR5000 Deformasi Monitoring',
    title: 'ComNav MS-SAR5000 Slope Stability Radar',
    tag: 'COMNAV MS-SAR5000'
  },
  {
    image: '/images/solutions-marine.jpg',
    alt: 'Pemantauan Koridor Maritim & Stasiun Radar',
    title: 'Maritime & Port Surveillance',
    tag: 'MARITIME RADAR'
  },
  {
    image: '/images/solutions-autonomous.jpg',
    alt: 'Integrasi Sensor Presisi Tinggi & Gateway IoT',
    title: 'Precision Sensor Fusion & Telemetry Grid',
    tag: 'TELEMETRY GRID'
  }
]

const currentSlide = ref(0)
let heroSlideTimer: any = null

onMounted(() => {
  heroSlideTimer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % heroSlides.length
  }, 5000)
})

// KPI Metrics
const heroStats = [
  { value: '< 5 ms', label: 'Latensi Telemetri', sub: 'Pemrosesan Sistem TerraPulse' },
  { value: '0.1 mm', label: 'Akurasi Radar SAR', sub: 'Deteksi Deformasi Lereng' },
  { value: '5 km', label: 'Jangkauan Radar', sub: 'Radius Pemantauan MS-SAR5000' },
  { value: '24/7', label: 'Dukungan Teknisi', sub: 'Standby Perawatan Lapangan' },
]

// Featured products for preview
const featuredProducts = computed(() => {
  const list = Array.isArray(productsData.value) && productsData.value.length > 0 ? productsData.value : []
  return list.slice(0, 4)
})

// Featured solutions for preview
const highlightedSolutions = [
  {
    idx: 1,
    badge: 'Tambang & Geoteknik',
    title: 'Stabilitas Lereng Pit Tambang',
    description: 'Pemantauan deformasi dinding tambang terbuka secara kontinu dengan Radar MS-SAR5000 berakurasi 0.1 mm yang diolah real-time oleh platform TerraPulse.',
    focus: 'Slope Stability & GB-SAR'
  },
  {
    idx: 2,
    badge: 'Infrastruktur Vital',
    title: 'Structural Health Monitoring (SHM)',
    description: 'Pengawasan defleksi dinamis jembatan bentang panjang, tubuh bendungan, dan jalan layang tol dengan stasiun GNSS CORS kontinu dan tiltmeter.',
    focus: 'Deformation SHM & GNSS'
  },
  {
    idx: 3,
    badge: 'Mitigasi Bencana',
    title: 'Automated Early Warning (EWS)',
    description: 'Pembangkitan alarm multi-tingkat saat laju deformasi melewati ambang batas, diteruskan ke sirine dan broadcast pesan dalam waktu < 5 milidetik.',
    focus: '< 5ms Alert Dispatch'
  }
]

// Latest articles including Terrawatch opening
const latestArticles = computed(() => {
  const list = Array.isArray(articlesData.value) && articlesData.value.length > 0 ? articlesData.value : []
  return list.slice(0, 3)
})
</script>
