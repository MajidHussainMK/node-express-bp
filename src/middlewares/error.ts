import express from 'express';
import { StatusCodes, getReasonPhrase } from 'http-status-codes';

export const errorMiddleware = (
  err: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log(err.message);
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR) });
  next(err);
};
