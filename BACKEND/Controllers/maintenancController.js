const Maintenance = require("../Models/maintenancModel");

// Create a new maintenance record
exports.createMaintenance = async (req, res) => {
  try {
    const maintenance = new Maintenance(req.body);
    await maintenance.save();
    res.status(201).json(maintenance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all maintenance records
exports.getAllMaintenances = async (req, res) => {
  try {
    const maintenances = await Maintenance.find();
    res.status(200).json(maintenances);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single maintenance record by ID
exports.getMaintenanceById = async (req, res) => {
  try {
    const maintenance = await Maintenance.findById(req.params.id);
    if (!maintenance) {
      return res.status(404).json({ message: "Maintenance record not found" });
    }
    res.status(200).json(maintenance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a maintenance record by ID
exports.updateMaintenance = async (req, res) => {
  try {
    const maintenance = await Maintenance.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!maintenance) {
      return res.status(404).json({ message: "Maintenance record not found" });
    }
    res.status(200).json(maintenance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a maintenance record by ID
exports.deleteMaintenance = async (req, res) => {
  try {
    const maintenance = await Maintenance.findByIdAndDelete(req.params.id);
    if (!maintenance) {
      return res.status(404).json({ message: "Maintenance record not found" });
    }
    res
      .status(200)
      .json({ message: "Maintenance record deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
