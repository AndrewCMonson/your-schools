import School from '../models/SchoolsModel.js';

// @desc	Fetch all schools
// @route	GET /api/schools/all
// @access	Public
const getAllSchools = async (req, res) => {
	try {
		const schools = await School.find({});

		if (!schools) {
			return res.status(404).json({ message: 'No schools found' });
		}

		res.json(schools);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server Error' });
	}
};

// @desc    Fetch schools sorted by search and sort criteria
// @route   GET /api/schools
// @access  Public
const getSchools = async (req, res) => {
	const { zipcode, sort } = req.query;

	if (zipcode.length < 5) {
		return;
	}

	if (!zipcode) {
		return res.status(404).json({ message: 'No zipcode provided' });
	}

	if (sort === 'rating') {
		try {
			const schools = await School.find({ zipcode: zipcode }).sort({
				rating: -1,
			});

			if (schools.length === 0) {
				return res.status(404).json({ message: 'No schools found' });
			}
			res.json(schools);
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Server Error' });
		}
	}

	if (sort === 'name') {
		try {
			const schools = await School.find({ zipcode: zipcode }).sort({ name: 1 });

			if (schools.length === 0) {
				return res.status(404).json({ message: 'No schools found' });
			}
			res.json(schools);
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Server Error' });
		}
	}

	if (sort === 'tuition_asc') {
		try {
			const schools = await School.find({ zipcode: zipcode }).sort({
				max_tuition: 1,
			});

			if (schools.length === 0) {
				return res.status(404).json({ message: 'No schools found' });
			}
			res.json(schools);
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Server Error' });
		}
	}

	if (sort === 'tuition_desc') {
		try {
			const schools = await School.find({ zipcode: zipcode }).sort({
				max_tuition: -1,
			});

			if (schools.length === 0) {
				return res.status(404).json({ message: 'No schools found' });
			}
			res.json(schools);
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Server Error' });
		}
	}
};

// @desc    Fetch single school
// @route   GET /api/schools/:id
// @access  Public
const getSchoolById = async (req, res) => {
	try {
		const school = await School.findById(req.params.id);

		if (!school) {
			return res.status(404).json({ message: 'School not found' });
		} else {
			res.json(school);
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server Error' });
	}
};

export { getSchools, getSchoolById, getAllSchools };
