<template>
  <div class="pt-32 pb-24 min-h-screen">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Header -->
      <div class="max-w-3xl mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4">
          <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          Technical Intel & Insights
        </div>
        <h1 class="text-4xl md:text-5xl font-bold font-display tracking-tight text-white mb-6">
          Mission Debriefs & <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Defense Research</span>
        </h1>
        <p class="text-lg text-[#9db4c8] leading-relaxed">
          Official whitepapers, tactical engineering reports, and field intelligence from Terrabyte's navigation & radar systems laboratory. Connected directly with Sanity.io CMS.
        </p>
      </div>

      <!-- Categories Filter -->
      <div class="flex flex-wrap gap-3 mb-12">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="selectedCategory = cat"
          :class="[
            'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300',
            selectedCategory === cat
              ? 'bg-cyan-500 text-black font-semibold shadow-lg shadow-cyan-500/25'
              : 'bg-white/[0.04] text-[#9db4c8] hover:text-white hover:bg-white/[0.08] border border-white/5'
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Loading State -->
      <div v-if="pending && filteredArticles.length === 0" class="py-20 text-center">
        <div class="inline-block w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p class="text-[#9db4c8]">Synchronizing intelligence database...</p>
      </div>

      <!-- Articles Grid -->
      <div v-else-if="filteredArticles.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="art in filteredArticles"
          :key="art._id"
          class="group rounded-2xl bg-[#092b47]/60 backdrop-blur-md border border-white/10 hover:border-cyan-400/50 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1"
        >
          <!-- Thumbnail -->
          <div class="relative h-52 overflow-hidden bg-black/40">
            <img
              :src="art.mainImage"
              :alt="art.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#092b47] via-transparent to-transparent"></div>
            <span class="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/90 text-black tracking-wide">
              {{ art.category }}
            </span>
          </div>

          <!-- Content Body -->
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-3 text-xs text-[#9db4c8] mb-3">
                <span>{{ art.publishedAt }}</span>
                <span>•</span>
                <span>{{ art.readTime }} min read</span>
              </div>
              <h2 class="text-xl font-bold font-display text-white mb-3 group-hover:text-cyan-400 transition-colors leading-snug">
                {{ art.title }}
              </h2>
              <p class="text-sm text-[#9db4c8] line-clamp-3 mb-6 leading-relaxed">
                {{ art.excerpt }}
              </p>
            </div>

            <!-- Footer -->
            <div class="pt-4 border-t border-white/5 flex items-center justify-between">
              <div class="flex items-center gap-2.5">
                <div class="w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-xs font-bold text-cyan-400">
                  {{ art.author?.name ? art.author.name.charAt(0).toUpperCase() : 'T' }}
                </div>
                <div>
                  <p class="text-xs font-semibold text-white">{{ art.author?.name || 'Terrabyte Team' }}</p>
                  <p class="text-[10px] text-[#9db4c8]">{{ art.author?.role || 'Defense Tech' }}</p>
                </div>
              </div>
              <NuxtLink
                :to="'/articles/' + art.slug"
                class="text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
              >
                Read Intel →
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-20 bg-white/[0.02] border border-white/5 rounded-2xl">
        <p class="text-[#9db4c8] text-base">No articles found in this category.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const selectedCategory = ref('All')
const categories = ['All', 'Electronic Defense', 'Radar Systems', 'Geodesy & LiDAR']

const { getArticles } = useSanityContent()
const { data: articlesData, pending } = await useAsyncData('articles-catalog', () => getArticles())
const articles = computed(() => (Array.isArray(articlesData.value) ? articlesData.value : []))

const filteredArticles = computed(() => {
  if (selectedCategory.value === 'All') return articles.value
  return articles.value.filter(a => a.category === selectedCategory.value)
})

useHead({
  title: 'Technical Intel & Defense Insights — Terrabyte Geosystems',
  meta: [
    {
      name: 'description',
      content: 'Access official field briefs, radar signal processing intelligence, and anti-jam GNSS research from Terrabyte Geosystems.'
    }
  ]
})
</script>
