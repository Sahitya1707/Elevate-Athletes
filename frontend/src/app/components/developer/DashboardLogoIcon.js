import React from "react";
import Image from "next/image";

const DashboardLogoIcon = ({ logo, text }) => {
  return (
    <div className="flex flex-col items-center">
      <Image src={logo} width={40} height={40} className="" alt="Logo" />
      <span className="mt-2 uppercase text-2xl tracking-wider ">{text}</span>
    </div>
  );
};

export default DashboardLogoIcon;
