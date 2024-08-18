import React, { useState } from "react";

import { MdDashboard } from "react-icons/md";
import DashboardLogoIcon from "./DashboardLogoIcon";

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div
      className="bg-primary w-[17rem] h-[100vh] py-5 px-3 border-textColor drop-shadow-3xl text-2xl"
      style={{
        boxShadow: "#0000007d 4px 0px 15px",
      }}
    >
      <DashboardLogoIcon logo="/logo.png" text={"Elevate Athletes"} />
      <div className="mx-auto my-4">
        <div
          className={`flex items-center gap-x-2  my-2 w-[90%] mx-auto rounded-md px-2 py-1 bg-secondary cursor-pointer tracking-wide`}
        >
          <span className="text-3xl">
            <MdDashboard />
          </span>
          <span>Dashboard</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
