/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px",
    },
    fontFamily: {
      Sora: ["Sora", "sans-serif"],
      Kanit: ["Kanit", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#eab308",
      },
    },
    keyframes: {
      move: {
        "50%": { transform: "translateY(-1rem)", color: "#eab308" },
      },
    },
    animation: {
      movingY: "move 3s linear infinite",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "32px",
      },
    },
  },
  plugins: [],
};
