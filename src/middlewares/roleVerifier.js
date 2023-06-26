const CryptoJS = require("../utils/crypto");
async function controllRole(req,res,next,allowed){
    const tokenAmm = req.body.tokenAmm;
    if ("admin" in allowed){
        if (await Prisma.admin.findUnique({where:{TokenAmm:tokenAmm}}).length != null){
            next();
        }
    }else if("doctors" in allowed){
        if (await Prisma.doctors.findUnique({where:{TokenAmm:tokenAmm}}).length != null){
            next();
        }
    }else if ("secretaries" in allowed){
        if (await Prisma.secretaries.findUnique({where:{TokenAmm:tokenAmm}}).length != null){
            next();
        }
    }
    res.status(405).send("you are not allowed to access the resource if you are not in the staff");
}
module.exports = controllRole;