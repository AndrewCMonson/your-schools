import axios from 'axios';

const fetchSchoolsByZip = async (zipcode) => {
	if (!zipcode) {
		return [];
	} else {
		const response = await axios.get(`/api/schools?zipcode=${zipcode}`);

		return response.data;
	}
};

export default fetchSchoolsByZip;
