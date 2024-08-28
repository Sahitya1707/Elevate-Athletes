import React from "react";
import { FaUser } from "react-icons/fa";
import InfoBanner from "./InfoBanner";
const LogInfo = () => {
  return (
    <>
      <div className=" fixed  top-4 right-8   ">
        <p className=" border-2  border-solid border-[black]    cursor-pointer p-2 rounded-full hover:bg-primary hover:duration-100 hover:ease-in text-xl">
          <FaUser />
        </p>
      </div>
      <InfoBanner />
    </>
  );
};

export default LogInfo;
