import React from "react";

const DashboardItemComponent = ({ icon, number, text }) => {
  return (
    <div className="w-[15rem] h-[10rem] border-solid p-2 rounded-xl text-center bg-revTextColor shadow-xl flex flex-col justify-center">
      <span className="flex justify-center text-4xl text-tertiary">{icon}</span>
      <div>
        <p className="text-xl">{number}</p>
        <h4 className="uppercase text-2xl mt-4">{text}</h4>
      </div>
    </div>
  );
};

export default DashboardItemComponent;
