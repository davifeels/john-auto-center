/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#07080A',
          900: '#0B0C10',
          850: '#101318',
          800: '#161920',
          750: '#1D222B',
          700: '#252B37',
          600: '#343D4E',
        },
        racing: {
          orange: '#FF5500',
          amber: '#FF8A00',
          glow: 'rgba(255, 85, 0, 0.15)',
          red: '#E63946',
        },
        auto: {
          metal: '#94A3B8',
          silver: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'glow-orange': '0 0 25px -5px rgba(255, 85, 0, 0.35)',
        'glow-orange-sm': '0 0 15px -3px rgba(255, 85, 0, 0.25)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
        'inner-metal': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.08)',
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
