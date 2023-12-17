/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgba(178, 167, 244, 0.10)',
          100: 'rgba(178, 167, 244, 0.25)'
        }
      }
    },
  },
  plugins: [],
}

