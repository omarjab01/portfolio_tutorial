/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1C1C1C",
        secondarySection: "#1A1A1A",
        primaryText: "#FFFFFF",
        secondaryText: "#848484",
        mainCta: '#DF3030'
      }
    },
  },
  plugins: [],
}
