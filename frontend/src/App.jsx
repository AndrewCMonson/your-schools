import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
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
