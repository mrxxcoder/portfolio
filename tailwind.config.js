/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primaryColor: "#8873ef",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
