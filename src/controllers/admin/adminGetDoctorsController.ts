import { Request, Response } from "express";
import { prisma } from "../../database/connection";
 
const getDoctors = async (req: Request, res: Response) => {
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
 
export default getDoctors;
