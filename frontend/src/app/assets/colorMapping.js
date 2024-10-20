// Color mapping in this context refers to the process of linking specific color names (like "primary", "secondary", etc.) to their corresponding CSS variable values (like --color-primary, --color-secondary, etc.). This allows you to pass a simple string as a prop to your component and have it automatically use the correct CSS variable for styling.
export const colorMapping = {
  primary: "var(--color-primary)",
  secondary: "var(--color-secondary)",

  tertiary: "var(--color-tertiary)",
  textColor: "var(--text-color)",
  revTextColor: "var(--rev-text-color)",
  heroImageOverlay: "var(--hero-image-overlay)",
  heroTextShadow: "var(--hero-image-text-shadow)",
  colorFour: "var(--color-four)",
  colorFive: "var(--color-five)",
  colorSix: "var(--color-six)",
};
