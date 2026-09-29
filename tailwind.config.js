/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        ui: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Montserrat', 'system-ui', 'sans-serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          cyan: '#18b8ea',       // Electric Cyan-Blue
          'cyan-hover': '#38cbf8',
          'cyan-glow': 'rgba(24, 184, 234, 0.35)',
          midnight: '#071d2e',   // Deep Geospatial Navy
          'midnight-dark': '#030d17',
          'midnight-deep': '#020911',
          signal: '#ffffff',     // Pure Signal
          carbon: '#1a2936',     // Deep Slate Core
          'carbon-surface': 'rgba(7, 29, 46, 0.75)',
          'carbon-border': 'rgba(24, 184, 234, 0.25)',
          text: '#ffffff',
          subtext: '#94a3b8',
          muted: '#64748b',
          blue: '#18b8ea',       // Electric Sky Blue
          dark: '#030d17',
        },
      },
    },
  },
  plugins: [],
}
