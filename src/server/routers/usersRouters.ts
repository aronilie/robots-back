import express from "express";
import userRegister from "../controllers/usersControllers";

const usersRouter = express.Router();

usersRouter.post("/register", userRegister);

export default usersRouter;
