import { useState, FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { School, PageTitle } from "../components";
import { Button, Input } from "@material-tailwind/react";
import { useQuery } from "@apollo/client";
import { GET_SCHOOLS } from "../utils/queries";
import { LoadingScreen } from ".";

interface SchoolData {
	
		address: string;
		city: string;
		email: string;
		id: string;
		latitude: number;
		longitude: number;
		max_tuition: number;
		name: string;
		phone: string;
		rating: number;
		state: string;
		website: string;
		zipcode: string;
		__typename: string;
}

export const SchoolsScreen = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [zipcode, setZipcode] = useState<string>(searchParams.get("zipcode") || "");
  const [search, setSearch] = useState<boolean>(false);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const target = event.target as HTMLFormElement;
		const zipcode = target.zipcode.value;

    setZipcode(zipcode);
    setSearchParams({ zipcode: zipcode });
    setSearch(true);
  };

  const { loading, error, data } = useQuery(GET_SCHOOLS, {
    variables: { zipcode },
  });

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
						containerProps={{ className: 'min-w-0' }}
						crossOrigin={''}
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

        {data.schools.length === 0 && search ? (
          <div className="text-center text-2xl mt-8">No schools found</div>
        ) : (
          <div className="flex flex-col min-w-1/2 ">
            {data.schools.map((school: SchoolData) => (
              <School
                key={school.id}
                school={school}
              />
            ))}
          </div>
        )}
			</section>
		</>
	);
};

