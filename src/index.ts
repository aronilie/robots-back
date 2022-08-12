import express from "express";
import Debug from "debug";
import chalk from "chalk";
import robotsRouter from "./routes/RobotsRoutes";

const app = express();
const debug = Debug("Robots-Index");
const port = process.env.PORT ?? 3500;
app.use(express.json());

app.use("/robots", robotsRouter);

app.listen(port, () => {
  debug(chalk.bgGreen.white("Server listening"));
});
