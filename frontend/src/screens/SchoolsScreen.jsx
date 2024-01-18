import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Schools from '../components/Schools';
import SearchBar from '../components/SearchBar';
import PageTitle from '../components/PageTitle';
import fetchSchoolsByZip from '../utils/fetchSchools';

const SchoolsScreen = () => {
	const [schools, setSchools] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const [pageMessage, setPageMessage] = useState('Search for schools in your zip code');

	useEffect(() => {
		if (schools.length > 1) {
			setPageMessage(`Showing ${schools.length} schools in ${searchParams.get('zipcode')} `);
		}
		if (schools.length === 1) {
			setPageMessage(`Showing ${schools.length} school in ${searchParams.get('zipcode')}`);
		}
		if (schools.length === 0 && searchParams.get('zipcode')) {
			setPageMessage('No schools found in your area');
		}
	}, [schools, searchParams]);	

	useEffect(() => {
		if (searchParams) {
			try {
				fetchSchoolsByZip(searchParams.get('zipcode')).then(schools => {
					setSchools(schools);
				});
			} catch (error) {

				console.error(error);
			}
		} 
	}, [searchParams]);

	return (
		<>
			<PageTitle title="Schools" />
			<SearchBar setSearchParams={setSearchParams} />
			<h1 className="text-center text-4xl">{pageMessage}</h1>
			<Schools schools={schools} />
			
			
		</>
	);
};

export default SchoolsScreen;
