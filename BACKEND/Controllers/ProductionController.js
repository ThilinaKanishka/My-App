const Production = require("../Models/ProductionModel");

// Add new product
exports.addProduct = async (req, res) => {
  try {
    const newProduct = new Production(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Production.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Update product
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Production.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Delete product
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Production.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
