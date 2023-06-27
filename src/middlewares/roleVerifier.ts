import CryptoJS from "../utils/crypto";
import { Request, Response, NextFunction } from "express";

async function controllRole(req: Request, res: Response, next: NextFunction, allowed: {[key: string]: boolean}): Promise<void> {
  const tokenAmm = req.body.tokenAmm;
  if (allowed.admin){
    if ((await Prisma.admin.findUnique({where:{TokenAmm:tokenAmm}})).length != null){
        next();
    }
  }else if(allowed.doctors){
    if ((await Prisma.doctors.findUnique({where:{TokenAmm:tokenAmm}})).length != null){
        next();
    }
  }else if (allowed.secretaries){
    if ((await Prisma.secretaries.findUnique({where:{TokenAmm:tokenAmm}})).length != null){
        next();
    }
  }
  res.status(405).send("you are not allowed to access the resource if you are not in the staff");
}

export = controllRole;
