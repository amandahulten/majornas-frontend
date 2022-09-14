/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      h1: ["Courier"],
    },
    extend: {
      colors: {
        whiteish: "#F8F5EA",

        tumbleweed: "#EBB08C",

        "black-coffee": "#322A2E",

        "temp-ey": "#E6814B",

        "temp-päron": "#DCE7D3",

        "temp-yellow": "#D1D7DF",

        illustration: "#F5D8C6",
      },
    },
  },

  plugins: [],
};
