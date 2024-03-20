/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgcol: "#221C2B",
        textcol: "#FBF4DA",
      },
    },
  },
  plugins: [],
};
