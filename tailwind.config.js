/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        forum: ['Forum', 'serif'],
      },
      scale: {
        '20': '0.2', // Adding a custom scaleX value for 0.2
      },
    },
  },    
  plugins: [],
}

