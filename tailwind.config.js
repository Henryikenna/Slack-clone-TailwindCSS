/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'circular': ['Circular', ''],
        'larsseit': ['Larsseit', ''],
        'spacegrotesk': ['Space Grotesk']

      }
    },
  },
  plugins: [],
}
