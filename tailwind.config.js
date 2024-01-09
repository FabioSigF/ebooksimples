/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-10": "#ABA5C8",
        "primary-100": "#7F65FF",
        "primary-200": "#7661de",
        "secondary-100": "#BDB9C5",
        "black-50": "#292b30",
        "gray-300": "#DAD2D2",
        "gray-400": "#999999",
      },
      backgroundImage: () => ({
        "gradient-hero": "linear-gradient(0deg, #292B309E 17%, #292B30 80%)",
        "hero": "url('./src/images/herobg.jpeg')",
        "sobre": "url('./src/images/features_bg.png')",
      }),
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

