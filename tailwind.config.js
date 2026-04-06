/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tiltRed: '#FF0033',
        tiltDark: '#0A0A0A'
      }
    },
  },
  plugins: [],
}

