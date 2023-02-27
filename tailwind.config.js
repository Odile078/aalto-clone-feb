// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandGray: {
          DEFAULT: "#f1f1f1",
          light: "#e3e3e3",
        },
        brandBlack: "#2d2d2d",
      },
      // fontFamily: {
      //   sans: ["var(--font-nimbus)", ...fontFamily.sans],
      // },
    },
  },
  plugins: [],
};
