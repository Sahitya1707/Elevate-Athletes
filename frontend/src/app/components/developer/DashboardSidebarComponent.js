import React from "react";

const DashboardSidebarComponent = ({ icon, item, key }) => {
  return (
    <div
      className={`flex items-center gap-x-2  my-2 w-[90%] mx-auto rounded-md px-2 py-1 bg-secondary cursor-pointer tracking-wide`}
      key={key}
    >
      <span className="text-2xl">{icon}</span>
      <span>{item}</span>
    </div>
  );
};

export default DashboardSidebarComponent;
