import React, { useState } from "react";
import Link from "next/link";
import { colorMapping } from "@/app/assets/colorMapping";

const Button = ({ link, bgColor, text, color }) => {
  console.log(bgColor, color);
  console.log(colorMapping[bgColor]);
  const [buttonStyle, setButtonStyle] = useState({
    color: `rgb(${colorMapping[color]})`,
    background: `rgb(${colorMapping[bgColor]})`,
    border: `1px solid rgb(${colorMapping[color]})`,
  });
  const buttonInitialStyle = {
    color: `rgb(${colorMapping[color]})`,
    background: `rgb(${colorMapping[bgColor]})`,
    border: `1px solid rgb(${colorMapping[color]})`,
  };

  const buttonHoverStyle = {
    color: `rgb(${colorMapping[bgColor]})`,
    background: `rgb(${colorMapping[color]})`,
    border: `1px solid rgb(${colorMapping[bgColor]})`,
  };
  return (
    <span
      className={`py-2 px-4 rounded-lg uppercase text-lg border-[1px]   `}
      style={buttonStyle}
      onMouseEnter={(e) => {
        setButtonStyle(buttonHoverStyle);
      }}
      onMouseLeave={() => {
        setButtonStyle(buttonInitialStyle);
      }}
    >
      {text}
    </span>
  );
};

export default Button;
