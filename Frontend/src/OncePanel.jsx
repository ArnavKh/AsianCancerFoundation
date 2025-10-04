import React from "react";
import { ArrowLeft } from "lucide-react";

export default function OncePanel({ amount, setPanelView }) {
  const navigateToDetailsForm = (e) => {
    e?.preventDefault?.();
    setPanelView("details");
  };

  return (
    <>
      {/* Header */}
      <div className="shrink-0 relative">
        <button
          onClick={() => setPanelView("donation")}
          className="absolute left-0 top-0"
        >
          <ArrowLeft size={24} />
        </button>
        <h2 className="font-visby text-lg font-semibold text-center mb-3">
          Become a regular donor
        </h2>
        <hr className="border-0 h-px bg-gray-300" />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto flex flex-col justify-between">
        <p className="font-visby font-medium text-center pt-10">
          Will you convert your ₹ {amount || "1000"} contribution into a monthly
          donation? Your ongoing support can help us focus better on our work.
        </p>

        <div className="space-y-2 mt-6">
          <button
            onClick={navigateToDetailsForm}
            className="px-4 py-2 bg-[#EDE2FF] text-lg rounded-[10px] w-full font-visby font-semibold"
          >
            Donate ₹1200/month
          </button>
          <button
            onClick={navigateToDetailsForm}
            className="px-4 py-2 bg-[#EDE2FF] text-lg rounded-[10px] w-full font-visby font-semibold"
          >
            Donate ₹1500/month
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="shrink-0 text-center">
        <button onClick={navigateToDetailsForm}>
          <p className="text-center font-visby font-semibold py-3 text-[14px] cursor-pointer">
            No, keep my one-time ₹ {amount || "1000"} gift
          </p>
        </button>
      </div>
    </>
  );
}
