import Prisma from "../../database/connection";
import { sendConfirmationEmail } from "../../utils/mailController";
import { makeId } from "../../utils/makeId";
import express from "express";
import isVaildEmail from "../../utils/mailValidator";

const app2 = express();
const register = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  const email = req.body.email;
  if (!isVaildEmail(email)) {
    res.send("invalid email");
  } else {
    const username = req.body.username;
    const password = req.body.password;
    await Prisma.patients.create({
      data: {
        Email: email,
        Username: username,
        Password: password,
        IsEnable: false,
        Token: makeId(64),
      },
    });
    const randomString: string = makeId(64);
    sendConfirmationEmail(email, randomString);
    res.send("Registration done, check emails to confirm the account");
    const confirmRegistration = async (
      _req: express.Request,
      _res: express.Response
    ): Promise<void> => {
      await Prisma.patients.update({
        where: {
          Email: email,
        },
        data: {
          IsEnable: true,
        },
      });
      _res.send("Registration confirmed");
    };
    app2.get("/" + randomString, confirmRegistration);
  }
};
app2.listen(3001);
export default register;
