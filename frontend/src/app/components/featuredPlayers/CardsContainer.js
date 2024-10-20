import React from "react";
import PlayerCard from "./PlayerCard";

const CardsContainer = () => {
  const totalCard = [1, 2, 3, 4, 5, 7];
  const socialMediaLink = {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    x: "https://www.x.com/",
  };
  return (
    <div className="flex mt-4 gap-x-16 gap-y-6 flex-wrap justify-center">
      {totalCard.map((e, i) => {
        return (
          <PlayerCard
            playerName={"Messi"}
            position={"Left Winger"}
            country={"Nepal"}
            flagImg={"/images/player/flag.png"}
            playerImg={"/images/player/profile.jpeg"}
            topAchievement={"8 Balond'or"}
            sport={"Football"}
            team={"Barcelona"}
            winRecord={"100/100"}
            age={37}
            badge={"Wow"}
            socialMedia={socialMediaLink}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
