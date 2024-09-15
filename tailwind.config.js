/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        'custom': '24px',
      },
      height: {
        'custom': '10px',
      },
    },
  },
  plugins: [],
}

