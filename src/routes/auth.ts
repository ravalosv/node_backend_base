import { Router, Request, Response } from "express";
import { loginCtrl, registerCtrl } from "../controller/auth.controller";

const router = Router();

/**
 * @route POST /auth/login
 */
router.post("/login", loginCtrl);

/**
 * @route POST /auth/register
 */
router.post("/register", registerCtrl);

export { router };
