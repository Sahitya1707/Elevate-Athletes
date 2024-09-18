/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
    },
    colors: {
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      secondary: "rgb(var(--color-secondary) / <alpha-value> )",
      textColor: "rgb(var(--text-color) / <alpha-value> )",
      tertiary: "rgb(var(--color-tertiary)/<alpha-value> )",
      colorFour: "rgb(var(--color-four)/<alpha-value>)",
      revTextColor: "rgb(var(--rev-text-color)/<alpha-value> )",
      heroImageOverlay: "rgb(var(--hero-image-overlay)/<alpha-value> )",
      heroTextShadow: "rgb(var(--hero-image-text-shadow)/<alpha-value> )",
    },
  },
  plugins: [],
};
