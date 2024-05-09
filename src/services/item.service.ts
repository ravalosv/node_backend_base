import { Car } from "../interfaces/car.interface";
import { ItemModel } from "../models/item.model";

const insertCar = async (item: Car) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};

const getCars = async () => {
  const responseGet = await ItemModel.find();
  return responseGet;
};

const getCar = async (id: string) => {
  const responseGet = await ItemModel.findOne({ _id: id });
  return responseGet;
};

const updateCar = async (id: string, item: Car) => {
  // Busca y actualiza el carro, devuelve el carro actualizado
  const responseUpdate = await ItemModel.findOneAndUpdate({ _id: id }, item, { new: true });
  return responseUpdate;
};

const deleteCar = async (id: string) => {
  const responseDelete = await ItemModel.deleteOne({ _id: id });
  return responseDelete;
};

export { insertCar, getCars, getCar, updateCar, deleteCar };
