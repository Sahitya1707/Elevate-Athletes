import Image from "next/image";
import React from "react";
import { MdOutlineLightMode } from "react-icons/md";
import IconNav from "./IconNav";
import { CiSearch } from "react-icons/ci";
import { NavButton } from "./NavButton";
const Header = () => {
  return (
    <nav className="flex justify-between h-[4rem] bg-primary text-textColor items-center px-6  tracking-widest gap-x-5 uppercase text-xl">
      <div className="flex items-center gap-x-5">
        <Image
          src="/logo.png
        "
          width={20}
          height={20}
        />
        <span className="">Elevate Athletes</span>
      </div>
      <ul className="flex items-center gap-x-6">
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
        <li>
          <button className="bg-secondary py-2 px-4 rounded-lg">Sign up</button>
        </li>
        <li>
          <NavButton color="tertiary" text={"Login"} />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
