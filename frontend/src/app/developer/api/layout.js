"use client";
import { usePathname } from "next/navigation";
const DeveloperPanelLayout = ({ children }) => {
  const router = usePathname();
  return (
    <>
      {router && router.includes("/developer/api/login") ? (
        <>{children} </>
      ) : (
        <> dev {children}</>
      )}
    </>
  );
};

export default DeveloperPanelLayout;
