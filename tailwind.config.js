/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      body: ["yekan"],
      display: ["yekan"],
    },

    extend: {
      colors: {
        btn: "rgb(37, 172, 158)",
        body: "#FBFBFB",
        color: "rgb(76, 94, 96)",
      },
    },
  },
  plugins: [],
};
