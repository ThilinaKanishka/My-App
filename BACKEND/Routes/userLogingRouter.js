// userLogingRouter.js (Routes)
const express = require("express");
const {
  signup,
  login,
  googleLogin,
  forgotPassword,
} = require("../Controllers/userLogingController");
const router = express.Router();

router.post("/Usersignup", signup);
router.post("/Userlogin", login);
router.post("/auth/google/callback", googleLogin);
router.post("/Userforgot-password", forgotPassword);

module.exports = router;
