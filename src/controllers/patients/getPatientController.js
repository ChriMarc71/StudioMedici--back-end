const { prisma } = require("../../database/connection"); 
const getPatients = async (req,res) => {
    let searched = req.body.patientUsername;
    let patients;
    if (typeof searched != "undefined" ){
         patients = await prisma.patients.findUnique({
            where:{
                username:searched
            }
        })
    }else{
         patients = await prisma.patients.findMany({})
    }
        

    res.send(patients);
};
module.exports = getPatients;