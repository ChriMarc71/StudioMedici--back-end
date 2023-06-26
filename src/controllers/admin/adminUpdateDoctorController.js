const { prisma } = require("../../database/connection"); 
const updateDoctor = async (req,res) => {
    const doctorUsername = req.body.doctorUsername; 
    const toChange = req.body.toChange; 
    const data = req.body.data;
    if(typeof doctorUsername == "undefined"||typeof toChange =="undefined" || typeof data == "undefined" ){
        res.status(400).send("undefined field/s!")
    }
    prisma.doctors.update({
        where:{
            Username:doctorUsername
        },
        data:"{"+toChange+":"+data+"}"
    })
    res.send("Updated");
};
module.exports = updateDoctor;