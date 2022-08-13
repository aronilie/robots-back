import express from "express";
import getData from "../controllers/robotsControllers";

const robotsRouter = express.Router();

robotsRouter.get("/", getData);

export default robotsRouter;
