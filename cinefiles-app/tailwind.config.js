/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'blockbuster-blue':'#1f4489',
      },
    },
  },
  variants:{
    extends:{
      display:['group-focus']
    },
  },
  plugins: [],
}
