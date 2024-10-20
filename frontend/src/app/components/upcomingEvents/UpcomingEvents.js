import React from "react";
import SectionHeading from "../introduction/SectionHeading";
import UpcomingEventCard from "./UpcomingEventCard";

const UpcomingEvents = () => {
  const fakeLoop = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="h-screen text-center py-6 px-[8rem]">
      <SectionHeading
        text={"Upcoming Events"}
        textColor={"tertiary"}
        textShadowColor={"primary"}
      />
      <div className="mt-6 flex flex-wrap gap-y-16 gap-x-6 items-center justify-center">
        {fakeLoop.map((e, i) => {
          return (
            <UpcomingEventCard
              heading={"Traingin Camps / WorkShop"}
              organizer={"Harihar Academy"}
              description={
                "     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium   doloremque possimus consequatur labore inventore. Ipsum iste non esse culpa eaque dolorem et sequi distinctio cupiditate quod impedit,"
              }
              virtualLink={"/"}
              key={i}
              eventLink={"/"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UpcomingEvents;
