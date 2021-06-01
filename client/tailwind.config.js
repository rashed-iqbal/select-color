module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'title': ['Sansita', 'sans-serif'],
        'body': ['Lato', 'sans-serif'],
      },
      colors:{
        'pri':'#081f4d',
        'sec':'#0083ff',
        'gen':'#3b4d71',
        'our-bg':'#F9FAFB',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
