import React, { useEffect } from "react";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { updatePopupVisibility } from "../utils/reduxSlices/popupSlice";
const Popup = ({ popUpIcon, popupText, iconColor }) => {
  const popupState = useSelector((store) => {
    return store.popupState;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (popupState.visibility === true) {
      setTimeout(() => {
        dispatch(updatePopupVisibility(false));
      }, 2000);
    }
  }, [popupState.visibility]);
  return (
    <>
      {popupState.visibility ? (
        <div className="absolute right-2 top-2 flex bg-[white] px-3 py-2 text-2xl items-center gap-x-2">
          <span
            className="p-1 rounded-full font-semibold"
            style={{
              color: `${popupState.iconColor}`,
              border: `2px solid ${popupState.iconColor}`,
            }}
          >
            {popupState.warningSign ? <TiTick /> : <RxCross2 />}
          </span>
          <span>{popupState.text}</span>
        </div>
      ) : null}
    </>
  );
};

export default Popup;
