/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'blockbuster-blue':'#1f4489',
        'blockbuster-yellow':'#fcc139'
      },
    },
  },
  plugins: [],
}
