const express = require("express");
const router = express.Router();
const login = require("../controllers/auth/authLoginController");
const register = require("../controllers/auth/authRegisterController");
const resetPassword = require("../controllers/auth/authResetPasswordController");
const forgottenPassword = require("../controllers/auth/authForgottenPasswordController");

router.get("/login",login);
router.post("/register",register);
router.put("/forgottenPassword",forgottenPassword);
router.put("/resetPassword",resetPassword);

module.exports = router;