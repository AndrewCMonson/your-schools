import { ReactElement, useCallback, Dispatch, SetStateAction } from "react";
import { Link, useNavigate } from "react-router-dom";
import YourSchools from "../assets/images/your-schools-logo.png";
import { LOGOUT } from "../utils/Graphql/";
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
        <div className="flex navbar-end flex-1 px-2">
          <div className="flex items-stretch">
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost rounded-btn text-base xs:text-lg sm:text-xl"
                >
                  Menu
                </div>

                <ul
                  tabIndex={0}
                  className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
                >
                  <li>
                    <Link to="/schools" className="text-base">
                      Schools
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile" className="text-base">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/favorites" className="text-base">
                      Favorites
                    </Link>
                  </li>
                  <li>
                    <button onClick={onLogout} className="text-base">
                      Logout
                    </button>
                  </li>
                  <li>
                    <ThemeToggle theme={dataTheme} setTheme={setTheme} />
                  </li>
                </ul>
              </div>
            ) : (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost rounded-btn text-lg text-base xs:text-lg sm:text-xl"
                >
                  Menu
                </div>

                <ul
                  tabIndex={0}
                  className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
                >
                  <li>
                    <Link to="/signup" className="text-base">
                      Signup
                    </Link>
                  </li>
                  <li>
                    <Link to="/login" className="text-base">
                      Login
                    </Link>
                  </li>
                  <li>
                    <ThemeToggle theme={dataTheme} setTheme={setTheme} />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
