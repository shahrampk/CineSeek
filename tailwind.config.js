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
      minHeight: {
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
        "card-gradient": "5px 5px 26px -6px #fa5252",
      },
      rotate: {
        40: "40deg", // 👈 custom rotate utility
      },
      boxShadow: {
        alert: "0 0 10px rgba(0,0,0,0.5)",
        card: "0 0 0px 2px rgba(73, 80, 87, 0.4)",
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
      animation: {
        showMsg: "showmsg 4s ease-out",
      },
      keyframes: {
        showmsg: {
          "0%": {
            opacity: "0",
            transform: 'translateX("-10px")',
          },

          "10%": {
            opacity: "1",
            transform: 'translateX("0px")',
          },
          "90%": {
            opacity: "0",
            transform: 'translateX("10px")',
          },
          "100%": {
            visibility: "hidden",
          },
        },
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
