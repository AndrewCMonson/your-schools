import { Outlet } from 'react-router-dom';
import Footer from './components/Footer.jsx'
import { NavBar } from './components/Navbar.jsx';

const App = () => {
	return (
		<>
			<NavBar />
			<main className="flex-auto w-100">
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default App;
