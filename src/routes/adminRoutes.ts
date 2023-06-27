import express from 'express';
import { Router } from 'express';

import roleVerifier from '../middlewares/roleVerifier';
import getDoctors from '../controllers/admin/adminGetDoctorsController';
import updateDoctors from '../controllers/admin/adminUpdateDoctorController';
import postNewDoctor from '../controllers/admin/adminPostNewDoctorController';

const router: Router = express.Router();

router.route('/').all(roleVerifier(['admin']))
    .get(getDoctors)
    .put(updateDoctors)
    .post(postNewDoctor);

export default router;
