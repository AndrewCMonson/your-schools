import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
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
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { CookiesProvider } from "react-cookie";

const link = createHttpLink({
  uri: "/graphql",
  credentials: "include",
});

const client = new ApolloClient({
  link,
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
        <CookiesProvider defaultSetOptions={{ path: "/" }}>
          <ApolloProvider client={client}>
            <RouterProvider router={router} />
          </ApolloProvider>
        </CookiesProvider>
      </ThemeProvider>
    </React.StrictMode>,
  );
}
