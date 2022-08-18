import express from "express";
import { userRegister, userLogin } from "../controllers/usersControllers";

const usersRouter = express.Router();

usersRouter.post("/register", userRegister);
usersRouter.post("/login", userLogin);

export default usersRouter;
