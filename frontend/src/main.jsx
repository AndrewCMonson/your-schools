import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.jsx';
import SchoolsScreen from './screens/SchoolsScreen.jsx';
import SchoolScreen from './screens/SchoolScreen.jsx';
import './index.css';
import { ThemeProvider } from '@material-tailwind/react';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
} from '@apollo/client';
// import SchoolScreen from './screens/SchoolScreen.jsx';

const client = new ApolloClient({
	uri: 'http://localhost:3005/graphql',
	cache: new InMemoryCache(),
});

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index={true} path="/" element={<HomeScreen />} />
			<Route path="/schools" element={<SchoolsScreen />} />
			<Route path="/schools/:id" element={<SchoolScreen />} />
			{/* <Route path="/schools/:id" element={<SchoolScreen />} /> */}
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		
			<ThemeProvider>
				<ApolloProvider client={client}>
				<RouterProvider router={router} />
				</ApolloProvider>
			</ThemeProvider>
		
	</React.StrictMode>
);
