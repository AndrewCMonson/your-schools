import { useGetAllUsers } from "../../../hooks";
import { AdminUser, AdminUserFuzzySearch } from "./";
import { FuseResult } from "fuse.js";
import { useState } from "react";
import { User as UserType } from "../../../__generatedTypes__/graphql";
import { AdminAddUserModal } from "./AdminAddUserModal";

export const AdminUsers = () => {
  const { data, loading, error } = useGetAllUsers();
  const [results, setResults] = useState<FuseResult<UserType[]>[]>([]);
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
        <AdminUserFuzzySearch
          searchKeys={["username", "email"]}
          placeholder="Search for a user by username or email"
          data={data}
          setResults={setResults}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <AdminAddUserModal />
      </div>

      <div className="w-full overflow-x-auto">
        <table className="table mt-4">
          <thead className="sticky top-0 bg-base-100 z-100">
            <tr>
              <th></th>
              <th className="text-2xl">Username</th>
              <th className="hidden 2xl:table-cell text-2xl">Email</th>
              <th className="hidden md:table-cell text-2xl">ID</th>
              <th className="hidden md:table-cell text-2xl">Role</th>
            </tr>
          </thead>
          <tbody className="h-full">
            {searchTerm === "" &&
              data &&
              data.map((user) => <AdminUser key={user?.id} user={user} />)}
            {searchTerm && (
              <>
                {results.map((result) => (
                  <AdminUser
                    key={result.refIndex}
                    user={result.item as UserType}
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
