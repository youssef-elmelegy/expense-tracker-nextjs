/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // include all pages
    "./components/**/*.{js,ts,jsx,tsx}", // include all components
  ],
  theme: {
    extend: {
      colors: {
        bluee: {
          50: "#eefff1",
          100: "#d7ffe1",
          200: "#b2ffc6",
          300: "#76ff9a",
          400: "#475ca8", //
          500: "#09de43",
          600: "#00a82e",
          700: "#04912c",
          800: "#2a3764", //
          900: "#0a5d23",
          950: "#003410",
        },
        light: "rgba(233,242,255,1)",
        blue: "rgba(164,193,242,1)",

        darkBlue: "rgba(24,31,75,1)",
      },
    },
  },
  plugins: [],
};
