import React from "react";

import { GrLinkNext } from "react-icons/gr";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { colorMapping } from "@/app/assets/colorMapping";
const CMSComponent = ({ link, text, icon, bgColor, color }) => {
  const router = usePathname();
  console.log(router);
  return (
    <Link href={`${router}/${link}`}>
      <div
        className="border-2 border-solid border-black p-4 rounded-md w-[80%]  shadow-lg h-[10rem] hover:-translate-y-[2px] hover:duration-75 hover:ease-in duration-75"
        style={{
          backgroundColor: `rgb(${colorMapping[bgColor]})`,
          color: `rgb(${colorMapping[color]})`,
        }}
      >
        <span className="text-4xl ">{icon}</span>
        <p className="text-3xl font-semibold tracking-wide capitalize mt-2">
          {text}
        </p>
        <div className="mt-2 flex gap-x-2   items-center">
          <p className="text-lg capitalize">Click Here to edit</p>
          <span className=" text-sm ">
            <GrLinkNext />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CMSComponent;
