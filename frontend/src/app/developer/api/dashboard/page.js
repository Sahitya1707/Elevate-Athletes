import React, { useEffect, useState } from "react";

const page = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const checkDeveloperAuth = async () => {
      try {
        const response = await fetch(
          `${backendConnection}${developerConnectionString}developerAuth`,
          {
            method: "POST",
            credentials: "include",
          }
        );
        if (response.ok) {
          // set auth
        } else {
          // set router
        }
      } catch (err) {
        console.log(err);
        // router.push
      } finally {
        //
      }
    };
  }, []);
  return <div>dasboard</div>;
};

export default page;
