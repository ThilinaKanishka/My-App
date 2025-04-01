const User = require("../Models/UserModel");

// Data Display
const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      msg: "Internal Server Error",
    });
  }
  if (!users || users.length === 0) {
    return res.status(404).json({
      msg: "User not found",
    });
  }
  //Dispay all users
  return res.status(200).json({ users });
};

// Data Insert (Create New user)
const addUsers = async (req, res, next) => {
  const { name, email, age, address } = req.body;

  // Validate required fields
  if (!name || !email || !age || !address) {
    return res.status(400).json({ msg: "All fields are required." });
  }

  let user;
  try {
    // Create new user instance
    user = new User({ name, email, age, address });
    await user.save();
  } catch (err) {
    console.error("Error saving user:", err);
    return res
      .status(500)
      .json({ msg: "Failed to add user. Internal server error." });
  }

  // Respond with the created user data
  return res.status(201).json({
    msg: "User added successfully",
    user,
  });
};

//Get by Id
const getById = async (req, res) => {
  const id = req.params.id;
  let user;

  try {
    user = await User.findById(id);
  } catch (error) {
    // Use 'error' here
    console.log(error); // Log the error correctly
    return res.status(500).json({
      msg: "Internal server error while retrieving the user.",
    });
  }

  // User not found
  if (!user) {
    return res.status(404).json({
      msg: "User not found.",
    });
  }

  return res.status(200).json({ user });
};

//Update User Details
const UpdateUser = async (req, res) => {
  const id = req.params.id;
  const { name, email, age, address } = req.body;

  let updatedUser;

  try {
    (updatedUser = await User.findByIdAndUpdate(id, {
      name,
      email,
      age,
      address,
    })),
      { new: true, runValidators: true };
    updatedUser = await updatedUser.save();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "An error occurred while updating user details.",
    });
  }
  if (!updatedUser) {
    return res.status(404).json({
      msg: "User not found. Unable to update details.",
    });
  }
  return res.status(200).json({ updatedUser });
};

//Delete User Details
const deleteUser = async (req, res) => {
  const id = req.params.id;

  let deleteUser;

  try {
    deleteUser = await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "An error occurred while deleting the user",
    });
  }
  if (!deleteUser) {
    return res.status(404).json({
      msg: "User not found or unable to delete user details",
    });
  }
  return res.status(200).json({ msg: "User deleted successfully", deleteUser });
};

exports.getAllUser = getAllUser;
exports.addUsers = addUsers;
exports.getById = getById;
exports.UpdateUser = UpdateUser;
exports.deleteUser = deleteUser;
