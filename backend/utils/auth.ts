import process from "process";
import jwt, { JwtPayload } from "jsonwebtoken";
import { Request } from "express";

const secret = process.env.JWT_SECRET;
const expiration = process.env.JWT_EXPIRATION;

interface User {
  username: string;
  _id: string;
}

interface CustomRequest extends Request {
  user: string | JwtPayload;
}

const signToken = (user: User) => {
  const data = {
    username: user.username,
    id: user._id,
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
