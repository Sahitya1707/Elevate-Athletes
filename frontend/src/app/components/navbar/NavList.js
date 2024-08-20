import Link from "next/link";
import { useSelector } from "react-redux";

export const NavList = ({ text, handleNavList, index }) => {
  const navState = useSelector((store) => {
    return store.globalNavState.activeNavState;
  });
  return (
    <Link href={"/"}>
      <li
        className={`after:bg-textColor after:content-[' '] after:h-[1px]  ${
          navState === index ? "after:w-[100%]" : "after:w-[0%]"
        } relative after:absolute after:left-0 after:bottom-0 hover:after:w-[100%] hover:after:duration-200 hover:after:ease-in-out`}
        onClick={handleNavList}
        key={index}
      >
        {text}
      </li>
    </Link>
  );
};

// cursor-pointer relative
//         ${navState === index ? " before:bg-textColor " : ""}
//           ${navState === index ? " before:w-[100%] " : ""}
//            ${navState === index ? "  " : ""}  before:w-[1%]hover:before:w-[100%]
//         before:content-[' '] before:absolute before:h-[2px] before:w-[100%] before:bottom-0 hover:before:bg-textColor hover:before:duration-200 hover:before:ease-in
