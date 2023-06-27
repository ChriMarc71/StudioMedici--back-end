import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getPatients = async (req: Request, res: Response): Promise<void> => {
  let searched: string | undefined = req.body.patientUsername;
  let patients;
  if (typeof searched !== "undefined") {
    patients = await prisma.patients.findUnique({
      where: {
        username: searched,
      },
    });
  } else {
    patients = await prisma.patients.findMany({});
  }

  res.send(patients);
};

export default getPatients;
