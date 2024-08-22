"use client";
import React from "react";
import Image from "next/image";
import { colorMapping } from "@/app/assets/colorMapping";
import { NavButton } from "../navbar/NavButton";
import Button from "./Button";

const Container = () => {
  return (
    <div
      id="hero"
      className="relative h-[90vh] overflow-hidden bg-fixed bg-no-repeat"
      style={{
        backgroundImage: `url("./hero.png")`,
      }}
    >
      <span className="absolute w-[100%] h-[100%] top-0 right-0 bg-heroImageOverlay/10 z-[1990]"></span>
      <div className="absolute top-[40%] left-[10%] w-[60%] h-10 z-[2000]">
        <p
          className="uppercase text-[3.5rem] text-revTextColor tracking-wider w-[70%] leading-[3rem] hover:bg-black"
          style={{
            textShadow: `rgb(${colorMapping["heroTextShadow"]}) -4px 5px 3px`,
          }}
        >
          Empowering underrated talents
        </p>
        <div className="flex gap-x-4 items-center mt-4">
          <Button
            text={"join now"}
            link={"/"}
            color={"revTextColor"}
            bgColor={"primary"}
          />
          <Button
            text={"Discover Athletes"}
            link={"/"}
            color={"revTextColor"}
            bgColor={"tertiary"}
          />
        </div>
      </div>
    </div>
  );
};

export default Container;

//    // textShadow: `rgb(${colorMapping["heroTextShadow"]}) -1px 3px 3px`,
