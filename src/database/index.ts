import mongoose from "mongoose";
import chalk from "chalk";
import Debug from "debug";

const debug = Debug("models-index");

const connectDB = (url: string): Promise<unknown> =>
  new Promise((resolve, reject) => {
    mongoose.set("toJSON", {
      virtuals: true,
      transform: (doc, ret) => {
        const newDocument = { ...ret };
        // eslint-disable-next-line no-underscore-dangle
        delete newDocument._id;
        // eslint-disable-next-line no-underscore-dangle
        delete newDocument.__v;
        return newDocument;
      },
    });

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
