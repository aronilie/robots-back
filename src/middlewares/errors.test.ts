import { Request, Response } from "express";
import notFoundError from "./errors";

describe("Given an notFoundError function.", () => {
  describe("When it`s called wit a response.", () => {
    test("Then it should call the method status from response with 404", () => {
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as Partial<Response>;
      const req = {} as Partial<Request>;
      const status = 404;

      notFoundError(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(status);
    });
  });
});
