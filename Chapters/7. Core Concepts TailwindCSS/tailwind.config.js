/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/*.html"],
  theme: {
    extend: {
      animation: {
        fade: "fade 3s ease-in-out infinite",
      },
      keyframes: {
        fade: {
          "0%,100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
