const express = require("express");
const router = express.Router();

const roleVerifier = require("../middlewares/roleVerifier");
const getDoctors = require("../controllers/admin/adminGetDoctorsController")
const updateDoctors = require("../controllers/admin/adminUpdateDoctorController");
const postNewDoctor = require("../controllers/admin/adminPostNewDoctorController");


router.route("/",roleVerifier(["admin"]))
    .get(getDoctors)
    .put(updateDoctors)
    .post(postNewDoctor)

module.exports=router;