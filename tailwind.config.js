/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        inherit: colors.inherit,
        current: colors.current,
        transparent: colors.transparent,
        black: {
          dark: colors.black,
          medium: "#100024",
        },
        white: colors.white,
        orange: {
          primary: "#E08A1E", 
        },
        red: {
          error: "red",
        },
        purple: {
          primary: "#3E266B",
          standard: "#421973",
          dark: "#100024",
          sm: "#9D76AE",
          medium: "#613497",
          normal: "#4A148C",
          base: "#724AA3",
          light: "#6A5590",
        },
        gray: {
          primary: "#3E266B",
          dark: "#292B2C",
          medium: "#1D1B44",
          base: "#4A4A4A",
          normal: "#444343",
          light: "#878787",
          lightmedium: "#aaa5b1",
          extralight: "#E5E9F2",
          dashboard: "#F8F8F8",
          extralight2: "#EAEAEA",
          footer: "#A1A1A1",
          inputBorder: "#C1BBC9",
        },
        green: {
          normal: "#20b205",
        },
        aqua: {
          normal: "#0089FF",
        },
        brown: {
          extralight: "#ECE2E2",
          light: "#545445",
        },
        card: {
          aqua: {
            light: "#0AACCC",
            dark: "#6582FB",
          },
          purple: {
            light: "#901CCC",
            dark: "#710BF8",
          },
          green: {
            light: "#12D188",
            dark: "#059C7B",
          },
          yellow: {
            light: "#F9B10F",
            dark: "#F7701B",
          },
          red: {
            light: "#ED7A44",
            dark: "#CE2A1F",
          },
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
