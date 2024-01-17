/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue, js, ts, jsx, tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B4965", //INDIGO DYE
        secondary: "#62B6CB", //MOONSTONE
        resaltar: "#BEE9E8", //MINT GREEN
        background: "#272727",
      },
    },
  },
  plugins: [],
};

