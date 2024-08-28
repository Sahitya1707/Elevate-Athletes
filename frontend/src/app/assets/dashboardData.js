import { MdDashboard } from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi2";
import { MdOutlineManageAccounts } from "react-icons/md";

export const dashboardData = [
  {
    icon: <MdDashboard />,
    componentName: "Dashboard",
    subItem: [],
  },
  {
    icon: <MdOutlineManageAccounts />,
    componentName: "CMS",
    subItem: ["Item 1", "Item 2"],
  },
  {
    icon: <HiOutlineUser />,
    componentName: "Users",
    subItem: [],
  },
  {
    icon: <IoAnalyticsSharp />,
    componentName: "Analytics",
    subItem: [],
  },
  {
    icon: <CiSettings />,
    componentName: "Settings",
    subItem: ["Setting 1", "Setting 2"],
  },
  {
    icon: <IoIosLogOut />,
    componentName: "Logout",
    subItem: [],
  },
];
