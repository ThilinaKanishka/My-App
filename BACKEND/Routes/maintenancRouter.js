const express = require("express");
const router = express.Router();
const maintenanceController = require("../Controllers/maintenancController");

router.post("/maintenances", maintenanceController.createMaintenance);
router.get("/maintenances", maintenanceController.getAllMaintenances);
router.get("/maintenances/:id", maintenanceController.getMaintenanceById);
router.put("/maintenances/:id", maintenanceController.updateMaintenance);
router.delete("/maintenances/:id", maintenanceController.deleteMaintenance);
module.exports = router;
