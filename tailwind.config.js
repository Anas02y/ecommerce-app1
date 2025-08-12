module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1558FF",
        accent: "#FF5A3C",
        emerald: "#00B37E",
        glass: "rgba(255,255,255,0.06)"
      },
      backdropBlur: {
        xs: "6px"
      }
    }
  },
  plugins: []
}
