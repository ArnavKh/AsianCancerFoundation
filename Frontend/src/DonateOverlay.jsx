import { useState } from "react";
import DonateImage from "./assets/DonateOverlay.png";
import Logo from "./assets/Logo.png";
import { ArrowLeft } from "lucide-react";

export default function DonateOverlay({ isOpen, onClose }) {
  const [donationType, setDonationType] = useState("monthly");
  const [amount, setAmount] = useState("");
  const [dedicate, setDedicate] = useState(false);
  const [panelView, setPanelView] = useState("donation"); // 'donation' | 'once' | 'comment'

  const presetAmounts = ["1000", "2500", "5000", "10000", "12000", "20000"];

  if (!isOpen) return null;

  const handleDonateClick = (e) => {
    e?.preventDefault?.();

    if (donationType === "once") {
      setPanelView("once");
      return;
    }

    console.log("Processing monthly donation", { amount, dedicate });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <button onClick={onClose} className="absolute top-4 right-4 text-white">
        ✕
      </button>
      <div className="flex flex-col md:flex-row gap-6 relative">
        {/* Left Panel */}
        <div className="bg-white rounded-[20px] shadow h-159 w-125 flex flex-col">
          <img
            src={DonateImage}
            alt="Foundation"
            className="w-125 rounded-t-[20px]"
          />

          <div className="p-3">
            <img src={Logo} className="w-40 h-18" alt="Logo" />
          </div>

          <div className="p-5">
            <p className="mb-4 font-visby font-bold text-lg">
              Donate to the Asian Cancer Foundation
            </p>

            <p className="mb-4 font-didact text-sm">
              Our mission to prevent cancer and save lives is only possible with
              your support. A contribution of just ₹1,000 can help us expand
              access to quality cancer care and spread vital awareness and
              education.
            </p>
            <p className="text-xs mt-18 font-didact">
              Privacy Notice · Contact us
            </p>
          </div>
        </div>

        {/* Right Panel - Interactive */}
        <div className="bg-white rounded-[20px] shadow p-6 h-159 w-87 flex items-center justify-center relative">
          <div className="w-full max-w-md">
            {panelView === "donation" && (
              <>
                <h2 className="font-bold mb-4 font-visby text-xl text-center">
                  Secure Donation
                </h2>

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

                {/* Dedication */}
                <label className="flex items-center gap-2 mb-4">
                  <input
                    type="checkbox"
                    checked={dedicate}
                    onChange={(e) => setDedicate(e.target.checked)}
                    className="w-4 h-4"
                  />
                  <span className="font-didact">Dedicate this donation</span>
                </label>

                <div className="mt-45">
                  <p
                    className="font-didact pb-2 pl-1 cursor-pointer"
                    onClick={() => setPanelView("comment")}
                  >
                    Add a comment
                  </p>

                  <button
                    onClick={handleDonateClick}
                    className="font-visby w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold"
                  >
                    {donationType === "monthly"
                      ? "Donate Monthly"
                      : "Donate Once"}
                  </button>
                </div>
              </>
            )}

            {panelView === "once" && (
              <div className="flex flex-col h-full relative">
                {/* Top row with back button + heading */}
                <div className="flex items-center justify-center relative p-4">
                  <button
                    onClick={() => setPanelView("donation")}
                    className="absolute left-4"
                  >
                    <ArrowLeft size={24} />
                  </button>
                  <h2 className="font-bold mb-4 font-visby text-xl text-center">
                    Secure Donation
                  </h2>
                </div>

                {/* Paragraph */}
                <div className="px-6 text-center">
                  <p className="font-visby text-lg font-medium">
                    Will you convert your ₹ 1000 contribution into a monthly
                    donation? Your ongoing support can help us focus better on
                    our work.
                  </p>
                </div>

                {/* Buttons at bottom */}
                <div className="mt-auto p-6 space-y-2">
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg w-full">
                    Donate ₹1200/month
                  </button>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg w-full">
                    Donate ₹1500/month
                  </button>
                </div>
              </div>
            )}

            {/* Comment view */}
            {panelView === "comment" && (
              <div>
                <button
                  onClick={() => setPanelView("donation")}
                  className="absolute top-5 left-4"
                >
                  <ArrowLeft size={24} />
                </button>
                <div className="">
                  <h2 className="font-visby text-lg font-semibold pb-12 text-center">
                    Comment
                  </h2>
                  <textarea
                    className="w-full border rounded-lg p-4 mb-4"
                    rows={18}
                    placeholder="Enter your comment"
                  ></textarea>
                  <button
                    onClick={() => setPanelView("donation")}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg w-full"
                  >
                    Save
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
