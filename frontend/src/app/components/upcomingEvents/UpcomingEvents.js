import React from "react";
import SectionHeading from "../introduction/SectionHeading";

const UpcomingEvents = () => {
  return (
    <div className="h-screen text-center py-6">
      <SectionHeading
        text={"Upcoming Events"}
        textColor={"tertiary"}
        textShadowColor={"primary"}
      />
    </div>
  );
};

export default UpcomingEvents;
