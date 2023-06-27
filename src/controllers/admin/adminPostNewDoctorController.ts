import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { makeId } from "../../utils/makeId";

const prisma = new PrismaClient();

export const postNewDoctor = async (req: Request, res: Response) => {
  await prisma.doctors.create({
    data: {
      Name: req.body.name,
      Surname: req.body.surname,
      Email: req.body.email,
      Username: req.body.username,
      Password: req.body.password,
      Number: req.body.number,
      TokenAmm: makeId(64),
      IsEnable: true,
    },
  });
  res.send("created");
};
