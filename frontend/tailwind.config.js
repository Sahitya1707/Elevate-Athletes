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
      textColor: "rgb(var(--color-background)/<alpha-value> )",
      navText: "rgb(var(--nav-text-color)/<alpha-value> )",
    },
  },
  plugins: [],
};
