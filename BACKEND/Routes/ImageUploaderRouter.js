// ImageUploaderRouter.js
const express = require("express");
const router = express.Router();
const ImageUploaderController = require("../Controllers/ImageUploaderController");

// Routes
router.post("/upload", ImageUploaderController.createImage); // Upload an image
router.get("/images", ImageUploaderController.getAllImages); // Get all images
router.put("/images/:id", ImageUploaderController.updateImage); // Update an image by ID
router.delete("/images/:id", ImageUploaderController.deleteImage); // Delete an image by ID

module.exports = router;
