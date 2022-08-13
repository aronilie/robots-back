import { Request, Response } from "express";
import getRobots from "./robotsControllers";
import Robot from "../../database/models/Robots";

describe("Given a robotsControllers controller", () => {
  describe("When is called getRobots function", () => {
    test("Then it should invoke a response status 200", async () => {
      const req = {} as Partial<Request>;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as Partial<Response>;

      Robot.find = jest.fn();
      await getRobots(req as Request, res as Response);
      const status = 200;
      expect(res.status).toBeCalledWith(status);
    });
  });
});
