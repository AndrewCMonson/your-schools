import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import setMessage from '../utils/setPageMessage';
import Schools from '../components/Schools';
import SearchBar from '../components/SearchBar';
import Sort from '../components/Sort';
import PageTitle from '../components/PageTitle';
import { fetchAndSort } from '../utils/fetchSchools';

const SchoolsScreen = () => {
	const [schools, setSchools] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const [sortValue, setSortValue] = useState('name');
	const [pageMessage, setPageMessage] = useState(
		'Search for schools in your zip code'
	);

	useEffect(() => {
		setMessage(schools, setPageMessage, searchParams)
	}, [schools, searchParams]);

	useEffect(() => {
		if (searchParams && sortValue) {
			fetchAndSort(searchParams.get('zipcode'), sortValue, setSchools);
		}
	}, [searchParams, sortValue]);

	return (
		<>
			<PageTitle title="Schools" />
			<SearchBar setSearchParams={setSearchParams} />
			<Sort setSortValue={setSortValue} />
			<h1 className="text-center text-4xl">{pageMessage}</h1>
			<Schools schools={schools} />
		</>
	);
};

export default SchoolsScreen;
