import { Request, Response } from "express";

import logger from "../logger";
import { adminLogin } from "./admin";
import { doctorLogin } from "./doctor";
import { patientLogin } from "./patient";
import { nurseLogin } from "./nurse";

export const login = async (req: Request, res: Response) => {
  try {
    const role = req.params.role;

    switch (role) {
      case "admin":
        await adminLogin(req, res);
        break;
      case "doctor":
        await doctorLogin(req, res);
        break;
      case "patient":
        await patientLogin(req, res);
        break;
      case "nurse":
        await nurseLogin(req, res);
        break;
    }
  } catch (err: any) {
    logger.error(err);
    return res.status(400).json({ error: "Bad request" });
  }
};