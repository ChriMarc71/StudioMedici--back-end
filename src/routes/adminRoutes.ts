import * as express from 'express';
import {roleVerifier} from '../middlewares/roleVerifier';
import getDoctors from '../controllers/admin/adminGetDoctorsController';
import updateDoctors from '../controllers/admin/adminUpdateDoctorController';
import postNewDoctor from '../controllers/admin/adminPostNewDoctorController';
const router: express.Router = express.Router();
router.use(roleVerifier)
router.route('/')
    .get(getDoctors)
    .put(updateDoctors)
    .post(postNewDoctor)


export default router;
