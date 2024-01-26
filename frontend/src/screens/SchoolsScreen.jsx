import { useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import Schools from '../components/Schools';
import Sort from '../components/Sort';
import PageTitle from '../components/PageTitle';
import { fetchSchools } from '../utils/fetchSchools';




const SchoolsScreen = () => {
	const [schools, setSchools] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const [sort, setSort] = useState(searchParams.get('sort') || 'name');
	const [zipcode, setZipcode] = useState(searchParams.get('zipcode') || '');

	const getSchools = useCallback(async () => {
		// fetch schools with sort and zipcode
		console.log(zipcode)
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
			<form onSubmit={handleSubmit} className='container flex justify-center'>
				<input
					type="text"
					name="zipcode"
					placeholder="Search by Zip Code"
					className="border-2 border-gray-200 rounded-lg p-4"
					value={zipcode}
					maxLength={5}
					onChange={handleFormInputChange}
				/>
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					Search
				</button>		
			</form>
			<Sort setSort={setSort} sort={sort} />
			{schools.length === 0 && <p className="text-center">We Couldn&apos;t Find Any Schools in That Zipcode</p>}
			<Schools schools={schools} />
		</>
	);
};

export default SchoolsScreen;
