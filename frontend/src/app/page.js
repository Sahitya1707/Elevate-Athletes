"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div id="hero" className="relative h-[90vh] overflow-hidden ">
        <Image src={"/hero.png"} alt="hero image" layout="fill" className="" />
      </div>
    </main>
  );
}
