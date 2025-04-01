// ProductionModel.js
const mongoose = require("mongoose");

const ProductionSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true, // Corrected here
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Production", ProductionSchema);
