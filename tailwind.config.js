module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary':'#00A1ED',
      
    }),
    extend: {},
    fontFamily:{
      'display':['Noto Sans','sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
