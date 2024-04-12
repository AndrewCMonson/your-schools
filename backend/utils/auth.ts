import process from "process";
import jwt from "jsonwebtoken";
import { User as UserType } from "../__generatedTypes__/graphql";
import { ContextFunction } from "@apollo/server";
import { ExpressContextFunctionArgument } from "@apollo/server/express4";
import { User } from "../models/index.ts";
import { Response } from "express";

const secret = process.env.JWT_SECRET;
const expiration = process.env.JWT_EXPIRATION;

interface MyContext {
  user?: UserType | null;
  res: Response;
}

interface JwtPayload {
  data: {
    username: string;
    id: string;
  };
}

export const signToken = (user: UserType) => {
  const data = {
    username: user.username,
    id: user.id,
  };
  return jwt.sign({ data }, secret, { expiresIn: expiration });
};

export const authMiddleware: ContextFunction<
  [ExpressContextFunctionArgument],
  MyContext
> = async ({
  req,
  res,
}: ExpressContextFunctionArgument): Promise<MyContext> => {
  const token = req.cookies.token;

  if (!token) {
    console.error("No token found");
    return { res };
  }

  try {
    const { data } = jwt.verify(token, secret, {
      maxAge: expiration,
    }) as JwtPayload;

    const user = await User.findOne({
      _id: data.id,
    }).select("-__v -password");

    if (!user) {
      throw new Error("Cannot find a user with this id");
    }

    return { user, res };
  } catch (error) {
    console.error(error);
    return { res };
  }
};
