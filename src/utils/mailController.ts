import * as nodemailer from "nodemailer";

const mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your_email@gmail.com",
    pass: "your_email_password_here",
  },
});

export async function sendConfirmationEmail(email: string, randomString: string): Promise<void> {
  mailTransporter.sendMail({
    from: 'provaProgettoCGM@outlook.it',
    to: email,
    subject: "CONFIRM EMAIL",
    text: "Click here to confirm the email, and you will redirict on the login page",
    html: `<a href='http://localhost:3001/${randomString}'>Cliccami</a>`,
  }, function (error: any) {
    if (error) {
      console.log(error);
    }
  });
}
export default sendConfirmationEmail;
