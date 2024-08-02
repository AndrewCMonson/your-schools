import { useGetAllSchools } from "../../../hooks";
import { AdminSchool, AdminFuzzySearch } from "../..";
import { FuseResult } from "fuse.js";
import { useState } from "react";
import { School as SchoolType } from "../../../__generatedTypes__/graphql";
import { AdminAddSchoolModal } from "./AdminAddSchoolModal";

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
      <div className="flex justify-between mt-4 mx-10">
        <AdminFuzzySearch
          searchKeys={["city", "name"]}
          placeholder="Search for a school by city or name"
          data={data}
          setResults={setResults}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <AdminAddSchoolModal />
      </div>

      <div className="w-full overflow-x-auto">
        <table className="table mt-4">
          <thead className="sticky top-0 bg-base-100 z-100">
            <tr>
              <th></th>
              <th className="text-2xl">Name</th>
              <th className="hidden 2xl:table-cell text-2xl">Contact</th>
              <th className="hidden md:table-cell text-2xl">ID</th>
              <th></th>
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
