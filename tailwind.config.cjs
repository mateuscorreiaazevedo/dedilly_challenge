/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    './src/**/*.tsx'
  ],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    extend: {
    },
  },
  plugins: [],
}
