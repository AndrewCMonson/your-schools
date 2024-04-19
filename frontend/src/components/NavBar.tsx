import { ReactElement, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import YourSchools from "../assets/images/your-schools-logo.png";
import { LOGOUT } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import { useSessionStore } from "../stores/session";

export const NavBar = (): ReactElement => {
  const [logout] = useMutation(LOGOUT);
  const navigate = useNavigate();
  const { user, clearSession } = useSessionStore();

  const onLogout = useCallback(() => {
    logout();
    clearSession();
    navigate("/");
  }, [logout, clearSession, navigate]);

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link to="/">
            <img
              src={YourSchools}
              alt="YourSchools Logo"
              className="h-8 w-8 mx-4"
            />
          </Link>
        </div>
        <div className="navbar-center">
          <div className="hidden lg:block text-2xl cursor-default">
            <span className="text-neutral">Your</span>
            <span className="text-primary font-bold">Schools</span>
          </div>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            {user && (
              <li>
                <details>
                  <summary className="text-lg text-neutral">Menu</summary>
                  <ul className="bg-base-100 rounded-t-none z-50 mr-2">
                    <li>
                      <Link to="/schools" className="text-neutral">
                        Schools
                      </Link>
                    </li>
                    <li>
                      <Link to="/favorites" className="text-neutral">
                        Favorites
                      </Link>
                    </li>
                    <li>
                      <button onClick={onLogout} className="text-neutral">
                        Logout
                      </button>
                    </li>
                  </ul>
                </details>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
