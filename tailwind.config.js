// tailwind.config.js
const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Arial"],
      grotesk: ["Grotesk", "sans-serif"],
      "noto-arabic": ["Noto Sans Arabic", "sans-serif"],
    },
    colors: {
      green: "#17C964",
      "off-white": "#FFFFFF",
      blue: "#5DA7E5",
      "light-blue": "#EFF6FC",
      "primary-black": "#11181C",
      "primary-gray": "#3F3F46",
      "light-gray": "#A1A1AA",
      "light-green": "#E8FAF0",
      error: "#F31260",
      "light-red": "#FEE7EF",
      "dark-gray": "#71717A",
      violet: "#7828C8",
      "cool-blue": "#227FF1",
      "light-blue-transparent": "#227FF11A",
      "light-violet": "#9747FF1A",
      "secondary-gray": "#52525B",
      silver: "#F4F4F5",
      "gray-200": "#E4E4E4",
      "gray-100": "#F6F6F8",
      "pink-50": "#F2F2F7",
      orange: "#F16822",
      "light-orange": "#FEF0E9",
    },
    screens: {
      xxs: "375px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "900px",
      xl: "1024px",
      "2xl": "1280px",
      "3xl": "1440px",
      "4xl": "1536px",
    },
  },
  plugins: [
    heroui(),
  ],
};
