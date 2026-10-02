<template>
  <div>
    <IntroLoader />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  link: [
    { rel: 'icon', type: 'image/png', href: '/images/LOGOOnly-BGblack.png' },
    { rel: 'apple-touch-icon', href: '/images/LOGOOnly-BGblack.png' },
    { rel: 'shortcut icon', href: '/favicon.ico' }
  ],
  meta: [
    { property: 'og:image', content: '/images/LOGOOnly-BGblack.png' },
    { name: 'twitter:image', content: '/images/LOGOOnly-BGblack.png' }
  ]
})
</script>
