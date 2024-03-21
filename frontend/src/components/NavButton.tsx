import { Link } from "react-router-dom";
import { HTMLAttributes } from "react";

interface NavButtonProps extends Pick<HTMLAttributes<HTMLDivElement>, "onClick"> {
  name: string;
  link: string;
}

const NavButton = ({ name, link }: NavButtonProps) => {
  return (
    <div className="flex items-center">
      <Link
        to={link}
        className="text-gray-900 hover:bg-indigo-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium 3xl:text-xl"
      >
        {name}
      </Link>
    </div>
  );
};

export default NavButton;