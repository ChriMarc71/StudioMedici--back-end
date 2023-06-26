const { prisma } = require("../../database/connection");
const createBooking = async (req,res)=>{
    await prisma.bookings.create({
        data:{
            StartTime:req.body.startTime,
            EndTime:req.body.endTime,
            PatientUsername:req.body.patient,
            PatientNumber:req.body.number,
            DoctorUsername: req.body.doctorUsername
        }
    })
}
module.exports = createBooking;