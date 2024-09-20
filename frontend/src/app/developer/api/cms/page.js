"use client";

import React from "react";
import { RiPagesLine } from "react-icons/ri";
import { BsSignpost2Fill } from "react-icons/bs";
import CMSComponent from "@/app/components/developer/CMSComponent";
import { BsMenuButtonWideFill } from "react-icons/bs";

const Page = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <CMSComponent
        link={"pages"}
        text={"pages"}
        icon={<RiPagesLine />}
        bgColor={"secondary"}
        color="textColor"
      />
      <CMSComponent
        link={"posts"}
        text={"posts"}
        icon={<BsSignpost2Fill />}
        bgColor={"colorFour"}
        color="textColor"
      />
      <CMSComponent
        link={"menus"}
        text={"menus"}
        icon={<BsMenuButtonWideFill />}
        bgColor={"tertiary"}
        color="textColor"
      />
    </div>
  );
};

export default Page;
