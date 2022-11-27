const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      "sans-serif": ["Lato", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
