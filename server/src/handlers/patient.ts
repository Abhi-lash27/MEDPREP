import { Request, Response } from "express";
import { Patient } from "@prisma/client";

import prisma from "../db";
import logger from "../logger";
import { LoginProps } from "../interface/user";
import { comparePassword, hashPassword, createJWTPatient } from "../modules/auth";

interface CreatePatientProps extends Request {
  body: {
    fullName: string,
    phone: string,
    email: string,
    dob: string,
    bloodGroup: string,
    password: string,
    gender: string,
    age: string
  };
}

export const createPatient = async (req: CreatePatientProps, res: Response) => {
  logger.info(req.body);
  try {
    const patient: Patient = await prisma.patient.create({
      data: {
        fullName: req.body.fullName,
        phone: req.body.phone,
        email: req.body.email,
        dob: req.body.dob,
        bloodGroup: req.body.bloodGroup,
        password: await hashPassword(req.body.password),
        gender: req.body.gender,
        age: req.body.age
      }
    });
    return res.status(200).json({ patient });
  } catch (err) {
    logger.error(err);
    res.status(400).json({ error: "BAD REQUEST" });
  }
};

export const patientLogin = async (req: LoginProps, res: Response) => {
  const patient: Patient | null = await prisma.patient.findUnique({
    where: {
      email: req.body.email
    }
  });

  if (!patient) {
    logger.info("Patient not found", req.body);
    return res.status(404).json({ error: "Patient not found" });
  }

  const isPasswordValid = await comparePassword(req.body.password, patient.password);

  if (isPasswordValid) {
    logger.info("Patient successfully logged in");
    const token = createJWTPatient(patient);
    return res.json({ token });
  } else {
    return res.status(401).json({ error: "Incorrect password" });
  }
};

export const getAllPatients = async (_req: Request, res: Response) => {
  try {
    const patient = await prisma.patient.findMany({
      select: {
        fullName: true,
        email: true,
        dob: true,
        bloodGroup: true,
        gender: true,
        age: true,
        phone: true,
        appointments: true,
        reports: true,
        prescriptions: true
      }
    });

    if (patient.length === 0) {
      return res.status(404).json({ error: "Patients not found" });
    }
    return res.status(200).json({ patient });
  } catch (err: any) {
    logger.error(err);
    res.status(400).json({ error: "BAD REQUEST" });
  }
};

export const getSinglePatient = async (req: Request, res: Response) => {
  try {
    const patient = await prisma.patient.findUnique({
      where: {
        id: req.params.id
      },
      select: {
        fullName: true,
        email: true,
        dob: true,
        bloodGroup: true,
        gender: true,
        age: true,
        phone: true,
        appointments: true,
        reports: true,
        prescriptions: true
      }
    });

    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }
    return res.status(200).json(patient);
  } catch (err) {
    logger.error(err);
    res.status(400).json({ error: "BAD REQUEST" });
  }
};

export const updatePatient = async (req: Request, res: Response) => {
  try {
    const patient: Patient = await prisma.patient.update({
      where: {
        id: req.params.id
      },
      data: req.body
    })

    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }
    return res.status(200).json({ patient })
  } catch (err) {
    logger.error(err);
    res.status(400).json({ error: "BAD REQUEST" });
  }
};

export const deletePatient = async (req: Request, res: Response) => {
  try {
    const patient: Patient = await prisma.patient.delete({
      where: {
        id: req.params.id
      }
    })
    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }

    return res.status(200).json("Deleted Patient Successfully")
  } catch (err) {
    logger.error(err);
    res.status(400).json({ error: "BAD REQUEST" });
  }
}