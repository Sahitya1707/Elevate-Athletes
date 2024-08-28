import React from "react";
import { useSelector, useDispatch } from "react-redux";

const InfoBanner = () => {
  const dispatch = useDispatch();
  const loginUsername = useSelector((store) => {
    console.log(store);
  });
  return (
    <div className="absolute top-16 right-10 bg-primary p-2 rounded-lg">
      <span>neupanesahitya1@gmail.com</span>
    </div>
  );
};

export default InfoBanner;
