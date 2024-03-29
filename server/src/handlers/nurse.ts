import { Request, Response } from "express";
import { Nurse } from "@prisma/client";

import prisma from "../db";
import logger from "../logger";
import { LoginProps } from "../interface/user";
import { comparePassword, createJWTNurse, hashPassword } from "../modules/auth";

interface CreateNurseProps extends Request {
  body: {
    fullName: string
    phone: string
    email: string
    password: string
    experience: string
  };
}

export const createNurse = async (req: CreateNurseProps, res: Response) => {
  logger.info(req.body);
  try {
    const nurse = await prisma.nurse.create({
      data: {
        fullName: req.body.fullName,
        phone: req.body.phone,
        email: req.body.email,
        password: await hashPassword(req.body.password),
        experience: req.body.experience
      }
    });
    return res.status(200).json({ nurse });
  } catch (err: any) {
    logger.error(err);
    res.status(400).json({ error: "BAD REQUEST" });
  }
};

export const nurseLogin = async (req: LoginProps, res: Response) => {
  const nurse: Nurse | null = await prisma.nurse.findUnique({
    where: {
      email: req.body.email
    }
  });

  if (!nurse) {
    logger.info("Nurse not found", req.body);
    return res.status(404).json({ error: "Nurse not found" });
  }

  const isPasswordValid = await comparePassword(req.body.password, nurse.password);

  if (isPasswordValid) {
    logger.info("Nurse successfully logged in");
    const token = createJWTNurse(nurse);
    return res.json({ token });
  } else {
    return res.status(401).json({ error: "Incorrect password" });
  }
};

export const getAllNurse = async (_req: Request, res: Response) => {
  try {
    const nurse: Nurse[] = await prisma.nurse.findMany();

    if (nurse.length === 0) {
      return res.status(404).json({ error: "Nurses not found" });
    }
    return res.status(200).json({ nurse });
  } catch (err: any) {
    logger.error(err);
    res.status(400).json({ error: "BAD REQUEST" });
  }
};

export const getSingleNurse = async (req: Request, res: Response) => {
  try {
    const nurse = await prisma.nurse.findUnique({
      where: {
        id: req.params.id
      }
    });

    if (!nurse) {
      return res.status(404).json({ error: "Nurse not found" });
    }

    res.status(200).json(nurse);
  } catch (err: any) {
    logger.error(err);
    res.status(400).json({ error: "BAD REQUEST" });
  }
};

export const updateNurse = async (req: Request, res: Response) => {
  try {
    const nurse: Nurse = await prisma.nurse.update({
      where: {
        id: req.params.id
      },
      data: req.body
    });

    if (!nurse) {
      return res.status(404).json({ error: "Nurse not found" });
    }
    return res.status(200).json({ nurse });
  } catch (err: any) {
    logger.error(err);
    res.status(400).json({ error: "BAD REQUEST" });
  }
};

export const deleteNurse = async (req: Request, res: Response) => {
  try {
    const nurse = await prisma.nurse.delete({
      where: {
        id: req.params.id
      }
    });

    if (!nurse) {
      return res.status(404).json({ error: "Nurse not found" });
    }

    return res.status(200).json("Nurse deleted successfully");

  } catch (err) {
    logger.error(err);
    res.status(400).json({ error: "BAD REQUEST" });
  }
};