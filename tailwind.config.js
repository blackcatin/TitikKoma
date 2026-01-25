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
        'brand-dark': '#351518',
        'brand-orange': '#c45730',
      },
    },
  },
  plugins: [],
}