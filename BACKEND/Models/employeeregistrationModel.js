const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  nationalID: { type: String, required: true },
  employeeID: { type: String, required: true, unique: true },
  position: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  department: { type: String, required: true },
  password: { type: String, required: true },
  dateOfJoining: { type: Date, required: true },
  salaryDetails: { type: String, required: true },
  workLocation: { type: String, required: true },
  educationalQualifications: { type: String, required: true },
  professionalTraining: { type: String },
  specialSkills: { type: String },
  emergencyContactDetails: { type: String, required: true },
  dateOfSubmission: { type: Date, default: Date.now },
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
