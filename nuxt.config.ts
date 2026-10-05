// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  routeRules: {
    '/about': { redirect: { to: '/company', statusCode: 301 } },
    '/admin': { redirect: { to: '/', statusCode: 302 } },
  },

  runtimeConfig: {
    public: {
      sanityProjectId: process.env.SANITY_PROJECT_ID || 'hzmtw7ck',
      sanityDataset: process.env.SANITY_DATASET || 'production',
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@vercel/speed-insights/nuxt',
  ],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en', // Informs browser/Google Translate that the base language is English
      },
      title: 'Terrabyte Geosystems — Enterprise Geodesy & Geospatial Systems',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Terrabyte Geosystems is a global leader in high-precision GNSS infrastructure, inertial navigation, LiDAR mapping, and geospatial sensor fusion for mission-critical enterprise applications.',
        },
        { name: 'theme-color', content: '#001f3f' },
        { property: 'og:title', content: 'Terrabyte Geosystems — Where Earth Meets Intelligence' },
        { property: 'og:description', content: 'Precision slope radar, survey instruments and TerraPulse-AI analytics.' },
        { property: 'og:image', content: '/images/LOGOOnly-BGblack.png' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:image', content: '/images/LOGOOnly-BGblack.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/LOGOOnly-BGblack.png' },
        { rel: 'apple-touch-icon', href: '/images/LOGOOnly-BGblack.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600&display=swap',
        },
      ],
    },
  },
})
