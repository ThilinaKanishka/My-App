const express = require("express");
const router = express.Router();
const {
  registerUser,
  updateUser,
  deleteUser,
  displayUsers,
} = require("../Controllers/RegistrationController");

// Route for registering a user
router.post("/register", registerUser);

// Route for updating a user by ID
router.put("/update/:id", updateUser);

// Route for deleting a user by ID
router.delete("/delete/:id", deleteUser);

// Route for displaying all users
router.get("/display", displayUsers);

module.exports = router;
