import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import School from '../components/School';
import { Button, Input } from '@material-tailwind/react';
import PageTitle from '../components/PageTitle';
import { gql, useQuery} from '@apollo/client';


const SchoolsScreen = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [zipcode, setZipcode] = useState(searchParams.get('zipcode') || '');

	const GET_SCHOOLS = gql`
		query Schools($zipcode: String) {
			schools(zipcode: $zipcode) {
				id
				name
				address
				city
				state
				zipcode
				latitude
				longitude
				phone
				website
				email
				rating
				max_tuition
			}
		}
	`;

	const handleFormSubmit = event => {
		event.preventDefault();
		setZipcode(event.target.zipcode.value);
		setSearchParams({ zipcode: event.target.zipcode.value });
	};
	
	const { loading, error, data } = useQuery(GET_SCHOOLS, {
		variables: { zipcode },
	});


	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<>
			<div className="flex flex-col items-center container mx-auto">
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
				<div>
					<p className="text-2xl font-semibold text-gray-600">
						{data.schools.length} Schools Found
					</p>
				</div>
			</div>
			<div className='flex'>
				<div className="flex flex-wrap justify-center container mx-auto">
					{data.schools.map(school => (
						<School key={school.id} school={school} />
					))}
				</div>
			</div>
		</>
	);
};

export default SchoolsScreen;
