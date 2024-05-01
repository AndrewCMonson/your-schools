import { School as SchoolType } from "../../__generatedTypes__/graphql";
import { School } from "../";

type SchoolSearchResultsProps = {
  schools: SchoolType[];
};

export const SchoolSearchResults = ({ schools }: SchoolSearchResultsProps) => {
  return (
    <div className="card shrink-0 bg-base-100 w-full max-w-sm md:max-w-md shadow-2xl m-4 lg:m-0">
      {schools.map((school) => (
        <School key={school?.id} school={school as SchoolType} />
      ))}
    </div>
  );
};
