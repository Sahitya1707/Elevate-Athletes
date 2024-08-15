"use client";
import DeveloperRoute from "@/app/components/hoc/DeveloperRoute";
import {
  backendConnection,
  developerConnectionString,
} from "@/app/utils/constant";
import React, { useEffect, useState } from "react";

const page = () => {
  return <div>dasboard</div>;
};

export default DeveloperRoute(page);
