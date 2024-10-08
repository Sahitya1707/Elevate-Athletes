"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  backendConnection,
  developerConnectionString,
} from "@/app/utils/constant";
import { useDispatch } from "react-redux";
import {
  updateIconColor,
  updatePopupVisibility,
  updateText,
  updateWarningSign,
} from "@/app/utils/reduxSlices/popupSlice";
import { updateEmail } from "@/app/utils/reduxSlices/developerLoginData";

const developerRoute = (ProtectedRoutes) => {
  const AuthenticatedRoute = (props) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
      const checkDeveloperAuth = async () => {
        try {
          const authResponse = await fetch(
            `${backendConnection}${developerConnectionString}verify`,
            {
              method: "GET",
              credentials: "include",
            }
          );
          if (authResponse.ok) {
            // console.log("test is done");
            const data = await authResponse.json();

            dispatch(updateEmail(data.email));

            // need to set the email inside the global function so
            setIsAuthenticated(true);
          } else {
            dispatch(updatePopupVisibility(true));
            dispatch(updateWarningSign(true));
            dispatch(updateIconColor("red"));
            dispatch(updateText("Cannot logged you in"));
            router.push("/developer/api/login");
          }
        } catch (err) {
          console.log("err has been called");
          console.log(err);
        }
      };
      checkDeveloperAuth();
    }, [router, dispatch]);
    return <ProtectedRoutes {...props} />;
  };
  return AuthenticatedRoute;
};

export default developerRoute;
