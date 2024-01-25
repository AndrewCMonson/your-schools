import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import setMessage from '../utils/setPageMessage';
import Schools from '../components/Schools';
import Sort from '../components/Sort';
import PageTitle from '../components/PageTitle';
import { fetchSchools } from '../utils/fetchSchools';
import setLocalStorage from '../utils/localStorage';


const SchoolsScreen = () => {
	const [schools, setSchools] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const [sort, setSort] = useState(searchParams.get('sort') || 'name');
	const [zipcode, setZipcode] = useState(searchParams.get('zipcode') || '');
	const [pageMessage, setPageMessage] = useState(
		'Search for schools in your zip code'
	);

	const getSchools = useCallback(async () => {
		// fetch schools with sort and zipcode
		if (zipcode.length !== 5) return;

		const schools = await fetchSchools({ sort, zipcode });
		setSearchParams({ sort, zipcode });
		setSchools(schools);
		setMessage(schools, setPageMessage, zipcode);
		setLocalStorage(schools, zipcode)
	}, [sort, zipcode, setSearchParams]);

	const handleFormInputChange = event => {
		if (isNaN(event.target.value)) return;

		setZipcode(event.target.value);
	};



	return (
		<>
			<PageTitle title="Schools" />
			<div className='container flex justify-center'>
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
					onClick={getSchools}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					Search
				</button>		
			</div>
			<Sort setSort={setSort} />
			<h1 className="text-center text-4xl">{pageMessage}</h1>
			<Schools schools={schools} />
		</>
	);
};

export default SchoolsScreen;
