/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        crusive: '"Edu NSW ACT Cursive", "cursive" ,"sans-serif"',
      },
      screens: {
        "3xl": "1920px",
      },
      height: {
        "details-box": "600px",
      },
      minHeight:{
        slider: "60vh",
      },
      width: {
        "details-box-lg": "50vw",
        "details-box-md": "80vw",
      },
      backgroundColor: {
        navbar: "#1a1e21",
        "search-bar": "#343a40",
        secondary: "#030404",
      },
      backgroundImage: {
        "linear-gradient": "linear-gradient(35deg, #212529 35%, transparent)",
        "movie-card-gradient":
          "linear-gradient(25deg, #030404 22%, rgba(0,0,0,0.52),transparent)",
      },
      boxShadow: {
        "movie-card-gradient": "0px 0px 40px 15px rgb(0,0,0)",
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
