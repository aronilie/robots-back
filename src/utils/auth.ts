import "../loadEnvironment";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export interface UserJwtPayload {
  id: string;
  userName: string;
}

export const createToken = (payload: UserJwtPayload) =>
  jwt.sign(payload, process.env.SECRET);

export const hashCreator = (text: string) => {
  const salt = 10;

  return bcrypt.hash(text, salt);
};

export const hashCompare = (text: string, hash: string) =>
  bcrypt.compare(text, hash);
