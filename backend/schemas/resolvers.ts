import { School, User } from "../models/index.ts";
import { UserAttributes } from "../models/UserModel.ts";
import { AuthenticationError } from "apollo-server-express";
import { signToken } from "../utils/auth.ts";
import {
  Auth,
  Resolvers,
  School as SchoolType,
  User as UserType,
} from "../__generatedTypes__/graphql";
import { ConnectionStates } from "mongoose";

const resolvers: Resolvers = {
  Query: {
    schools: async (_, { zipcode }): Promise<SchoolType[]> => {
      if (!zipcode) {
        return [];
      }
      const schools = await School.find({ zipcode: zipcode });
      return schools;
    },
    school: async (_, { id }): Promise<SchoolType> => {
      if (!id) throw new Error("Please provide an ID");

      const school = await School.findById(id);

      if (!school) {
        throw new Error("No school found with this ID");
      }

      return school;
    },
    me: async (_, __, context): Promise<UserType> => {
      if (!context.user) throw new AuthenticationError("Not logged in");

      const userData = await User.findOne({
        _id: context.user.data.id,
      }).select("-__v -password");

      if (!userData) {
        throw new AuthenticationError("Cannot find a user with this id");
      }

      const favorites = await School.find({
        _id: { $in: userData.favoriteIds },
      });

      return { ...userData, favorites };
    },
    getFavorites: async (_, { username }) => {
      if (!username) throw new Error("Please provide a username");

      const params = username ? { username } : {};
      return User.find(params).populate("favorites");
    },
  },
  Mutation: {
    addUser: async (_, { username, email, password }): Promise<Auth> => {
      if (!username || !email || !password) {
        throw new AuthenticationError(
          "You need to provide a username, email, and password",
        );
      }

      const user = await User.create({ username, email, password });
      const token = signToken(user.id.toString());

      return { token, user };
    },
    login: async (_, { email, password }, context): Promise<Auth> => {
      if (!email || !password) {
        throw new AuthenticationError(
          "You need to provide an email and password",
        );
      }

      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      context.res.cookie("token", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
        secure: true,
      });
      return { token, user };
    },
    addToFavorites: async (
      _,
      { schoolId },
      context,
    ): Promise<UserAttributes> => {
      if (!schoolId) throw new Error("Please provide a school ID");
      if (!context.res.cookie("token"))
        throw new AuthenticationError("You need to be logged in. THIS IS A COOKIE ERROR");

      // if (!context.user)
      //   throw new AuthenticationError("You need to be logged in")

      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user.data.id },
        { $addToSet: { favoriteIds: schoolId } },
        { new: true },
      );

      if (!updatedUser) {
        throw new AuthenticationError("Couldn't find user with this id");
      }

      return updatedUser;
    },
    removeFromFavorites: async (
      _,
      { schoolId },
      context,
    ): Promise<UserType> => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user.data.id },
          { $pull: { favoriteIds: schoolId } },
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
};

export default resolvers;
