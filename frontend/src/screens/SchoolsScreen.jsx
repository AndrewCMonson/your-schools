import { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
import Schools from '../components/Schools';
// import Sort from '../components/Sort';
import PageTitle from '../components/PageTitle';
// import { fetchSchools } from '../utils/fetchSchools';
import { gql, useQuery } from '@apollo/client';

const SchoolsScreen = () => {
	const [zipcode, setZipcode] = useState('');

	
	const GET_SCHOOLS = gql`
		query Schools($zipcode: String) {
			schools(zipcode: $zipcode) {
				id
				name
				address
				city
				state
				zipcode
				phone
				website
				email
				rating
				offers_daycare
				age_range
				early_enrollment
				min_tuition
				max_tuition
				days_open
				days_closed
				opening_hours
				closing_hours
				min_enrollment
				max_enrollment
				min_student_teacher_ratio
				max_student_teacher_ratio
			}
		}
	`;
	
	const { loading, error, data } = useQuery(GET_SCHOOLS, {
		variables: { zipcode },
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	const handleFormSubmit = event => {
		event.preventDefault();
		setZipcode(event.target.zipcode.value);
	}
	

	return (
		<>
			<PageTitle title="Schools" />
			<form onSubmit={handleFormSubmit} className="container flex justify-center">
				<input
					type="text"
					name="zipcode"
					placeholder="Search by Zip Code"
					className="border-2 border-gray-200 rounded-lg p-4"
					maxLength={5}
				/>
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					Search
				</button>
			</form>
			{/* <Sort setSort={setSort} sort={sort} /> */}
			
			<Schools schools={data.schools} />
		</>
	);
};

export default SchoolsScreen;
