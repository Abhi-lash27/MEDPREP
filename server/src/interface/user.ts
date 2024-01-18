import { Request} from "express";

export interface LoginProps extends Request {
  body: {
    email: string;
    password: string;
  }
}