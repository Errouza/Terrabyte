<template>
  <div class="fixed bottom-6 right-6 z-50 flex items-center select-none group">
    <!-- Contextual Tooltip Pill (Only visible on hover) -->
    <a
      :href="whatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="hidden sm:inline-flex items-center gap-2 mr-3 px-4 py-2 rounded-full bg-[#020b14]/95 border border-[#25D366]/40 text-white text-xs font-ui shadow-[0_4px_25px_rgba(0,0,0,0.9)] backdrop-blur-md whitespace-nowrap opacity-0 translate-x-3 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto transition-all duration-300 ease-out"
    >
      <span class="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
      <span class="font-medium text-[#cbd5e1] group-hover:text-white transition-colors">
        {{ labelText }}
      </span>
    </a>

    <!-- Circular Floating WhatsApp Button -->
    <a
      :href="whatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_6px_25px_rgba(37,211,102,0.45),0_0_15px_rgba(37,211,102,0.3)] transition-all duration-300 hover:scale-110 active:scale-95 group-hover:shadow-[0_8px_35px_rgba(37,211,102,0.65),0_0_25px_rgba(37,211,102,0.4)]"
      :title="labelText"
      aria-label="Chat WhatsApp Terrabyte"
    >
      <!-- Ripple effect ring -->
      <span class="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-25 pointer-events-none"></span>

      <!-- Official WhatsApp Icon -->
      <svg class="w-7 h-7 fill-current relative z-10" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
      </svg>
    </a>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useLanguage } from '~/composables/useLanguage'

const route = useRoute()
const { locale } = useLanguage()

const phoneNumber = '628139840986'

const labelText = computed(() => {
  return locale.value === 'en' ? 'Chat with us on WhatsApp' : 'Chat via WhatsApp'
})

const whatsappUrl = computed(() => {
  const isEn = locale.value === 'en'
  const path = route.path || '/'

  let template = ''

  if (path.startsWith('/products/')) {
    template = isEn
      ? 'Hello Terrabyte Team, I am browsing your hardware catalog on the website and would like to consult on technical specifications, pricing, and live demo availability. Could you please assist me?'
      : 'Halo Tim Terrabyte, saya sedang melihat detail produk di website dan ingin berkonsultasi mengenai spesifikasi teknis, penawaran resmi, serta ketersediaan demo unit. Boleh dibantu informasinya?'
  } else if (path === '/products') {
    template = isEn
      ? 'Hello Terrabyte Team, I am interested in your precision hardware catalog (Radar, GNSS, Laser RTK, LiDAR). Could you provide further guidance?'
      : 'Halo Tim Terrabyte, saya tertarik dengan katalog hardware presisi Terrabyte (Radar Lereng, GNSS, Laser RTK, LiDAR). Boleh dibantu konsultasi kebutuhannya?'
  } else if (path === '/solutions') {
    template = isEn
      ? 'Hello Terrabyte Team, I am interested in TerraPulse-AI platform and geospatial monitoring solutions. Could we schedule a technical discussion or demo?'
      : 'Halo Tim Terrabyte, saya tertarik dengan solusi pemantauan geospasial & platform TerraPulse-AI. Boleh jadwalkan diskusi teknis atau sesi demo?'
  } else if (path === '/company') {
    template = isEn
      ? 'Hello Terrabyte Team, I would like to learn more about Terrabyte Geosystem Indonesia and potential survey / monitoring partnerships. Could you assist me?'
      : 'Halo Tim Terrabyte, saya ingin mengetahui lebih lanjut mengenai Terrabyte Geosystem Indonesia dan peluang kemitraan/survei. Boleh dibantu?'
  } else {
    template = isEn
      ? 'Hello Terrabyte Geosystem Indonesia, I would like to inquire about your surveying, radar, and monitoring technology. Could you please assist me?'
      : 'Halo Tim Terrabyte Geosystem Indonesia, saya ingin berkonsultasi mengenai solusi teknologi survei & monitoring. Boleh dibantu informasi lebih lanjut?'
  }

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(template)}`
})
</script>

