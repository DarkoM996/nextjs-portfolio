/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      colors: {
        primary_lighterShade: {
          100: "#F1F1F1",
          200: "#EDEDED",
          300: "#E6E6E6",
          400: "#E0E0E0",
          500: "#D9D9D9",
        },
        primary_darkerShade: {
          600: "#262626",
          700: "#1F1F1F",
          800: "#191919",
          850: "#121212",
          900: "#0D0C0C",
        },
      },
    },
  },
  plugins: [],
};
