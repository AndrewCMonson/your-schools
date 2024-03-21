import { Link } from "react-router-dom";

const NavButton = ({ name, link, onClick }) => {
  return (
    <div className="flex items-center">
      <Link
        to={link}
        className="text-gray-900 hover:bg-indigo-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium 3xl:text-xl"
        onClick={onClick}
      >
        {name}
      </Link>
    </div>
  );
};

export default NavButton;
