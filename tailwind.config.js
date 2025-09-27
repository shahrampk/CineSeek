/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      maxWidth: {
        slider: "1420px",
      },
      backgroundColor: {
        navbar: "#1a1e21",
        "search-bar": "#343a40",
      },
      backgroundImage: {
        "linear-gradient":
          "linear-gradient(to right bottom, #15181a 40%, #1d2021)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".scrollbar-hide::-webkit-scrollbar": {
          display: "none",
        },
      });
    },
  ],
};
