const express = require("express");

const Router = express.Router();

// Insert Model
const UserModel = require("../Models/UserModel");
// Insert User Controller
const UserController = require("../Controllers/UserControllers");

Router.get("/", UserController.getAllUser);
Router.post("/", UserController.addUsers);
Router.get("/:id", UserController.getById);
Router.put("/:id", UserController.UpdateUser);
Router.delete("/:id", UserController.deleteUser);

//export
module.exports = Router;
