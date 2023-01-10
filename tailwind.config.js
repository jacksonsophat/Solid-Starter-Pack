/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0E3A5E',
        secondary: '#D9D9D9',
        transparent: 'transparent',
        current: 'currentColor',
        gray: colors.gray,
        red: colors.red,
        blue: colors.blue,
        pink: colors.pink,
      },
    },
  },
  plugins: [],
}
