/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dem-blue': '#0015BC',
        'dem-dark': '#000A7A',
        'dem-light': '#E8F1FF',
        'rep-red': '#E81B23',
        'rep-dark': '#B01419',
        'rep-light': '#FFE8E8',
        'neutral-gray': '#F5F5F5',
      },
      fontFamily: {
        sans: ['Poppins', 'Nunito Sans', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
