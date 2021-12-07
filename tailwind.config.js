module.exports = {
  mode: 'jit',
  purge: [
    '_site/**/*.html',
  ],
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
