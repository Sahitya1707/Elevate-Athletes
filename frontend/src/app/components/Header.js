import Image from "next/image";
import React from "react";
import { MdOutlineLightMode } from "react-icons/md";
import IconNav from "./IconNav";
import { CiSearch } from "react-icons/ci";
const Header = () => {
  return (
    <nav className="flex justify-between h-[4rem] bg-primary text-navText items-center px-4  tracking-widest gap-x-5 uppercase text-xl">
      <div className="flex items-center gap-x-5">
        <Image
          src="/logo.png
        "
          width={20}
          height={20}
        />
        <span className="">Elevate Athletes</span>
      </div>
      <ul className="flex items-center gap-x-5">
        <li>Home</li>
        <li>Athletes</li>
        <li>Events</li>
        <li>Resources</li>
        <li>About</li>
        <li>Contact</li>
        <li>
          <IconNav icon={<MdOutlineLightMode />} />
        </li>
        <li>
          <IconNav icon={<CiSearch />} />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
