import { useState, useEffect } from 'react';
import School from '../components/School';
import SearchBar from '../components/SearchBar';
import  fetchSchoolsByZip from '../utils/fetchSchools';

const SchoolsScreen = () => {
	const [schools, setSchools] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		const schools = JSON.parse(window.localStorage.getItem('schools'));
		if(schools){
			setSchools(schools);
		}
	}, []);
	
	useEffect(() => {
		if(searchTerm){
			fetchSchoolsByZip(searchTerm).then(schools => {
				setSchools(schools);
				window.localStorage.setItem('schools', JSON.stringify(schools));
			});
		}
		
	}, [searchTerm]);

	return (
		<>
			
			<div className='container mx-auto my-4'>
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