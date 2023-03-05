/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xsm: '360px',
      },
      fontFamily: {
        nunitoSans: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        blue: {
          950: 'hsl(209, 23%, 22%)',
          1000: 'hsl(207, 26%, 17%)',
          1050: 'hsl(200, 15%, 8%)',
        },
        gray: {
          950: 'hsl(0, 0%, 52%)',
        },
      },
      boxShadow: {
        '2md': '0px 3px 8px rgba(0, 0, 0, 0.06)',
        '3xl': '0px 0px 6px rgba(0, 0, 0, 0.1)',
      },
      dropShadow: {
        '2md': '0px 3px 8px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
