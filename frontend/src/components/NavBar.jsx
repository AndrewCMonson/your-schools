import { BellIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import NavButton from './NavButton';

const NavBar = () => {
	return (
		<>
			<nav className="bg-white shadow-lg">
				<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
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
									<NavButton name="Day Care" link="/daycare" />
									<NavButton name="After School" link="/afterschool" />
									<NavButton name="Summer Programs" link="/summerprograms" />
									<NavButton name="Child Care Jobs" link="/jobs" />
								</div>
							</div>
						</div>
						{/* Right Nav */}
						<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
							{/* Notifications */}
							<button
								type="button"
								className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none"
							>
								<span className="sr-only">View notifications</span>
								<BellIcon className="h-6 w-6" aria-hidden="true" />
							</button>
							{/* Settings */}
							<button
								type="button"
								className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none"
							>
								<span className="sr-only">Open settings</span>
								<Cog6ToothIcon className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
