import * as express from "express";
import { roleVerifier } from "../middlewares/roleVerifier";
import getPatients from "../controllers/patients/getPatientController";
import updatePatients from "../controllers/patients/updatePatientController";

const router = express.Router();
router.use(roleVerifier);
router.route("/").get(getPatients).put(updatePatients);

export default router;
