import { Request, Response } from "express";
import { createRobot, getRobots } from "./robotsControllers";
import Robot from "../../database/models/Robot";

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

    test("And it should return a list of robots", async () => {
      const req = {} as Partial<Request>;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as Partial<Response>;
      const mockRobots = [
        {
          name: "",
          imageUrl: "",
          velocity: 0,
          resistance: 0,
          creationDate: "",
        },
      ];

      Robot.find = jest.fn().mockResolvedValue(mockRobots);
      await getRobots(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(mockRobots);
    });
  });
});

describe("Given a controller createRobot", () => {
  describe("When it´s called", () => {
    test("Then it should call the method status from res with 201", async () => {
      const req = {} as Partial<Request>;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as Partial<Response>;

      Robot.create = jest.fn();
      await createRobot(req as Request, res as Response);
      const status = 201;
      expect(res.status).toBeCalledWith(status);
    });

    test("And it should return a robot.", async () => {
      const mockRobot = {
        name: "",
        imageUrl: "",
        velocity: 0,
        resistance: 0,
        creationDate: "",
      };

      const req = {
        body: mockRobot,
      } as Partial<Request>;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as Partial<Response>;

      Robot.create = jest.fn().mockResolvedValue(mockRobot);
      await createRobot(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(mockRobot);
    });
  });
});
