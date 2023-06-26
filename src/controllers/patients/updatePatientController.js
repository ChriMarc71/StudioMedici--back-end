const { prisma } = require("../../database/connection"); 
const updatePatients = async (req,res) => {
    const patientUsername = req.body.patientUsername; 
    const toChange = req.body.toChange; 
    const data = req.body.data;
    if(typeof patientUsername == "undefined"||typeof toChange =="undefined" || typeof data == "undefined" ){
        res.status(400).send("undefined field/s!")
    }
    prisma.patients.update({
        where:{
            Username:patientUsername
        },
        data:"{"+toChange+":"+data+"}"
    })
    res.send("Updated");
};
module.exports = updatePatients