// File: routes/AdminRouter.js
const express = require("express");
const { signup, login } = require("../Controllers/AdminLoginController");

const router = express.Router();

// Routes
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
