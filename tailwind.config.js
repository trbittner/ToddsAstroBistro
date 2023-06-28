// The TailwindCSS cheatsheet
// https://flaviocopes.com/tailwind-cheat-sheet/

// Find the name of a color
// https://www.color-name.com/

//Find a color
//https://redketchup.io/color-picker
module.exports = {
  content: ['./src/**/*.{html,astro,js,md}'],
  theme: {
    extend: {
      colors: {
        'med-champagne': '#fbeaab',
      },
      fontFamily: {
        'montserrat': ['Montserrat','sans-serif'],
        'tenorsans': ['Tenor Sans','sans-serif'],
      },
    },
  },
  plugins: [],
}
