"use client";
import Dashboard from "@/app/components/developer/Dashboard";

import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
const DeveloperPanelLayout = ({ children }) => {
  const router = usePathname();
  // const heading = useSelector((store) => {
  //   return store.developerLoginData.dashboardHeading;
  // });
  const headingArr = router.split("/");
  const heading = headingArr[headingArr.length - 1];

  const dashboardLocation = router.slice(10);

  return (
    <>
      {router && router.includes("/developer/api/login") ? (
        <>{children} </>
      ) : (
        <main className="flex ">
          <Dashboard />

          <section className="p-3 w-[80vw] pr-8 pl-8 mt-4">
            <div className="mt-2  underline text-xl ">{dashboardLocation}</div>
            <span className="text-4xl tracking-wider uppercase  text-center text-primary font-semibold border-b-2 border-black mt-2">
              {heading}
            </span>
            <div className="mt-4">{children}</div>
          </section>
          <> </>
        </main>
      )}
    </>
  );
};

export default DeveloperPanelLayout;
