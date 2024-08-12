import { School as SchoolType } from "../../../__generatedTypes__/graphql";
import { AdminEditSchoolModal } from "./AdminEditSchoolModal";
import { AdminDeleteSchoolButton } from "./AdminDeleteSchoolButton";

interface AdminSchoolProps {
  school: SchoolType;
}

export const AdminSchool = ({ school }: AdminSchoolProps) => {
  const { name, city, phone, email, id } = school;

  return (
    <>
      <tr>
        <th></th>
        <td>
          <div className="flex items-center gap-3">
            <div>
              <div className="font-bold flex gap-1">{name}</div>
              <div className="text-sm ">{city}</div>
            </div>
          </div>
        </td>
        <td className="hidden 2xl:table-cell">
          {phone}
          <br />
          {email}
        </td>
        {/* <td className="hidden md:table-cell">{school.owner}</td> */}
        <td className="hidden md:table-cell">{id?.substring(18)}</td>
        <td>
          <div className="flex gap-4">
            <AdminEditSchoolModal school={school} />
            <AdminDeleteSchoolButton schoolId={id} />
          </div>
        </td>
      </tr>
    </>
  );
};
