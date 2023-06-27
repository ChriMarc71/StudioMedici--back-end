import { Request, Response } from "express";
import Prisma from "../../database/connection";
 
const getDoctors = async (req: Request, res: Response) => {
    let searched = req.body.doctorUsername;
    let doctors;
    if (typeof searched != "undefined" ){
        doctors = await Prisma.doctors.findUnique({
            where:{
                Username:searched
            }
        })
    }else{
        doctors = await Prisma.doctors.findMany({})
    }
    res.send(doctors);
};
 
export default getDoctors;
