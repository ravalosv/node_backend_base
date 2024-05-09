import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

const generateToken = async (id: string) => {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
  }

  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: "1d",
  });

  return jwt;
};

const verifyToken = async (jwt: string) => {
  try {
    const isOk = verify(jwt, JWT_SECRET!);
    return isOk;
  } catch (error) {
    return false;
  }
};

export { generateToken, verifyToken };
