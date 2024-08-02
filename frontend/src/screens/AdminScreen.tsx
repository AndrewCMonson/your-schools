import { useSessionStore } from "../stores";
import { useNavigate } from "react-router-dom";
import { useGetAllSchools } from "../hooks";
import { AdminSchools, AdminUsers } from "../components";
import { useEffect, useState } from "react";
import { AdminTabs } from "../components/Admin/AdminTabs";

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
        className="min-h-full h-auto flex flex-col xl:flex-row justify-around overflow-auto w-100 bg-base-200"
      >
        <div className="card shrink-0 bg-base-100 shadow-2xl min-w-1/2 xl:w-1/2 m-4">
          <div className="card-body min-h-full">
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-2xl lg:text-3xl text-center">
                Admin Dashboard
              </h1>
            </div>
            <AdminTabs
              setScreenSelected={setScreenSelected}
              screenSelected={screenSelected}
            />
            <div>
              {screenSelected === "schools" ? <AdminSchools /> : <AdminUsers />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
