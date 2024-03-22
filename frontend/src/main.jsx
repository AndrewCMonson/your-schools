import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  FavoritesScreen,
  FourOhFourScreen,
  HomeScreen,
  SchoolScreen,
  LoginSignupScreen,
  SchoolsScreen,
} from "./screens";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
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
      <Route path="/login" element={<LoginSignupScreen />} />
      <Route path="/favorites" element={<FavoritesScreen />} />
      <Route path="*" element={<FourOhFourScreen />} />
    </Route>,
  ),
);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider>
        <ApolloProvider client={client}>
          <RouterProvider router={router} />
        </ApolloProvider>
      </ThemeProvider>
    </React.StrictMode>,
  );
}
