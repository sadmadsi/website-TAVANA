/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: 'true',
      padding: '1rem'
    },
    extend:{
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        animation: {
          fadeIn: 'fadeIn 1s ease-in-out 1',
        }
      }
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
      navy: '#6CC7C1',
      milk: '#EAEAEA',
      mustard: '#EDCA44',
      jolbaki: '#9FB54A',
      primarytavana:'#8a4f9e',
      secondaryTavana:'#f4bd30',
      tertiaryTavana:'#B84E4E'
    }),
  },
  plugins: [
    require("daisyui"),
    require("flowbite/plugin"),
    plugin(function ({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.6xl'), fontWeight: theme('fontWeight.black') },
        'h2': { fontSize: theme('fontSize.2xl'), fontWeight: theme('fontWeight.semibold') },
        'h3': { fontSize: theme('fontSize.7xl'), fontWeight: theme('fontWeight.black') },
      })
    }),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            padding: '80px',
            maxWidth: '100%',
          }
        }
      })
    }
  ]
}