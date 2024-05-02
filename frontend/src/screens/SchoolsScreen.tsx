import { ReactElement, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  PageTitle,
  SearchBar,
  SchoolSearchResults,
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
        className="min-h-full h-full flex flex-col-reverse lg:flex-row items-center w-100 bg-base-200 "
      >
        <div className="container mx-auto flex flex-col items-center h-full overflow-scroll">
          <PageTitle title="Schools" />
          <SearchBar
            setSearchParams={setSearchParams}
            setZipcode={setZipcode}
          />
          <div className="mt-4">
            <LocationButton
              setZipcode={setZipcode}
              setSearchParams={setSearchParams}
              setLocationLatLng={setLocationLatLng}
            />
          </div>
          {schools && schools.length === 0 && (
            <p className="text-center text-lg mt-4">
              No schools found for this location
            </p>
          )}
          <div className="mt-8">
            <SchoolSearchResults schools={schools} />
          </div>
        </div>
        <div className="h-96 w-full lg:min-h-full lg:h-full">
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
