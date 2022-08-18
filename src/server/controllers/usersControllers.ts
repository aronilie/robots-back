import { NextFunction, Request, Response } from "express";
import User from "../../database/models/User";
import { UserData, UserRegister } from "../../types/userTypes";
import {
  createToken,
  hashCompare,
  hashCreator,
  UserJwtPayload,
} from "../../utils/auth";
import CustomError from "../../utils/CustomError";

export const userRegister = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userData: UserRegister = req.body;
  userData.password = await hashCreator(userData.password);

  try {
    const newUser = await User.create(userData);

    res.status(201).json({ user: newUser });
  } catch (error) {
    const customError = new CustomError(
      400,
      error.message,
      "Error creating new user"
    );
    next(customError);
  }
};

export const userLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userError = new CustomError(
    401,
    "User not found",
    "User or password not valid"
  );

  const user: UserData = req.body;

  let findUsers: UserData[];

  try {
    findUsers = await User.find({ userName: user.userName });

    if (findUsers.length === 0) {
      next(userError);
      return;
    }
  } catch (error) {
    const findError = new CustomError(
      401,
      error.message,
      "Invalid username or password, fool"
    );
    next(findError);
    return;
  }

  try {
    const isPasswordValid = await hashCompare(
      user.password,
      findUsers[0].password
    );

    if (!isPasswordValid) {
      next(userError);
      return;
    }
  } catch (error) {
    const hashError = new CustomError(
      401,
      error.message,
      "Invalid username or password, fool"
    );
    next(hashError);
    return;
  }

  const payload: UserJwtPayload = {
    id: findUsers[0].id,
    userName: findUsers[0].userName,
  };

  const userToken = createToken(payload);
  res.status(200).json({ userToken });
};
