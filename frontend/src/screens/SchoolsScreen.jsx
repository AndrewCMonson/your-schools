import { useState, useEffect } from 'react';
import axios from 'axios';
import School from '../components/School';
import SearchBar from '../components/SearchBar';

const SchoolsScreen = () => {
	const [schools, setSchools] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		const fetchSchools = async () => {
			const { data } = await axios.get(`/api/schools/${searchTerm}`);

			setSchools(data);
		};

		fetchSchools();
	}, [searchTerm]);

	return (
		<>
			
			<div className='container mx-auto'>
                <h1 className='text-center text-4xl'>Schools</h1>
            </div>
            <SearchBar setSearchTerm={setSearchTerm} />
			<div className="container mx-auto">
				{schools.map(school => (
					<School key={school.name} school={school} />
				))}
			</div>
		</>
	);
};

export default SchoolsScreen;