/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        buttonColor: "#86C548",
        light_colors_light_gray: "#efefef",
        light_colors_dark_gray: "#707070",
        light_colors_black_light: "#000",
        light_colors_accent_light: "#a18a68",
      },
    },
  },
  plugins: [],
};
