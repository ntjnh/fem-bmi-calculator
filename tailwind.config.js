/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/components/*.jsx', './src/*.jsx'],
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
    },
    screens: {
      sm: '580px',
      md: '700px',
      lg: '930px',
      xl: '1160px',
      '2xl': '1500px',
    },
    extend: {
      colors: {
        slate: {
          550: '#596271',
          820: '#141f33'
        }
      }
    },
  },
  plugins: [],
}

