import React from "react";
import Button from "../hero/Button";

const UpcomingEventCard = ({
  date,
  heading,
  organizer,
  description,
  eventLink,
  virtualLink,
}) => {
  return (
    <div className="shadow-md w-[25rem] p-4  text-left border-2 border-solid border-primary">
      <div className="flex gap-x-4 justify-between">
        <div className="w-[4rem] bg-primary h-[4rem] flex-col justify-center flex   text-revTextColor text-xl items-center shadow-lg uppercase">
          {/* Date will be seperated and use it according as per the need */}
          <span>02</span>
          <span>Oct</span>
        </div>
        <span className="text-2xl w-[18rem] h-[5.5rem] text-wrap overflow-hidden font-bold uppercase">
          {heading}
        </span>
      </div>
      <div className="border-t-2 border-b-2 border-solid border-tertiary py-4">
        <p className="text-xl font-semibold capitalize">
          Organizer: {organizer}
        </p>
        <p className="h-[7rem] overflow-hidden">{description}</p>
      </div>
      <div className="mt-4 flex gap-x-3">
        <Button
          link={eventLink}
          text={"Learn More"}
          bgColor={"tertiary"}
          color={"textColor"}
        />
        {/* After pressing booknow you will get the form popup and you should be available to book the events from there either virtually or in person. The virtual links props will be removed and whenever button is clicked popyp will be there. */}

        <Button
          link={""}
          text={"Book Now"}
          bgColor={"secondary"}
          color={"textColor"}
        />
        {/* look the above comments */}
      </div>
    </div>
  );
};

export default UpcomingEventCard;
