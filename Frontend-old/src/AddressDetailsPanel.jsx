import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useDonationStore } from "./store/useDonationStore.js";

export default function AddressDetailsPanel({ setPanelView }) {
  const [street, setStreet] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("India");

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
    resetDonationData
  } = useDonationStore();

  // ✅ Load Razorpay SDK
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

  // ✅ Handle Payment Flow (only INR)
  const handleClick = async () => {



    try {
      const fullAddress = `${street}, ${apartment}, ${city}, ${state}, ${zip}, ${country}`;
      newsetAddress(fullAddress);

      //  Sample sending data to backend before payment

      // await fetch(`${import.meta.env.VITE_SERVER}/api/user/add-donation`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     name: newname,
      //     email: newemail,
      //     mobileNumber: newmobileNumber,
      //     address: fullAddress,
      //     donationType: newdonationType,
      //     donationFeature: newdonationFeature || "",
      //     comment: newcomment || "",
      //   }),
      // });

      // await fetch(`${import.meta.env.VITE_SERVER}/api/email/thank-you`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email: newemail }),
      // });


      const donorDetails = {
        name: newname,
        email: newemail,
        contact: newmobileNumber,
        address: fullAddress,
        pan: newpan,
        comment: newcomment,
      };

      // Load Razorpay
      const sdkLoaded = await loadRazorpay();
      if (!sdkLoaded) {
        alert("Razorpay SDK failed to load.");
        return;
      }

      let checkoutData = {};

      if (newdonationType === "once") {
        // 🔹 One-time donation (INR)
        const res = await fetch(`${import.meta.env.VITE_SERVER}/api/payment/order/inr`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: newamount }),
        });
        if (!res.ok) throw new Error("Failed to create order");
        const data = await res.json();
        checkoutData = { order_id: data.order.id, amount: data.order.amount, currency: "INR" };
      } else {
        // 🔹 Monthly donation (INR subscription)
        const planRes = await fetch(`${import.meta.env.VITE_SERVER}/api/payment/plan/inr`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: newamount }),
        });
        if (!planRes.ok) throw new Error("Failed to create plan");
        const planData = await planRes.json();

        const subRes = await fetch(`${import.meta.env.VITE_SERVER}/api/payment/subscription/inr`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ plan_id: planData.plan.id, total_count: 12 }),
        });
        if (!subRes.ok) throw new Error("Failed to create subscription");
        const subData = await subRes.json();

        checkoutData = { subscription_id: subData.subscription.id, amount: newamount * 100, currency: "INR" };
      }

      // ✅ Razorpay Checkout
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID_INR,
        currency: "INR",
        amount: checkoutData.amount,
        name: "ACF",
        description:
          newdonationType === "monthly" ? "Monthly Donation Subscription" : "One-time Donation",
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
          console.log("Payment response:", response);
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
              // ✅ ADD POST REQUEST HERE AFTER SUCCESSFUL VERIFICATION
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
              await fetch(`${import.meta.env.VITE_SERVER}/api/email/thank-you`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: newemail }),
              });


              //  clearing all data in context api
              resetDonationData();
              alert("🎉 Donation successful! Thank you for your support.");
              setPanelView("thankYou");
            } else {
              alert("⚠️ Payment verification failed. Please contact support.");
            }
          } catch (err) {
            console.error("Payment verification error:", err);
            alert("⚠️ Payment verification failed. Please contact support.");
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", (response) => {
        alert("❌ Payment failed. Check console for details.");
        console.error("Payment failed:", response.error);
      });
      rzp.open();

    } catch (error) {
      console.error("Payment Error:", error);
      alert("Something went wrong during payment. Check console.");
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
        <div className="mb-6">
          <div className="rounded-[10px] border border-gray-300 overflow-hidden">
            <input
              type="text"
              placeholder="Street address"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="w-full p-4 text-sm placeholder-gray-400 outline-none"
              required
            />
            <div className="h-px bg-gray-200" />
            <input
              type="text"
              placeholder="Apartment / suite / floor"
              value={apartment}
              onChange={(e) => setApartment(e.target.value)}
              className="w-full p-4 text-sm placeholder-gray-400 outline-none"
            />
            <div className="h-px bg-gray-200" />
            <input
              type="text"
              placeholder="Town or City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full p-4 text-sm placeholder-gray-400 outline-none"
              required
            />
          </div>
        </div>

        {/* State, Zip, Country */}
        <div className="mb-6">
          <div className="rounded-[10px] border border-gray-300 overflow-hidden">
            <div className="flex">
              <input
                type="text"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="flex-1 p-4 text-sm placeholder-gray-400 outline-none border-r border-gray-200"
                required
              />
              <input
                type="text"
                placeholder="Zip code"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="w-1/3 p-4 text-sm placeholder-gray-400 outline-none"
              />
            </div>
            <div className="h-px bg-gray-200" />
            <div className="relative">
              <input
                type="text"
                placeholder="Country"
                value={country}
                disabled
                className="w-full p-4 pr-10 text-sm placeholder-gray-400 outline-none bg-gray-100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
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
