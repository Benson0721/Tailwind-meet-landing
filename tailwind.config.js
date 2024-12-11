/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,css,scss}",
    "./src/scss/index.scss",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        "Cyan-600": "#4D96A9",
        "Cyan-300": "#8FE3F9",
        "Purple-600": "#855FB1",
        "Purple-300": "#D9B8FF",
        "Slate-900": "#28283D",
        "Slate-600": "#87879D",
        "Slate-300": "#D1D1DF",
        "Cyan-hover": "#71C0D4",
        "Purple-hover": "#B18BDD",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1440px",
      },
    },
  },

  plugins: [],
};
