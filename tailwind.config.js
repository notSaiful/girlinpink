/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF8F5',
          dark: '#F4EFEA',
          card: '#FFFFFF',
        },
        rose: {
          DEFAULT: '#C27878',
          light: '#F5ECEB',
          dark: '#A85E5E',
          soft: '#E8CECE',
        },
        sage: {
          DEFAULT: '#7A8F78',
          light: '#ECF1EB',
          dark: '#5E705C',
        },
        butter: {
          DEFAULT: '#EEDAA2',
          light: '#FAF3E0',
        },
        nearblack: {
          DEFAULT: '#24201E',
          soft: '#383330',
        },
        sand: {
          DEFAULT: '#E7E1D8',
          light: '#EFECE6',
        },
        muted: '#78716C',
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['Work Sans', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(36, 32, 30, 0.05)',
        'card': '0 8px 30px -4px rgba(36, 32, 30, 0.07)',
        'popover': '0 20px 40px -8px rgba(36, 32, 30, 0.12)',
      },
      animation: {
        'hero-settle': 'heroSettle 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        heroSettle: {
          '0%': { opacity: '0', transform: 'translateY(16px) scale(0.985)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
