import process from "process";
import jwt, { JwtPayload } from "jsonwebtoken";
import { Request } from "express";
import { User as UserType } from "../__generatedTypes__/graphql";

const secret = process.env.JWT_SECRET;
const expiration = process.env.JWT_EXPIRATION;

interface CustomRequest extends Request {
  user: string | JwtPayload;
}

const signToken = (user: UserType) => {
  const data = {
    username: user.username,
    id: user.id,
  };
  return jwt.sign({ data }, secret, { expiresIn: expiration });
};

const authMiddleware = ({ req }: { req: CustomRequest }) => {
  let token = req.body.token || req.query.token || req.headers.authorization;

  if (req.headers.authorization) {
    token = token.split(" ").pop().trim();
  }

  if (!token) {
    return req;
  }

  try {
    const data = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    console.log("Invalid token");
  }

  return req;
};

export { signToken, authMiddleware };
