import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = (): ReactElement => {
  return (
    <>
      <NavBar />
      <main className="flex-auto w-100">
        <Outlet />
      </main>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default App;
