const { prisma } = require("../../database/connection"); 
const makeId = require("../../utils/makeId")
const postNewDoctor = async (req, res) => {
  await prisma.doctors.create({
    data: {
        Name:req.body.name,
        Surname:req.body.surname,
        Email:req.body.email,
        Username:req.body.username,
        Password:req.body.password,
        Number:req.body.number,
        TokenAmm: makeId(64),
        IsEnable:true,
    },
  });
  res.send("created");
};
module.exports = { postNewDoctor };