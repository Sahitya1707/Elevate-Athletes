import React from "react";
import Button from "../hero/Button";

const UpcomingEventCard = () => {
  return (
    <div className="shadow-xl w-[25rem] p-4  text-left">
      <div className="flex gap-x-4 justify-between">
        <div className="w-[4rem] bg-primary h-[4rem] flex-col justify-center flex   text-revTextColor text-xl items-center shadow-xl uppercase">
          <span>02</span>
          <span>Oct</span>
        </div>
        <span className="text-2xl w-[18rem] h-[5.5rem] text-wrap overflow-hidden font-bold uppercase">
          Training Camps/ Wokshops sfdafadfadsf
        </span>
      </div>
      <div className="border-t-2 border-b-2 border-solid border-tertiary py-4">
        <p className="text-xl font-semibold">Organizer: HariHar Academy</p>
        <p className="h-[7rem] overflow-hidden">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
          doloremque possimus consequatur labore inventore. Ipsum iste non esse
          culpa eaque dolorem et sequi distinctio cupiditate quod impedit,
        </p>
      </div>
      <div className="mt-4 flex gap-x-3">
        <Button
          link={" "}
          text={"Learn More"}
          bgColor={"tertiary"}
          color={"textColor"}
        />
        <Button
          link={""}
          text={"Book Now"}
          bgColor={"secondary"}
          color={"textColor"}
        />
      </div>
    </div>
  );
};

export default UpcomingEventCard;
