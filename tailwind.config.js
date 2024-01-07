/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: "true",
      padding: "1rem",
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      navy: "#6CC7C1",
      milk: "#EAEAEA",
      milky: "#eeecec",
      mustard: "#EDCA44",
      jolbaki: "#9FB54A",
      mute: "#9a9a9a",
      charcoal: "#d9d9d9",
      disable: "#00000078",
      primarytavana: "#A57EED",
      secondaryTavana: "#f4bd30",
      tertiaryTavana: "#B84E4E",
    }),
  },
  plugins: [
    require("daisyui"),
    require("flowbite/plugin"),
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.6xl"),
          fontWeight: theme("fontWeight.black"),
        },
        h2: {
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.semibold"),
        },
        h3: {
          fontSize: theme("fontSize.7xl"),
          fontWeight: theme("fontWeight.black"),
        },
      });
    }),
    function ({ addComponents }) {},
  ],
};
