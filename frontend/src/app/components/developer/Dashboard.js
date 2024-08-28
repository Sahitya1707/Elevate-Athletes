import React, { useState } from "react";

import DashboardLogoIcon from "./DashboardLogoIcon";
import DashboardSidebarComponent from "./DashboardSidebarComponent";
import { dashboardData } from "@/app/assets/dashboardData";

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [showSubItem, setShowSubItem] = useState(false);
  const [activeSubItem, setActiveSubItem] = useState(0);

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
              showSubItem={showSubItem}
              activeSubItem={activeSubItem}
              setActiveSubItem={setActiveSubItem}
              handleDashboardItem={() => {
                setActiveSubItem(null);
                setActiveItem(i);
                if (
                  dashboardData[i].subItem.length > 0 &&
                  showSubItem === true &&
                  activeItem === i
                ) {
                  setShowSubItem(false);
                  return;
                } else if (dashboardData[i].subItem.length > 0) {
                  setShowSubItem(true);
                } else {
                  setShowSubItem(!showSubItem);
                }
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
