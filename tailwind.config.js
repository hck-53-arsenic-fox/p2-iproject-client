/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    clipPath: {
      inset10: "inset(0, 0, 0, 50%)",
    },
    extend: {},
  },
  plugins: [require("tailwind-clip-path")],
};
