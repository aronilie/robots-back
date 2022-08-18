import express from "express";
import { createRobot, getRobots } from "../controllers/robotsControllers";

const robotsRouter = express.Router();

robotsRouter.get("/", getRobots);
robotsRouter.post("/create", createRobot);

export default robotsRouter;
