import process from "process";
import jwt, { JwtPayload } from "jsonwebtoken";
import { Request } from "express";
import { User as UserType } from "../__generatedTypes__/graphql";
import { ContextFunction, BaseContext } from "@apollo/server";
import { ExpressContextFunctionArgument } from "@apollo/server/express4";

const secret = process.env.JWT_SECRET;
const expiration = process.env.JWT_EXPIRATION;

export interface CustomRequest extends Request {
  user: string | JwtPayload;
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
  BaseContext
> = ({ req }: ExpressContextFunctionArgument): Promise<BaseContext> => {
  const customReq = req as CustomRequest;

  let token =
    customReq.body.token ||
    customReq.query.token ||
    customReq.headers.authorization;

  if (customReq.headers.authorization) {
    token = token.split(" ").pop().trim();
  }

  if (!token) {
    return Promise.resolve(customReq);
  }

  try {
    const data = jwt.verify(token, secret, { maxAge: expiration });
    customReq.user = data;
  } catch {
    console.log("Invalid token");
  }

  return Promise.resolve(customReq);
};
