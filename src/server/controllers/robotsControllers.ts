import chalk from "chalk";
import Debug from "debug";
import { Request, Response } from "express";
import Robot from "../../database/models/Robots";

const debug = Debug("Robots-Controller");

export const getRobots = async (req: Request, res: Response) => {
  const robots = await Robot.find({});

  await res.status(200).json(robots);

  await debug(chalk.bgGreen.white("Request successful!"));
};

export const createRobot = async (req: Request, res: Response) => {
  const robot = req.body;
  await Robot.create(robot);
  res.status(201).json(robot);
};
