import express, { Router } from "express";
import { getBooking } from "../controllers/bookings/getBookingsController";
import { createBooking } from "../controllers/bookings/createBookingController";
import { roleVerifier } from "../middlewares/roleVerifier";
const router: Router = express.Router();

router.route("/")
    .get(roleVerifier(["admin","doctors","secretaries"]), getBooking)
    .post(roleVerifier(["admin","doctors","secretaries"]), createBooking);

export { router };
