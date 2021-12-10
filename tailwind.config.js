module.exports = {
  content: [
    './_site/**/*.html',
  ],
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
  plugins: [],
}
