import { ReactElement } from "react";
import { useState, FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { School, PageTitle } from "../components";
import { Button, Input } from "@material-tailwind/react";
import { useGetSchools } from "../hooks/useGetSchools";
import { LoadingScreen } from ".";
import { School as SchoolType } from "../__generatedTypes__/graphql";

export const SchoolsScreen = (): ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [zipcode, setZipcode] = useState<string>(
    searchParams.get("zipcode") || "",
  );
  const [search, setSearch] = useState<boolean>(false);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as HTMLFormElement;
    const zipcode = target.zipcode.value;

    setZipcode(zipcode);
    setSearchParams({ zipcode: zipcode });
    setSearch(true);
  };

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
        <form
          onSubmit={(event: FormEvent<HTMLFormElement>) =>
            handleFormSubmit(event)
          }
          className="container mx-auto relative flex w-full max-w-[24rem]"
        >
          <Input
            type="text"
            name="zipcode"
            label="Zipcode"
            className="pr-20"
            maxLength={5}
            containerProps={{ className: "min-w-0" }}
            crossOrigin={""}
          />
          <Button
            type="submit"
            size="sm"
            color="indigo"
            className="!absolute right-1 top-1 rounded"
          >
            Search
          </Button>
        </form>

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
