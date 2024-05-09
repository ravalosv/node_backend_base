import { Request, Response } from "express";

import { handleHttp } from "../utils/error.handle";
import * as serv from "../services/item.service";
import { RequestExt } from "../interfaces/requestExt.interface";

const getCar = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const responseItems = await serv.getCar(id);
    const response = responseItems ? responseItems : "NOT_FOUND";
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_CAR");
  }
};

const getCars = async (req: RequestExt, res: Response) => {
  try {
    console.log(req.user);

    const responseItems = await serv.getCars();
    res.send(responseItems);
  } catch (e) {
    handleHttp(res, "ERROR_GET_CARS");
  }
};
const updateCar = async ({ params, body }: Request, res: Response) => {
  try {
    const id = params.id;
    const responseItem = await serv.updateCar(id, body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_CAR");
  }
};
const insertCar = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await serv.insertCar(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_INSERT_CAR", e);
  }
};
const deleteCar = async ({ params }: Request, res: Response) => {
  try {
    const id = params.id;
    const response = await serv.deleteCar(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_CAR");
  }
};

export { getCar, getCars, updateCar, insertCar, deleteCar };
