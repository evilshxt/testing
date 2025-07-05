/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html,css}",
  ],
  theme: {
    extend: {
      colors: {
        'ucla-blue': '#3e78b2',
        'cobalt-blue': '#004ba8',
        'outer-space': '#4a525a',
        'raisin-black': '#24272b',
        'custom-black': '#07070a'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
} 