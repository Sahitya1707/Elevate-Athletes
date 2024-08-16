import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  backendConnection,
  developerConnectionString,
} from "@/app/utils/constant";

const DeveloperRoute = (ProtectedRoutes) => {
  return (props) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      console.log("useEffect has been called");
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
            console.log("test is done");
            const data = await authResponse.json();
            console.log(data);
          }
        } catch (err) {
          console.log("err has been called");
          console.log(err);
          router("developer/api/login");
        }
      };
      checkDeveloperAuth();
    }, [router]);
    return (
      <>
        <ProtectedRoutes {...props} />
      </>
    );
  };
};

export default DeveloperRoute;
