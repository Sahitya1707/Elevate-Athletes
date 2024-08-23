import React from "react";

import ImageSection from "./ImageSection";

const Introduction = () => {
  return (
    <div className="h-[100vh] w-[100%] bg-primary flex p-2 pt-10 bg-fixed">
      <ImageSection />
      <div className="bg-[blue] w-[70%]"></div>
    </div>
  );
};

export default Introduction;
