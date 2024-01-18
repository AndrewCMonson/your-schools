const NavButton = ({ name, link }) => {
	return (
		<a
			href={link}
			className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
		>
			{name}
		</a>
	);
};

export default NavButton;
