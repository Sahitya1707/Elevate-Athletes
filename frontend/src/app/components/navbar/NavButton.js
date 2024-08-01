import { colorMapping } from "../../assets/colorMapping";

export const NavButton = ({ text, color }) => {
  const buttonStyle = {
    backgroundColor: `rgb(${colorMapping[color]})`,
  };

  return (
    <button
      className="py-2 px-4 rounded-lg uppercase cursor-pointer"
      style={buttonStyle}
    >
      {text}
    </button>
  );
};
