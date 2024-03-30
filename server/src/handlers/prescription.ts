import { Request, Response } from "express";
import { Patient,Prescription } from "@prisma/client";

import prisma from "../db";
import logger from "../logger";

export const createPrescriptions = async (req: Request, res: Response) => {
  logger.info(req.body);
  try {

    const prescription: Prescription = await prisma.prescription.create({
      data: {
        patientId: req.body.patientId,
        medication: req.body.medication,
        dosage: req.body.dosage,
        description: req.body.description
      }
    });
    return res.status(200).json(prescription);
  } catch (err) {
    logger.error(err);
    return res.status(400).json("BAD REQUEST");
  }
};

export const getAllPrescriptions = async (req: Request, res: Response) => {
  try {
    const prescriptions: Prescription[] = await prisma.prescription.findMany({
      where: {
        patientId: req.params.patientId
      }
    });

    if (prescriptions.length === 0) {
      return res.status(404).json("No Prescriptions found");
    }

    return res.status(200).json({ prescriptions });

  } catch (err) {
    logger.error(err);
    return res.status(400).json("BAD REQUEST");
  }
};

export const getSinglePrescription = async (req: Request, res: Response) => {
  try {
    const prescription: Prescription | null = await prisma.prescription.findUnique({
      where: {
        id: req.params.id
      }
    });

    if (!prescription) {
      return res.status(404).json("No Prescription found");
    }

    return res.json({ prescription });
  } catch (err) {
    logger.error(err);
    return res.status(400).json("BAD REQUEST");
  }
};

export const updatePrescription = async (req: Request, res: Response) => {
  try {
    const prescription = await prisma.prescription.update({
      where: {
        id: req.params.id
      },
      data: req.body
    });
    return res.status(200).json({ prescription });
  } catch (err) {
    logger.error(err);
    return res.status(400).json("BAD REQUEST");
  }
};

export const deletePrescription = async (req: Request, res: Response) => {
  try {
    const prescription = await prisma.prescription.delete({
      where: {
        id: req.params.id
      }
    })

    if(!prescription) {
      return res.status(400).json("BAD REQUEST");
    }

    return res.status(200).json("Prescription deleted successfully");

  } catch (err) {
    logger.error(err);
    return res.status(400).json("BAD REQUEST");
  }
};