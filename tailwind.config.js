/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.tsx",
    "./resources/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#ba3c3d',
        'brand-darkbrown': '#1e0b0e', 
        'brand-yellow': '#d49d00',    
        'brand-orange': '#c45730',
        'brand-dark': '#351518',
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.transform-style-3d': {
          'transform-style': 'preserve-3d',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
      })
    },
  ],
}