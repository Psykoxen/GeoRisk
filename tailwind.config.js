/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  daisyui: {
    themes: [],
  },
  theme: {
    extend: {
      colors: {
        "red-main": {
          50: "#fff0f0",
          100: "#ffdddd",
          200: "#ffc0c1",
          300: "#ff9495",
          400: "#ff5758",
          500: "#ff2325",
          600: "#ff090b",
          700: "#d70002",
          800: "#b10304",
          900: "#920a0b",
          950: "#500001",
        },
        "light-gray-main": {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#EFEFEF",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5f5f5f",
          700: "#4f4f4f",
          800: "#656565",
          900: "#666666",
          950: "#303030",
        },
      },
    },
  },
  plugins: [],
};
