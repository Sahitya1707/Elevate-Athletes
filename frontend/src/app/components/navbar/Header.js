"use client";
import Image from "next/image";
import React from "react";
import { MdOutlineLightMode } from "react-icons/md";
import IconNav from "./IconNav";
import { CiSearch } from "react-icons/ci";
import { NavButton } from "./NavButton";
import { NavList } from "./NavList";
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
  const navState = useSelector((store) => {
    console.log(store);
  });
  const navList = [
    "Home",
    "Athletes",
    "Events",
    "Resources",
    "About",
    "Contact",
  ];
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
        {navList &&
          navList.map((e, i) => {
            return <NavList text={e} key={i} />;
          })}

        <IconNav icon={<MdOutlineLightMode />} />

        <IconNav icon={<CiSearch />} />

        <NavButton color="secondary" text={"Sign Up"} />

        <NavButton color="tertiary" text={"Log in"} />
      </ul>
    </nav>
  );
};

export default Header;
