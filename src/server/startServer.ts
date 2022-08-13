import chalk from "chalk";
import Debug from "debug";
import express from "express";
import mongoose from "mongoose";

const app = express();

const debug = Debug("startServer");

export const startServer = (port: number) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.blue(`Server up and listening on http://localhost:${port}`));
      resolve(true);
    });

    server.on("error", (error) => {
      debug(chalk.red("Error connecting to database: ", error.message));
      reject(error);
    });
  });

export const connectDB = (url: string): Promise<unknown> =>
  new Promise((resolve, reject) => {
    mongoose.connect(url, (error) => {
      if (error) {
        debug(chalk.bgRed.white("Could not connect with database"));
        reject(error);
        return;
      }

      debug(chalk.bgGreen.white("Connected to the database"));
      resolve(true);
    });
  });
