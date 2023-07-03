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
        'outer-space': '#454545',
        'ghost-white': '#f8f9fa',
        'bright-gray': '#e9ecef',
        'gold': '#ffd700'
      },
      fontFamily: {
        'montserrat': ['Montserrat','sans-serif'],
        'tenorsans': ['Tenor Sans','sans-serif'],
      },
      outlineOffset: {
        inset: '-20px',
        category: '-8px',
      }
    },
  },
  plugins: [],
}
