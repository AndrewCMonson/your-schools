import { useSessionStore } from "../stores";
import { useNavigate } from "react-router-dom";
import { useGetAllSchools } from "../hooks";
import { AdminSchool } from "../components";

export const AdminScreen = () => {
  const { user } = useSessionStore();
  const navigate = useNavigate();
  const { data, loading, error } = useGetAllSchools();

  console.log(data);

  if (!user || !user.isAdmin) {
    navigate("/login");
  }

  if (loading)
    return (
      <div className="flex justify-center items-center h-full bg-base-200">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {data &&
        data.map((school) => <AdminSchool key={school?.id} school={school} />)}
    </>
  );
};
