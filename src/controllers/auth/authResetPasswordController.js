const { prisma } = require("../../database/connection"); 
const { makeid } = require("../../utils/makeId"); 
const resetPassword = async (req, res) => {
  await prisma.auth.update({
    where: { Token: req.body.token },
    data: { 
            Password: req.body.password,
            Token:makeid(64),
          },
  });
  res.send("Password aggiornata");
};
module.exports = { resetPassword };