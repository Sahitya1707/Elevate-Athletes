import React from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
const DashboardSubItem = ({ text }) => {
  return (
    <p className="border-b-[0.1px]  border-solid border-textColor w-[100%]  py-1 cursor-pointer text-[1.2rem]">
      {text}
    </p>
  );
};

const DashboardSidebarComponent = ({
  item,
  activeItem,
  index,
  handleDashboardItem,
  activeSubItem,
  data,
}) => {
  console.log(data);
  const { subItem, icon, componentName } = data;
  console.log(subItem);
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
          <span>{componentName}</span>
        </div>

        {subItem.length === 0 ? null : (
          <span>
            {activeItem === index && activeSubItem === true ? (
              <MdOutlineKeyboardArrowUp />
            ) : (
              <MdOutlineKeyboardArrowDown />
            )}
          </span>
        )}
      </div>
      <div
        className={`ml-[3rem] w-[80%]  overflow-hidden ${
          activeItem === index && activeSubItem === true
            ? "h-auto ease-out duration-200"
            : "h-0 duration-100 ease-in"
        } `}
      >
        {subItem.length === 0
          ? null
          : subItem.map((e) => {
              return <DashboardSubItem text={e} />;
            })}
      </div>
    </>
  );
};

export default DashboardSidebarComponent;
