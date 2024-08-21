import React from "react";
import Link from "next/link";
import { colorMapping } from "@/app/assets/colorMapping";

const Button = ({ link, bgColor, text, color }) => {
  return (
    <Link href={link}>
      <button
        className="py-2 px-4 rounded-lg uppercase text-lg"
        style={{
          color: `rgb(${colorMapping[color]})`,
          background: `rgb(${colorMapping[bgColor]})`,
          border: `1px solid rgb(${colorMapping[color]})`,
        }}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
