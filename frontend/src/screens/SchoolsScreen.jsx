import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import School from '../components/School';
import { Button, Input } from '@material-tailwind/react';
import PageTitle from '../components/PageTitle';
import { useQuery } from '@apollo/client';
import { GET_SCHOOLS } from '../utils/queries';
import LoadingScreen from './LoadingScreen';

const SchoolsScreen = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [zipcode, setZipcode] = useState(searchParams.get('zipcode') || '');
	const [search, setSearch] = useState(false);

	const handleFormSubmit = event => {
		event.preventDefault();
		setZipcode(event.target.zipcode.value);
		setSearchParams({ zipcode: event.target.zipcode.value });
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
					onSubmit={handleFormSubmit}
					className="container mx-auto relative flex w-full max-w-[24rem]"
					label="Search"
				>
					<Input
						type="text"
						name="zipcode"
						label="Zipcode"
						className="pr-20"
						maxLength={5}
						containerProps={{ className: 'min-w-0' }}
					/>
					<Button
						type="submit"
						size="sm"
						color="blue"
						className="!absolute right-1 top-1 rounded"
						label="Search"
					>
						Search
					</Button>
				</form>
				{!data.schools.length && search ? (
					<div className="text-center text-2xl mt-8">No schools found</div>
				) : (
					<div>
						{data.schools.map(school => (
							<School key={school.id} school={school} />
						))}
					</div>
				)}
			</section>
		</>
	);
};

export default SchoolsScreen;
