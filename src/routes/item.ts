import { Router, Request, Response } from "express";
import { getCars, getCar, insertCar, updateCar, deleteCar } from "../controller/item.controller";
import { logMiddleware } from "../middleware/log.middleware";
import { checkJwt } from "../middleware/session.middleware";

const router = Router();

/**
 * @route GET /Cars
 */
router.get("/", checkJwt, getCars);
router.get("/:id", logMiddleware, getCar);
router.post("/", insertCar);
router.put("/:id", updateCar);
router.delete("/:id", deleteCar);

export { router };
