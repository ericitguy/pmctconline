/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#183D32",
          deep: "#0F2A21",
          soft: "#224D40",
        },
        ivory: "#F8F5EF",
        gold: {
          DEFAULT: "#C4A46C",
          dark: "#8A6E3E",
          soft: "#E4D3B0",
        },
        goldsoft: "#E4D3B0",
        terracotta: {
          DEFAULT: "#C77C61",
          dark: "#A24E33",
        },
        terracottasoft: "#E8B5A2",
        charcoal: "#252825",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: { content: "72rem" },
      boxShadow: {
        card: "0 1px 2px rgba(24,61,50,0.04), 0 12px 32px -12px rgba(24,61,50,0.16)",
        lift: "0 2px 4px rgba(24,61,50,0.06), 0 20px 44px -16px rgba(24,61,50,0.24)",
      },
      keyframes: {
        fadeup: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: { fadeup: "fadeup 0.9s ease-out both" },
    },
  },
  plugins: [],
};
