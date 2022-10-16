/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Montserrat', ...fontFamily.sans],
      },
      colors: {
        primary: {
          main: '#E43F5A',
          dark: '#1B1B2F',
        },
        secondary: {
          dark: '#262541',
        },
        dark: '#222222',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
