import Link from "next/link";
import { useSelector } from "react-redux";

export const NavList = ({ text, handleNavList, index }) => {
  const navState = useSelector((store) => {
    return store.globalNavState.activeNavState;
  });
  return (
    <Link href={"/"}>
      <li
        className={`cursor-pointer relative 
        ${navState === index ? " before:bg-textColor " : ""}
          ${navState === index ? " before:w-[100%] " : "before:w-[0%]"}  
           ${navState === index ? "  " : "hover:before:w-[100%]"}  
        before:content-[' '] before:absolute before:h-[2px] before:w-[100%] before:bottom-0 hover:before:bg-textColor hover:before:duration-200 hover:before:ease-in `}
        onClick={handleNavList}
        key={index}
      >
        {text}
      </li>
    </Link>
  );
};
