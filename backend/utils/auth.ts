import process from "process";
import jwt from "jsonwebtoken";
import { User as UserType } from "../__generatedTypes__/graphql";
import { ContextFunction } from "@apollo/server";
import { ExpressContextFunctionArgument } from "@apollo/server/express4";
import { User, Session } from "../models/index.ts";
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

    if (!data) {
      throw new Error("Token not verified");
    }

    // fetch session with matching token
    const session = await Session.findOne({
      token,
    });

    console.log("Session: ", session);
    // if session is expired, throw error
    if (session && session.expires < new Date()) {
      throw new Error("Session expired");
    }
    // if session is not found, throw error
    if (!session) {
      throw new Error("Session not found");
    }
    const user = await User.findOne({
      _id: session.user,
    }).select("-__v -password");

    if (!user) {
      throw new Error("User Not authorized"); // might consider throwing "not auth" here
    }

    return { user, res };
  } catch (error) {
    console.error(error);
    throw new Error("User Not Authorized");
    return { res };
  }
};
