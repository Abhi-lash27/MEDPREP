import { Request, Response } from "express";
// import { Reports } from "@prisma/client";

import prisma from "../db";
import logger from "../logger";
import { Reports } from "@prisma/client";

export const createReport = async (req: Request, res: Response) => {
  logger.info(req.body);
  try {
    const { patientId, title, fileId, description } = req.body;
    const report: Reports = await prisma.reports.create({
      data: {
        patientId,
        title,
        fileId,
        description
      }
    });

    return res.status(200).json(report);
  } catch (err: any) {
    logger.error(err);
    return res.status(400).json({error: err.message});
  }
};

export const getReportsByPatientId = async (req: Request, res: Response) => {
  try {
    const reports = await prisma.reports.findMany({
      where: {
        patientId: req.params.patientId
      },
      orderBy: {
        createdAt: "desc"
      }
    });

    if (reports.length === 0 || !reports) {
      return res.status(404).json({ error: "Reports not found" });
    }

    return res.status(200).json(reports);
  } catch (err) {
    logger.error(err);
    return res.status(400).json("BAD REQUEST");
  }
};

export const updateReport = async (req: Request, res: Response) => {
  try {
    const report = await prisma.reports.update({
      where: {
        id: req.params.id
      },
      data: req.body
    });

    return res.status(200).json({ report });
  } catch (err) {
    logger.error(err);
    return res.status(400).json("BAD REQUEST");
  }
};

export const deleteReport = async (req: Request, res: Response) => {
  try {
    const report = await prisma.reports.delete({
      where: {
        id: req.params.id
      }
    });

    if (!report) {
      return res.status(404).json("BAD REQUEST");
    }

    return res.status(200).json("Report deleted successfully");
  } catch (err) {
    logger.error(err);
    return res.status(400).json("BAD REQUEST");
  }
};

