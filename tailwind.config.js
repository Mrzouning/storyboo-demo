/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./packages/**/*.{tsx,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      color: {
        primary: "green",
      },
    },
  },
  plugins: [],
};
