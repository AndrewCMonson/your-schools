import { School, User } from "../models";
import { AuthenticationError } from "apollo-server-express";
import { signToken } from "../utils/auth";
import {
  Auth,
  Resolvers,
  School as SchoolType,
  User as UserType,
} from "../__generatedTypes__/graphql";

const resolvers: Resolvers = {
  Query: {
    schools: async (parent, args): Promise<SchoolType[]> => {
      const schools = await School.find({ zipcode: args.zipcode });
      return schools.map((school) => school.toObject());
    },
    school: async (parent, { id }): Promise<SchoolType> => {
      const school = await School.findById(id);
      return school;
    },
    me: async (parent, args, context): Promise<UserType> => {
      if (context.user) {
        const userData = await User.findOne({
          _id: context.user.data.id,
        }).select("-__v -password");
        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    getFavorites: async (parent, { username }) => {
      const params = username ? { username } : {};
      return User.find(params).populate("favorites");
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }): Promise<Auth> => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }): Promise<Auth> => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    addToFavorites: async (parent, { schoolId }, context): Promise<UserType> => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user.data.id },
          { $addToSet: { favorites: schoolId } },
          { new: true },
        );

        return updatedUser;
      }

      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }
    },
    removeFromFavorites: async (parent, { schoolId }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user.data.id },
          { $pull: { favorites: schoolId } },
          { new: true },
        );

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
  User: {
    id: (parent) => parent._id,
    favorites: async (parent) =>
      School.find({
        _id: { $in: parent.favorites },
      }),
  },
};

export default resolvers;
