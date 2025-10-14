import React from "react";
import { useDonationStore } from "./store/useDonationStore.js";
const presetAmounts = ["1000", "2500", "5000", "10000", "12000", "20000"];

export default function DonationPanel({
  donationType,
  setDonationType,
  amount,
  setAmount,
  dedicate,
  setDedicate,
  setPanelView,
}) 

{

  const {
    newamount,
    newcomment,
    newname,
    newemail,
    newmobileNumber,
    newdonationType,
    newaddress,
    newsetAmount,
    newsetComment,
    newsetName,
    newsetEmail,
    newsetMobileNumber,
    newsetDonationType,
    newsetAddress,
  } = useDonationStore();

  const handleDonateClick = (e) => {
    e?.preventDefault?.();

    // Convert to number for validation
    const numericAmount = Number(amount);

    if (!numericAmount || numericAmount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }
    console.log("numericamount : ",numericAmount);

    newsetAmount(numericAmount);
    newsetDonationType(donationType);

     console.log("amount in zustand : ", useDonationStore.getState().newamount);
  console.log("donation type : ", useDonationStore.getState().newdonationType);

    if (donationType === "once") {
      setPanelView("once");
    } else {
      setPanelView("details");
    }
  };

  return (
    <>
      {/* Header */}
      <div className="shrink-0">
        <h2 className="font-bold mb-4 font-visby text-xl text-center">
          Secure Donation
        </h2>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Toggle Buttons */}
        <div className="flex mb-6 rounded-[10px] overflow-hidden border w-full">
          <button
            onClick={() => setDonationType("once")}
            className={`px-4 py-2 flex-1 text-sm font-visby font-semibold ${
              donationType === "once"
                ? "bg-purple-100 border-purple-600 border-2 rounded-[10px]"
                : "bg-white"
            }`}
          >
            Give once
          </button>
          <button
            onClick={() => setDonationType("monthly")}
            className={`px-4 py-2 flex-1 text-sm font-visby font-semibold ${
              donationType === "monthly"
                ? "bg-purple-100 border-purple-600 border-2 rounded-[10px]"
                : "bg-white"
            }`}
          >
            ❤️ Monthly
          </button>
        </div>

        {/* Preset Amounts */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {presetAmounts.map((val) => (
            <button
              key={val}
              onClick={() => setAmount(val)}
              className={`p-3 rounded-[10px] border text-center font-visby text-sm font-semibold ${
                amount === val
                  ? "bg-purple-600 text-white border-purple-600"
                  : "bg-gray-50 text-gray-700 border-gray-300"
              }`}
            >
              ₹ {val >= 10000 ? val.replace(/000$/, "K") : val}
            </button>
          ))}
        </div>

        {/* Custom Amount */}
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4 font-visby"
        />
        <p className="font-didact pb-2 pl-1 text-[14px]">
          Please note, Razorpay will apply a 2% service fee to this amount.
        </p>

        {/* Dedication */}
        <label className="font-didact flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="w-5 h-5 bg-[#EDE2FF] border-2 border-[#583490] rounded-[6px] 
              appearance-none relative checked:after:content-['✔'] checked:after:absolute 
              checked:after:text-[#583490] checked:after:text-[12px] 
              checked:after:left-[3px] checked:after:top-[-1px]"
            checked={dedicate}
            onChange={(e) => setDedicate(e.target.checked)}
          />
          Dedicate this donation
        </label>
      </div>

      {/* Footer */}
      <div className="shrink-0">
        <p
          className="font-didact pb-2 pl-1 cursor-pointer"
          onClick={() => setPanelView("comment")}
        >
          Add a comment
        </p>
        <button
          onClick={handleDonateClick}
          disabled={!amount || Number(amount) <= 0}
          className={`font-visby w-full py-3 rounded-xl font-semibold
    ${
      !amount || Number(amount) <= 0
        ? "cursor-not-allowed bg-[#EDE2FF]"
        : "bg-[#EDE2FF]"
    }`}
        >
          {donationType === "monthly" ? "Donate Monthly" : "Donate Once"}
        </button>
      </div>
    </>
  );
}
