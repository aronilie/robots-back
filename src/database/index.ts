import mongoose from "mongoose";
import chalk from "chalk";
import Debug from "debug";

const debug = Debug("models-index");

const connectDB = (url: string): Promise<unknown> =>
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

export default connectDB;
