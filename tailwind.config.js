/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.{html,js}", "./src/**.{html,js}"],
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
        grayColors: "#010d19",
      },
    },
    keyframes: {
      move: {
        "50%": { transform: "translateY(-1rem)", color: "#eab308" },
      },
      rotate: {
        "0%": { transform: "rotate(0deg)" },
        "50%": { color: "#eab308" },
        "100%": { transform: "rotate(360deg)" },
      },
      scaleUp: {
        "0%": { transform: "scale(0.8)" },
        "50%": { transform: "scale(1.2)", color: "#eab308" },
        "100%": { transform: "scale(0.8)" },
      },
    },
    animation: {
      movingY: "move 3s linear infinite",
      rotating: "rotate 15s linear infinite",
      scalingUp: "scaleUp 3s linear infinite",
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
