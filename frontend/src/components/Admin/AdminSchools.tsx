import { useGetAllSchools } from "../../hooks";
import { AdminSchool, AdminFuzzySearch } from "../../components";
import { FuseResult } from "fuse.js";
import { useState } from "react";
import { School as SchoolType } from "../../__generatedTypes__/graphql";

export const AdminSchools = () => {
  const { data, loading, error } = useGetAllSchools();
  const [results, setResults] = useState<FuseResult<SchoolType[]>[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  if (loading)
    return (
      <div className="flex justify-center items-center h-full bg-base-200">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="flex flex-col items-center">
        <AdminFuzzySearch
          searchKeys={["city", "name"]}
          placeholder="Search for a school by city or name"
          data={data}
          setResults={setResults}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
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
    </>
  );
};
