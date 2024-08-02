import { useSessionStore } from "../stores";
import { useNavigate } from "react-router-dom";
import { useGetAllSchools } from "../hooks";
import { AdminSchools } from "../components";
import { useEffect, useState } from "react";
import { MouseEvent } from "react";

export const AdminScreen = () => {
  const { user } = useSessionStore();
  const navigate = useNavigate();
  const { loading, error } = useGetAllSchools();
  const [screenSelected, setScreenSelected] = useState("schools");

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (!user?.isAdmin) {
      navigate("/schools");
    }
  });

  const handleTabClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setScreenSelected(e.currentTarget.id);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-full bg-base-200">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <section
        id="adminScreen"
        className="min-h-full h-auto flex flex-col xl:flex-row justify-around items-center overflow-auto w-100 bg-base-200"
      >
        <div className="card h-full shrink-0 bg-base-100 shadow-2xl min-w-1/2 xl:w-1/2 m-4 lg:m-0">
          <div className="card-body min-h-full">
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-2xl lg:text-3xl text-center">
                Admin Dashboard
              </h1>
            </div>
            <div role="tablist" className="tabs tabs-boxed">
              <a
                role="tab"
                id="users"
                className={`tab ${screenSelected === "users" ? "tab-active" : null}`}
                onClick={handleTabClick}
              >
                Users
              </a>
              <a
                role="tab"
                className={`tab ${screenSelected === "schools" ? "tab-active" : null}`}
                id="schools"
                onClick={handleTabClick}
              >
                Schools
              </a>
            </div>
            <div>
              {screenSelected === "schools" ? (
                <AdminSchools />
              ) : (
                <div>
                  <div className="h-96">Users</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
