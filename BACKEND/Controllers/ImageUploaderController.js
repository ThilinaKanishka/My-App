// ImageUploaderController.js
const ImageUploader = require("../Models/ImageUploaderModel");

// Create a new image record
exports.createImage = async (req, res) => {
  try {
    console.log("Received data:", req.body); // Log the incoming request data

    const { imageName, description, base64Image } = req.body;

    if (!imageName || !description || !base64Image) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    const image = new ImageUploader({ imageName, description, base64Image });
    await image.save();

    res.status(201).json({
      success: true,
      message: "Image uploaded successfully",
      data: image,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error uploading image",
      error: error.message,
    });
  }
};

// Get all images
exports.getAllImages = async (req, res) => {
  try {
    const images = await ImageUploader.find();
    res.status(200).json({ success: true, data: images });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving images",
      error: error.message,
    });
  }
};

// Update an image
exports.updateImage = async (req, res) => {
  try {
    const { id } = req.params;
    const { imageName, description, base64Image } = req.body;
    const updatedImage = await ImageUploader.findByIdAndUpdate(
      id,
      { imageName, description, base64Image },
      { new: true }
    );
    if (!updatedImage) {
      return res
        .status(404)
        .json({ success: false, message: "Image not found" });
    }
    res.status(200).json({
      success: true,
      message: "Image updated successfully",
      data: updatedImage,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating image",
      error: error.message,
    });
  }
};

// Delete an image
exports.deleteImage = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedImage = await ImageUploader.findByIdAndDelete(id);
    if (!deletedImage) {
      return res
        .status(404)
        .json({ success: false, message: "Image not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Image deleted successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting image",
      error: error.message,
    });
  }
};
