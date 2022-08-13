import { Request, Response } from "express";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const notFoundError = (req: Request, res: Response) => {
  res.status(404).json({ error: "Endpoint not found" });
};

export default notFoundError;
