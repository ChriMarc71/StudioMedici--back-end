const express = require("express");
const getBooking = require("../controllers/bookings/getBookingsController");
const createBooking = require("../controllers/bookings/createBookingController");
const router = express.Router();
router.route("/",roleVerifier(["admin","doctors","secretaries"]))
    .get(getBooking)
    .post(createBooking)