import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import { handleHttp } from "../utils/error.handle";
import { IStorage } from "../interfaces/storage.interface";
import { RequestExt } from "../interfaces/requestExt.interface";
import { registerUpload } from "../services/storage.service";

const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req;

    // aqui se pueden agregar validaciones de mimetype, tamaño, etc
    console.log(file);

    const dataToRegister: IStorage = {
      fileName: `${file?.filename}`,
      idUser: `${user?.id}`,
      path: `${file?.path}`,
    };
    const response = await registerUpload(dataToRegister);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};

export { getFile };
