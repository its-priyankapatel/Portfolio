/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Condensed", "serif"],
        redhat: ["Red Hat Text", "serif"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    filter: false,
  },
};
