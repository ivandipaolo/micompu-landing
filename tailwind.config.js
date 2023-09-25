const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        "bounce-low": {
          "0%": {
            transform: "translateY(0) rotate(0)",
            animationTimingFunction: "ease-in-out",
          },
          "50%": {
            transform: "translateY(-30px)",
            animationTimingFunction: "ease-in-out",
          },
          "100%": {
            transform: "translateY(0) rotate(0)",
            animationTimingFunction: "ease-in-out",
          },
        },
        "spin-reverse": {
          from: {
            transform: "rotate(360deg)",
          },
          to: {
            transform: "rotate(0deg)",
          },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        shimmer: {
          "0%": {
            transform: "translateX(0%)",
          },
          "50%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        "bounce-low": "bounce-low 5s infinite",
        "spin-slow": "spin 2s linear infinite",
        "spin-reverse-slow": "spin-reverse 4s linear infinite",
        shimmer: "shimmer 1s infinite",
      },
      colors: {
        trueGray: colors.neutral,
      },
      fontFamily: {
        teko: ["Teko", ...defaultTheme.fontFamily.sans],
        roboto: ["Roboto Condensed", ...defaultTheme.fontFamily.sans],
      },
    },
    fontFamily: {
      teko: ["Teko", ...defaultTheme.fontFamily.sans],
      roboto: ["Roboto Condensed", ...defaultTheme.fontFamily.sans],
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}
