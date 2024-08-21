"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
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
        <span className="absolute w-[100%] h-[100%] top-0 right-0 bg-heroImageOverlay/30">
          sahitya
        </span>
      </div>
    </main>
  );
}
