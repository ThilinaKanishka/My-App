// ImageUploaderModel.js
const mongoose = require("mongoose");

const ImageUploaderSchema = new mongoose.Schema(
  {
    imageName: { type: String, required: true },
    description: { type: String, required: true },
    base64Image: { type: String, required: true }, // Store the image in Base64
  },
  { timestamps: true }
);

module.exports = mongoose.model("ImageUploader", ImageUploaderSchema);
