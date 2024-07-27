/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    // Ici on peut définir des couleurs personnalisées pour notre projet et toutes les autres couleuurs qui ne sont pas définies ici seront supprimées car elle ne sont pas dans le extend.
    // colors: {
    //   "orange": "#FFA500",
    // },
    extend: {
      colors: {
        orange: "#FFA500",
        "bleu-nuit": {
          700: "#03045E",
          800: "#023e8a",
          15000: "#0077b6",
        },
      },
      fontFamily: {
        custom: ["Nunito"],
      },
      fontSize: {
        custom: "66px",
        "clamp-sm": "clamp(20px, 3vw, 50px)",
        "clamp-md": "clamp(30px, 4vw, 60px)",
        "clamp-lg": "clamp(40px, 5vw, 70px)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
