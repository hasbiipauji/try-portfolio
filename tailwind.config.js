/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: '#425c77',
        dark: '#0f172a',
        secondary: '#4a6f8f',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      fontWeight:{
        bolder: '800'
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

