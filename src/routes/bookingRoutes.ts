import express, { Router } from "express";
import getBooking from "../controllers/bookings/getBookingsController";
import createBooking from "../controllers/bookings/createBookingController";
import { roleVerifier } from "../middlewares/roleVerifier";
const router: Router = express.Router();

router.use(roleVerifier);
router.route("/").get(getBooking).post(createBooking);
export { router };
