import chalk from "chalk";
import Debug from "debug";
import express from "express";

export const app = express();

const debug = Debug("startServer");

export const startServer = (port: number) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.bgBlue.white(`Listening`));
      resolve(true);
    });

    server.on("error", (error) => {
      debug(chalk.red("Error with the server: ", error.message));
      reject(error);
    });
  });
