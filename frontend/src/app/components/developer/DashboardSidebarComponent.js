import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

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
    <>
      <div
        className={`flex items-center gap-x-2  my-2 w-[90%] mx-auto rounded-md px-2 py-1 justify-between
        ${activeItem === index ? "bg-secondary" : "hover:bg-secondary/90"}

        cursor-pointer tracking-wide `}
        onClick={handleDashboardItem}
      >
        <div className="flex gap-x-2 items-center">
          <span className="text-2xl">{icon}</span>
          <span>{item}</span>
        </div>
        <span>
          <MdOutlineKeyboardArrowDown />
        </span>
      </div>
      <div className={`ml-[3rem] w-[80%]`}>
        <p className="border-b-[0.1px] border-solid border-textColor w-[100%]  py-1 cursor-pointer text-[1.2rem]">
          Left
        </p>
        <p className="border-b-[0.1px] border-solid border-textColor w-[100%]  py-1 cursor-pointer text-[1.2rem]">
          Left
        </p>
      </div>
    </>
  );
};

export default DashboardSidebarComponent;
