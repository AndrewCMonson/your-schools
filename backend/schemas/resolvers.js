import { School, User } from '../models/index.js';
import { AuthenticationError } from 'apollo-server-express';
import { signToken } from '../utils/auth.js';

const resolvers = {
	Query: {
		schools: async (parent, args) => {
			const schools = await School.find({ zipcode: args.zipcode });
			return schools;
		},
		school: async (parent, { id }) => {
			const school = await School.findById(id);
			return school;
		},
		me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({ _id: context.user.id }).select(
					'-__v -password'
				);

				return userData;
			}

			throw new AuthenticationError('Not logged in');
		},
		getFavorites: async (parent, { username }) => {
			const params = username ? { username } : {};
			return User.find(params).populate('favorites');
		},
	},
	Mutation: {
		addUser: async (parent, { username, email, password }) => {
			const user = await User.create({ username, email, password });
			const token = signToken(user);

			return { token, user };
		},
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw new AuthenticationError('Incorrect credentials');
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError('Incorrect credentials');
			}

			const token = signToken(user);
			return { token, user };
		},
		addToFavorites: async (parent, { schoolId }, context) => {
			if (context.user) {
				// const school = await School.findById(schoolId);
				const updatedUser = await User.findOneAndUpdate(
					{ _id: context.user.id },
					{ $addToSet: { favorites: schoolId } },
					{ new: true }
				);

				return updatedUser;
			}

			if (!context.user) {
				throw new AuthenticationError('You need to be logged in!');
			}
		},
		removeFromFavorites: async (parent, { schoolId }, context) => {
			if (context.user) {
				const updatedUser = await User.findByIdAndUpdate(
					{ _id: context.user.id },
					{ $pull: { favorites: schoolId } },
					{ new: true }
				);

				return updatedUser;
			}

			throw new AuthenticationError('You need to be logged in!');
		},
	},
	User: {
		id: parent => parent._id,
		favorites: async parent =>
			School.find({
				_id: { $in: parent.favorites },
			}),
	},
};

export default resolvers;
