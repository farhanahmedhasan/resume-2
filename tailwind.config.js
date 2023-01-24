/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        "primary-white": "#ffffff",
        "primary-polish-white": "#E9E8E8",
        "primary-nero": "#262626",
        "primary-black-oak": "#4D4E4E",
        "primary-black-oak-secondary": "#4E4F4F",
        "primary-limousine-leather": "#3B3C3B",
        "primary-chai-tea": "#AC7E2B",
        "primary-unique-grey": "#C9C9C9",
        "primary-scapa-flow": "#6A6B6B",
        "primary-explosive-grey": "#C4C4C3",
        "primary-spanish-grey": "#989898",
      },
    },
  },

  plugins: [],
};
