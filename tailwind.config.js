/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#e5e7eb",

          "secondary": "#eeb644",

          "accent": "#37CDBE",

          "neutral": "#1b1b1c",

          "base-100": "#FFFFFF",

        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
