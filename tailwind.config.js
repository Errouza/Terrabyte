/** @type {import('tailwindcss').Config} */
module.exports = {
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
          cyan: '#00d1b2',       // Cyan Pulse
          'cyan-hover': '#00b89d',
          'cyan-glow': 'rgba(0, 209, 178, 0.35)',
          midnight: '#001f3f',   // Midnight Grid
          'midnight-dark': '#001428',
          'midnight-deep': '#000f1f',
          signal: '#ffffff',     // Pure Signal
          carbon: '#2e2e2e',     // Carbon Core
          'carbon-surface': 'rgba(46, 46, 46, 0.65)',
          'carbon-border': 'rgba(46, 46, 46, 0.9)',
          text: '#ffffff',
          subtext: '#9db4c8',
          muted: '#6c889f',
          blue: '#00d1b2',       // mapped to Cyan Pulse for compatibility
          dark: '#001f3f',
        },
      },
    },
  },
  plugins: [],
}
