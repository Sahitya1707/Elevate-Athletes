import React from "react";
import { FaUser } from "react-icons/fa";
import InfoBanner from "./InfoBanner";
import { useSelector, useDispatch } from "react-redux";
import { updateClosePopup } from "@/app/utils/reduxSlices/developerLoginData";
const LogInfo = () => {
  const closePopup = useSelector((store) => {
    return store.developerLoginData.closePopup;
  });
  const dispatch = useDispatch();
  return (
    <>
      <div className=" fixed  top-4 right-8   ">
        <p
          className=" border-2  border-solid border-[black]    cursor-pointer p-2 rounded-full hover:bg-primary hover:duration-100 hover:ease-in text-xl"
          onClick={() => {
            dispatch(updateClosePopup(false));
          }}
        >
          <FaUser />
        </p>
      </div>

      {closePopup ? <></> : <InfoBanner />}
    </>
  );
};

export default LogInfo;
