import { ReactElement } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { School, PageTitle, SearchBar } from "../components";
import { useGetSchools } from "../hooks/useGetSchools";
import { LoadingScreen } from ".";
import { School as SchoolType } from "../__generatedTypes__/graphql";
import { UseLocationButton } from "../components/UseLocationButton";

export const SchoolsScreen = (): ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [zipcode, setZipcode] = useState<string>(
    searchParams.get("zipcode") || "",
  );
  const [search, setSearch] = useState<boolean>(false);

  const { loading, error, data: schools } = useGetSchools(zipcode);

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
        className="flex flex-col items-center overflow-auto w-100 pt-5"
      >
        <PageTitle title="Schools" />
        <SearchBar
          setSearchParams={setSearchParams}
          setSearch={setSearch}
          setZipcode={setZipcode}
        />
        <UseLocationButton />

        {schools.length === 0 && search ? (
          <div className="text-center text-2xl mt-8">No schools found</div>
        ) : (
          <div className="flex flex-col min-w-1/2 ">
            {schools.map((school) => (
              <School key={school.id} school={school as SchoolType} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};
