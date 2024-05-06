import { School as SchoolType } from "../__generatedTypes__/graphql";
import { Link } from "react-router-dom";
import { Rating } from "./";

interface SchoolProps {
  school: SchoolType;
}

export const School = ({ school }: SchoolProps) => {
  return (
    <div className="w-full border-2 border-transparent border-b-black pb-4">
      <div className="flex flex-col p-4">
        <div>
          <div className="text-lg font-bold">{school.name}</div>
        </div>
        <div className="mt-2 self-baseline">
          <div>{school.address}</div>
          <div>
            {school.city}, {school.state} {school.zipcode}
          </div>
          <div>{school.phone}</div>
          <div>{school.rating && <Rating value={school.rating} />}</div>
          <div>{school.max_tuition ?? 0 > 1000 ? "$$$$" : "$$$"}</div>
        </div>
      </div>
      <div>
        <Link to={`/schools/${school.id}`}>
          <button className="btn btn-primary ml-4">Visit School Page</button>
        </Link>
      </div>
    </div>
  );
};
