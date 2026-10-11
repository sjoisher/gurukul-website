/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        saffron: { DEFAULT: "#D9822B", dark: "#B4651A", light: "#F6E3CC" },
        maroon: { DEFAULT: "#6B1E1E", dark: "#4A1414" },
        leaf: "#4F6B3A",
        parchment: "#FBF6EE",
        sand: "#F1E8DA",
        ink: "#2A2420",
        muted: "#6B6158",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      maxWidth: { page: "1200px" },
    },
  },
  plugins: [],
};
