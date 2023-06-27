mport express, { Router } from "express";
import { Request, Response, NextFunction } from "express";
import roleVerifier from "../middlewares/roleVerifier";
import { getPatients, updatePatients } from "../controllers/patients";

const router: Router = express.Router();

router.route("/").all(roleVerifier(["admin","doctors"]))
    .get((req: Request, res: Response, next: NextFunction) => {
        getPatients(req, res, next);
    })
    .put((req: Request, res: Response, next: NextFunction) => {
        updatePatients(req, res, next);
    });

export default router;
