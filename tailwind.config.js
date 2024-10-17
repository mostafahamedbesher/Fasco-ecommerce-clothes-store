/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        ternary: "var(--color-ternary)",
        "primary-2": "var(--color-primary-2)",
        "secondary-gray-0": "var(--color-secondary-gray-0)",
      },
      screens: {
        "max-xl": { max: "1279px" }, // equivalent to max-width: 1279px
        "max-lg": { max: "1073px" }, // equivalent to max-width: 1023px
        "max-md": { max: "767px" }, // equivalent to max-width: 767px
        "max-sm": { max: "641px" }, // equivalent to max-width: 639px
        "max-sm-l": { max: "425px" }, // equivalent to max-width: 425px
      },
      textStrokeWidth: {
        1: "1px",
      },
      textStrokeColor: (theme) => ({
        secondary: theme("colors.secondary"),
        primary: theme("colors.primary"),
      }),
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-stroke-1": {
          "-webkit-text-stroke-width": "1px",
        },
        ".text-stroke-secondary": {
          "-webkit-text-stroke-color": "#484848",
        },
        ".text-stroke-primary": {
          "-webkit-text-stroke-color": "#fefefe",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
