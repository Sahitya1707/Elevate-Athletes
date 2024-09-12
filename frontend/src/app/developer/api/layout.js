"use client";
import Dashboard from "@/app/components/developer/Dashboard";

import { usePathname } from "next/navigation";
const DeveloperPanelLayout = ({ children }) => {
  const router = usePathname();
  console.log(router);
  const dashboardLocation = router.slice(10);
  console.log(dashboardLocation);
  return (
    <>
      {router && router.includes("/developer/api/login") ? (
        <>{children} </>
      ) : (
        <main className="flex ">
          <Dashboard />

          <section className="p-3 pr-8 pl-8 mt-4">
            <div className="mt-2  underline text-xl ">{dashboardLocation}</div>
            <div className="mt-4">{children}</div>
          </section>
          <> </>
        </main>
      )}
    </>
  );
};

export default DeveloperPanelLayout;
