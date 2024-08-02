import { School as SchoolType } from "../../__generatedTypes__/graphql";
import { AdminSchoolModal } from "./AdminSchoolModal";

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
              <div className="text-sm opacity-50">{school.city}</div>
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
            <AdminSchoolModal school={school} />
            <button className="btn btn-warning">Delete</button>
          </div>
        </td>
      </tr>
    </>
  );
};
