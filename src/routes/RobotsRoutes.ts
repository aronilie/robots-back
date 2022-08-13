import express from "express";
import { startServer } from "../server/startServer";

const robotsRouter = express.Router();

robotsRouter.get("/", startServer);

export default robotsRouter;
