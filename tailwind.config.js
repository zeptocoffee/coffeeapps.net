module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false,
  theme: {
    fontFamily: {
      'stylish': ['Stylish', 'sans-serif'],
    },
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
