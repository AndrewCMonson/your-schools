import { ReactElement, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSessionStore } from "./stores/session";

const App = (): ReactElement => {
  const { user } = useSessionStore();
  const themeFromStorage = localStorage.getItem("theme");
  const [theme, setTheme] = useState<string>(
    themeFromStorage ? JSON.parse(themeFromStorage) : "myThemeDark",
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <>
      <NavBar dataTheme={theme} setTheme={setTheme} />
      <main className="flex-auto w-100" data-theme={theme}>
        <Outlet />
      </main>
      <ToastContainer />
      {/* <Footer /> */}
    </>
  );
};

export default App;
