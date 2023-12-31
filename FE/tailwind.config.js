/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#475BE8",

        light: "#FCFCFC",
        textLight: "#11142D",
        textLight2nd: "#808191",
        divideLight: "#E4E4E4",
        backgroundLight: "#F4F4F4",

        dark: "#1A1D1F",
        textDark: "#EFEFEF",
        textDark2nd: "#6F767E",
        divideDark: "#272B30",
        backgroundDark: "#111315",
      },

      fontFamily: {
        EzLasso: ["Ez Lasso", "sans-serif"],
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      'nam': { 'max': '1000px' }
    }
  },
  plugins: [],
};
