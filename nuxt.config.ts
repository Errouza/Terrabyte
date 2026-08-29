// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
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
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/logoOnlyPutih.png' },
        { rel: 'apple-touch-icon', href: '/images/logoOnlyPutih.png' },
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
