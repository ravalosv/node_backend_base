import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/requestExt.interface";

const checkJwt = async (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";

    const jwt = jwtByUser.split(" ").pop();

    const isUser = await verifyToken(`${jwt}`);

    if (!isUser) {
      res.status(401).send({ message: "Unauthorized" });
      return;
    }

    req.user = isUser as JwtPayload;

    next();
  } catch (error) {
    res.status(401).send({ message: "Unauthorized" });
  }
};

export { checkJwt };
