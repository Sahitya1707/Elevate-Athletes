import React, { useState } from "react";

import DashboardLogoIcon from "./DashboardLogoIcon";
import DashboardSidebarComponent from "./DashboardSidebarComponent";
import { FaUserAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi2";

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState(0);
  const dashboardComponentIcon = [
    <MdDashboard />,
    <HiOutlineUser />,
    <IoAnalyticsSharp />,
    <CiSettings />,
    <IoIosLogOut />,
  ];
  const dashboardComponent = [
    "Dashboard",
    "Users",
    "Analytics",
    "Settings",
    "Logout",
  ];

  return (
    <div
      className="bg-primary w-[17rem] h-[100vh] py-5 px-3 border-textColor drop-shadow-3xl text-2xl"
      style={{
        boxShadow: "#0000007d 4px 0px 15px",
      }}
    >
      <DashboardLogoIcon logo="/logo.png" text={"Elevate Athletes"} />
      <div className="mx-auto my-4">
        {dashboardComponent.map((e, i) => {
          return (
            <DashboardSidebarComponent
              item={e}
              icon={dashboardComponentIcon[i]}
              key={i}
              activeItem={activeItem}
              index={i}
              handleDashboardItem={() => {
                setActiveItem(i);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
