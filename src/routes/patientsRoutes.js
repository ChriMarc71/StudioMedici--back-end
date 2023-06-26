const express = require("express");
const router = express.Router();
const roleVerifier = require("../middlewares/roleVerifier");
const getPatients = require("../controllers/patients/getPatientController");
const updatePatients = require("../controllers/patients/updatePatientController");
router.route("/",roleVerifier(["admin","doctors"]))
    .get(getPatients)
    .put(updatePatients)