/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue, js, ts, jsx, tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B4965", //INDIGO DYE
        secondary: "#62B6CB", //MOONSTONE
        resaltar: "#38B000",
        background: "#272727",
      },
      fontFamily: {
        barlow: ["Barlow", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

