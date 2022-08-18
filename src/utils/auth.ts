import "../loadEnvironment";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export interface JwtPayload {
  id: string;
  userName: string;
}

export const createToken = (payload: JwtPayload) =>
  jwt.sign(payload, process.env.SECRET);

export const hashCreator = (text: string) => {
  const salt = 10;

  return bcrypt.hash(text, salt);
};
