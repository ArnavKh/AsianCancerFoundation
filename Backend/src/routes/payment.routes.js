import express from "express";
import { createINROrder,createINTLOrder,verifyPayment,createINRPlan,
  createINTLPlan,
  createINRSubscription,
  createINTLSubscription } from "../controllers/payment.controller.js";

const router = express.Router();

// 🟢 National donations
router.post("/order/inr", createINROrder);

// 🌍 International donations
router.post("/order/intl", createINTLOrder);

// ✅ Verify payment
router.post("/verify", verifyPayment);

// 🟢 National Donors
router.post("/plan/inr", createINRPlan);
router.post("/subscription/inr", createINRSubscription);

// 🌍 International Donors
router.post("/plan/intl", createINTLPlan);
router.post("/subscription/intl", createINTLSubscription);

export default router;
