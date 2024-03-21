import { Outlet } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import { NavBar } from "./components/NavBar.jsx";
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
