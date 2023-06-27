import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const updateDoctor = async (req: any, res: any) => {
    const doctorUsername: string = req.body.doctorUsername;
    const toChange: string = req.body.toChange;
    const data: any = req.body.data;

    if (typeof doctorUsername === "undefined" || typeof toChange === "undefined" || typeof data === "undefined" ){
        res.status(400).send("undefined field/s!");
    }

    await prisma.doctors.update({
        where: {
            Username: doctorUsername
        },
        data: {
            [toChange]: data
        }
    });

    res.send("Updated");
};

export default updateDoctor;
