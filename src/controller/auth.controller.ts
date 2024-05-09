import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth.service";

const registerCtrl = async ({ body }: Request, res: Response) => {
  const responseUser = await registerNewUser(body);

  res.send(responseUser);
};

const loginCtrl = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const responseUser = await loginUser({ email, password });

  if (responseUser === "USER_PASSWORD_WRONG") {
    res.status(401).send("USER_PASSWORD_WRONG");
    return;
  }
  res.send(responseUser);
};

export { registerCtrl, loginCtrl };
