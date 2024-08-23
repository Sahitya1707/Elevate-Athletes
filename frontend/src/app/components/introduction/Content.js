import React from "react";
import SectionHeading from "./SectionHeading";
import Button from "../hero/Button";
const SectionDescription = ({ text }) => {
  return <p className="my-6 text-xl">{text}</p>;
};

const Content = () => {
  return (
    <div className=" w-[70%]">
      <SectionHeading
        textColor={"textColor"}
        textShadowColor={"revTextColor"}
        text={"Empower Your Athletic Journey"}
      />
      <div className="w-[75%] ">
        <SectionDescription
          text="  ElevateAthletes is more than just a platform; it's a movement
          dedicated to shining a light on the incredible talent of athletes
          across the globe. Whether you're an up-and-coming star, a seasoned
          pro, or a coach looking to discover new talent, we provide the tools,
          resources, and community you need to take your journey to the next
          level."
        />
        <SectionDescription
          text="  We believe that every athlete deserves the chance to shine, and that's
          why we've created a space where you can connect with a community that
          shares your drive and determination. With tools tailored to help you
          track your progress, resources crafted to enhance your skills, and a
          network that opens doors to new opportunities, ElevateAthletes is your
          partner in achieving greatness."
        />
        <SectionDescription
          text=" Join us in this journey of empowerment. Together, we can elevate not
          only your athletic career but also the entire sports community."
        />
      </div>
      <Button
        text={"Learn More"}
        link="/"
        color="revTextColor"
        bgColor="tertiary"
      />
    </div>
  );
};

export default Content;
