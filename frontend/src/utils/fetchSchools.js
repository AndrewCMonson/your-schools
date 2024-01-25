import axios from 'axios';


// const fetchSchoolsByZip = async zipcode => {
// 	if (!zipcode) {
// 		return [];
// 	} else {
// 		const response = await axios.get(`/api/schools?zipcode=${zipcode}`);

// 		return response.data;
// 	}
// };

// const fetchAndSort = async (zipcode, sortValue, setSchools) => {
// 	const schools = await fetchSchoolsByZip(zipcode);
// 	const sortedSchools = sortSchools(schools, sortValue);
// 	setSchools(sortedSchools);
// };

const fetchSchools = async ({sort, zipcode}) => {
	console.log(sort, zipcode);
	if (!zipcode) return [];
	const response = await axios.get(`/api/schools?zipcode=${zipcode}&sort=${sort}`);	
	if (response.status !== 200) {
		return [];
	}
	return response.data;
	
}

export { fetchSchools };
