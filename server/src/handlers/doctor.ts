import { Request, Response } from "express";
import { Doctor } from "@prisma/client";

import prisma from "../db";
import logger from "../logger";
import { LoginProps } from "../interface/user";
import { comparePassword, createJWTDoctor, hashPassword } from "../modules/auth";

interface CreateDoctorProps extends Request {
  body: {
    fullName: string;
    phone: string;
    email: string;
    password: string;
    specializations: string;
    experience: string;
  };
}

export const createDoctor = async (req: CreateDoctorProps, res: Response) => {
  logger.info(req.body);
  try {
    const doctor: Doctor = await prisma.doctor.create({
      data: {
        fullName: req.body.fullName,
        phone: req.body.phone,
        email: req.body.email,
        password: await hashPassword(req.body.password),
        specializations: req.body.specializations,
        experience: req.body.experience
      }
    });
    return res.status(200).json({ doctor });
  } catch (err: any) {
    logger.error(err);
    res.status(400).json({ error: "Bad Request" });
  }
};

export const doctorLogin = async (req: LoginProps, res: Response) => {
  const doctor: Doctor | null = await prisma.doctor.findUnique({
    where: {
      email: req.body.email
    }
  });

  if (!doctor) {
    logger.info("Doctor not found", req.body);
    return res.status(404).json({ error: "Doctor not found" });
  }

  const isPasswordValid = await comparePassword(req.body.password, doctor.password);

  if (isPasswordValid) {
    logger.info("Doctor successfully logged in");
    const token = createJWTDoctor(doctor);
    return res.json({ token });
  } else {
    return res.status(401).json({ error: "Incorrect password" });
  }
};

export const getAllDoctor = async (_req: Request, res: Response) => {
  try {
    // @ts-ignore
    const doctor: Doctor[] = await prisma.doctor.findMany({
      select: {
        id: true,
        fullName: true,
        email: true,
        phone: true,
        experience: true,
        specializations: true
      }
    });

    if (doctor.length === 0) {
      return res.status(404).json({ error: "Doctors not found" });
    }

    return res.status(200).json({ doctor });
  } catch (err: any) {
    logger.error(err);
    res.status(400).json({ error: "BAD REQUEST" });
  }
};

export const getSingleDoctor = async (req: Request, res: Response) => {
  try {
    const doctor = await prisma.doctor.findUnique({
      where: {
        id: req.params.id
      },
      select: {
        id: true,
        fullName: true,
        phone: true,
        email: true,
        specializations: true,
        experience: true,
        appointments: true
      }
    });

    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }
    return res.status(200).json(doctor);
  } catch (err: any) {
    logger.error(err);
    res.status(400).json({ error: "BAD REQUEST" });
  }
};

export const updateDoctor = async (req: Request, res: Response) => {
  try {
    const doctor: Doctor = await prisma.doctor.update({
      where: {
        id: req.params.id
      },
      data: {
        fullName: req.body.fullName,
        phone: req.body.phone,
        email: req.body.email,
        specializations: req.body.specializations,
        experience: req.body.experience
      }
    });

    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }

    return res.status(200).json({ doctor });
  } catch (err) {
    logger.error(err);
    res.status(400).json({ error: "BAD REQUEST" });
  }
};

export const updateDoctorPassword = async (req: Request, res: Response) => {
  try {
    const doctor = await  prisma.doctor.update({
      where: {
        id: req.params.id,
      },
      data: {
        password: await hashPassword(req.body.password)
      }
    })
    if (!doctor) {
      return res.status(404).json({ error: "doctor not found" });
    }
    return res.status(200).json({ doctor })
  } catch (err) {
    logger.error(err);
    res.status(400).json({ error: "BAD REQUEST" });
  }
}

export const deleteDoctor = async (req: Request, res: Response) => {
  try {
    const appointments = await prisma.appointments.deleteMany({
      where: {
        doctorId: req.params.id
      }
    })

    const doctor: Doctor = await prisma.doctor.delete({
      where: {
        id: req.params.id
      }
    });

    if(!appointments) {
      return res.status(404).json({ error: "Appointments not found"})
    }
    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" });

    }

    return res.status(200).json("Deleted doctor successfully");

  } catch (err) {
    logger.error(err);
    res.status(400).json({ error: "BAD REQUEST" });
  }
};
