/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'local-orange': '#FBB26F',
        'local-gray' : '#8D8D8D',
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
