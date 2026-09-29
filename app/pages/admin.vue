<template>
  <div class="min-h-screen bg-[#001224] text-white font-sans selection:bg-[#18b8ea] selection:text-black">
    <!-- ─── 1. LOGIN GATE ─────────────────────────────────────────────── -->
    <div
      v-if="!isAuthenticated"
      class="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
    >
      <!-- Background Cyber Atmosphere -->
      <div class="absolute inset-0 dot-grid opacity-20 pointer-events-none"></div>
      <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#18b8ea]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div class="w-full max-w-md p-8 sm:p-10 rounded-3xl mica-panel border border-white/15 shadow-2xl relative z-10">
        <!-- Header -->
        <div class="text-center mb-8">
          <NuxtLink to="/" class="inline-flex items-center gap-3 mb-4 group">
            <img src="/images/logoOnlyPutih.png" alt="Logo" class="h-10 w-auto object-contain" />
            <span class="font-display font-bold text-xl tracking-[0.2em] text-white uppercase group-hover:text-[#18b8ea] transition-colors">
              Terrabyte
            </span>
          </NuxtLink>
          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#18b8ea]/10 border border-[#18b8ea]/30 mb-2">
            <span class="w-2 h-2 rounded-full bg-[#18b8ea] animate-pulse"></span>
            <span class="font-mono text-[11px] font-semibold tracking-widest uppercase text-[#18b8ea]">
              ADMIN CONSOLE // SOVEREIGN C2
            </span>
          </div>
          <p class="font-body font-light text-xs text-[#9db4c8] mt-2">
            Masukkan kata sandi administratif untuk mengakses panel kontrol konten Terrabyte Geosystems.
          </p>
        </div>

        <!-- Login Form -->
        <form @submit.prevent="handleLogin" class="space-y-5">
          <div>
            <label class="block font-mono text-xs text-[#18b8ea] uppercase tracking-wider mb-2">
              Sandi Administrator
            </label>
            <div class="relative">
              <input
                :type="showPassword ? 'text' : 'password'"
                v-model="passwordInput"
                placeholder="Masukkan kata sandi admin..."
                class="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/15 focus:border-[#18b8ea] focus:ring-1 focus:ring-[#18b8ea] text-sm text-white placeholder-white/30 font-mono transition-all outline-none"
                required
                autofocus
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#9db4c8] hover:text-white font-mono"
              >
                {{ showPassword ? 'SEMBUNYIKAN' : 'TAMPILKAN' }}
              </button>
            </div>
          </div>

          <!-- Error Alert -->
          <div
            v-if="loginError"
            class="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono flex items-center gap-2"
          >
            <span>⚠️</span>
            <span>{{ loginError }}</span>
          </div>

          <button
            type="submit"
            :disabled="isLoggingIn"
            class="btn-primary w-full py-3.5 text-center justify-center font-bold tracking-wider uppercase text-xs flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(0,209,178,0.3)] disabled:opacity-50"
          >
            <span v-if="isLoggingIn">MEMVERIFIKASI...</span>
            <span v-else>MASUK KE DASHBOARD &rarr;</span>
          </button>
        </form>

        <div class="mt-8 pt-6 border-t border-white/10 text-center">
          <NuxtLink to="/" class="text-xs font-mono text-[#6c889f] hover:text-[#18b8ea] transition-colors">
            &larr; Kembali ke Website Publik
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- ─── 2. AUTHENTICATED ADMIN DASHBOARD ───────────────────────────── -->
    <div v-else class="min-h-screen flex flex-col">
      <!-- Top Navigation Bar -->
      <header class="bg-[#001428]/95 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <!-- Left: Brand & Title -->
          <div class="flex items-center space-x-4">
            <NuxtLink to="/" class="flex items-center gap-3">
              <img src="/images/logoOnlyPutih.png" alt="Logo" class="h-8 w-auto object-contain" />
              <div class="leading-none">
                <span class="font-display font-bold text-sm tracking-wider text-white uppercase block">
                  TERRABYTE
                </span>
                <span class="font-mono text-[9px] text-[#18b8ea] uppercase tracking-widest">
                  ADMIN CONSOLE
                </span>
              </div>
            </NuxtLink>

            <span class="text-white/20">|</span>

            <div class="hidden sm:inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full bg-[#18b8ea]/10 border border-[#18b8ea]/30 text-[10px] font-mono text-[#18b8ea]">
              <span class="w-1.5 h-1.5 rounded-full bg-[#18b8ea] animate-pulse"></span>
              <span>SESI AKTIF</span>
            </div>
          </div>

          <!-- Right: Actions -->
          <div class="flex items-center space-x-3">
            <NuxtLink
              to="/"
              target="_blank"
              class="px-3 py-1.5 rounded-lg border border-white/15 hover:border-[#18b8ea] text-xs font-mono text-[#9db4c8] hover:text-white transition-all flex items-center gap-1.5"
            >
              <span>Lihat Web</span>
              <span>↗</span>
            </NuxtLink>

            <button
              @click="handleLogout"
              class="px-3 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-mono transition-all cursor-pointer"
            >
              Keluar
            </button>
          </div>
        </div>

        <!-- Navigation Tabs Bar -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5 flex gap-2 overflow-x-auto py-2">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            class="px-4 py-2 rounded-xl font-ui text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 whitespace-nowrap cursor-pointer"
            :class="activeTab === tab.id
              ? 'bg-[#18b8ea] text-[#001428] shadow-[0_0_15px_rgba(0,209,178,0.4)]'
              : 'text-[#9db4c8] hover:text-white hover:bg-white/5'"
          >
            <span>{{ tab.icon }}</span>
            <span>{{ tab.label }}</span>
            <span
              v-if="tab.id === 'inquiries' && unreadInquiriesCount > 0"
              class="px-1.5 py-0.2 rounded-full text-[10px] font-mono"
              :class="activeTab === 'inquiries' ? 'bg-black text-[#18b8ea]' : 'bg-[#18b8ea] text-black font-bold'"
            >
              {{ unreadInquiriesCount }}
            </span>
          </button>
        </div>
      </header>

      <!-- Main Admin Content Area -->
      <main class="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <!-- ─── TAB 1: OVERVIEW ──────────────────────────────────────── -->
        <div v-if="activeTab === 'overview'" class="space-y-8">
          <!-- 4 Stat Cards -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-5">
            <div class="p-6 rounded-2xl mica-card border border-white/10">
              <span class="font-mono text-xs text-[#6c889f] uppercase block mb-1">Total Produk</span>
              <div class="font-display font-bold text-3xl text-white">{{ products.length }}</div>
              <span class="font-ui text-[11px] text-[#18b8ea] mt-2 block">Aktif di Katalog Publik</span>
            </div>

            <div class="p-6 rounded-2xl mica-card border border-white/10">
              <span class="font-mono text-xs text-[#6c889f] uppercase block mb-1">Total Artikel</span>
              <div class="font-display font-bold text-3xl text-white">{{ articles.length }}</div>
              <span class="font-ui text-[11px] text-cyan-300 mt-2 block">Riset & Publikasi Terbit</span>
            </div>

            <div class="p-6 rounded-2xl mica-card border border-white/10">
              <span class="font-mono text-xs text-[#6c889f] uppercase block mb-1">Pesan Masuk</span>
              <div class="font-display font-bold text-3xl text-[#18b8ea]">{{ inquiries.length }}</div>
              <span class="font-ui text-[11px] text-amber-300 mt-2 block">{{ unreadInquiriesCount }} Belum Dihubungi</span>
            </div>

            <div class="p-6 rounded-2xl mica-card border border-white/10">
              <span class="font-mono text-xs text-[#6c889f] uppercase block mb-1">Status Server</span>
              <div class="font-display font-bold text-xl text-emerald-400 mt-1">ONLINE 100%</div>
              <span class="font-ui text-[11px] text-[#6c889f] mt-2 block">Nitro Persistent Storage</span>
            </div>
          </div>

          <!-- Quick Shortcuts & Recent Inquiries -->
          <div class="grid lg:grid-cols-3 gap-8">
            <!-- Left: Quick Action Cards (1 Col) -->
            <div class="p-6 rounded-2xl mica-panel border border-white/10 space-y-4">
              <h3 class="font-display font-bold text-lg text-white mb-2">Aksi Cepat</h3>
              <button
                @click="openProductModal()"
                class="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-[#18b8ea]/20 border border-white/10 hover:border-[#18b8ea] text-xs font-mono text-left flex items-center justify-between transition-all cursor-pointer"
              >
                <span>➕ Tambah Produk Baru</span>
                <span class="text-[#18b8ea]">&rarr;</span>
              </button>
              <button
                @click="openArticleModal()"
                class="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-[#18b8ea]/20 border border-white/10 hover:border-[#18b8ea] text-xs font-mono text-left flex items-center justify-between transition-all cursor-pointer"
              >
                <span>📝 Tulis Artikel Baru</span>
                <span class="text-[#18b8ea]">&rarr;</span>
              </button>
              <button
                @click="activeTab = 'settings'"
                class="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-[#18b8ea]/20 border border-white/10 hover:border-[#18b8ea] text-xs font-mono text-left flex items-center justify-between transition-all cursor-pointer"
              >
                <span>⚙️ Ubah Pengaturan Kontak</span>
                <span class="text-[#18b8ea]">&rarr;</span>
              </button>
            </div>

            <!-- Right: Recent Inquiries (2 Cols) -->
            <div class="lg:col-span-2 p-6 rounded-2xl mica-panel border border-white/10">
              <div class="flex items-center justify-between mb-4">
                <h3 class="font-display font-bold text-lg text-white">Inquiry Terbaru Dari /contact</h3>
                <button
                  @click="activeTab = 'inquiries'"
                  class="font-mono text-xs text-[#18b8ea] hover:underline"
                >
                  Lihat Semua ({{ inquiries.length }}) &rarr;
                </button>
              </div>

              <div v-if="inquiries.length === 0" class="py-12 text-center text-[#6c889f] font-mono text-xs">
                Belum ada pesan inquiry masuk.
              </div>

              <div v-else class="space-y-3">
                <div
                  v-for="inq in inquiries.slice(0, 3)"
                  :key="inq.id"
                  class="p-4 rounded-xl bg-black/30 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                >
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="font-bold text-sm text-white">{{ inq.name }}</span>
                      <span class="text-xs text-[#6c889f]">({{ inq.organization }})</span>
                      <span
                        class="px-2 py-0.5 rounded text-[10px] font-mono uppercase"
                        :class="inq.status === 'new' ? 'bg-amber-500/20 text-amber-300' : 'bg-emerald-500/20 text-emerald-300'"
                      >
                        {{ inq.status }}
                      </span>
                    </div>
                    <p class="font-light text-xs text-[#9db4c8] line-clamp-1 mt-1">{{ inq.message }}</p>
                  </div>
                  <button
                    @click="viewInquiryDetail(inq)"
                    class="btn-outline text-[11px] py-1 px-3 whitespace-nowrap self-end sm:self-center"
                  >
                    Buka Pesan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ─── TAB 2: PRODUK HARDWARE ───────────────────────────────── -->
        <div v-if="activeTab === 'products'" class="space-y-6">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="font-display font-bold text-2xl text-white">Manajemen Produk & Hardware</h2>
              <p class="font-body font-light text-xs text-[#9db4c8] mt-1">
                Data di sini langsung terhubung dan terbit di halaman publik /products.
              </p>
            </div>
            <button
              @click="openProductModal()"
              class="btn-primary text-xs font-bold py-2.5 px-4 flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <span>+ Tambah Produk</span>
            </button>
          </div>

          <!-- Product Cards Grid -->
          <div class="grid md:grid-cols-3 gap-6">
            <div
              v-for="prod in products"
              :key="prod.id"
              class="p-6 rounded-2xl mica-card border border-white/10 flex flex-col justify-between group"
            >
              <div>
                <!-- Top Badge & Code -->
                <div class="flex items-center justify-between mb-4">
                  <span class="font-mono text-xs font-bold text-[#18b8ea] px-2.5 py-1 rounded bg-[#18b8ea]/10 border border-[#18b8ea]/30">
                    {{ prod.code }}
                  </span>
                  <span class="font-ui text-[10px] text-[#6c889f] px-2.5 py-0.5 rounded-full border border-white/10">
                    {{ prod.tag }}
                  </span>
                </div>

                <!-- Image -->
                <div class="h-40 rounded-xl overflow-hidden mb-4 bg-black/40 relative">
                  <img :src="prod.img" :alt="prod.name" class="w-full h-full object-cover" />
                  <span class="absolute bottom-2 left-2 text-[10px] font-mono px-2 py-0.5 rounded bg-black/80 text-emerald-300">
                    {{ prod.status }}
                  </span>
                </div>

                <h3 class="font-display font-bold text-base text-white mb-2">{{ prod.name }}</h3>
                <p class="font-body font-light text-xs text-[#9db4c8] line-clamp-3 mb-4 leading-relaxed">
                  {{ prod.summary }}
                </p>

                <!-- Specs summary -->
                <div class="border-t border-white/10 pt-3 mb-4">
                  <span class="font-mono text-[10px] text-[#6c889f] block mb-2 uppercase">
                    Spesifikasi ({{ prod.specs?.length || 0 }} item)
                  </span>
                  <div class="space-y-1">
                    <div
                      v-for="(spec, sIdx) in (prod.specs || []).slice(0, 3)"
                      :key="sIdx"
                      class="flex justify-between text-[11px] font-mono"
                    >
                      <span class="text-[#9db4c8]">{{ spec[0] }}</span>
                      <span class="text-[#18b8ea] font-semibold">{{ spec[1] }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="flex items-center gap-2 pt-4 border-t border-white/10">
                <button
                  @click="openProductModal(prod)"
                  class="flex-1 py-2 rounded-lg bg-white/10 hover:bg-[#18b8ea] hover:text-[#001428] text-xs font-mono font-bold transition-all text-center cursor-pointer"
                >
                  Edit Produk
                </button>
                <button
                  @click="deleteProduct(prod.id)"
                  class="p-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 text-xs font-mono transition-all cursor-pointer"
                  title="Hapus Produk"
                >
                  🗑️
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- ─── TAB 3: ARTIKEL & RISET ───────────────────────────────── -->
        <div v-if="activeTab === 'articles'" class="space-y-6">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="font-display font-bold text-2xl text-white">Manajemen Artikel & Riset</h2>
              <p class="font-body font-light text-xs text-[#9db4c8] mt-1">
                Publikasikan laporan teknis atau studi kasus untuk halaman /articles.
              </p>
            </div>
            <button
              @click="openArticleModal()"
              class="btn-primary text-xs font-bold py-2.5 px-4 flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <span>+ Tulis Artikel Baru</span>
            </button>
          </div>

          <!-- Articles Table/List -->
          <div class="space-y-4">
            <div
              v-for="art in articles"
              :key="art.id"
              class="p-5 rounded-2xl mica-card border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
            >
              <div class="flex items-start gap-4">
                <img :src="art.mainImage" :alt="art.title" class="w-20 h-20 rounded-xl object-cover flex-shrink-0" />
                <div>
                  <div class="flex items-center gap-2 mb-1.5">
                    <span class="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-[#18b8ea]/20 text-[#18b8ea]">
                      {{ art.category }}
                    </span>
                    <span class="text-xs text-[#6c889f] font-mono">• {{ art.publishedAt }}</span>
                    <span class="text-xs text-[#6c889f] font-mono">• {{ art.readTime }} min read</span>
                  </div>
                  <h3 class="font-display font-bold text-base text-white hover:text-[#18b8ea] transition-colors">
                    {{ art.title }}
                  </h3>
                  <p class="font-body font-light text-xs text-[#9db4c8] line-clamp-1 mt-1 max-w-2xl">
                    {{ art.excerpt }}
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-2 self-end md:self-center flex-shrink-0">
                <NuxtLink
                  :to="'/articles/' + art.slug"
                  target="_blank"
                  class="btn-outline text-[11px] py-1.5 px-3"
                >
                  Preview ↗
                </NuxtLink>
                <button
                  @click="openArticleModal(art)"
                  class="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#18b8ea] hover:text-[#001428] text-xs font-mono font-bold transition-all cursor-pointer"
                >
                  Edit
                </button>
                <button
                  @click="deleteArticle(art.id)"
                  class="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 text-xs font-mono transition-all cursor-pointer"
                  title="Hapus"
                >
                  🗑️
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- ─── TAB 4: INBOX PESAN MASUK ─────────────────────────────── -->
        <div v-if="activeTab === 'inquiries'" class="space-y-6">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="font-display font-bold text-2xl text-white">Inbox Pesan Masuk (/contact)</h2>
              <p class="font-body font-light text-xs text-[#9db4c8] mt-1">
                Seluruh formulir inquiry yang diisi calon klien di halaman /contact tersimpan otomatis di sini.
              </p>
            </div>
          </div>

          <div v-if="inquiries.length === 0" class="py-16 text-center text-[#6c889f] font-mono text-sm mica-panel rounded-2xl">
            Kotak masuk kosong. Belum ada pesan baru.
          </div>

          <div v-else class="space-y-4">
            <div
              v-for="inq in inquiries"
              :key="inq.id"
              class="p-6 rounded-2xl mica-card border border-white/10 flex flex-col gap-4"
              :class="inq.status === 'new' ? 'border-amber-400/40 bg-[#001c38]' : ''"
            >
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                <div>
                  <div class="flex items-center gap-2">
                    <span class="font-display font-bold text-base text-white">{{ inq.name }}</span>
                    <span class="font-mono text-xs text-[#18b8ea]">[{{ inq.organization }}]</span>
                    <span
                      class="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase"
                      :class="inq.status === 'new' ? 'bg-amber-400 text-black' : inq.status === 'contacted' ? 'bg-cyan-500/20 text-cyan-300' : 'bg-emerald-500/20 text-emerald-300'"
                    >
                      {{ inq.status }}
                    </span>
                  </div>
                  <div class="font-mono text-xs text-[#9db4c8] mt-1">
                    Email: <a :href="'mailto:' + inq.email" class="text-[#18b8ea] underline">{{ inq.email }}</a> | Sektor: {{ inq.domain }} | Waktu: {{ formatDateTime(inq.createdAt) }}
                  </div>
                </div>

                <!-- Status Action Buttons -->
                <div class="flex items-center gap-2">
                  <button
                    v-if="inq.status === 'new'"
                    @click="updateInquiryStatus(inq.id, 'contacted')"
                    class="px-3 py-1 rounded bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-300 text-xs font-mono transition-all cursor-pointer"
                  >
                    Tandai Dihubungi
                  </button>
                  <button
                    v-if="inq.status !== 'resolved'"
                    @click="updateInquiryStatus(inq.id, 'resolved')"
                    class="px-3 py-1 rounded bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-300 text-xs font-mono transition-all cursor-pointer"
                  >
                    Tandai Selesai
                  </button>
                  <button
                    @click="deleteInquiry(inq.id)"
                    class="p-1.5 rounded bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 text-xs font-mono transition-all cursor-pointer"
                    title="Hapus"
                  >
                    🗑️
                  </button>
                </div>
              </div>

              <!-- Message Body -->
              <div class="bg-black/30 p-4 rounded-xl text-sm font-body font-light text-[#d4f3ed] leading-relaxed">
                {{ inq.message }}
              </div>
            </div>
          </div>
        </div>

        <!-- ─── TAB 5: TESTIMONI MITRA ───────────────────────────────── -->
        <div v-if="activeTab === 'testimonials'" class="space-y-6">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="font-display font-bold text-2xl text-white">Testimoni & Mitra Kerjasama</h2>
              <p class="font-body font-light text-xs text-[#9db4c8] mt-1">
                Kelola ulasan klien yang tampil di halaman Beranda.
              </p>
            </div>
            <button
              @click="addTestimonialRow()"
              class="btn-primary text-xs font-bold py-2 px-4 cursor-pointer"
            >
              + Tambah Baris Testimoni
            </button>
          </div>

          <div class="space-y-4">
            <div
              v-for="(test, tIdx) in testimonials"
              :key="tIdx"
              class="p-6 rounded-2xl mica-panel border border-white/10 space-y-4"
            >
              <div class="flex items-center justify-between border-b border-white/10 pb-2">
                <span class="font-mono text-xs text-[#18b8ea] font-bold">TESTIMONI #{{ tIdx + 1 }}</span>
                <button
                  @click="removeTestimonialRow(tIdx)"
                  class="text-rose-400 hover:text-rose-300 text-xs font-mono cursor-pointer"
                >
                  Hapus Testimoni
                </button>
              </div>

              <div>
                <label class="block font-mono text-xs text-[#6c889f] mb-1">Isi Kutipan Review</label>
                <textarea
                  v-model="test.quote"
                  rows="2"
                  class="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-xs text-white"
                ></textarea>
              </div>

              <div class="grid sm:grid-cols-3 gap-4">
                <div>
                  <label class="block font-mono text-xs text-[#6c889f] mb-1">Nama Pejabat / Klien</label>
                  <input
                    v-model="test.author"
                    type="text"
                    class="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-xs text-white"
                  />
                </div>
                <div>
                  <label class="block font-mono text-xs text-[#6c889f] mb-1">Jabatan / Role</label>
                  <input
                    v-model="test.role"
                    type="text"
                    class="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-xs text-white"
                  />
                </div>
                <div>
                  <label class="block font-mono text-xs text-[#6c889f] mb-1">Nama Instansi / Perusahaan</label>
                  <input
                    v-model="test.organization"
                    type="text"
                    class="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-xs text-white"
                  />
                </div>
              </div>
            </div>

            <button
              @click="saveTestimonials"
              class="btn-primary w-full py-3.5 text-center font-bold tracking-wider text-xs uppercase cursor-pointer"
            >
              SIMPAN SEMUA TESTIMONI
            </button>
          </div>
        </div>

        <!-- ─── TAB 6: PENGATURAN WEBSITE ────────────────────────────── -->
        <div v-if="activeTab === 'settings'" class="max-w-3xl space-y-6">
          <div>
            <h2 class="font-display font-bold text-2xl text-white">Pengaturan Global Website</h2>
            <p class="font-body font-light text-xs text-[#9db4c8] mt-1">
              Informasi dasar yang langsung memperbarui bagian Header, Footer, dan Form Kontak.
            </p>
          </div>

          <form @submit.prevent="saveSettings" class="p-8 rounded-2xl mica-panel border border-white/10 space-y-6">
            <div>
              <label class="block font-mono text-xs text-[#18b8ea] uppercase mb-1">Nama Perusahaan</label>
              <input
                v-model="settings.companyName"
                type="text"
                class="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-sm text-white font-mono"
              />
            </div>

            <div>
              <label class="block font-mono text-xs text-[#18b8ea] uppercase mb-1">Judul Hero Beranda</label>
              <input
                v-model="settings.heroHeadline"
                type="text"
                class="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-sm text-white"
              />
            </div>

            <div>
              <label class="block font-mono text-xs text-[#18b8ea] uppercase mb-1">Subtitle Hero Beranda</label>
              <textarea
                v-model="settings.heroSubtitle"
                rows="2"
                class="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-sm text-white"
              ></textarea>
            </div>

            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label class="block font-mono text-xs text-[#18b8ea] uppercase mb-1">Nomor Telepon Kantor</label>
                <input
                  v-model="settings.phone"
                  type="text"
                  class="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-sm text-white font-mono"
                />
              </div>
              <div>
                <label class="block font-mono text-xs text-[#18b8ea] uppercase mb-1">Nomor WhatsApp Resmi</label>
                <input
                  v-model="settings.whatsapp"
                  type="text"
                  class="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-sm text-white font-mono"
                />
              </div>
            </div>

            <div>
              <label class="block font-mono text-xs text-[#18b8ea] uppercase mb-1">Alamat Email Resmi</label>
              <input
                v-model="settings.email"
                type="email"
                class="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-sm text-white font-mono"
              />
            </div>

            <div>
              <label class="block font-mono text-xs text-[#18b8ea] uppercase mb-1">Alamat Gedung Kantor & Lab</label>
              <textarea
                v-model="settings.address"
                rows="2"
                class="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-sm text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              class="btn-primary w-full py-3.5 text-center font-bold tracking-wider text-xs uppercase cursor-pointer"
            >
              SIMPAN PENGATURAN GLOBAL
            </button>
          </form>
        </div>
      </main>
    </div>

    <!-- ─── MODAL: PRODUK (TAMBAH / EDIT) ────────────────────────────── -->
    <div
      v-if="showProductModal"
      class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
    >
      <div class="max-w-2xl w-full p-8 rounded-3xl mica-panel border border-white/20 shadow-2xl my-8">
        <div class="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <h3 class="font-display font-bold text-xl text-white">
            {{ editingProduct.id ? 'Edit Data Produk' : 'Tambah Produk Baru' }}
          </h3>
          <button @click="showProductModal = false" class="text-white/60 hover:text-white text-lg">✕</button>
        </div>

        <form @submit.prevent="saveProduct" class="space-y-4">
          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-mono text-xs text-[#6c889f] mb-1">Kode Seri Perangkat</label>
              <input
                v-model="editingProduct.code"
                type="text"
                placeholder="misal: NX-700"
                class="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/15 text-xs text-white font-mono"
                required
              />
            </div>
            <div>
              <label class="block font-mono text-xs text-[#6c889f] mb-1">Kategori / Tag</label>
              <input
                v-model="editingProduct.tag"
                type="text"
                placeholder="misal: GNSS Receiver"
                class="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/15 text-xs text-white"
                required
              />
            </div>
          </div>

          <div>
            <label class="block font-mono text-xs text-[#6c889f] mb-1">Nama Lengkap Produk</label>
            <input
              v-model="editingProduct.name"
              type="text"
              placeholder="misal: NX-700 Sovereign Hexa-Band GNSS"
              class="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/15 text-xs text-white font-bold"
              required
            />
          </div>

          <div>
            <label class="block font-mono text-xs text-[#6c889f] mb-1">Deskripsi Singkat / Summary</label>
            <textarea
              v-model="editingProduct.summary"
              rows="3"
              placeholder="Penjelasan keunggulan hardware..."
              class="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/15 text-xs text-white leading-relaxed"
              required
            ></textarea>
          </div>

          <div class="grid sm:grid-cols-2 gap-4">
            <div class="space-y-2">
              <label class="block font-mono text-xs text-[#18b8ea] mb-1 font-semibold">Foto Produk</label>
              <div class="flex items-center gap-3">
                <!-- Preview Thumbnail -->
                <div class="w-16 h-16 rounded-xl bg-black/40 border border-white/15 overflow-hidden flex-shrink-0 relative">
                  <img
                    v-if="editingProduct.img"
                    :src="editingProduct.img"
                    alt="Preview"
                    class="w-full h-full object-cover"
                  />
                  <div v-else class="w-full h-full flex items-center justify-center text-xs text-[#6c889f]">
                    No Image
                  </div>
                </div>

                <div class="flex-1 space-y-1.5">
                  <!-- Hidden File Input & Upload Trigger Button -->
                  <input
                    type="file"
                    ref="productFileInput"
                    @change="uploadProductImage"
                    accept="image/*"
                    class="hidden"
                  />
                  <button
                    type="button"
                    @click="triggerProductUpload"
                    :disabled="isUploadingProductImg"
                    class="w-full py-2 px-3 rounded-lg bg-[#18b8ea]/10 hover:bg-[#18b8ea]/25 border border-[#18b8ea]/40 text-[#18b8ea] text-xs font-mono font-bold flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
                  >
                    <span v-if="isUploadingProductImg">⏳ Mengunggah foto ke server...</span>
                    <span v-else>📁 Upload Foto Baru dari Laptop (JPG, PNG, WebP)</span>
                  </button>

                  <!-- Preset Dropdown -->
                  <select
                    v-model="editingProduct.img"
                    class="w-full px-2.5 py-1.5 rounded-lg bg-[#001428] border border-white/15 text-[11px] text-[#9db4c8]"
                  >
                    <option disabled value="">Atau pilih gambar preset bawaan...</option>
                    <option value="/images/products-nx700.jpg">Preset: NX-700 GNSS</option>
                    <option value="/images/products-nx500.jpg">Preset: NX-500 Radar AESA</option>
                    <option value="/images/products-nx300.jpg">Preset: NX-300 Sensor Unit</option>
                    <option value="/images/hero-surveyor.jpg">Preset: Field Surveyor</option>
                    <option value="/images/solutions-marine.jpg">Preset: Radar Maritim</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <label class="block font-mono text-xs text-[#6c889f] mb-1">Status Ketersediaan</label>
              <select
                v-model="editingProduct.status"
                class="w-full px-3 py-2 rounded-lg bg-[#001428] border border-white/15 text-xs text-white"
              >
                <option value="In Active Production">In Active Production</option>
                <option value="Available / Ready Stock">Available / Ready Stock</option>
                <option value="Pre-Order / Consultation">Pre-Order / Consultation</option>
              </select>
            </div>
          </div>

          <!-- Dynamic Specs Editor -->
          <div class="border-t border-white/10 pt-4">
            <div class="flex items-center justify-between mb-2">
              <span class="font-mono text-xs text-[#18b8ea] font-semibold">Tabel Spesifikasi Teknis</span>
              <button
                type="button"
                @click="addSpecRow"
                class="text-[11px] font-mono text-[#18b8ea] hover:underline"
              >
                + Tambah Baris
              </button>
            </div>
            <div class="space-y-2 max-h-48 overflow-y-auto pr-1">
              <div
                v-for="(spec, idx) in editingProduct.specs"
                :key="idx"
                class="flex gap-2 items-center"
              >
                <input
                  v-model="spec[0]"
                  type="text"
                  placeholder="Label (misal: Saluran)"
                  class="flex-1 px-2.5 py-1.5 rounded bg-black/40 border border-white/10 text-xs text-white"
                />
                <input
                  v-model="spec[1]"
                  type="text"
                  placeholder="Nilai (misal: 1.408 Channels)"
                  class="flex-1 px-2.5 py-1.5 rounded bg-black/40 border border-white/10 text-xs text-[#18b8ea]"
                />
                <button
                  type="button"
                  @click="removeSpecRow(idx)"
                  class="text-rose-400 hover:text-rose-300 text-xs px-2"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>

          <div class="flex gap-3 pt-4 border-t border-white/10">
            <button
              type="button"
              @click="showProductModal = false"
              class="flex-1 py-2.5 rounded-xl border border-white/15 text-xs font-mono"
            >
              Batal
            </button>
            <button
              type="submit"
              class="btn-primary flex-1 py-2.5 rounded-xl text-xs font-mono font-bold"
            >
              Simpan Produk
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- ─── MODAL: ARTIKEL (TAMBAH / EDIT) ────────────────────────────── -->
    <div
      v-if="showArticleModal"
      class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
    >
      <div class="max-w-2xl w-full p-8 rounded-3xl mica-panel border border-white/20 shadow-2xl my-8">
        <div class="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <h3 class="font-display font-bold text-xl text-white">
            {{ editingArticle.id ? 'Edit Publikasi Artikel' : 'Tulis Publikasi Baru' }}
          </h3>
          <button @click="showArticleModal = false" class="text-white/60 hover:text-white text-lg">✕</button>
        </div>

        <form @submit.prevent="saveArticle" class="space-y-4">
          <div>
            <label class="block font-mono text-xs text-[#6c889f] mb-1">Judul Artikel</label>
            <input
              v-model="editingArticle.title"
              type="text"
              placeholder="Judul rilis atau laporan teknis..."
              class="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/15 text-xs text-white font-bold"
              required
            />
          </div>

          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-mono text-xs text-[#6c889f] mb-1">Kategori Riset</label>
              <select
                v-model="editingArticle.category"
                class="w-full px-3 py-2 rounded-lg bg-[#001428] border border-white/15 text-xs text-white"
              >
                <option value="[Riset GNSS]">Riset GNSS</option>
                <option value="[Teknologi Radar]">Teknologi Radar</option>
                <option value="[Sensor Fusion]">Sensor Fusion</option>
                <option value="[Studi Kasus]">Studi Kasus</option>
              </select>
            </div>
            <div>
              <label class="block font-mono text-xs text-[#6c889f] mb-1">Estimasi Baca (Menit)</label>
              <input
                v-model="editingArticle.readTime"
                type="text"
                placeholder="misal: 5"
                class="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/15 text-xs text-white"
              />
            </div>
          </div>

          <div>
            <label class="block font-mono text-xs text-[#6c889f] mb-1">Ringkasan Singkat (Excerpt)</label>
            <textarea
              v-model="editingArticle.excerpt"
              rows="2"
              placeholder="Rangkuman 2 kalimat untuk kartu depan..."
              class="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/15 text-xs text-white"
              required
            ></textarea>
          </div>

          <div>
            <label class="block font-mono text-xs text-[#6c889f] mb-1">Isi Lengkap Artikel (Markdown / Teks)</label>
            <textarea
              v-model="editingArticle.content"
              rows="6"
              placeholder="Tuliskan isi laporan teknis lengkap..."
              class="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/15 text-xs text-white font-mono leading-relaxed"
            ></textarea>
          </div>

          <div class="grid sm:grid-cols-2 gap-4">
            <div class="space-y-2">
              <label class="block font-mono text-xs text-[#18b8ea] mb-1 font-semibold">Gambar Cover Artikel</label>
              <div class="flex items-center gap-3">
                <!-- Preview Thumbnail -->
                <div class="w-16 h-16 rounded-xl bg-black/40 border border-white/15 overflow-hidden flex-shrink-0 relative">
                  <img
                    v-if="editingArticle.mainImage"
                    :src="editingArticle.mainImage"
                    alt="Preview"
                    class="w-full h-full object-cover"
                  />
                  <div v-else class="w-full h-full flex items-center justify-center text-xs text-[#6c889f]">
                    No Cover
                  </div>
                </div>

                <div class="flex-1 space-y-1.5">
                  <!-- Hidden File Input & Upload Trigger Button -->
                  <input
                    type="file"
                    ref="articleFileInput"
                    @change="uploadArticleImage"
                    accept="image/*"
                    class="hidden"
                  />
                  <button
                    type="button"
                    @click="triggerArticleUpload"
                    :disabled="isUploadingArticleImg"
                    class="w-full py-2 px-3 rounded-lg bg-[#18b8ea]/10 hover:bg-[#18b8ea]/25 border border-[#18b8ea]/40 text-[#18b8ea] text-xs font-mono font-bold flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
                  >
                    <span v-if="isUploadingArticleImg">⏳ Mengunggah cover ke server...</span>
                    <span v-else>📁 Upload Cover Baru dari Laptop (JPG, PNG, WebP)</span>
                  </button>

                  <!-- Preset Dropdown -->
                  <select
                    v-model="editingArticle.mainImage"
                    class="w-full px-2.5 py-1.5 rounded-lg bg-[#001428] border border-white/15 text-[11px] text-[#9db4c8]"
                  >
                    <option disabled value="">Atau pilih cover preset bawaan...</option>
                    <option value="/images/hero-surveyor.jpg">Preset: Surveyor Geodesi</option>
                    <option value="/images/solutions-marine.jpg">Preset: Maritim & Radar Laut</option>
                    <option value="/images/solutions-defense.jpg">Preset: Radar Pertahanan</option>
                    <option value="/images/solutions-cadastre.jpg">Preset: Pemetaan Infrastruktur</option>
                    <option value="/images/solutions-autonomous.jpg">Preset: Sensor Otonom</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <label class="block font-mono text-xs text-[#6c889f] mb-1">Nama Penulis</label>
              <input
                v-model="editingArticleAuthorName"
                type="text"
                placeholder="misal: Tim R&D Terrabyte"
                class="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/15 text-xs text-white"
              />
            </div>
          </div>

          <div class="flex gap-3 pt-4 border-t border-white/10">
            <button
              type="button"
              @click="showArticleModal = false"
              class="flex-1 py-2.5 rounded-xl border border-white/15 text-xs font-mono"
            >
              Batal
            </button>
            <button
              type="submit"
              class="btn-primary flex-1 py-2.5 rounded-xl text-xs font-mono font-bold"
            >
              Publikasikan Artikel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

useHead({
  title: 'Admin Command Console — TERRABYTE Geosystems',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

// ─── AUTHENTICATION STATE ───
const isAuthenticated = ref(false)
const passwordInput = ref('')
const showPassword = ref(false)
const isLoggingIn = ref(false)
const loginError = ref('')

// Check existing session
async function checkAuth() {
  try {
    const res = await $fetch<{ authenticated: boolean }>('/api/admin/check-auth')
    isAuthenticated.value = res.authenticated
    if (res.authenticated) {
      loadAllData()
    }
  } catch {
    isAuthenticated.value = false
  }
}

async function handleLogin() {
  isLoggingIn.value = true
  loginError.value = ''
  try {
    const res = await $fetch<{ success: boolean }>('/api/admin/auth', {
      method: 'POST',
      body: { password: passwordInput.value }
    })
    if (res.success) {
      isAuthenticated.value = true
      passwordInput.value = ''
      loadAllData()
    }
  } catch (err: any) {
    loginError.value = err?.data?.statusMessage || 'Kata sandi tidak valid. Silakan coba lagi.'
  } finally {
    isLoggingIn.value = false
  }
}

async function handleLogout() {
  await $fetch('/api/admin/logout', { method: 'POST' })
  isAuthenticated.value = false
}

// ─── TABS MANAGEMENT ───
const activeTab = ref('overview')
const tabs = [
  { id: 'overview', label: 'Ringkasan', icon: '📊' },
  { id: 'products', label: 'Katalog Produk', icon: '📦' },
  { id: 'articles', label: 'Artikel & Riset', icon: '📝' },
  { id: 'inquiries', label: 'Pesan Masuk', icon: '📩' },
  { id: 'testimonials', label: 'Testimoni', icon: '💬' },
  { id: 'settings', label: 'Pengaturan Global', icon: '⚙️' },
]

// ─── STATE DATA ───
const products = ref<any[]>([])
const articles = ref<any[]>([])
const inquiries = ref<any[]>([])
const testimonials = ref<any[]>([])
const settings = ref<any>({})

const unreadInquiriesCount = computed(() => {
  return inquiries.value.filter(i => i.status === 'new').length
})

async function loadAllData() {
  try {
    const [p, a, i, t, s] = await Promise.all([
      $fetch('/api/products'),
      $fetch('/api/articles'),
      $fetch('/api/admin/inquiries'),
      $fetch('/api/testimonials'),
      $fetch('/api/settings')
    ])
    products.value = (p as any[]) || []
    articles.value = (a as any[]) || []
    inquiries.value = (i as any[]) || []
    testimonials.value = (t as any[]) || []
    settings.value = s || {}
  } catch (err) {
    console.error('Failed to load admin data:', err)
  }
}

// ─── FILE UPLOAD HANDLERS ───
const isUploadingProductImg = ref(false)
const isUploadingArticleImg = ref(false)
const productFileInput = ref<HTMLInputElement | null>(null)
const articleFileInput = ref<HTMLInputElement | null>(null)

function triggerProductUpload() {
  productFileInput.value?.click()
}

async function uploadProductImage(e: Event) {
  const input = e.target as HTMLInputElement
  if (!input.files || input.files.length === 0) return
  isUploadingProductImg.value = true
  const fd = new FormData()
  fd.append('file', input.files[0])
  try {
    const res = await $fetch<{ success: boolean; url: string }>('/api/admin/upload', {
      method: 'POST',
      body: fd
    })
    if (res.success && res.url) {
      editingProduct.value.img = res.url
    }
  } catch (err: any) {
    alert(err?.data?.statusMessage || 'Gagal mengunggah foto.')
  } finally {
    isUploadingProductImg.value = false
    input.value = ''
  }
}

function triggerArticleUpload() {
  articleFileInput.value?.click()
}

async function uploadArticleImage(e: Event) {
  const input = e.target as HTMLInputElement
  if (!input.files || input.files.length === 0) return
  isUploadingArticleImg.value = true
  const fd = new FormData()
  fd.append('file', input.files[0])
  try {
    const res = await $fetch<{ success: boolean; url: string }>('/api/admin/upload', {
      method: 'POST',
      body: fd
    })
    if (res.success && res.url) {
      editingArticle.value.mainImage = res.url
    }
  } catch (err: any) {
    alert(err?.data?.statusMessage || 'Gagal mengunggah cover.')
  } finally {
    isUploadingArticleImg.value = false
    input.value = ''
  }
}

// ─── PRODUCTS ACTIONS ───
const showProductModal = ref(false)
const editingProduct = ref<any>({ specs: [] })

function openProductModal(prod?: any) {
  if (prod) {
    editingProduct.value = JSON.parse(JSON.stringify(prod))
    if (!editingProduct.value.specs) editingProduct.value.specs = []
  } else {
    editingProduct.value = {
      code: '',
      tag: 'GNSS Receiver',
      name: '',
      summary: '',
      img: '/images/products-nx700.jpg',
      status: 'In Active Production',
      specs: [
        ['Channels', '1,408 Multi-Band'],
        ['RTK Accuracy', 'Sub-Centimeter']
      ]
    }
  }
  showProductModal.value = true
}

function addSpecRow() {
  editingProduct.value.specs.push(['', ''])
}

function removeSpecRow(idx: number) {
  editingProduct.value.specs.splice(idx, 1)
}

async function saveProduct() {
  try {
    const res = await $fetch<{ success: boolean, products: any[] }>('/api/admin/products', {
      method: 'POST',
      body: editingProduct.value
    })
    products.value = res.products
    showProductModal.value = false
    alert('Produk berhasil disimpan!')
  } catch (err) {
    alert('Gagal menyimpan produk.')
  }
}

async function deleteProduct(id: string) {
  if (!confirm('Apakah Anda yakin ingin menghapus produk ini?')) return
  try {
    const res = await $fetch<{ success: boolean, products: any[] }>('/api/admin/products/' + id, {
      method: 'DELETE'
    })
    products.value = res.products
  } catch (err) {
    alert('Gagal menghapus produk.')
  }
}

// ─── ARTICLES ACTIONS ───
const showArticleModal = ref(false)
const editingArticle = ref<any>({})
const editingArticleAuthorName = ref('')

function openArticleModal(art?: any) {
  if (art) {
    editingArticle.value = JSON.parse(JSON.stringify(art))
    editingArticleAuthorName.value = art.author?.name || ''
  } else {
    editingArticle.value = {
      title: '',
      category: '[Riset GNSS]',
      readTime: '5',
      excerpt: '',
      content: '',
      mainImage: '/images/hero-surveyor.jpg'
    }
    editingArticleAuthorName.value = 'Tim R&D Terrabyte'
  }
  showArticleModal.value = true
}

async function saveArticle() {
  try {
    editingArticle.value.author = {
      name: editingArticleAuthorName.value,
      role: 'Divisi R&D Terrabyte'
    }
    const res = await $fetch<{ success: boolean, articles: any[] }>('/api/admin/articles', {
      method: 'POST',
      body: editingArticle.value
    })
    articles.value = res.articles
    showArticleModal.value = false
    alert('Artikel berhasil dipublikasikan!')
  } catch (err) {
    alert('Gagal mempublikasikan artikel.')
  }
}

async function deleteArticle(id: string) {
  if (!confirm('Apakah Anda yakin ingin menghapus artikel ini?')) return
  try {
    const res = await $fetch<{ success: boolean, articles: any[] }>('/api/admin/articles/' + id, {
      method: 'DELETE'
    })
    articles.value = res.articles
  } catch (err) {
    alert('Gagal menghapus artikel.')
  }
}

// ─── INQUIRIES ACTIONS ───
function formatDateTime(isoStr: string) {
  if (!isoStr) return '-'
  return new Date(isoStr).toLocaleString('id-ID', {
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit'
  })
}

function viewInquiryDetail(inq: any) {
  activeTab.value = 'inquiries'
}

async function updateInquiryStatus(id: string, status: string) {
  try {
    await $fetch('/api/admin/inquiries/' + id, {
      method: 'PATCH',
      body: { status }
    })
    const item = inquiries.value.find(i => i.id === id)
    if (item) item.status = status
  } catch (err) {
    alert('Gagal memperbarui status inquiry.')
  }
}

async function deleteInquiry(id: string) {
  if (!confirm('Hapus pesan ini dari database?')) return
  try {
    const res = await $fetch<{ success: boolean, inquiries: any[] }>('/api/admin/inquiries/' + id, {
      method: 'DELETE'
    })
    inquiries.value = res.inquiries
  } catch (err) {
    alert('Gagal menghapus pesan.')
  }
}

// ─── TESTIMONIALS ACTIONS ───
function addTestimonialRow() {
  testimonials.value.push({
    quote: '',
    author: '',
    role: '',
    organization: '',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&auto=format'
  })
}

function removeTestimonialRow(idx: number) {
  testimonials.value.splice(idx, 1)
}

async function saveTestimonials() {
  try {
    await $fetch('/api/admin/testimonials', {
      method: 'POST',
      body: testimonials.value
    })
    alert('Seluruh testimoni berhasil disimpan!')
  } catch (err) {
    alert('Gagal menyimpan testimoni.')
  }
}

// ─── SETTINGS ACTIONS ───
async function saveSettings() {
  try {
    await $fetch('/api/admin/settings', {
      method: 'POST',
      body: settings.value
    })
    alert('Pengaturan website berhasil diperbarui!')
  } catch (err) {
    alert('Gagal menyimpan pengaturan.')
  }
}

onMounted(() => {
  checkAuth()
})
</script>
