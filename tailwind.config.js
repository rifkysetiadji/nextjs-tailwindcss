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
      'display':['Rubik','sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
