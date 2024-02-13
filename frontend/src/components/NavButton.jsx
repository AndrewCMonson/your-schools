import { Link } from 'react-router-dom';

const NavButton = ({ name, link }) => {
	return (
		<div className="flex items-center">
			<Link
				to={link}
				className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
			>
				{name}
			</Link>
		</div>
	);
};

export default NavButton;
