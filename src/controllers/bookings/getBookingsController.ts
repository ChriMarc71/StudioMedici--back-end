import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getBooking = async (req: Request, res: Response) => {
  let searched = req.body.patientUsername;
  let bookings;
  if (typeof searched != "undefined") {
    bookings = await prisma.bookings.findUnique({
      where: {
        Username: searched,
      },
    });
  } else {
    bookings = await prisma.bookings.findMany({});
  }
  res.send(bookings);
};

export default getBooking;
