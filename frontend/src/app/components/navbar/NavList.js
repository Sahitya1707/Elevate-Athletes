export const NavList = ({ text }) => {
  return (
    <li className="cursor-pointer relative  before:bg-textColor before:content-[' '] before:absolute before:h-[2px] before:w-[100%] before:bottom-0">
      {text}
    </li>
  );
};
