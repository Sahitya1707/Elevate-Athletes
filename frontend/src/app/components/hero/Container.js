"use client";
import React from "react";
import Image from "next/image";
import { colorMapping } from "@/app/assets/colorMapping";

const Container = () => {
  return (
    <div id="hero" className="relative h-[90vh] overflow-hidden ">
      <Image
        alt="./hero.png"
        src={"/hero.png"}
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <span className="absolute w-[100%] h-[100%] top-0 right-0 bg-heroImageOverlay/30"></span>
      <div className="absolute top-[40%] left-[10%] w-[60%] h-10">
        <p
          className="uppercase text-[3.5rem] text-revTextColor tracking-wider w-[70%]"
          style={{
            textShadow: `rgb(${colorMapping["heroTextShadow"]}) -4px 5px 3px`,
          }}
        >
          Empowering underrated talents
        </p>
      </div>
    </div>
  );
};

export default Container;

//    // textShadow: `rgb(${colorMapping["heroTextShadow"]}) -1px 3px 3px`,
