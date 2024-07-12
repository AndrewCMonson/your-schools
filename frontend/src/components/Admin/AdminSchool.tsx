import { School as SchoolType } from "../../__generatedTypes__/graphql";
import { SchoolModal } from "../Misc/SchoolModal";

interface AdminSchoolProps {
  school: SchoolType;
}

export const AdminSchool = ({ school }: AdminSchoolProps) => {
  return (
    <>
      <div className="flex">
        <div>{school?.name}</div>
        <SchoolModal school={school} />
        <button className="btn btn-warning">Delete</button>
      </div>
    </>
  );
};
