import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { IoIosLogOut } from "react-icons/io";
const InfoBanner = () => {
  const dispatch = useDispatch();
  const loginUsername = useSelector((store) => {
    return store.developerLoginData.email;
  });
  return (
    <div className="absolute top-16 right-10 bg-primary p-2 rounded-lg">
      <div className="flex justify-end">
        <span className=" cursor-pointer my-1">
          <RxCross2 />
        </span>
      </div>
      <span>{loginUsername}</span>
      <div className="flex items-center gap-x-2 mt-2 cursor-pointer p-1 hover:bg-secondary hover:duration-75 hover:ease-linear rounded-md">
        <span className="text-2xl">
          <IoIosLogOut />
        </span>
        <span>Logout</span>
      </div>
    </div>
  );
};

export default InfoBanner;
