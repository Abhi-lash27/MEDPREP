import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface User {
  id: string;
  fullName: string;
  email: string;
}

type Role = "admin" | "doctor" | "nurse" | "patient"

interface JWTClaims {
  name: string;
  email: string;
  role: Role;
}

export const comparePassword = (password: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(password, hash)
};

export const hashPassword = async (password: string): Promise<string> => {
  try {
    return await bcrypt.hash(password, 7);
  } catch (e) {
    throw new Error("Password hashing failed");
  }
};

const createJWT = (user: User, role: JWTClaims["role"]): string => {
  const token: string= jwt.sign({
      id: user.id,
      name: user.fullName,
      email: user.email,
      role: role
    } as JWTClaims,
    process.env.SECRET_KEY as string);
  return token;
};

export const createJWTAdmin = (user: User) => {
  return createJWT(user, "admin")
}

export const createJWTDoctor = (user: User) => {
  return createJWT(user, "doctor")
}

export const createJWTNurse = (user: User) => {
  return createJWT(user, "nurse")
}

export const createJWTPatient = (user: User) => {
  return createJWT(user, "patient")
}
