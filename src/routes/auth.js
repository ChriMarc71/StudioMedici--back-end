const express = require("express")
const router = express.Router()
const login = require("../controllers/authControllers/login")
const register = require("../controllers/authControllers/register")

module.exports = router;