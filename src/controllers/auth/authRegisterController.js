const { prisma } = require("../../database/connection"); 
const {sendConfirmationEmail} = require("./sendConfirmationEmail.js");
const { makeid } = require("../../utils/makeId"); 
const express = require("express");
const isVaildEmail = require("../../utils/mailValidator"); 
const app2 = express();
const register = async (req, res) => {
  const email = req.body.email;
  if(!isVaildEmail(email)){
    res.send("invalid email")
  }else{
  const username = req.body.username;
  const password = req.body.password;
  await prisma.auth.create({
    data: {
      Email: email,
      Username: username,
      Password: password,
      IsEnable:false,
      Token:makeid(64)
    },
  });
  const randomString = makeid(64);
  sendConfirmationEmail(email,randomString);
  res.send("Registration done, check emails to confirm the account");
  app2.get("/"+randomString, async (req,res)=>{
    await prisma.auth.update({
      where:{
        Email:email
      },
      data:{
        IsEnable:true
      }
    })
    res.send("Registration confirmed")
  });
  }
}
app2.listen(3001)
module.exports = { register };