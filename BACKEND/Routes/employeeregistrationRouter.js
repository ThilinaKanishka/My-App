const express = require("express");
const {
  createEmployee,
  getAllEmployees,
  updateEmployee,
  deleteEmployee,
} = require("../Controllers/employeeregistrationController");

const router = express.Router();

// Routes
router.post("/employees", createEmployee); // Create employee
router.get("/employees", getAllEmployees); // Get all employees
router.put("/employees/:id", updateEmployee); // Update employee by ID
router.delete("/employees/:id", deleteEmployee); // Delete employee by ID

module.exports = router;
