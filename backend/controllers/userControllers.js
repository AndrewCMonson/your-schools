import User from '../models/UserModel.js';
import School from '../models/SchoolsModel.js';

// @desc get all users
// @route GET /api/users
// @access Public
const getUsers = async (req, res) => {
	try {
		const users = await User.find({});

		if (!users) {
			return res.status(404).json({ message: 'No users found' });
		}

		res.json(users);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server Error' });
	}
};

// @desc get single user
// @route GET /api/users/:id
// @access Public
const getUserById = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);

		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		res.json(user);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server Error' });
	}
};

// @desc   Get User's Favorites
// @route  GET /api/users/:id/favorites
// @access Public
const getUserFavorites = async (req, res) => {
	try {
		const user = await User.findById(req.params.id).populate('favorites');

		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}
		if (user.favorites.length === 0) {
			return res.status(404).json({ message: 'No favorites found' });
		}

		res.json(user.favorites);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server Error' });
	}
};

// @desc   Add school to user favorites
// @route  put /api/users/:id/favorites
// @access Private
const addToFavorites = async (req, res) => {
	try {
		const school = await School.findById(req.params.schoolId);
		const user = await User.findById(req.params.id);

		if (!school) {
			return res.status(404).json({ message: 'School not found' });
		}

		if (user.favorites.includes(school._id)) {
			return res.status(400).json({ message: 'School already in favorites' });
		}

		user.favorites.push(school._id);
		await user.save();

		res.json({ message: 'School added to favorites' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server Error' });
	}
};

export { getUsers, getUserById, addToFavorites, getUserFavorites };
