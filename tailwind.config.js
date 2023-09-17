/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'media', // or 'media' or 'class'
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx,cjs,html}'
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundColor: {
        'top-menu': '#ff00ff',
        'menu-500': '#ff0066'
      },
    },
  },
  plugins: []
}

