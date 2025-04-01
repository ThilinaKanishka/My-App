const express = require("express");
const mongoose = require("mongoose");
const UserRouter = require("./Routes/UserRouter");
const path = require("path"); // Add this line
require("dotenv").config();
const registrationRoutes = require("./Routes/RegistrationRoute");
const maintenanceRouter = require("./Routes/maintenancRouter");
const productionRouter = require("./Routes/ProductionRouter");
const imageUploaderRouter = require("./Routes/ImageUploaderRouter");
const SubscriptionPlanRouter = require("./Routes/SubscriptionPlanRouter");
const employeeRouter = require("./Routes/employeeregistrationRouter");
const AdminLoginRouter = require("./Routes/AdminLoginRouter");
const userLogingRouter = require("./Routes/userLogingRouter");

const app = express();
const cors = require("cors");

const MONGODB_URI = process.env.MONGODB_URI;

// Increase payload limit to 10MB for large images
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cors());

// Middlwear
app.use(express.json());
app.use(cors());
app.use("/users", UserRouter);
app.use("/api/registration", registrationRoutes);
app.use("/api", maintenanceRouter);
app.use("/api", productionRouter);
app.use("/api/image-uploader", imageUploaderRouter);
app.use("/api", SubscriptionPlanRouter);
app.use("/api", employeeRouter);
app.use("/api", AdminLoginRouter);
app.use("/api", userLogingRouter);

//http://localhost:5000/api/subscription-plans

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .then(() => {
    app.listen(5000, () => console.log("Server is running on port 5000"));
  })
  .catch((err) => console.log(err));
