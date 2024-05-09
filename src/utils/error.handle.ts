import { Response } from "express";

const handleHttp = (res: Response, error: string, errorRaw?: any) => {
  console.error(errorRaw || error);
  res.status(500);
  res.send(error);
};

export { handleHttp };
