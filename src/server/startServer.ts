import chalk from "chalk";
import Debug from "debug";
import express from "express";
import CustomError from "../utils/CustomError";

export const app = express();

const debug = Debug("startServer");

export const startServer = (port: number) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.bgBlue.white(`Listening on port 3500`));
      resolve(true);
    });

    server.on("error", (error: CustomError) => {
      debug(chalk.bgRed.white("Error with the server: ", error.message));
      if (error.code === "EADDRINUSE") {
        debug(chalk.bgRed.white(`Port ${port} in use`));
      }
      reject(error);
    });
  });
