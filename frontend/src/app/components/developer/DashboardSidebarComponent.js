import React from "react";

const DashboardSidebarComponent = ({
  icon,
  item,
  activeItem,
  index,
  handleDashboardItem,
}) => {
  console.log(activeItem);
  console.log(index);
  return (
    <div
      className={`flex items-center gap-x-2  my-2 w-[90%] mx-auto rounded-md px-2 py-1 
        ${activeItem === index ? "bg-secondary" : "hover:bg-secondary/90"}
   
        cursor-pointer tracking-wide`}
      onClick={handleDashboardItem}
    >
      <span className="text-2xl">{icon}</span>
      <span>{item}</span>
    </div>
  );
};

export default DashboardSidebarComponent;
