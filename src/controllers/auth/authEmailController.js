const mailTransporter = require ("../../utils/mailTransporter") 
const sendConfirmationEmail =  async (email,randomString)=>{
  mailTransporter.sendMail({
    from: 'provaProgettoCGM@outlook.it',
    to: email,
    subject: "CONFIRM EMAIL",
    text: "Click here to confirm the email, and you will redirict on the login page",
    html: "<a href='http://localhost:3001/" + randomString + "'>Cliccami<a/>", // html body
  }, function (error, info) {
    if (error) {
      console.log(error);
    }
  });
}
module.exports={sendConfirmationEmail};