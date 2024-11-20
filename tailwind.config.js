/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}'
  ],
  theme: {
    extend: {
      colors: {
        green1: {
          500: '#A3B18A',
        },
        green2: {
          600: '#588157',
        },
        green3: {
          700: '#3A5A40',
        },

        green4: {
          800: '#344E41',
        },
        gray1: {
          800: '#DAD7CD',
        },
       },
    },
  },
  plugins: [],
}

