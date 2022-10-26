/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sadler-purple': '#a8abde',
        'sadler-dark-purple': '#8789cf'
      },
    },
  },
  plugins: [],
}
