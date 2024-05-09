import { Request, Response, NextFunction } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(`Request URL: ${req.originalUrl}`);
  next();
};

export { logMiddleware };
