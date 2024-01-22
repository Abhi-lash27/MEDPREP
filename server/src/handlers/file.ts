import { Request, Response } from "express";
// import { Reports} from "@prisma/client";

import prisma from "../db";
import logger from "../logger";

export const uploadFile = async (req: Request, res: Response) => {
  try {
    const file = await prisma.file.create({
      data: {
        data: req.file?.buffer as Buffer
      }
    });
    logger.info("file inserted", file);
    return res.status(200).json({ id: file.id });
  } catch (e) {
    logger.error(e);
    res.status(400).json({ error: "Bad request" });
  }
};


export const getFileById = async (req: Request, res: Response) => {
  try {
    const file = await prisma.file.findUnique({
      where: {
        id: req.params.id
      }
    })

    if (!file) {
      return res.status(404).json({ error: "File not found" });
    }

    res.writeHead(200, { "content-type": "application/pdf"})
    res.end(file.data, "binary")

  } catch (err) {
    logger.error(err);
    return res.status(400).json("BAD REQUEST");
  }
}

export const updateFile = async (req: Request, res: Response) => {
  try {
    const file = await prisma.file.update({
      where: {
        id: req.params.id,
      },
      data: {
        data: req.file?.buffer as Buffer
      }
    })

    return res.status(200).json({ file })
  } catch (err) {
    logger.error(err);
    return res.status(400).json("BAD REQUEST");
  }
}