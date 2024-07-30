import { useSessionStore } from "../stores";
import { useNavigate } from "react-router-dom";
import { useGetAllSchools } from "../hooks";
import { AdminSchool } from "../components";
import Fuse, { FuseResult } from "fuse.js";
import { useState, ChangeEvent, useEffect } from "react";
import { School as SchoolType } from "../__generatedTypes__/graphql";

export const AdminScreen = () => {
  const { user } = useSessionStore();
  const navigate = useNavigate();
  const { data, loading, error } = useGetAllSchools();
  const [results, setResults] = useState<FuseResult<SchoolType[]>[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const fuse = new Fuse(data, {
      keys: ["name", "city"],
    });
    setSearchTerm(e.target.value);
    setResults(fuse.search(e.target.value));
    console.log(results);
  };

  useEffect(() => {
    if (!user || !user.isAdmin) {
      navigate("/login");
    }
  }, [user, navigate]);

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
              <input
                type="text"
                placeholder="Search for a school"
                className="input input-bordered m-4 w-1/2"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <div className="w-full h-96 overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th className="text-2xl">Name</th>
                    <th className="hidden 2xl:table-cell text-2xl">Contact</th>
                    <th className="hidden md:table-cell text-2xl">ID</th>
                  </tr>
                </thead>
                <tbody className="h-full">
                  {searchTerm === "" &&
                    data &&
                    data.map((school) => (
                      <AdminSchool key={school?.id} school={school} />
                    ))}
                  {searchTerm && (
                    <>
                      {results.map((result) => (
                        <AdminSchool
                          key={result.refIndex}
                          school={result.item as SchoolType}
                        />
                      ))}
                    </>
                  )}
                  {searchTerm && results.length === 0 && (
                    <tr>
                      <td colSpan={4} className="text-center">
                        No results found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
