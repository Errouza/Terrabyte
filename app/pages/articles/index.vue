<template>
  <div class="min-h-screen text-white relative bg-[#030d17]">

    <!-- ─── HERO SECTION (PAGE 5 HI-FI) ──────────────────────────────── -->
    <section class="relative pt-32 pb-12 lg:pt-44 lg:pb-16 overflow-hidden">
      <!-- Ambient Radial Glows -->
      <div class="absolute top-1/4 left-1/3 w-[600px] h-[350px] bg-[#18b8ea]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div class="max-w-3xl space-y-4">
          <!-- Tag -->
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#18b8ea] font-semibold">
            {{ locale === 'id' ? 'DOKUMENTASI LAPANGAN · BERITA INDUSTRI' : 'NEWS & ARTICLES' }}
          </p>

          <!-- Headline -->
          <h1 class="font-display font-extrabold text-4xl sm:text-5xl lg:text-[58px] leading-tight text-white">
            {{ locale === 'id' ? 'Wawasan Terpercaya dari' : 'Insights from the' }} <span class="text-[#18b8ea] drop-shadow-[0_0_30px_rgba(24,184,234,0.35)]">{{ locale === 'id' ? 'Dunia Lapangan.' : 'ground up.' }}</span>
          </h1>

          <!-- Subtitle -->
          <p class="font-body text-[#94a3b8] text-base sm:text-lg leading-relaxed font-light">
            {{ locale === 'id' ? 'Kilas berita operasional, studi kasus lapangan, dan wawasan teknologi geospasial terkini.' : 'Company news, project stories and practical knowledge on monitoring and geospatial technology.' }}
          </p>
        </div>

        <!-- ─── FILTER TABS (PAGE 5 HI-FI) ───────────────────────────── -->
        <div class="flex flex-wrap items-center gap-2.5 pt-8">
          <button
            v-for="cat in filterCategories"
            :key="cat.id"
            @click="activeCategoryId = cat.id"
            class="px-5 py-2 rounded-full font-ui text-xs font-bold tracking-wide uppercase transition-all duration-300 cursor-pointer"
            :class="activeCategoryId === cat.id
              ? 'bg-[#18b8ea] text-[#030d17] shadow-[0_0_20px_rgba(24,184,234,0.4)]'
              : 'bg-[#071d2e] text-[#94a3b8] hover:text-white border border-white/10 hover:border-white/20'"
          >
            {{ cat.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- ─── ARTICLES CONTAINER ───────────────────────────────────────── -->
    <section class="pb-28 relative z-10">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 space-y-10">

        <!-- FEATURED ARTICLE (PAGE 5 HI-FI) -->
        <div v-if="featuredArticle" class="rounded-3xl geo-card-highlight overflow-hidden group">
          <div class="grid lg:grid-cols-12 gap-8 items-center">
            <!-- Featured Image -->
            <div class="lg:col-span-6 relative aspect-[16/10] overflow-hidden bg-[#020b14]">
              <img
                :src="featuredArticle.mainImage || '/images/hero-bg.jpg'"
                :alt="loc(featuredArticle, 'title')"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#030d17] via-transparent to-transparent lg:hidden"></div>
            </div>

            <!-- Featured Content -->
            <div class="lg:col-span-6 p-8 lg:p-12 space-y-4">
              <div class="flex items-center gap-3">
                <span class="font-mono text-[11px] uppercase tracking-wider px-3 py-0.5 rounded-full bg-[#18b8ea]/15 text-[#18b8ea] font-semibold border border-[#18b8ea]/30">
                  {{ loc(featuredArticle, 'category') || 'COMPANY NEWS' }}
                </span>
                <span class="font-mono text-xs text-[#64748b]">
                  {{ featuredArticle.publishedAt }}
                </span>
              </div>

              <h2 class="font-display font-bold text-2xl sm:text-3xl text-white group-hover:text-[#18b8ea] transition-colors leading-tight">
                <NuxtLink :to="`/articles/${featuredArticle.slug}`">
                  {{ loc(featuredArticle, 'title') }}
                </NuxtLink>
              </h2>

              <p class="font-body text-sm sm:text-base text-[#94a3b8] leading-relaxed font-light">
                {{ loc(featuredArticle, 'excerpt') }}
              </p>

              <div class="pt-2">
                <NuxtLink
                  :to="`/articles/${featuredArticle.slug}`"
                  class="inline-flex items-center gap-2 font-ui font-bold text-xs tracking-wider uppercase text-[#18b8ea] hover:text-[#38cbf8]"
                >
                  <span>{{ locale === 'id' ? 'Baca artikel' : 'Read article' }}</span>
                  <span>&rarr;</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- ─── 3 ARTICLES GRID (PAGE 5 HI-FI) ────────────────────────── -->
        <div class="grid md:grid-cols-3 gap-6 pt-4">
          <article
            v-for="art in remainingArticles"
            :key="art.id"
            class="rounded-3xl geo-card overflow-hidden flex flex-col group"
          >
            <!-- Image Thumbnail -->
            <div class="h-52 bg-[#020b14] relative overflow-hidden">
              <img
                :src="art.mainImage || '/images/hero-surveyor.jpg'"
                :alt="loc(art, 'title')"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#030d17]/60 via-transparent to-transparent"></div>
            </div>

            <!-- Card Body -->
            <div class="p-7 flex-1 flex flex-col justify-between space-y-4">
              <div class="space-y-2.5">
                <div class="flex items-center gap-2.5 text-[11px] font-mono">
                  <span class="text-[#18b8ea] uppercase font-semibold">{{ loc(art, 'category') }}</span>
                  <span class="text-[#64748b]">&middot;</span>
                  <span class="text-[#64748b]">{{ art.publishedAt }}</span>
                </div>
                <h3 class="font-display font-bold text-lg text-white group-hover:text-[#18b8ea] transition-colors leading-snug">
                  <NuxtLink :to="`/articles/${art.slug}`">
                    {{ loc(art, 'title') }}
                  </NuxtLink>
                </h3>
                <p class="font-body text-xs text-[#94a3b8] leading-relaxed font-light line-clamp-3">
                  {{ loc(art, 'excerpt') }}
                </p>
              </div>

              <div class="pt-2 border-t border-white/5">
                <NuxtLink
                  :to="`/articles/${art.slug}`"
                  class="inline-flex items-center gap-1.5 text-xs font-ui font-bold text-[#18b8ea] hover:text-[#38cbf8] uppercase tracking-wider"
                >
                  <span>{{ locale === 'id' ? 'Baca artikel' : 'Read article' }}</span>
                  <span>&rarr;</span>
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>

        <!-- ─── LOAD MORE BUTTON (PAGE 5 HI-FI) ───────────────────────── -->
        <div class="text-center pt-8">
          <button
            class="btn-geo-outline"
          >
            {{ locale === 'id' ? 'Muat Lebih Banyak' : 'Load more' }}
          </button>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useLanguage } from '~/composables/useLanguage'

const { t, locale, loc } = useLanguage()

const { data: articlesData } = await useAsyncData('articles-hifi', () => $fetch('/api/articles').catch(() => []))

const activeCategoryId = ref('All')

const filterCategories = computed(() => [
  { id: 'All', label: locale.value === 'id' ? 'Semua' : 'All' },
  { id: 'Company News', label: locale.value === 'id' ? 'Berita Perusahaan' : 'Company News' },
  { id: 'Articles', label: locale.value === 'id' ? 'Artikel' : 'Articles' },
  { id: 'Projects', label: locale.value === 'id' ? 'Proyek' : 'Projects' },
  { id: 'Events', label: locale.value === 'id' ? 'Event' : 'Events' }
])

const allArticles = computed(() => {
  return Array.isArray(articlesData.value) ? articlesData.value : []
})

const filteredArticles = computed(() => {
  if (activeCategoryId.value === 'All') return allArticles.value
  const target = activeCategoryId.value.toLowerCase()
  return allArticles.value.filter(a => {
    const rawCat = (a.category || '').toLowerCase()
    const rawCatEn = (a.categoryEn || '').toLowerCase()
    return rawCat.includes(target) || rawCatEn.includes(target)
  })
})

const featuredArticle = computed(() => {
  return filteredArticles.value[0] || null
})

const remainingArticles = computed(() => {
  return filteredArticles.value.slice(1)
})

useHead({
  title: computed(() => locale.value === 'id'
    ? 'Berita & Artikel — Kilas Operasional & Teknologi | Terrabyte'
    : 'News & Articles — Insights from the ground up | Terrabyte'),
  meta: [
    {
      name: 'description',
      content: computed(() => locale.value === 'id'
        ? 'Kilas berita operasional, studi kasus lapangan, dan wawasan teknologi geospasial terkini.'
        : 'Company news, project stories and practical knowledge on monitoring and geospatial technology.')
    }
  ]
})
</script>
