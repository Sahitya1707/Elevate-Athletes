import React from "react";
import SectionHeading from "../introduction/SectionHeading";
import CardsContainer from "./CardsContainer";

const FeaturePlayers = () => {
  return (
    <div className="w-[90%] mx-auto text-center pt-6">
      <SectionHeading
        text={"Featured Players"}
        textColor={"primaryClr"}
        textShadowColor={"primary"}
      />
      <CardsContainer />
    </div>
  );
};

export default FeaturePlayers;
