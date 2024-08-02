import { User as UserType } from "../../../__generatedTypes__/graphql";

interface AdminUserProps {
  user: UserType;
}

export const AdminUser = ({ user }: AdminUserProps) => {
  return (
    <>
      <tr>
        <th></th>
        <td>
          <div className="flex items-center gap-3">
            <div>
              <div className="font-bold flex gap-1">{user.username}</div>
            </div>
          </div>
        </td>
        <td className="hidden 2xl:table-cell">{user.email}</td>
        {/* <td className="hidden md:table-cell">{school.owner}</td> */}
        <td className="hidden md:table-cell">{user.id}</td>
        <td className="hidden md:table-cell">
          {user.isAdmin ? "Admin" : "User"}
        </td>
        <td>
          {/* <div className="flex gap-4">
            <AdminEditSchoolModal school={school} />
            <AdminDeleteSchoolButton schoolId={school.id} />
          </div> */}
        </td>
      </tr>
    </>
  );
};
