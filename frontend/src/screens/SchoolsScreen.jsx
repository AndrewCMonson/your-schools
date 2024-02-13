import { useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import Sort from '../components/Sort';
import PageTitle from '../components/PageTitle';
import { fetchSchools } from '../utils/fetchSchools';
import School from '../components/School';
import { Input, Button } from '@material-tailwind/react';

const SchoolsScreen = () => {
	const [schools, setSchools] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const [sort, setSort] = useState(searchParams.get('sort') || 'name');
	const [zipcode, setZipcode] = useState(searchParams.get('zipcode') || '');

	const getSchools = useCallback(async () => {
		// fetch schools with sort and zipcode
		console.log(zipcode);
		if (zipcode.length !== 5) return;
		const schools = await fetchSchools({ sort, zipcode });
		// store sort and zipcode in url
		setSearchParams({ sort, zipcode });
		// set schools
		setSchools(schools);
	}, [sort, zipcode, setSearchParams]);

	const handleSubmit = event => {
		event.preventDefault();
		getSchools();
	};

	const handleFormInputChange = event => {
		if (isNaN(event.target.value)) return;
		setZipcode(event.target.value);
	};

	return (
		<>
			<PageTitle title="Schools" />
			<form
				onSubmit={handleSubmit}
				className="container mx-auto relative flex w-full max-w-[24rem]"
			>
				<Input
					type="text"
					name="zipcode"
					label="Zip Code"
					size="md"
					value={zipcode}
					maxLength={5}
					onChange={handleFormInputChange}
				/>
				<Button
					type="submit"
					size="sm"
					color="blue"
					className="!absolute right-1 top-1 rounded"
				>
					Search
				</Button>
			</form>
			<Sort setSort={setSort} sort={sort} />
			<div className="flex">
				<div className="sm:w-1/2 md:w-1/3  p-4">
					{schools.map(school => (
						<School key={school.name} school={school} />
					))}
				</div>
				<div className="sm:w-1/2 md:w-2/3 p-4 text-center">Map PlaceHolder</div>
			</div>
		</>
	);
};

export default SchoolsScreen;
