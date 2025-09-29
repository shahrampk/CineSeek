/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      height: {
        slider: "80vh",
      },
      backgroundColor: {
        navbar: "#1a1e21",
        "search-bar": "#343a40",
      },
      backgroundImage: {
        "linear-gradient":
          "linear-gradient(to right bottom, #15181a 40%, #1d2021)",
      },
      rotate: {
        40: "40deg", // 👈 custom rotate utility
      },
      textShadow: {
        outline: ` 2px 2px 0 #ced4da,
             -2px -2px 0 #ced4da,
              2px -2px 0 #ced4da,
             -2px  2px 0 #ced4da,
              3px  0   0 #ced4da,
             -3px  0   0 #ced4da,
              0   3px  0 #ced4da,
              0  -3px  0 #ced4da`,
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
    function ({ addUtilities, theme }) {
      const textShadow = theme("textShadow");
      const utilities = Object.entries(textShadow).map(([key, value]) => {
        return {
          [`.text-shadow-${key}`]: { textShadow: value },
        };
      });
      addUtilities(utilities, ["responsive"]);
    },
  ],
};
