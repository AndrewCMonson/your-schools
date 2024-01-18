import axios from 'axios';
import sortSchools from './sortSchools';

const fetchSchoolsByZip = async zipcode => {
	if (!zipcode) {
		return [];
	} else {
		const response = await axios.get(`/api/schools?zipcode=${zipcode}`);

		return response.data;
	}
};

const fetchAndSort = async (zipcode, sortValue, setSchools) => {
	const schools = await fetchSchoolsByZip(zipcode);
	const sortedSchools = sortSchools(schools, sortValue);
	setSchools(sortedSchools);
};

export { fetchSchoolsByZip, fetchAndSort };
