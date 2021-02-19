module.exports = {
  purge: [
   './components/**/*.{vue,js}',
   './layouts/**/*.vue',
   './pages/**/*.vue',
   './plugins/**/*.{js,ts}',
   './nuxt.config.{js,ts}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
       'hero-header': "url('~assets/images/ICON534.jpg')",
      })
    },
    fontFamily: {
      'main': ['Inter', 'sans-serif']
    }
  },
  variants: {},
  plugins: [],
}