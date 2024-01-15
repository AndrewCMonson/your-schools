import { useState, useEffect } from 'react';
import axios from 'axios';
import School from '../components/School';

const SchoolsScreen = () => {
	const [schools, setSchools] = useState([]);

	useEffect(() => {
		const fetchSchools = async () => {
			const { data } = await axios.get('/api');

			setSchools(data);
		};

		fetchSchools();
	}, []);

	return (
		<>
			<div className='container mx-auto'>
                <h1 className='text-center text-4xl'>Schools</h1>
            </div>
            
			<div className="container mx-auto">
				{schools.map(school => (
					<School key={school.name} school={school} />
				))}
			</div>
		</>
	);
};

export default SchoolsScreen;