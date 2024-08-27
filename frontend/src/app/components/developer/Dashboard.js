import React, { useState } from "react";

import DashboardLogoIcon from "./DashboardLogoIcon";
import DashboardSidebarComponent from "./DashboardSidebarComponent";
import { FaUserAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi2";
import { MdOutlineManageAccounts } from "react-icons/md";

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [activeSubItem, setActiveSubItem] = useState(false);
  const dashboardData = [
    {
      icon: <MdDashboard />,
      componentName: "Dashboard",
      subItem: ["Item 1", "Item 2"],
    },
    {
      icon: <MdOutlineManageAccounts />,
      componentName: "CMS",
      subItem: ["Item 1", "Item 2"],
    },
    {
      icon: <HiOutlineUser />,
      componentName: "Users",
      subItem: [],
    },
    {
      icon: <IoAnalyticsSharp />,
      componentName: "Analytics",
      subItem: [],
    },
    {
      icon: <CiSettings />,
      componentName: "Settings",
      subItem: ["Setting 1", "Setting 2"],
    },
    {
      icon: <IoIosLogOut />,
      componentName: "Logout",
      subItem: [],
    },
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
        {dashboardData.map((e, i) => {
          return (
            <DashboardSidebarComponent
              // item={e}
              // icon={dashboardComponentIcon[i]}
              key={i}
              data={e}
              activeItem={activeItem}
              index={i}
              activeSubItem={activeSubItem}
              handleDashboardItem={() => {
                setActiveItem(i);
                setActiveSubItem(!activeSubItem);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
