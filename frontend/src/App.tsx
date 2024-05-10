import { ReactElement, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSessionStore } from "./stores/session";

const App = (): ReactElement => {
  const { user } = useSessionStore();
  const [theme, setTheme] = useState<string>("lightTheme");

  useEffect(() => {
    if (user && user.theme) {
      setTheme(user.theme);
    }
  }, [user]);

  return (
    <>
      <NavBar dataTheme={theme} setTheme={setTheme} />
      <main className="flex-auto w-100" data-theme={theme}>
        <Outlet />
      </main>
      <ToastContainer />
      <Footer dataTheme={theme} />
    </>
  );
};

export default App;
