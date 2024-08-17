"use client";
import Dashboard from "@/app/components/developer/Dashboard";
import { usePathname } from "next/navigation";
const DeveloperPanelLayout = ({ children }) => {
  const router = usePathname();
  return (
    <>
      {router && router.includes("/developer/api/login") ? (
        <>{children} </>
      ) : (
        <main className="flex ">
          <Dashboard />
          <section className="p-3">{children}</section>
          <> </>
        </main>
      )}
    </>
  );
};

export default DeveloperPanelLayout;
