<template>
  <div class="pt-32 pb-24 min-h-screen">
    <!-- Loading State -->
    <div v-if="pending && !article" class="max-w-4xl mx-auto px-6 py-20 text-center">
      <div class="inline-block w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p class="text-xl text-[#9db4c8]">Retrieving tactical document...</p>
    </div>

    <!-- 404 / Not Found State -->
    <div v-else-if="!article" class="max-w-4xl mx-auto px-6 py-20 text-center">
      <div class="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mx-auto mb-6 text-2xl">
        🛰️
      </div>
      <h1 class="text-3xl font-bold font-display text-white mb-4">Document Not Found</h1>
      <p class="text-[#9db4c8] mb-8">The requested intelligence dossier could not be located in the central repository.</p>
      <NuxtLink
        to="/articles"
        class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
      >
        Return to Intelligence Feed
      </NuxtLink>
    </div>

    <!-- Full Article -->
    <article v-else class="max-w-4xl mx-auto px-6">
      <!-- Back Link -->
      <NuxtLink
        to="/articles"
        class="inline-flex items-center gap-2 text-sm text-[#9db4c8] hover:text-cyan-400 transition-colors mb-8"
      >
        ← Back to Intel Briefings
      </NuxtLink>

      <!-- Category & Meta -->
      <div class="flex flex-wrap items-center gap-3 mb-6">
        <span class="px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
          {{ article.category }}
        </span>
        <span class="text-xs text-[#9db4c8]">{{ article.publishedAt }}</span>
        <span class="text-xs text-[#9db4c8]">•</span>
        <span class="text-xs text-[#9db4c8]">{{ article.readTime }} min read</span>
      </div>

      <!-- Title -->
      <h1 class="text-3xl md:text-5xl font-bold font-display text-white mb-6 leading-tight">
        {{ article.title }}
      </h1>

      <!-- Author Bar -->
      <div class="flex items-center gap-3 py-4 border-y border-white/10 mb-10">
        <div class="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center font-bold text-cyan-400">
          {{ article.author?.name ? article.author.name.charAt(0).toUpperCase() : 'T' }}
        </div>
        <div>
          <p class="text-sm font-semibold text-white">{{ article.author?.name || 'Terrabyte Team' }}</p>
          <p class="text-xs text-[#9db4c8]">{{ article.author?.role || 'Defense Systems' }}</p>
        </div>
      </div>

      <!-- Cover Image -->
      <div class="rounded-2xl overflow-hidden border border-white/10 mb-12 shadow-2xl">
        <img
          :src="article.mainImage"
          :alt="article.title"
          class="w-full h-auto max-h-[500px] object-cover"
        />
      </div>

      <!-- Excerpt Box -->
      <div class="p-6 rounded-2xl bg-[#0b385e]/40 border-l-4 border-cyan-400 border border-white/5 mb-10">
        <p class="text-lg text-cyan-100 font-medium italic">
          "{{ article.excerpt }}"
        </p>
      </div>

      <!-- Content -->
      <div class="prose prose-invert max-w-none text-[#c3d5e5] leading-relaxed text-base md:text-lg">
        <div v-html="formattedContent"></div>
      </div>

      <!-- Tags -->
      <div v-if="article.tags && article.tags.length > 0" class="flex flex-wrap gap-2 mt-12 pt-8 border-t border-white/10">
        <span
          v-for="tag in article.tags"
          :key="tag"
          class="px-3 py-1 rounded-lg bg-white/[0.04] text-xs text-[#9db4c8] border border-white/5"
        >
          #{{ tag }}
        </span>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = computed(() => route.params.slug as string)

const { getArticleBySlug } = useSanityContent()
const { data: article, pending } = await useAsyncData(
  () => 'article-detail-' + slug.value,
  () => getArticleBySlug(slug.value)
)

const formattedContent = computed(() => {
  if (!article.value?.content) return ''
  return article.value.content
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold font-display text-white mt-8 mb-3">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold font-display text-white mt-10 mb-4">$1</h2>')
    .replace(/^\* (.*$)/gim, '<li class="ml-4 list-disc text-[#9db4c8]">$1</li>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\n\n/gim, '</p><p class="mb-4">')
})

useHead({
  title: computed(() => article.value ? `${article.value.title} — Terrabyte` : 'Article — Terrabyte')
})
</script>
