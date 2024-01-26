import axios from 'axios';

const fetchSchools = async ({sort, zipcode}) => {
	console.log(sort, zipcode);
	if (!zipcode) return

	try {
		const response = await axios.get(`/api/schools?zipcode=${zipcode}&sort=${sort}`);
	return response.data;
	} catch (error) {
		return[]
	}
	
	
}

export { fetchSchools };