/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      body: ["kalameh"],
      display: ["kalameh"],
    },

    extend: {
      colors: {
        btn: "rgb(37, 172, 158)",
        body: "#FBFBFB",
      },
    },
  },
  plugins: [],
};
