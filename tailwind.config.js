/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        tis: {
          red: '#B90124',
          'red-dark': '#8C011B',
          'red-light': '#E62E4D',
          teal: '#007A83',
          'teal-light': '#60BAB1',
          'teal-soft': '#90CCD0',
          'teal-bg': '#BEE2E4',
          gold: '#C09D59',
          'gold-dark': '#A3813B',
          'gold-light': '#E2C787',
          dark: '#131313',
          'dark-card': '#1C1C1C',
          'dark-border': '#2D2D2D',
          cream: '#FAF8F5',
          slate: '#2D3748',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        heading: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
