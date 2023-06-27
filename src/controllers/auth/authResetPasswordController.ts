import { Request, Response } from "express";
import { prisma } from "../../database/connection";
import { makeId } from "../../utils/makeId";

export const resetPassword = async (req: Request, res: Response): Promise<void> => {
  await prisma.auth.update({
    where: { Token: req.body.token },
    data: { 
      Password: req.body.password,
      Token: makeId(64),
    },
  });
  res.send("Password aggiornata");
};
