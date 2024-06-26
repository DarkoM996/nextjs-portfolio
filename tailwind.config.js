/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
      },
    },
  },
  plugins: [],
};
