/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Earth brown carried over from the original site (#7b4a12)
        earth: { DEFAULT: "#7B4A12", dark: "#4A2C0A", light: "#F3E7D6" },
        saffron: { DEFAULT: "#D9822B", dark: "#B4651A", light: "#F8E5CC" },
        // Banner title red
        vermilion: "#B3282D",
        leaf: "#55703F",
        parchment: "#FBF7F0",
        sand: "#EFE4D3",
        ink: "#2B231C",
        muted: "#6A5E52",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "var(--font-deva-sans)", "var(--font-guj-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-deva-serif)", "var(--font-guj-serif)", "Georgia", "serif"],
      },
      maxWidth: { page: "1200px" },
    },
  },
  plugins: [],
};
