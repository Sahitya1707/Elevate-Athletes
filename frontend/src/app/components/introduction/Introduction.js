import React from "react";

import ImageSection from "./ImageSection";
import Content from "./Content";

const Introduction = () => {
  return (
    <div className="h-[100vh] w-[100%] bg-primary flex p-2 pt-20 bg-fixed gap-x-[10rem]">
      <ImageSection />
      <Content />
    </div>
  );
};

export default Introduction;
