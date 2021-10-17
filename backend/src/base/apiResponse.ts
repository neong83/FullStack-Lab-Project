import { Response } from "express";

function successResponse(response: Response, data: any) {
  response.status(200).json(data);
}

function userErrorResponse(response: Response, error: Error) {
  response.status(400).json({ error: "Invalid input", message: error.message });
}

function internalErrorResponse(response: Response, error: Error) {
  response
    .status(500)
    .json({ error: "Internal Error", message: error.message });
}

export const apiResponse = {
  successResponse,
  userErrorResponse,
  internalErrorResponse,
};
