import chalk from "chalk";
import Debug from "debug";
import { Request, Response } from "express";
import Robot from "../../database/models/Robots";

const debug = Debug("Robots-Controller");

const getRobots = async (req: Request, res: Response) => {
  const robots = await Robot.find({});

  await debug(chalk.bgGreen.white("Request successful!"));

  await res.status(200).json({ robots });
};

export default getRobots;
