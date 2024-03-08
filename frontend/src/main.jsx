import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.jsx';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import {HomeScreen} from './screens/HomeScreen.jsx';
import SchoolsScreen from './screens/SchoolsScreen.jsx';
import SchoolScreen from './screens/SchoolScreen.jsx';
import LoginSignup from './screens/LoginSignupScreen.jsx';
import Favorites from './screens/FavoritesScreen.jsx';
import './index.css';
import { ThemeProvider } from '@material-tailwind/react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
	uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('id_token');
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index={true} path="/" element={<HomeScreen />} />
			<Route path="/schools" element={<SchoolsScreen />} />
			<Route path="/schools/:id" element={<SchoolScreen />} />
			<Route path="/login" element={<LoginSignup />} />
			<Route path="/favorites" element={<Favorites />} />
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
