import { Request, Response } from "express";
import { Appointments } from "@prisma/client";

import prisma from "../db";
import logger from "../logger";

export const createAppointments = async (req: Request, res: Response) => {
  logger.info(req.body);
  try {
    const appointment: Appointments = await prisma.appointments.create({
      data: req.body
    });

    return res.status(200).json(appointment);
  } catch (err) {
    logger.error(err);
    return res.status(400).json("BAD REQUEST");
  }
};

export const getAllAppointments = async (_req: Request, res: Response) => {
  try {
    const appointment: Appointments[] = await prisma.appointments.findMany();

    if (appointment.length === 0) {
      return res.status(404).json("No Appointments found");
    }

    return res.status(200).json({ appointment });
  } catch (err) {
    logger.error(err);
    return res.status(400).json("BAD REQUEST");
  }
};

export const getSingleAppointment = async (req: Request, res: Response) => {
  try {
    const appointment: Appointments | null = await prisma.appointments.findUnique({
      where: {
        id: req.params.id
      }
    });

    if (!appointment) {
      return res.status(404).json("No Appointments found");
    }

    return res.status(200).json({ appointment });
  } catch (err) {
    logger.error(err);
    return res.status(400).json("BAD REQUEST");
  }
};

export const updateAppointment = async (req: Request, res: Response) => {
  try {
    const appointment = await prisma.appointments.update({
      where: {
        id: req.params.id
      },
      data: req.body
    });

    return res.status(200).json({ appointment });
  } catch (err) {
    logger.error(err);
    return res.status(400).json("BAD REQUEST");
  }
};

export const deleteAppointment = async (req: Request, res: Response) => {
  try {
    const appointment = await prisma.appointments.delete({
      where: {
        id: req.params.id
      }
    });

    if (!appointment) {
      return res.status(400).json({ error: "BAD REQUEST" });
    }
    return res.status(200).json("Appointment deleted successfully");
  } catch (err) {
    logger.error(err);
    return res.status(400).json("BAD REQUEST");
  }
};

// GET ALL FOR INDIVIDUAL DOCTOR

export const getAppointmentForDoctor = async (req: Request, res: Response) => {
  try {
    const appointments: Appointments[] = await prisma.appointments.findMany({
      where: {
        doctorId: req.params.doctorId
      },
      include: {
        patient: true,
        doctor: true
      },
      orderBy: {
        createdAt: "desc"
      }
    });

    if (appointments.length === 0 || !appointments) {
      return res.status(404).json({ error: "Appointments not found for the specified doctor" });
    }

    res.status(200).json(appointments);
  } catch (err) {
    logger.error(err);
    return res.status(400).json("BAD REQUEST");
  }
};

