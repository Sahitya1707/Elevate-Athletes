import React from "react";
import Image from "next/image";
const ImageSection = () => {
  return (
    <div className=" w-[30%] h-[80%] relative flex justify-center gap-x-10">
      <div className=" justify-center  gap-y-4 flex flex-col  relative">
        <Image
          src="/images/joystick.png"
          width={50}
          height={200}
          alt="img"
          className="mt-7 ml-16"
        />
        <Image
          src="/images/basketball.png"
          width={70}
          height={200}
          alt="img"
          className="my-4 ml-10"
        />
        <Image
          src="/images/volleyball.png"
          width={120}
          height={200}
          alt="img"
          className="my-4"
        />
      </div>
      <div className="  w-[10rem]  flex flex-col gap-y-4 justify-center">
        <Image
          src="/images/tennis.png"
          width={70}
          height={200}
          alt="img"
          className="my-4 ml-4"
        />
        <Image
          src="/images/football.png"
          width={170}
          height={200}
          alt="img"
          className="my-4 ml-20"
        />
        <Image
          src="/images/cricket.png"
          width={170}
          height={200}
          alt="img"
          className="my-4 ml-4"
        />
      </div>
    </div>
  );
};

export default ImageSection;
