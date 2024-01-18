import { Request, Response } from "express";
import { Admin } from "@prisma/client";

import prisma from "../db";
import logger from "../logger";
import { comparePassword, createJWTAdmin, hashPassword } from "../modules/auth";

interface AdminProps {
  fullName: string;
  email: string;
  password: string;
  phone: string;
}

export const createAdmin = async (): Promise<void> => {
  try {
    const adminFullName: string | undefined = process.env.ADMIN_FULLNAME;
    const adminEmail: string | undefined = process.env.ADMIN_EMAIL;
    const adminPassword: string | undefined = process.env.ADMIN_PASSWORD;
    const adminPhone: string | undefined = process.env.ADMIN_PHONE;

    if (!adminEmail || !adminFullName || !adminPassword || !adminPhone) {
      throw new Error("Missing required environment variables for admin creation.");
    }

    const getAdmin: Admin | null = await prisma.admin.findUnique({
      where: {
        email: adminEmail
      }
    });

    if (!getAdmin) {
      const hashedPassword: string = await hashPassword(adminPassword);

      const adminInput: AdminProps = {
        fullName: adminFullName,
        email: adminEmail,
        password: hashedPassword,
        phone: adminPhone
      };

      const admin: Admin = await prisma.admin.create({
        data: adminInput
      });

      logger.info("Admin created with default credentials", admin);
    }
  } catch (err: any) {
    logger.error(err.message || err.toString());
  }
};

export const adminLogin = async (req: Request, res: Response) => {
  const admin: Admin | null = await prisma.admin.findUnique({
    where: {
      email: req.body.email
    }
  });

  if (!admin) {
    logger.info("Admin not found", req.body);
    return res.status(404).json({ error: "Admin not found" });
  }

  const isPasswordValid = await comparePassword(req.body.password, admin.password);

  if (isPasswordValid) {
    logger.info("Admin successfully logged in");
    const token = createJWTAdmin(admin);
    return res.status(200).json({ token });
  } else {
    return res.status(401).json({ error: "incorrect password" });
  }
};

export const getAllAdmin = async (_req: Request, res: Response) => {
  try {
    const admins: Admin[] = await prisma.admin.findMany();

    if (admins.length === 0) {
      return res.status(404).json({ error: "admin not found" });
    }

    return res.status(200).json({ admins });
  } catch (err: any) {
    logger.error(err);
    res.status(400).json({ error: "BAD REQUEST" });
  }
};

export const getSingleAdmin = async (req: Request, res: Response) => {
  try {
    const admin: Admin | null = await prisma.admin.findUnique({
      where: {
        id: req.params.id
      }
    });

    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }

    return res.status(200).json(admin);

  } catch (err: any) {
    logger.error(err);
    return res.status(400).json({ error: "BAD REQUEST" });
  }
};

export const updateAdmin = async (req: Request, res: Response) => {
  try {
    const admin: Admin = await prisma.admin.update({
      where: {
        id: req.params.id,
      },
      data: req.body
    })
    return res.status(200).json(admin)
  } catch (err: any) {
    logger.error(err);
    return res.status(400).json({ error: "BAD REQUEST" });
  }
}

export const deleteAdmin = async (req: Request, res: Response) => {
  try {
    const admin: Admin | null = await prisma.admin.delete({
      where: {
        id: req.params.id
      }
    })

    if(!admin) {
      return res.status(404).json({ error: 'Admin not found' })
    }
    return res.status(200).json("Deleted Admin Successfully")

  } catch (err: any) {
    logger.error(err);
    return res.status(400).json({ error: "BAD REQUEST" });
  }
}