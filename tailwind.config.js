/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/components/*.jsx', './src/*.jsx'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
    },
    extend: {
      colors: {
        slate: {
          820: '#141f33'
        }
      }
    },
  },
  plugins: [],
}

