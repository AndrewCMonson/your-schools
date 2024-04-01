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
    schools: async (_, args): Promise<SchoolType[]> => {
      const schools = await School.find({ zipcode: args.zipcode });
      return schools;
    },
    school: async (_, { id }): Promise<SchoolType> => {
      const school = await School.findById(id);

      if (!school) {
        throw new Error("No school found with this ID");
      }

      return school;
    },
    me: async (_, __, context): Promise<UserType> => {
      if (context.user) {
        const userData = await User.findOne({
          _id: context.user.data.id,
        }).select("-__v -password");

        if (!userData) {
          throw new AuthenticationError("Cannot find a user with this id");
        }

        const favorites = await School.find({
          _id: { $in: userData.favorites },
        });

        return { ...userData, favorites };
      }

      throw new AuthenticationError("Not logged in");
    },
    getFavorites: async (_, { username }) => {
      const params = username ? { username } : {};
      return User.find(params).populate("favorites");
    },
  },
  Mutation: {
    addUser: async (_, { username, email, password }): Promise<Auth> => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (_, { email, password }): Promise<Auth> => {
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
    addToFavorites: async (_, { schoolId }, context): Promise<UserAttribute> => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user.data.id },
          { $addToSet: { favorites: schoolId } },
          { new: true },
        );

        if (!updatedUser) {
          throw new AuthenticationError("Couldn't find user with this id");
        }

        return updatedUser.id;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    removeFromFavorites: async (
      _,
      { schoolId },
      context,
    ): Promise<UserType> => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user.data.id },
          { $pull: { favorites: schoolId } },
          { new: true },
        );

        if (!updatedUser) {
          throw new AuthenticationError("Couldn't find user with this id");
        }

        return updatedUser.id;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
  User: {
    id: (parent) => parent._id,
  },
  School: {
    id: (parent) => parent.id,
  },
};

export default resolvers;
