import express, { NextFunction, Request, Response } from "express";

const BAD_REQUEST = 400;
const NO_CONTENT = 204;
const INTERNAL_SERVER_ERROR = 500;

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(INTERNAL_SERVER_ERROR);
  res.render("error", { error: err });
};
export const badRequest = (res: Response) => {
  return res.status(BAD_REQUEST).render("error", { status: "error", error: "Bad Request / Parameter!!" });
};
