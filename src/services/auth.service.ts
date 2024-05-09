import { IAuth } from "../interfaces/auth.interface";
import { IUser } from "../interfaces/user.interface";
import { UserModel } from "../models/user.model";
import { encrypt, verify } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, name }: IUser) => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) {
    return "USER_ALREADY_EXISTS";
  }

  const passHash = await encrypt(password);
  const registerNewUser = await UserModel.create({ email, password: passHash, name });

  return registerNewUser;
};

const loginUser = async ({ email, password }: IAuth) => {
  const checkIs = await UserModel.findOne({ email });
  if (!checkIs) {
    return "USER_PASSWORD_WRONG";
  }

  const { password: passHash, ...userWithoutPassword } = checkIs.toObject();

  const isCorrect = await verify(password, passHash);

  if (!isCorrect) {
    return "USER_PASSWORD_WRONG";
  }

  const token = await generateToken(checkIs.email);

  const data = {
    user: userWithoutPassword,
    token,
  };
  return data;
};

export { registerNewUser, loginUser };
