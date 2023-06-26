const mailTransporter = require("../../utils/mailTransporter"); 
const { prisma } = require("../../database/connection"); 
const forgottenPassword = async (req,res) =>{
  const email = req.body.email;
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
    text: "Copy and paste the follwoing token in the recovery form :\n\n"+resetToken[0].Token, 
  },function (error){
    if(error){
      console.log(error)
    }
  });
}
module.exports={forgottenPassword};