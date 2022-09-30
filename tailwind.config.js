/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },

    extend: {
      colors: {
        whiteish: "#F8F5EA",

        tumbleweed: "#EBB08C",

        "black-coffee": "#322A2E",

        "temp-ey": "#E3DCCA",

        "temp-päron": "#DCE7D3",

        "temp-yellow": "#D1D7DF",

        illustration: "#F5D8C6",
        hembakad: "#4E4247",
      },
      fontFamily: {
        "courier-prime": "CourierPrime",
      },
    },
  },

  plugins: [require("@tailwindcss/line-clamp")],
};
