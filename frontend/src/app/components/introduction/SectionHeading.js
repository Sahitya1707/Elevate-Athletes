import React from "react";
import { colorMapping } from "@/app/assets/colorMapping";

const SectionHeading = ({ textColor, text, textShadowColor }) => {
  return (
    <div className="flex">
      <h2
        className="text-5xl uppercase tracking-wider relative after:content-[' '] after:h-[80%] after:w-[0.5rem] after:bg-[black] after:absolute after:top-1 after:right-[-1.5rem]"
        style={{
          color: `rgb(${colorMapping[textColor]})`,
          textShadow: `2px 2px 8px rgb(${colorMapping[textShadowColor]})  `,
        }}
      >
        {text}
      </h2>
    </div>
  );
};

export default SectionHeading;
