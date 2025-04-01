const SubscriptionPlan = require("../Models/SubscriptionPlanModel");

// Create a new subscription plan
exports.createSubscriptionPlan = async (req, res) => {
  try {
    const { name, description, duration, pricing, deliveryFrequency } =
      req.body;
    const newPlan = new SubscriptionPlan({
      name,
      description,
      duration,
      pricing,
      deliveryFrequency,
    });
    const savedPlan = await newPlan.save();
    res.status(201).json(savedPlan);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all subscription plans
exports.getAllSubscriptionPlans = async (req, res) => {
  try {
    const plans = await SubscriptionPlan.find();
    res.status(200).json(plans);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a subscription plan
exports.updateSubscriptionPlan = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPlan = await SubscriptionPlan.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedPlan)
      return res.status(404).json({ message: "Plan not found" });
    res.status(200).json(updatedPlan);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a subscription plan
exports.deleteSubscriptionPlan = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPlan = await SubscriptionPlan.findByIdAndDelete(id);
    if (!deletedPlan)
      return res.status(404).json({ message: "Plan not found" });
    res.status(200).json({ message: "Plan deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
