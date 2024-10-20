import React from "react";

import ImageSection from "./ImageSection";
import Content from "./Content";

const Introduction = () => {
  return (
    <div
      className="h-[100vh] w-[100%]  flex p-2 pt-20 bg-fixed gap-x-[10rem] items-center"
      style={{
        // backgroundImage: `url("./images/background.png")`,
        backgroundImage:
          "linear-gradient(135deg, rgb(127, 173, 210, 0.8) 0%, rgba(225, 224, 7, 0.5) 50%, rgba(70, 202, 70, 0.8) 100%)",
      }}
    >
      <ImageSection />
      <Content />
    </div>
  );
};

export default Introduction;
