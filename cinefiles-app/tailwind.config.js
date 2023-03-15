/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  variants:{
    extends:{
      display:['group-focus']
    },
  },
  plugins: [],
}
