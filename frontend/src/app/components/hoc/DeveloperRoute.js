import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const DeveloperRoute = (ProtectedRoutes) => {
  return (props) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      console.log("useEffect has been called");
      const checkDeveloperAuth = async () => {
        try {
        } catch (err) {
        } finally {
        }
      };
    }, [router]);
    return <ProtectedRoutes {...props} />;
  };
};

export default DeveloperRoute;
