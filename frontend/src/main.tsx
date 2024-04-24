import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";
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
  SchoolsScreen,
  SignupScreen,
  LoginScreen,
  ProfileScreen,
} from "./screens";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { useSessionStore } from "./stores/session";

const link = createHttpLink({
  uri: "/graphql",
  credentials: "include",
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) => {
      if (
        message.includes("User Not Authorized") ||
        message.includes("TokenExpiredError") ||
        message.includes("Not logged in")
      ) {
        useSessionStore.getState().clearSession();
      }
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      );
    });
  if (networkError) console.error(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  link: from([errorLink, link]),
  cache: new InMemoryCache(),
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/schools" element={<SchoolsScreen />} />
      <Route path="/schools/:id" element={<SchoolScreen />} />
      <Route path="/favorites" element={<FavoritesScreen />} />
      <Route path="*" element={<FourOhFourScreen />} />
      <Route path="/signup" element={<SignupScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/profile" element={<ProfileScreen />} />
    </Route>,
  ),
);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      {/* TODO: create custom provider for theme */}
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </React.StrictMode>,
  );
}
