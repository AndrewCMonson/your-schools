import { Outlet } from 'react-router-dom';
import Navbar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx'

const App = () => {
	return (
		<>
			<Navbar />
			<main className="flex-auto w-100">
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default App;
