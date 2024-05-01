import { ReactElement, useEffect } from "react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { School, PageTitle, SearchBar } from "../components";
import { useGetSchools } from "../hooks/";
import { LoadingScreen } from ".";
import {
  School as SchoolType,
  LocationInfo,
} from "../__generatedTypes__/graphql";
import { LocationButton } from "../components/";
import { useSessionStore } from "../stores";
import SearchMap from "../components/Maps/SearchMap";
import { SchoolSearchResults } from "../components/Schools/SchoolSearchResults";

export const SchoolsScreen = (): ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { user: loggedInUser } = useSessionStore();
  const [zipcode, setZipcode] = useState<string>(
    searchParams.get("zipcode") || loggedInUser?.zipcode || "",
  );
  const [search, setSearch] = useState<boolean>(false);
  const {
    loading,
    error,
    data: schools,
    locationInfo,
  } = useGetSchools(zipcode);
  const navigate = useNavigate();

  console.log(locationInfo);

  useEffect(() => {
    if (zipcode) {
      setSearch(true);
    }
  }, [zipcode]);

  if (!loggedInUser) {
    navigate("/login");
  }

  if (loading)
    return (
      <div>
        <LoadingScreen />
      </div>
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <section
        id="schoolsScreen"
        className="min-h-full h-full flex items-center w-100 bg-base-200"
      >
        <div className="container mx-auto flex flex-col items-center h-full">
          <PageTitle title="Schools" />
          <SearchBar
            setSearchParams={setSearchParams}
            setSearch={setSearch}
            setZipcode={setZipcode}
          />
          <div className="mt-4">
            <LocationButton
              setZipcode={setZipcode}
              setSearchParams={setSearchParams}
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
        <div className="w-full min-h-full h-full">
          <SearchMap
            schools={schools}
            locationInfo={locationInfo as LocationInfo}
          />
        </div>
      </section>
    </>
  );
};
