import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSessionStore } from "../stores/session";
import { LoginSignupScreen } from "./screens";

const App = (): ReactElement => {
  const { user } = useSessionStore();

  return (
    <>
      <NavBar />
      <main className="flex-auto w-100">
        {user ? <Outlet /> : <LoginSignupScreen />}
      </main>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default App;
