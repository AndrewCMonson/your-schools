import axios from 'axios';

const fetchSchoolsByZip = async zipcode => {
	if (!zipcode) {
		return [];
	} else {
		const { data } = await axios.get(`/api/schools/${zipcode}`);
		return data;
	}
};

export default fetchSchoolsByZip;
