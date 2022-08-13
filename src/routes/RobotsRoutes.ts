import express from "express";
import getData from "../controllers/RobotsControllers";

const robotsRouter = express.Router();

robotsRouter.get("/", getData);

export default robotsRouter;
