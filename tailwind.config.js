/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#7F65FF",
        "secondary-100": "#BDB9C5",
        "title-100": "#292b30",
        "text-100": "#DAD2D2",
        "text-300": "#999999",
      },
      fontFamily: {
        text: ["Lato", "sans-serif"],
        title: ["Inter", "sans-serif"]
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [],
}

