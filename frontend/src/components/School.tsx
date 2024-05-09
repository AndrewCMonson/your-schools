import { School as SchoolType } from "../__generatedTypes__/graphql";
import { Link } from "react-router-dom";
import { Rating } from "./";
import { CheckBadgeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useSchoolStore } from "../stores/school";

interface SchoolProps {
  school: SchoolType;
}

export const School = ({ school }: SchoolProps) => {
  const { setSchool, clearSchool } = useSchoolStore();

  const handleMouseEnter = () => {
    setSchool(school);
  };

  const handleMouseLeave = () => {
    clearSchool();
  };

  return (
    <div
      className="w-full border-2 border-transparent border-b-black p-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex">
        <div className="avatar sm:flex sm:items-center">
          <div className="w-20 h-20 sm:h-36 sm:w-36 rounded">
            <img
              src={school.avatar ?? "https://via.placeholder.com/300"}
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
        <div className="font-bold pl-4">
          <div className="text-xl sm:text-2xl">
            <Link to={`/schools/${school.id}`} className="hover:underline">
              {school.name}
            </Link>
          </div>
          <div>
            {school.rating && <Rating value={school.rating} size="sm" />}
          </div>
          <div className="hidden sm:block border border-primary rounded p-2">
            {school.description}
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="badge badge-md badge-outline flex gap-1">
              <MapPinIcon className="h-4" />
              {school.city}
            </span>
            <span className="badge badge-md badge-accent badge-outline">
              {school.max_tuition ?? 0 > 1000 ? "$$$$" : "$$$"}
            </span>
            {school.offers_daycare && (
              <span className="badge badge-md badge-outline">Daycare</span>
            )}
            {school.isVerified && (
              <span className="badge badge-md badge-outline">
                <CheckBadgeIcon className="h-4 mr-1" />
                Verified
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
