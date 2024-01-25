/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cody: ["Codystar", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        ash: {
          light: "#f1f3f5",
          medium: "#ced4da",
          dark: "#495057",
          deep: "#343a40",
        },
        theme: "#1098ad",
        accent: "#ffa94d",
      },
    },
    screens: {
      md: "700px",
    },
  },
  plugins: [],
};
