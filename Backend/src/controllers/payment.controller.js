import Razorpay from "razorpay";
import crypto from "crypto";

// ✅ Create INR Order
export const createINROrder = async (req, res) => {
  const razorpayINR = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID_INR,
  key_secret: process.env.RAZORPAY_SECRET_INR,
});
  try {
    const options = {
      amount: req.body.amount * 100, // amount in paise
      currency: "INR",
      receipt: `receipt_inr_${Date.now()}`,
    };

    const order = await razorpayINR.orders.create(options);
    res.json({ success: true, order });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Create International Order
export const createINTLOrder = async (req, res) => {
  const razorpayINTL = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID_INTL,
  key_secret: process.env.RAZORPAY_SECRET_INTL,
});
  try {
    const options = {
      amount: req.body.amount * 100, // amount in smallest unit (cents/paise)
      currency: req.body.currency || "USD", // default USD, can be EUR, GBP, etc.
      receipt: `receipt_intl_${Date.now()}`,
    };

    const order = await razorpayINTL.orders.create(options);
    res.json({ success: true, order });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// ✅ Common Verify Payment
export const verifyPayment = (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, type } = req.body;

    // Decide which secret key to use (INR or INTL)
    const secret =
      type === "intl"
        ? process.env.RAZORPAY_SECRET_INTL
        : process.env.RAZORPAY_SECRET_INR;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      return res.json({ success: true, message: "Payment verified successfully" });
    } else {
      return res.status(400).json({ success: false, message: "Payment verification failed" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Create INR Plan
export const createINRPlan = async (req, res) => {
   const razorpayINR = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID_INR,
  key_secret: process.env.RAZORPAY_SECRET_INR,
});
  try {
    const plan = await razorpayINR.plans.create({
      period: "monthly",   // daily, weekly, monthly, yearly
      interval: 1,         // every 1 month
      item: {
        name: "Monthly INR Donation Plan",
        amount: req.body.amount * 100, // e.g. ₹500 → 50000 paise
        currency: "INR",
      },
    });
    res.json({ success: true, plan });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Create International Plan
export const createINTLPlan = async (req, res) => {
  const razorpayINTL = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID_INTL,
  key_secret: process.env.RAZORPAY_SECRET_INTL,
});
  try {
    const plan = await razorpayINTL.plans.create({
      period: "monthly",
      interval: 1,
      item: {
        name: "Monthly International Donation Plan",
        amount: req.body.amount * 100, // e.g. $10 → 1000 cents
        currency: req.body.currency || "USD", // USD, EUR, GBP etc.
      },
    });
    res.json({ success: true, plan });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Create INR Subscription
export const createINRSubscription = async (req, res) => {
   const razorpayINR = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID_INR,
  key_secret: process.env.RAZORPAY_SECRET_INR,
});
  try {
    const subscription = await razorpayINR.subscriptions.create({
      plan_id: req.body.plan_id,   // pass INR plan_id
      customer_notify: 1,
      total_count: req.body.total_count || 12, // e.g. 12 months
    });
    res.json({ success: true, subscription });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Create International Subscription
export const createINTLSubscription = async (req, res) => {
  const razorpayINTL = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID_INTL,
  key_secret: process.env.RAZORPAY_SECRET_INTL,
});
  try {
    const subscription = await razorpayINTL.subscriptions.create({
      plan_id: req.body.plan_id,   // pass INTL plan_id
      customer_notify: 1,
      total_count: req.body.total_count || 12,
    });
    res.json({ success: true, subscription });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
