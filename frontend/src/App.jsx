import { Outlet } from 'react-router-dom';
import Navbar from './components/NavBar.jsx';
// import Footer from './components/Footer.jsx'

const App = () => {
	return (
		<>
			<Navbar />
			<main className="py-3 h-[calc(100vh-4rem)]">
				<div className="container mx-auto h-full">
					<Outlet />
				</div>
			</main>
		</>
	);
};

export default App;
