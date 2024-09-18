import { MdDashboard } from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi2";
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdOutlineDesktopWindows } from "react-icons/md";

export const dashboardData = [
  {
    icon: <MdDashboard />,
    componentName: "Dashboard",
    link: "/dashboard",
    subItem: [],
  },
  {
    icon: <MdOutlineDesktopWindows />,
    componentName: "CMS",
    link: "/cms",
    subItem: ["Item 1", "Item 2"],
  },
  {
    icon: <HiOutlineUser />,
    componentName: "Users",
    link: "/users",
    subItem: [],
  },
  {
    icon: <IoAnalyticsSharp />,
    componentName: "Analytics",
    link: "/analytics",
    subItem: [],
  },
  {
    icon: <CiSettings />,
    componentName: "Settings",
    link: "/settings",
    subItem: ["Setting 1", "Setting 2"],
  },
  {
    icon: <IoIosLogOut />,
    componentName: "Logout",
    link: "/logout",
    subItem: [],
  },
];
