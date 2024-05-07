import { School as SchoolType } from "../__generatedTypes__/graphql";
import { Link } from "react-router-dom";
import { LocationPin, Rating } from "./";

interface SchoolProps {
  school: SchoolType;
}

export const School = ({ school }: SchoolProps) => {
  return (
    <div className="w-full border-2 border-transparent border-b-black p-2">
      <div className="flex">
        <div className="avatar">
          <div className="w-20 h-20 rounded">
            <img
              src={school.avatar ?? "https://via.placeholder.com/300"}
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
        <div className="font-bold pl-4">
          <Link to={`/schools/${school.id}`}>{school.name}</Link>
          <div className="">
            {school.rating && <Rating value={school.rating} size="sm" />}
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <span className="badge badge-md badge-outline flex gap-1">
          <LocationPin size={4} />
          {school.city}
        </span>
        <span className="badge badge-md badge-accent badge-outline">
          {school.max_tuition ?? 0 > 1000 ? "$$$$" : "$$$"}
        </span>
        {school.offers_daycare && (
          <span className="badge badge-md badge-outline">Daycare</span>
        )}
      </div>
    </div>
  );
};
