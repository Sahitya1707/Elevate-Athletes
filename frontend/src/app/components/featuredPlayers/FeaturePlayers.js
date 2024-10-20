import React from "react";
import SectionHeading from "../introduction/SectionHeading";
import CardsContainer from "./CardsContainer";
import Button from "../hero/Button";

const FeaturePlayers = () => {
  return (
    <div className=" mx-auto text-center pt-6 bg-colorSix">
      <SectionHeading
        text={"Featured Players"}
        textColor={"primaryClr"}
        textShadowColor={"primary"}
      />
      <CardsContainer />
      <div className="mt-4">
        <Button
          text="See More Players"
          link="/players"
          color="revTextColor"
          bgColor="colorSix"
        />
      </div>
    </div>
  );
};

export default FeaturePlayers;
