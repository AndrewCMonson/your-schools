import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;
const expriation = process.env.JWT_EXPIRATION;

export const signToken = ({ username, email, id }) => {
    const payload = { username, email, id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expriation });
};