/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0f172a",
        darker: "#020617",
        slate: "#1e293b",
        cyan: "#38bdf8",
      },
      fontFamily: {
        poppins: ['"Poppins", sans-serif'],
      },
    },
  },
  plugins: [],
}

