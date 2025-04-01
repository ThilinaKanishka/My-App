const express = require("express");
const router = express.Router();
const productionController = require("../Controllers/ProductionController");

router.post("/products", productionController.addProduct);
router.get("/products", productionController.getProducts);
router.put("/products/:id", productionController.updateProduct);
router.delete("/products/:id", productionController.deleteProduct);

module.exports = router;
