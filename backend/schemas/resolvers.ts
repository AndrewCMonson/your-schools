import { SchoolModel, UserModel, SessionModel } from "../models/index.ts";
import { UserAttributes } from "../models/UserModel.ts";
import { AuthenticationError } from "apollo-server-express";
import { signToken } from "../utils/auth.ts";
import { hashPassword } from "../utils/hashPassword.ts";
import { Resolvers } from "../__generatedTypes__/graphql";
import { getLatLng } from "../services/GoogleMapsServices.ts";

const resolvers: Resolvers = {
  Query: {
    schools: async (_, { zipcode }) => {
      if (!zipcode) {
        return [];
      }
      const schools = await SchoolModel.find({ zipcode: zipcode });

      if (!schools) {
        throw new Error("No schools found with this zipcode");
      }

      return schools;
    },
    school: async (_, { id }) => {
      if (!id) throw new Error("Please provide an ID");

      const school = await SchoolModel.findById(id);

      if (!school) {
        throw new Error("No school found with this ID");
      }

      return school;
    },
    me: async (_, __, { user }) => {
      if (!user) throw new AuthenticationError("Not logged in");

      return user;
    },
    getFavorites: async (_, { username }) => {
      if (!username) throw new Error("Please provide a username");

      const params = username ? { username } : {};
      return UserModel.find(params).populate("favorites");
    },
  },
  User: {
    favorites: async (parent) => {
      const favorites = await SchoolModel.find({
        _id: { $in: parent.favoriteIds },
      });

      return favorites;
    },
  },
  // Schools: {
  //   latLng: async (parent) => {
  //     const { zipcode } = parent;
  //     const { location, bounds } = await getLatLngFromZipcode(zipcode || ""); // Ensure zipcode is not undefined
  //     return { location, bounds };
  //   },
  // },
  School: {
    latLng: async (parent) => {
      console.log("getting latlng");
      const { address, city, state } = parent;
      const { lat, lng } = await getLatLng(address, city, state);
      return { lat, lng };
    },
  },

  Mutation: {
    addUser: async (_, { username, email, password }, { res }) => {
      if (!username || !email || !password) {
        throw new AuthenticationError(
          "You need to provide a username, email, and password",
        );
      }

      const user = await UserModel.create({ username, email, password });
      const token = signToken(user);

      await SessionModel.create({
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
    updateUserInfo: async (_, { username, email, zipcode }, { user }) => {
      if (!user) throw new AuthenticationError("You need to be logged in");

      const updatedUser = await UserModel.findByIdAndUpdate(
        { _id: user.id },
        { username, email, zipcode },
        { new: true },
      );

      if (!updatedUser) {
        throw new AuthenticationError("Couldn't find user with this id");
      }

      return updatedUser;
    },
    updateUserPassword: async (_, { password, newPassword }, { user }) => {
      if (!user) throw new AuthenticationError("You need to be logged in");

      const loggedInUser = await UserModel.findById(user.id);

      if (!loggedInUser) {
        throw new AuthenticationError("Couldn't find user with this id");
      }

      if (password === "" || newPassword === "") {
        throw new AuthenticationError(
          "You need to provide a password and a new password",
        );
      }

      if (password === newPassword) {
        throw new AuthenticationError("New password cannot be the same");
      }

      const correctPw = await loggedInUser.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password");
      }

      const hashedPassword = await hashPassword(newPassword);

      const updatedUser = await UserModel.findByIdAndUpdate(
        { _id: user.id },
        { password: hashedPassword },
        { new: true },
      );

      if (!updatedUser) {
        throw new AuthenticationError("Couldn't find user with this id");
      }

      return updatedUser;
    },
    login: async (_, { email, password }, { req, res, user }) => {
      if (user) {
        return { user: user, token: req.cookies.token };
      }

      if (!email || !password) {
        throw new AuthenticationError(
          "You need to provide an email and password",
        );
      }

      const loggedInUser = await UserModel.findOne({ email });
      if (!loggedInUser) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await loggedInUser.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(loggedInUser);

      await SessionModel.create({
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

      const updatedUser = await UserModel.findOneAndUpdate(
        { _id: user.id },
        { $addToSet: { favoriteIds: schoolId } },
        { new: true },
      );

      if (!updatedUser) {
        throw new AuthenticationError("Couldn't find user with this id");
      }

      return updatedUser;
    },
    removeFromFavorites: async (_, { schoolId }, { user }) => {
      if (user) {
        const updatedUser = await UserModel.findByIdAndUpdate(
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
          await SessionModel.findOneAndDelete({ token: req.cookies.token });
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
