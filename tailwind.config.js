/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2a2a2a',
        'blue-epic': '#288bd6'
      },
      fontFamily: {
        'sans': ['"Open Sans"', 'sans-serif'],
        'title': ['"Proxima Nova"', 'sans-serif'],
      },
      fontSize: {
        'xsm': '12px', 
      },
      lineHeight: {
        'xsm': '12px',
      },
    },
  },
  plugins: [],
}