import "./loadEnvironment";
import cors from "cors";
import morgan from "morgan";
import express from "express";
import { startServer, app } from "./server/startServer";
import connectDB from "./database/index";
import robotsRouter from "./server/routers/robotsRouter";
import { generalError, notFoundError } from "./server/middlewares/errors";
import usersRouter from "./server/routers/usersRouters";

const port = process.env.PORT ?? 3500;

const mongoUrl = process.env.MONGODB_URL;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/robots", robotsRouter);
app.use("/users", usersRouter);

app.use(notFoundError);
app.use(generalError);

(async () => {
  try {
    await connectDB(mongoUrl);
    await startServer(+port);
  } catch (error) {
    process.exit(1);
  }
})();
