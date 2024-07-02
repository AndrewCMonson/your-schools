import { useSessionStore } from "../stores";
import { useNavigate } from "react-router-dom";
import { useGetAllSchools } from "../hooks";

const AdminScreen = () => {
  const { user } = useSessionStore();
  const navigate = useNavigate();
  const { data } = useGetAllSchools();

  console.log(data);

  if (!user || !user.isAdmin) {
    navigate("/login");
  }

  return (
    <>
      {data &&
        data.map((school) => (
          <div key={school?.id}>
            <h1>{school?.name}</h1>
            <p>{school?.phone}</p>
          </div>
        ))}
    </>
  );
};
export default AdminScreen;
