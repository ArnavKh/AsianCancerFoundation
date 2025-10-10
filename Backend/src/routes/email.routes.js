import express from "express";
import { sendThankYouEmail } from "../controllers/email.controller.js";

const router = express.Router();

// POST /api/email/thank-you
router.post("/thank-you", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: "Email is required" });
  }

  const result = await sendThankYouEmail(email);

  if (result) {
    return res.status(200).json({ success: true, message: "Thank-you email sent" });
  } else {
    return res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

export default router;
