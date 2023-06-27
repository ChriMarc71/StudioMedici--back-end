import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { Mail } from "../../utils/mailTransporter";

const prisma = new PrismaClient();
const mailTransporter = new Mail();

export const forgottenPassword = async (req: Request, res: Response) => {
  const email: string = req.body.email;
  const resetToken = await prisma.auth.findMany({
    select: {
      Token: true,
    },
    where: {
      Email:email,
    },
  });

  res.send("Email for password recovery sent!");
  
  mailTransporter.sendMail({
    from: 'provaProgettoCGM@outlook.it', // sender address
    to: email, // list of receivers
    subject: "RESET PASSWORD",
    text: "Copy and paste the following token in the recovery form :\n\n" + resetToken[0].Token, 
  },function (error){
    if(error){
      console.log(error)
    }
  });
};
