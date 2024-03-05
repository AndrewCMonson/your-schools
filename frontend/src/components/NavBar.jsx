import NavButton from './NavButton';
import Auth from '../utils/auth';


const NavBar = () => {
	return (
		<>
			<nav className="bg-white shadow-lg">
				<div className="max-w-7xl container mx-auto px-2 sm:px-6 lg:px-8">
					<div className="relative flex justify-between h-16">
						{/* Left Nav */}
						<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
							<div className="flex-shrink-0 flex items-center">
								{/* Logo */}
								<a href="/">
									<img
										className="block lg:hidden h-9 w-auto"
										src="../images/YourSchool.png"
										alt="YourSchool"
									/>
								</a>
								<a href="/">
									<img
										className="hidden lg:block h-9 w-auto"
										src="../images/YourSchool.png"
										alt="YourSchool"
									/>
								</a>
							</div>
							{/* Nav Links */}
							<div className="hidden flex items-center sm:flex sm:ml-6">
								<div className="flex space-x-4">
									<NavButton name="Schools" link="/schools" />
								</div>
							</div>
						</div>
						{/* Right Nav */}
						<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
							{Auth.loggedIn() ? (
								<>
									<NavButton name="Favorites" link="/favorites" />
									<NavButton name="Profile" link="/profile" />
									<NavButton name="Logout" link="/logout" />
								</>
							) : (
								<>
									<NavButton name="Login/Signup" link="/login" />
								</>
							)}
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
