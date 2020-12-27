module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false,
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#e6dcd1',
      'secondary': '#634830',
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
