import React from "react";
import SectionHeading from "../introduction/SectionHeading";
import CardsContainer from "./CardsContainer";
import Button from "../hero/Button";

const FeaturePlayers = () => {
  return (
    <div
      className=" mx-auto text-center py-4 bg-fixed bg-primary min-h-screen"
      style={
        {
          // backgroundImage:
          //   "linear-gradient(135deg, rgb(127, 173, 210, 0.8) 0%, rgba(225, 224, 7, 0.5) 50%, rgba(70, 202, 70, 0.8) 100%)",
        }
      }
    >
      <SectionHeading
        text={"Featured Players"}
        textColor={"primaryClr"}
        textShadowColor={"primary"}
      />
      <CardsContainer />
      <div className="mt-4">
        <Button
          text="Explore More Players"
          link="/players"
          color="revTextColor"
          bgColor="colorSix"
        />
      </div>
    </div>
  );
};

export default FeaturePlayers;
