import React from "react";
import SectionHeading from "../introduction/SectionHeading";

const FeaturePlayers = () => {
  return (
    <div className="w-[90%] mx-auto text-center">
      <SectionHeading
        text={"Featured Players"}
        textColor={"primaryClr"}
        textShadowColor={"revTextColor"}
      />
    </div>
  );
};

export default FeaturePlayers;
