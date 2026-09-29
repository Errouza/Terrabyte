<template>
  <div class="min-h-[50vh] flex items-center justify-center text-center p-12">
    <div class="space-y-4">
      <div class="w-8 h-8 rounded-full border-2 border-[#00d1b2] border-t-transparent animate-spin mx-auto"></div>
      <p class="font-mono text-sm text-[#9db4c8]">Mengalihkan ke halaman Company...</p>
      <NuxtLink to="/company" class="btn-primary text-xs inline-block">Klik di sini jika tidak beralih otomatis</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
await navigateTo('/company', { redirectCode: 301 })
</script>
