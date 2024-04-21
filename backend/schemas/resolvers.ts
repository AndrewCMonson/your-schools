import { School, User, Session } from "../models/index.ts";
import { UserAttributes } from "../models/UserModel.ts";
import { AuthenticationError } from "apollo-server-express";
import { signToken } from "../utils/auth.ts";
import {
  Auth,
  Resolvers,
  School as SchoolType,
  User as UserType,
} from "../__generatedTypes__/graphql";

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
    me: async (_, __, { user }): Promise<UserType> => {
      if (!user) throw new AuthenticationError("Not logged in");

      const favorites = await School.find({
        _id: { $in: user.favoriteIds },
      });

      return { ...user, favorites };
    },
    getFavorites: async (_, { username }) => {
      if (!username) throw new Error("Please provide a username");

      const params = username ? { username } : {};
      return User.find(params).populate("favorites");
    },
  },
  Mutation: {
    addUser: async (
      _,
      { username, email, password },
      { res },
    ): Promise<Auth> => {
      if (!username || !email || !password) {
        throw new AuthenticationError(
          "You need to provide a username, email, and password",
        );
      }

      const user = await User.create({ username, email, password });
      const token = signToken(user);

      await Session.create({
        user: user.id,
        token,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 3),
      });

      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 3,
      });

      return { token, user };
    },
    login: async (_, { email, password }, { res, user }): Promise<Auth> => {
      if (user) throw new AuthenticationError("You are already logged in");

      if (!email || !password) {
        throw new AuthenticationError(
          "You need to provide an email and password",
        );
      }

      const loggedInUser = await User.findOne({ email });
      if (!loggedInUser) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await loggedInUser.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(loggedInUser);

      await Session.create({
        user: loggedInUser.id,
        token,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 3),
      });

      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 3,
      });

      // TODO remove token
      return { token, user: loggedInUser };
    },
    addToFavorites: async (
      _,
      { schoolId },
      { user },
    ): Promise<UserAttributes> => {
      if (!schoolId) throw new Error("Please provide a school ID");

      if (!user) throw new AuthenticationError("You need to be logged in");

      const updatedUser = await User.findOneAndUpdate(
        { _id: user.id },
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
      { user },
    ): Promise<UserType> => {
      if (user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: user.id },
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
    logout: async (_, __, { user, res, req }): Promise<void> => {
      if (user) {
        try {
          await Session.findOneAndDelete({ token: req.cookies.token });
          res.clearCookie("token");
        } catch (error) {
          console.error(error);
          throw new Error("Error logging out");
        }
      }
    },
  },
};

export default resolvers;
