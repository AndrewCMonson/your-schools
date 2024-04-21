import { ReactElement, useCallback, Dispatch, SetStateAction } from "react";
import { Link, useNavigate } from "react-router-dom";
import YourSchools from "../assets/images/your-schools-logo.png";
import { LOGOUT } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import { useSessionStore } from "../stores/session";
import { ThemeToggle } from "./ThemeToggle";

interface NavBarProps {
  dataTheme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export const NavBar = ({ dataTheme, setTheme }: NavBarProps): ReactElement => {
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
      <div className="navbar bg-base-200" data-theme={dataTheme}>
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
          {user && (
            <div className="hidden lg:block text-2xl cursor-default">
              <span>Your</span>
              <span>Schools</span>
            </div>
          )}
        </div>
        <ThemeToggle theme={dataTheme} setTheme={setTheme} />
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            {user && (
              <li>
                <details>
                  <summary className="text-lg">Menu</summary>
                  <ul className="rounded-t-none z-50 mr-2">
                    <li>
                      <Link to="/schools">Schools</Link>
                    </li>
                    <li>
                      <Link to="/favorites">Favorites</Link>
                    </li>
                    <li>
                      <button onClick={onLogout}>Logout</button>
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
