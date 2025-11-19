import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import indianCities from "../src/data/indianCities.json";
import { useDonationStore } from "./store/useDonationStore.js";

export default function AddressDetailsPanel({ setPanelView, onClose }) {
  const [formData, setFormData] = useState({
    street: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    country: "India",
  });

  const {
    newamount,
    newaddress,
    newcomment,
    newpan,
    newname,
    newemail,
    newmobileNumber,
    newdonationType,
    newdonationFeature,
    newsetAddress,
    resetDonationData,
     newoptInFor80G,
     dedicationName
  } = useDonationStore();

  // Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Auto-fill logic for city → state + India
  useEffect(() => {
    const cityInput = formData.city.trim().toLowerCase();
    if (!cityInput) return;

    const matchedCity = indianCities.find(
      (item) => item.city.toLowerCase() === cityInput
    );

    if (matchedCity) {
      setFormData((prev) => ({
        ...prev,
        state: matchedCity.state,
        country: "India",
      }));
    }
  }, [formData.city]);

  // Load Razorpay SDK
  const loadRazorpay = () =>
    new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  // PAYMENT FLOW
  const handleClick = async () => {
    try {
      const fullAddress = `${formData.street}, ${formData.apartment}, ${formData.city}, ${formData.state}, ${formData.zip}, ${formData.country}`;

      newsetAddress(fullAddress);

      const donorDetails = {
        name: newname,
        email: newemail,
        contact: newmobileNumber,
        address: fullAddress,
        pan: newpan,
        comment: newcomment,
      };

      const sdkLoaded = await loadRazorpay();
      if (!sdkLoaded) {
        alert("Razorpay SDK failed to load.");
        return;
      }

      let checkoutData = {};

      if (newdonationType === "once") {
        const res = await fetch(`${import.meta.env.VITE_SERVER}/api/payment/order/inr`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: newamount }),
        });

        if (!res.ok) throw new Error("Failed to create order");
        const data = await res.json();
        checkoutData = {
          order_id: data.order.id,
          amount: data.order.amount,
          currency: "INR",
        };
      } else {
        const planRes = await fetch(`${import.meta.env.VITE_SERVER}/api/payment/plan/inr`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: newamount }),
        });

        if (!planRes.ok) throw new Error("Failed to create plan");
        const planData = await planRes.json();

        const subRes = await fetch(
          `${import.meta.env.VITE_SERVER}/api/payment/subscription/inr`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              plan_id: planData.plan.id,
              total_count: 12,
            }),
          }
        );

        if (!subRes.ok) throw new Error("Failed to create subscription");
        const subData = await subRes.json();

        checkoutData = {
          subscription_id: subData.subscription.id,
          amount: newamount * 100,
          currency: "INR",
        };
      }

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID_INR,
        currency: "INR",
        amount: checkoutData.amount,
        name: "ACF",
        description:
          newdonationType === "monthly"
            ? "Monthly Donation Subscription"
            : "One-time Donation",
        order_id: checkoutData.order_id || undefined,
        subscription_id: checkoutData.subscription_id || undefined,
        prefill: {
          name: newname,
          email: newemail,
          contact: newmobileNumber,
        },
        notes: {
          address: fullAddress,
          pan: newpan || "",
          comment: newcomment || "",
          donationType: newdonationType,
        },
        theme: { color: "#6C4AB6" },

        handler: async function (response) {
          try {
            const verifyRes = await fetch(`${import.meta.env.VITE_SERVER}/api/payment/verify`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_subscription_id: response.razorpay_subscription_id || null,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                type: "inr",
              }),
            });

            const verifyJson = await verifyRes.json();

            if (verifyJson.success) {
              await fetch(`${import.meta.env.VITE_SERVER}/api/user/add-donation`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  name: newname,
                  email: newemail,
                  mobileNumber: newmobileNumber,
                  address: fullAddress,
                  donationType: newdonationType,
                  donationFeature: newdonationFeature || "",
                  comment: newcomment || "",
                }),
              });

              //  email sending after 
              if (dedicationName.trim()) {
                await fetch(`${import.meta.env.VITE_SERVER}/api/email/dedicate-thank-you`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  name: newname,
                  phone: newmobileNumber,
                  email: newemail,
                  amount: `₹${newamount}`,
                  date: new Date().toLocaleDateString("en-IN"),
                  invoiceNo: `INV-${Date.now()}`, 
                  dedicateName:dedicationName
                  // or from backend if you generate there
                }),
              });
                
              } else {
                await fetch(`${import.meta.env.VITE_SERVER}/api/email/thank-you`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  name: newname,
                  phone: newmobileNumber,
                  email: newemail,
                  amount: `₹${newamount}`,
                  date: new Date().toLocaleDateString("en-IN"),
                  invoiceNo: `INV-${Date.now()}`, // or from backend if you generate there
                }),
              });
              }

              // 80g certificate sending

              if (newoptInFor80G) {
                console.log("📩 Sending 80G Certificate to:", newemail);
                await fetch(`${import.meta.env.VITE_SERVER}/api/email/send-80g`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    name: newname,
                    email: newemail,
                  }),
                });
              }

              resetDonationData();
              alert("🎉 Donation successful! Thank you for your support.");
              setPanelView("thankYou");
              onClose();
            } else {
              alert("⚠️ Payment verification failed. Please contact support.");
            }
          } catch (err) {
            alert("⚠️ Payment verification failed. Please contact support.");
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", (response) => {
        alert("❌ Payment failed.");
        console.error("Payment failed:", response.error);
      });

      rzp.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Something went wrong during payment.");
    }
  };

  return (
    <>
      {/* Green dedication bar */}
      <div className="bg-[#DCE6D9] -m-6 mb-4 py-2 rounded-t-[20px] flex items-center justify-center gap-2">
        <span className="font-visby font-semibold text-sm text-black">
          ❤️ Dedicated to name
        </span>
      </div>

      {/* Header */}
      <div className="shrink-0 relative">
        <button
          onClick={() => setPanelView("donation")}
          className="absolute left-0 top-0"
        >
          <ArrowLeft size={24} />
        </button>
        <h2 className="font-visby text-lg font-semibold text-center mb-3">
          Enter your address
        </h2>
        <hr className="border-0 h-px bg-gray-300" />
      </div>

      {/* Address Inputs */}
      <div className="flex-1 overflow-y-auto mt-6">
        {/* Street + Apartment + City */}
        <div className="mb-6">
          <div className="rounded-[10px] border border-gray-300 overflow-hidden">
            <input
              type="text"
              name="street"
              placeholder="Street address"
              value={formData.street}
              onChange={handleChange}
              className="w-full p-4 text-sm placeholder-gray-400 outline-none"
            />
            <div className="h-px bg-gray-200" />

            <input
              type="text"
              name="apartment"
              placeholder="Apartment / suite / floor"
              value={formData.apartment}
              onChange={handleChange}
              className="w-full p-4 text-sm placeholder-gray-400 outline-none"
            />
            <div className="h-px bg-gray-200" />

            <input
              type="text"
              name="city"
              placeholder="Town or City"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-4 text-sm placeholder-gray-400 outline-none"
              required
            />
          </div>
        </div>

        {/* State + Zip + Country */}
        <div className="mb-6">
          <div className="rounded-[10px] border border-gray-300 overflow-hidden">
            <div className="flex">
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                className="flex-1 p-4 text-sm placeholder-gray-400 outline-none border-r border-gray-200"
                required
              />

              <input
                type="text"
                name="zip"
                placeholder="Zip code"
                value={formData.zip}
                onChange={handleChange}
                className="w-1/3 p-4 text-sm placeholder-gray-400 outline-none"
              />
            </div>

            <div className="h-px bg-gray-200" />

            <div className="relative">
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-4 pr-10 text-sm placeholder-gray-400 outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="shrink-0">
        <button
          onClick={handleClick}
          className="w-full py-3 bg-purple-100 hover:bg-purple-200 rounded-lg font-visby font-semibold text-black"
        >
          Continue
        </button>
      </div>
    </>
  );
}
