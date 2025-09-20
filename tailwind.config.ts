import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0a0b10',
        neon: {
          blue: '#5ee7ff',
          violet: '#b084ff',
          cyan: '#77ffe5'
        }
      },
      backgroundImage: {
        grid: 'radial-gradient(rgba(94,231,255,0.15) 1px, transparent 1px)',
        glow: 'conic-gradient(from 180deg at 50% 50%, #5ee7ff33, #b084ff33, #77ffe533, #5ee7ff33)'
      },
      boxShadow: {
        neon: '0 0 40px rgba(176,132,255,0.25), 0 0 80px rgba(119,255,229,0.15)'
      }
    }
  },
  plugins: []
}
export default config
