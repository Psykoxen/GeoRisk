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
        "green-main": {
          50: "#f1fcf4",
          100: "#ddfbe6",
          200: "#bdf5d0",
          300: "#8aebab",
          400: "#50d87f",
          500: "#29be5d",
          600: "#1c9d49",
          700: "#1c8842",
          800: "#196233",
          900: "#17502d",
          950: "#072c15",
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
        "dark-green-main": "#011104",
      },
    },
  },
  plugins: [],
};
