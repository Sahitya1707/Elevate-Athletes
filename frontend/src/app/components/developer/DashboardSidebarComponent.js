import React, { useState } from "react";
import Link from "next/link";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
const DashboardSubItem = ({
  text,
  handleActiveSubItem,
  index,
  activeSubItem,
}) => {
  // console.log("Below is index for subitem");
  // console.log(index);
  // console.log(activeSubItem);
  return (
    <p
      className={`border-b-[0.1px]  border-solid border-textColor w-[100%]  py-1 cursor-pointer text-[1.2rem] hover:bg-tertiary/80  px-2 ${
        activeSubItem === index ? "bg-tertiary" : null
      }`}
      onClick={handleActiveSubItem}
    >
      {text}
    </p>
  );
};

const DashboardSidebarComponent = ({
  activeItem,
  index,
  handleDashboardItem,
  showSubItem,
  data,
  activeSubItem,
  setActiveSubItem,
}) => {
  console.log(data);
  const { subItem, icon, componentName, link } = data;

  return (
    <Link href={`${link ? `/developer/api${link}` : ""}`} value="sahity">
      <div
        className={`flex items-center gap-x-2  my-2 w-[90%] mx-auto rounded-md px-2 py-1 justify-between
        ${
          activeItem === index ? "bg-secondary" : "hover:bg-secondary/90"
        } cursor-pointer tracking-wide `}
        onClick={handleDashboardItem}
      >
        <div className="flex gap-x-2 items-center">
          <span className="text-2xl">{icon}</span>
          <span>{componentName}</span>
        </div>

        {subItem.length === 0 ? null : (
          <span>
            {activeItem === index && showSubItem === true ? (
              <MdOutlineKeyboardArrowUp />
            ) : (
              <MdOutlineKeyboardArrowDown />
            )}
          </span>
        )}
      </div>
      <div
        className={`ml-[3rem] w-[80%]  overflow-hidden ${
          activeItem === index && showSubItem === true
            ? "h-auto ease-out duration-200 transition-all"
            : "h-0 duration-100 ease-in transition-all"
        } `}
      >
        {subItem.length === 0 ? (
          <></>
        ) : (
          subItem.map((e, i) => {
            return (
              <DashboardSubItem
                text={e}
                key={i}
                index={i}
                activeSubItem={activeSubItem}
                handleActiveSubItem={() => {
                  setActiveSubItem(i);
                }}
              />
            );
          })
        )}
      </div>
    </Link>
  );
};

export default DashboardSidebarComponent;
