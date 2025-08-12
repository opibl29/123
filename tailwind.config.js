/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dominican: {
          red: '#CE1126',
          blue: '#002D62',
          white: '#FFFFFF'
        }
      }
    },
  },
  plugins: [],
}