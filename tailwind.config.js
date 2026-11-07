/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        diwali: {
          dark: '#070312',
          purple: {
            950: '#0c0418',
            900: '#15072b',
            800: '#230c45',
            700: '#341364',
            600: '#4c1d95',
          },
          navy: {
            950: '#030712',
            900: '#070e24',
            800: '#0f172a',
          },
          gold: {
            light: '#fef3c7',
            shimmer: '#fde047',
            DEFAULT: '#fbbf24',
            warm: '#f59e0b',
            deep: '#d97706',
            amber: '#b45309',
          },
          marigold: {
            DEFAULT: '#f97316',
            warm: '#ea580c',
          },
          crimson: {
            DEFAULT: '#e11d48',
            deep: '#be123c',
          }
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        handwriting: ['"Dancing Script"', '"Great Vibes"', 'cursive'],
        heading: ['"Cinzel Decorative"', '"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'flame': 'flame 1.5s ease-in-out infinite alternate',
        'flame-subtle': 'flame 2.2s ease-in-out infinite alternate',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        flame: {
          '0%': { transform: 'scale(1) rotate(-1deg)', filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.9))' },
          '50%': { transform: 'scale(1.08, 0.95) rotate(1.5deg)', filter: 'drop-shadow(0 0 14px rgba(245, 158, 11, 1))' },
          '100%': { transform: 'scale(0.96, 1.05) rotate(-1deg)', filter: 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.95))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 15px rgba(251, 191, 36, 0.5))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 30px rgba(251, 191, 36, 0.9))' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      boxShadow: {
        'gold-glow': '0 0 25px -3px rgba(245, 158, 11, 0.4), 0 0 10px -2px rgba(245, 158, 11, 0.2)',
        'gold-glow-lg': '0 0 50px 0px rgba(245, 158, 11, 0.45), 0 0 20px 2px rgba(251, 191, 36, 0.3)',
        'purple-glow': '0 0 35px -5px rgba(124, 58, 237, 0.35)',
        'diya-glow': '0 0 30px 8px rgba(251, 191, 36, 0.6), 0 0 60px 15px rgba(249, 115, 22, 0.4)',
      }
    },
  },
  plugins: [],
};

