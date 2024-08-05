import { School as SchoolType } from "../../../__generatedTypes__/graphql";
import { AdminEditSchoolModal } from "./AdminEditSchoolModal";
import { AdminDeleteSchoolButton } from "./AdminDeleteSchoolButton";

interface AdminSchoolProps {
  school: SchoolType;
}

export const AdminSchool = ({ school }: AdminSchoolProps) => {
  return (
    <>
      <tr>
        <th></th>
        <td>
          <div className="flex items-center gap-3">
            <div>
              <div className="font-bold flex gap-1">{school.name}</div>
              <div className="text-sm ">{school.city}</div>
            </div>
          </div>
        </td>
        <td className="hidden 2xl:table-cell">
          {school.phone}
          <br />
          {school.email}
        </td>
        {/* <td className="hidden md:table-cell">{school.owner}</td> */}
        <td className="hidden md:table-cell">{school.id}</td>
        <td>
          <div className="flex gap-4">
            <AdminEditSchoolModal school={school} />
            <AdminDeleteSchoolButton schoolId={school.id} />
          </div>
        </td>
      </tr>
    </>
  );
};
