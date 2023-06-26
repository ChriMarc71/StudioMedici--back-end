const { prisma } = require("../../database/connection"); 
const getBooking = async (req,res) => {
    let searched = req.body.patientUsername;
    let bookings;
    if (typeof searched != "undefined" ){
         bookings = await prisma.bookings.findUnique({
            where:{
                Username:searched
            }
        })
    }else{
         bookings = await prisma.bookings.findMany({})
    }
    res.send(bookings);
};
module.exports = getBooking;