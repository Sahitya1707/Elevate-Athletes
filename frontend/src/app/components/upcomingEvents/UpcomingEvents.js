import React from "react";
import SectionHeading from "../introduction/SectionHeading";
import UpcomingEventCard from "./UpcomingEventCard";

const UpcomingEvents = () => {
  return (
    <div className="h-screen text-center py-6 px-[8rem]">
      <SectionHeading
        text={"Upcoming Events"}
        textColor={"tertiary"}
        textShadowColor={"primary"}
      />
      <div className="mt-6">
        <UpcomingEventCard />
      </div>
    </div>
  );
};

export default UpcomingEvents;
