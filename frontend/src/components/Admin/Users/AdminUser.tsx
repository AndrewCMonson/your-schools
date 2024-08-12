import { User as UserType } from "../../../__generatedTypes__/graphql";
import { AdminDeleteUserButton } from "./AdminDeleteUserButton";
import { AdminEditUserModal } from "./AdminEditUserModal";
import { AdminResetUserPasswordModal } from "./AdminResetUserPassword";
interface AdminUserProps {
  user: UserType;
}

export const AdminUser = ({ user }: AdminUserProps) => {
  const { id, username, email, isAdmin } = user;

  return (
    <>
      <tr>
        <th></th>
        <td>
          <div className="flex items-center gap-3">
            <div>
              <div className="font-bold flex gap-1">{username}</div>
            </div>
          </div>
        </td>
        <td className="hidden 2xl:table-cell">{email}</td>
        {/* <td className="hidden md:table-cell">{school.owner}</td> */}
        <td className="hidden md:table-cell">{id?.substring(18)}</td>
        <td className="hidden md:table-cell">{isAdmin ? "Admin" : "User"}</td>
        <td>
          <div className="flex gap-4 justify-center">
            <AdminEditUserModal user={user} />
            <AdminResetUserPasswordModal email={email} />
            <AdminDeleteUserButton schoolId={id} />
          </div>
        </td>
      </tr>
    </>
  );
};
