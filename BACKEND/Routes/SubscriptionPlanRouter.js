const express = require("express");
const router = express.Router();
const {
  createSubscriptionPlan,
  getAllSubscriptionPlans,
  updateSubscriptionPlan,
  deleteSubscriptionPlan,
} = require("../Controllers/SubscriptionPlanController");

// Routes
router.post("/subscription-plans", createSubscriptionPlan);
router.get("/subscription-plans", getAllSubscriptionPlans);
router.put("/subscription-plans/:id", updateSubscriptionPlan);
router.delete("/subscription-plans/:id", deleteSubscriptionPlan);

module.exports = router;
