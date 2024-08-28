import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { IoIosLogOut } from "react-icons/io";
import { updateClosePopup } from "@/app/utils/reduxSlices/developerLoginData";
const InfoBanner = () => {
  const dispatch = useDispatch();
  const loginUsername = useSelector((store) => {
    return store.developerLoginData.email;
  });
  const closePopup = useSelector((store) => {
    return store.developerLoginData.closePopup;
  });
  console.log(closePopup);
  return (
    <>
      <div className="absolute top-16 right-10 bg-primary p-2 rounded-lg text-xl z-[5001]">
        <div className="flex justify-end">
          <span
            className=" cursor-pointer my-1"
            onClick={() => {
              dispatch(updateClosePopup(true));
            }}
          >
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
      <span
        className="w-[100vw] h-[100vh] bg-textColor/10 top-0 right-0 absolute z-[5000]"
        onClick={() => {
          dispatch(updateClosePopup(true));
        }}
      ></span>
    </>
  );
};

export default InfoBanner;
