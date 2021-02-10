module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#F67280',
          black: '#152135',
          white: '#FFFFFF',
          gray: '#828282',
          pink: '#FFB7B7',
          purple: '#DC78FF',
          crimson: '#DC143C',
          silver: '#F0F0F0',
        },
      },
      fontFamily: {
        nunito: ['Nunito'],
        leckerli: ['Leckerli One'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
