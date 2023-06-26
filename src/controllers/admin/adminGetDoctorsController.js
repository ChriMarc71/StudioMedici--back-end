const { prisma } = require("../../database/connection"); 
const getDoctors = async (req,res) => {
    let searched = req.body.doctorUsername;
    let doctors;
    if (typeof searched != "undefined" ){
         doctors = await prisma.doctors.findUnique({
            where:{
                Username:searched
            }
        })
    }else{
         doctors = await prisma.doctors.findMany({})
    }
    res.send(doctors);
};
module.exports = getDoctors;