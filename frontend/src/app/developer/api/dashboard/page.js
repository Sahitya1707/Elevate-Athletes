"use client";

import Dashboard from "@/app/components/developer/Dashboard";
import DashboardItemComponent from "@/app/components/developer/DashboardItemComponent";
// import React from "react";
import developerRoute from "@/app/components/hoc/developerRoute";
import { FaUserAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";

const Page = () => {
  return (
    <>
      <div className="flex gap-x-4">
        <DashboardItemComponent
          icon={<FaUserAlt />}
          number={24}
          text={"activeUser"}
        />
        <DashboardItemComponent
          icon={<FaUserPlus />}
          number={24}
          text={"New Users"}
        />
      </div>
    </>
  );
};

export default developerRoute(Page);
