import { IStorage } from "../interfaces/storage.interface";
import StorageModel from "../models/storage.model";

const registerUpload = async ({ fileName, idUser, path }: IStorage) => {
  const responseItem = await StorageModel.create({ fileName, idUser, path });
  return responseItem;
};

export { registerUpload };
