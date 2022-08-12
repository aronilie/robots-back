import chalk from "chalk";
import Debug from "debug";
import { Request, Response } from "express";
import robots from "../data/data";

const debug = Debug("Robots-Controller");

const getData = (req: Request, res: Response) => {
  res.status(200).json({ robots });
  debug(chalk.bgBlue.white("Request has arrived!"));
};

export default getData;
