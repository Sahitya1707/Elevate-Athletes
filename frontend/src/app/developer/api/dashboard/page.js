"use client";

import Dashboard from "@/app/components/developer/Dashboard";
import DashboardItemComponent from "@/app/components/developer/DashboardItemComponent";
// import React from "react";
import developerRoute from "@/app/components/hoc/DeveloperRoute";
import { FaUserAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { MdArticle, MdOutlinePostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateDashboardHeading } from "@/app/utils/reduxSlices/developerLoginData";

const Page = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateDashboardHeading("dashboard"));
  }, []);
  return (
    <>
      <div className="flex justify-evenly w-full">
        <DashboardItemComponent
          icon={<FaUserAlt />}
          number={24}
          text={"activeUser"}
        />
        <DashboardItemComponent
          icon={<FaUserPlus />}
          number={24}
          text={"New Users"}
        />
        <DashboardItemComponent icon={<MdArticle />} number={3} text={"Post"} />
        <DashboardItemComponent
          icon={<MdArticle />}
          number={0}
          text={"Add New Post"}
          link="/"
        />
      </div>
    </>
  );
};

export default developerRoute(Page);
