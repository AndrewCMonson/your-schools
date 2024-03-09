import { useState, useEffect } from 'react';
import { Navbar, Collapse, IconButton } from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import YourSchools from '../assets/images/your-schools-logo.png'
import Auth from '../utils/auth';
import NavButton from './NavButton';

const NavList = () => {
	return (
		<ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			{Auth.loggedIn() ? (
				<>
					<NavButton name="Schools" link="/schools" />
					<NavButton name="Favorites" link="/favorites" />
					<NavButton name="Logout" link="/" onClick={Auth.logout} />
				</>
			) : (
				<>
					<NavButton name="Login/Signup" link="/login" />
				</>
			)}
		</ul>
	);
};

export const NavBar = () => {
	const [openNav, setOpenNav] = useState(false);

	const handleWindowResize = () =>
		window.innerWidth >= 960 && setOpenNav(false);

	useEffect(() => {
		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	return (
		<>
			<Navbar className="mx-auto max-w-full rounded-none px-6 py-3 lg:px-8 lg:py-4" shadow={false}>
				<div className="flex items-center justify-between text-blue-gray-900">
					<Link to="/">
						<img
							src={YourSchools}
							alt="YourSchools Logo"
							className="h-8 w-8"
							href="/"
						/>
					</Link>

					<div className="hidden lg:block">
						<NavList />
					</div>
					<IconButton
						variant="text"
						className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
						ripple={false}
						onClick={() => setOpenNav(!openNav)}
					>
						{openNav ? (
							<XMarkIcon className="h-6 w-6" strokeWidth={2} />
						) : (
							<Bars3Icon className="h-6 w-6" strokeWidth={2} />
						)}
					</IconButton>
				</div>
				<Collapse open={openNav}>
					<NavList />
				</Collapse>
			</Navbar>
		</>
	);
};
