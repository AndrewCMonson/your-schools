import { ReactElement, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  PageTitle,
  SearchBar,
  School,
  LocationButton,
  SearchMap,
} from "../components";
import { useGetSchools } from "../hooks/";
import { LatLng, LocationInfo } from "../__generatedTypes__/graphql";
import { useSessionStore } from "../stores";

export const SchoolsScreen = (): ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { user: loggedInUser } = useSessionStore();
  const [zipcode, setZipcode] = useState<string>(
    searchParams.get("zipcode") || loggedInUser?.zipcode || "",
  );
  const [locationLatLng, setLocationLatLng] = useState<LatLng | null>(null);
  const {
    loading,
    error,
    data: schools,
    locationInfo,
  } = useGetSchools(zipcode);
  const navigate = useNavigate();

  if (!loggedInUser) {
    navigate("/login");
  }

  if (loading)
    return (
      <div className="flex justify-center items-center h-full bg-base-200">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <section
        id="schoolsScreen"
        className="flex flex-col-reverse lg:flex-row bg-base-200 lg:h-lvh w-full gap-2"
      >
        <div className="w-full lg:w-1/3 pt-4">
          <div className="h-1/5">
            <PageTitle title="Schools" />
            <SearchBar
              setSearchParams={setSearchParams}
              setZipcode={setZipcode}
            />
            <div className="text-center">
              <LocationButton
                setZipcode={setZipcode}
                setSearchParams={setSearchParams}
                setLocationLatLng={setLocationLatLng}
              />
            </div>
            {schools && schools.length === 0 && (
              <p className="text-center text-lg mt-4">No schools found</p>
            )}
          </div>
          <div className="h-4/5 overflow-auto mt-12 ml-2">
            {schools &&
              schools.map((school) => (
                <School key={school.id} school={school} />
              ))}
          </div>
        </div>
        <div className="h-96 w-full lg:h-full lg:w-2/3">
          <SearchMap
            schools={schools}
            locationInfo={locationInfo as LocationInfo}
            locationLatLng={locationLatLng}
          />
        </div>
      </section>
    </>
  );
};
