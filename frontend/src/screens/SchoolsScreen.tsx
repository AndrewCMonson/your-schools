import { ReactElement, useEffect } from "react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { School, PageTitle, SearchBar } from "../components";
import { useGetSchools } from "../hooks/";
import { LoadingScreen } from ".";
import { School as SchoolType } from "../__generatedTypes__/graphql";
import { LocationButton } from "../components/";
import { useSessionStore } from "../stores";
import SearchMap from "../components/SearchMap";

export const SchoolsScreen = (): ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { user: loggedInUser } = useSessionStore();
  const [zipcode, setZipcode] = useState<string>(
    searchParams.get("zipcode") || loggedInUser?.zipcode || "",
  );
  const [search, setSearch] = useState<boolean>(false);
  const { loading, error, data: schools } = useGetSchools(zipcode);
  const navigate = useNavigate();

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
        className="flex flex-col items-center overflow-auto w-100 pt-5 bg-base-200 h-full"
      >
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
        {schools.length === 0 && search ? (
          <div className="text-center text-2xl mt-8">
            No schools found in {zipcode}
          </div>
        ) : (
          <div>
            <div className="flex flex-col min-w-1/2 ">
              {schools.map((school) => (
                <School key={school.id} school={school as SchoolType} />
              ))}
            </div>
            <SearchMap schools={schools} />
          </div>
        )}
      </section>
    </>
  );
};
