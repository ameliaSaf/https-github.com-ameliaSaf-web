/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',

    },
    extend: {
      colors :{
        primary: '#818cf8', 
        abu:'#e5e5e5',
        slt:'#64748b',
        hitam: '#0f172a',
      },
      screen:{
        '2xl':'1320px',
      }
    },
  },
  plugins: [],
}
