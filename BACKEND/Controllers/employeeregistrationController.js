const Employee = require("../Models/employeeregistrationModel");
const nodemailer = require("nodemailer");

// Nodemailer Configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "slcarlibrary@gmail.com",
    pass: "gcdc qewo oxvm ftxc",
  },
});

// Create New Employee
const createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();

    // Path to the photo and PDF files
    const photoPath = "./Images/logo.png"; // Update this to the actual path
    //const pdfPath = "./path/to/document.pdf"; // Update this to the actual path

    // Send registration success email with attachments
    const mailOptions = {
      from: "slcarlibrary@gmail.com",
      to: employee.email,
      subject: "SL Carlibrary Registration",
      text: `Dear ${employee.firstName},\n\nYour registration was successful!\n\nThank you,\nAdmin Thilina Hettiarachchi`,
      attachments: [
        // {
        //   filename: "photo.jpg",
        //   path: photoPath,
        // },
        // {
        //   filename: "document.pdf",
        //   path: pdfPath,
        // },
      ],
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email" });
      } else {
        console.log("Email sent:", info.response);
        res.status(201).json({ message: "Employee registered successfully!" });
      }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Employees
const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Employee
const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Employee
const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    await Employee.findByIdAndDelete(id);
    res.status(200).json({ message: "Employee deleted successfully!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createEmployee,
  getAllEmployees,
  updateEmployee,
  deleteEmployee,
};
