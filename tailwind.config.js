/** Theme tokens live in app/globals.css (CSS variables). Change the palette there. */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./lib/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: token("paper"),
        ink: token("ink"),
        primary: { DEFAULT: token("primary"), dark: token("primary-dark") },
        secondary: { DEFAULT: token("secondary"), deep: token("secondary-deep") },
        accent: { DEFAULT: token("accent"), deep: token("accent-deep") },
      },
      fontFamily: {
        display: ['"Fraunces Variable"', "Georgia", "serif"],
        sans: ['"Figtree Variable"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: { eyebrow: "0.18em" },
    },
  },
  plugins: [],
};
