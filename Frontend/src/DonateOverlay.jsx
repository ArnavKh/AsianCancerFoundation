import { useEffect, useState } from "react";
import DonateImage from "./assets/DonateOverlay.png";
import Logo from "./assets/Logo.png";
import { ArrowLeft, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Notifications from "./assets/Notification.png";

export default function DonateOverlay({ isOpen, onClose }) {
  const [donationType, setDonationType] = useState("monthly");
  const [amount, setAmount] = useState("");
  const [dedicate, setDedicate] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");
  const [panelView, setPanelView] = useState("donation"); // 'donation' | 'once' | 'comment' | 'reminder | "details" | "address details"

  useEffect(() => {
    if (isOpen) {
      setPanelView("donation");
    }
  }, [isOpen]);

  const presetAmounts = ["1000", "2500", "5000", "10000", "12000", "20000"];

  if (!isOpen) return null;

  const handleDonateClick = (e) => {
    e?.preventDefault?.();

    if (donationType === "once") {
      setPanelView("once");
      return;
    } else {
      setPanelView("details");
    }

    console.log("Processing monthly donation", { amount, dedicate });
  };

  const navigateToDetailsForm = (e) => {
    e?.preventDefault?.();

    setPanelView("details");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <button
        onClick={() => {
          if (panelView !== "reminder") {
            setPanelView("reminder"); // first click shows reminder
          } else {
            onClose(); // second click actually closes
          }
        }}
        className="absolute top-4 right-4 text-white text-3xl font-black"
      >
        ✕
      </button>

      <div className="flex flex-col md:flex-row gap-6 relative">
        {/* Left Panel */}
        <div className="hidden md:flex bg-white rounded-[20px] shadow h-159 w-125 flex-col">
          <img
            src={DonateImage}
            alt="Foundation"
            className="w-125 rounded-t-[20px]"
          />

          <div className="p-3">
            <img src={Logo} className="w-40 h-18" alt="Logo" />
          </div>

          <div className="p-5 text-black">
            <p className="mb-4 font-visby font-bold text-lg">
              Donate to the Asian Cancer Foundation
            </p>

            <p className="mb-4 font-didact text-sm text-black">
              Our mission to prevent cancer and save lives is only possible with
              your support. A contribution of just ₹1,000 can help us expand
              access to quality cancer care and spread vital awareness and
              education.
            </p>
            <p className="text-xs mt-18 font-didact">
              <Link to="/privacypolicy">Privacy Notice</Link>{" "}
              <Link to="/contactus"> · Contact us</Link>
            </p>
          </div>
        </div>

        {/* Right Panel - Interactive */}
        <div
          className={`rounded-[20px] shadow h-159 w-87 flex flex-col relative p-6 ${
            panelView === "reminder"
              ? "bg-[#5F6D82] text-white"
              : "bg-white text-black"
          }`}
        >
          {/* Donation View */}
          {panelView === "donation" && (
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
                  className="font-visby w-full bg-[#EDE2FF] py-3 rounded-xl font-semibold"
                >
                  {donationType === "monthly"
                    ? "Donate Monthly"
                    : "Donate Once"}
                </button>
              </div>
            </>
          )}

          {/* Once View */}
          {panelView === "once" && (
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
              <div className="flex-1 overflow-y-auto flex flex-col justify-between ">
                <p className="font-visby font-medium text-center pt-10">
                  Will you convert your ₹ 1000 contribution into a monthly
                  donation? Your ongoing support can help us focus better on our
                  work.
                </p>

                <div className="space-y-2">
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
                    No, keep my one-time ₹ 1000 gift
                  </p>
                </button>
              </div>
            </>
          )}

          {/* Comment View */}
          {panelView === "comment" && (
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
                  Comment
                </h2>
                <hr className="border-0 h-px bg-gray-300" />
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto">
                <textarea
                  className="w-full border-2 rounded-lg p-4 mb-4 font-didact border-purple-600 shadow-purple-600 shadow-sm"
                  rows={18}
                  placeholder="Enter your comment"
                ></textarea>
              </div>

              {/* Footer */}
              <div className="shrink-0">
                <button
                  onClick={() => setPanelView("donation")}
                  className="px-4 py-2 bg-[#EDE2FF] text-lg rounded-[10px] w-full font-visby font-semibold"
                >
                  Save
                </button>
              </div>
            </>
          )}

          {/* Reminder View */}
          {panelView === "reminder" && (
            <>
              {/* Header */}
              <div className="shrink-0 relative w-full">
                <button
                  onClick={() => setPanelView("donation")}
                  className="absolute left-0 top-0"
                >
                  <ArrowLeft size={24} />
                </button>
                <h2 className="font-visby text-lg font-semibold text-center mb-3">
                  Maybe next time?
                </h2>
                <hr className="border-0 h-px bg-white absolute left-0 right-0" />
              </div>

              {/* Content */}
              <div className="flex-1 mt-6 flex flex-col items-center text-center overflow-y-auto">
                <img
                  src={Notifications}
                  alt="Reminder"
                  className="w-24 h-24 mb-4"
                />

                <p className="mb-4 font-didact px-12 pb-5">
                  Please leave your email address below and we’ll send you a
                  gentle reminder later.
                </p>

                <input
                  type="email"
                  className="w-full p-3 border border-white rounded-lg mb-3 font-visby placeholder-white text-white outline-none focus:ring-0 focus:border-white"
                  placeholder="Email address"
                />

                <label className="flex items-center gap-2 mb-6 justify-center">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="font-didact">
                    I agree to Terms and{" "}
                    <a href="/privacypolicy">Privacy Notice</a>
                  </span>
                </label>
              </div>

              {/* Footer */}
              <div className="shrink-0">
                <button className="w-full py-3 bg-purple-100 rounded-lg font-visby font-semibold mb-2 text-black">
                  Remind me later
                </button>
                <button
                  className="w-full py-3 bg-gray-100 rounded-lg font-visby font-semibold text-black"
                  onClick={onClose}
                >
                  No, Thanks
                </button>
              </div>
            </>
          )}

          {/* Details View */}
          {panelView === "details" && (
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
                  Enter your details
                </h2>
                <hr className="border-0 h-px bg-gray-300" />
              </div>

              {/* Content */}
              <form>
                <div className="flex-1 overflow-y-auto mt-6">
                  {/* Input fields */}
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <select className="border rounded-lg p-3 text-sm font-didact">
                      <option value="">Title</option>
                      <option value="mr">Mr</option>
                      <option value="mrs">Mrs</option>
                      <option value="ms">Ms</option>
                      <option value="dr">Dr</option>
                    </select>
                    <input
                      type="text"
                      placeholder="First name"
                      className="border rounded-lg p-3 text-sm font-didact"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Last name"
                    className="border rounded-lg p-3 w-full mb-3 text-sm font-didact"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    className="border rounded-lg p-3 w-full mb-3 text-sm font-didact"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile number (optional)"
                    className="border rounded-lg p-3 w-full mb-6 text-sm font-didact"
                  />

                  {/* Checkboxes */}
                  {/* Checkboxes (only one selectable at a time) */}
                  <div className="space-y-2">
                    <label className="font-didact flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-5 h-5 bg-[#EDE2FF] border-2 border-[#583490] rounded-[6px] 
      appearance-none relative checked:after:content-['✔'] checked:after:absolute 
      checked:after:text-[#583490] checked:after:text-[12px] 
      checked:after:left-[3px] checked:after:top-[-1px]"
                        checked={selectedOption === "organisation"}
                        onChange={() =>
                          setSelectedOption(
                            selectedOption === "organisation"
                              ? ""
                              : "organisation"
                          )
                        }
                      />
                      Donate as an organisation
                    </label>

                    <label className="font-didact flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-5 h-5 bg-[#EDE2FF] border-2 border-[#583490] rounded-[6px] 
      appearance-none relative checked:after:content-['✔'] checked:after:absolute 
      checked:after:text-[#583490] checked:after:text-[12px] 
      checked:after:left-[3px] checked:after:top-[-1px]"
                        checked={selectedOption === "anonymous"}
                        onChange={() =>
                          setSelectedOption(
                            selectedOption === "anonymous" ? "" : "anonymous"
                          )
                        }
                      />
                      Dedicate anonymously
                    </label>

                    <label className="font-didact flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-5 h-5 bg-[#EDE2FF] border-2 border-[#583490] rounded-[6px] 
      appearance-none relative checked:after:content-['✔'] checked:after:absolute 
      checked:after:text-[#583490] checked:after:text-[12px] 
      checked:after:left-[3px] checked:after:top-[-1px]"
                        checked={selectedOption === "terms"}
                        onChange={() =>
                          setSelectedOption(
                            selectedOption === "terms" ? "" : "terms"
                          )
                        }
                      />
                      <span className="font-didact">
                        I agree to Terms and{" "}
                        <a href="/privacypolicy" className="">
                          Privacy Notice
                        </a>
                      </span>
                    </label>
                  </div>
                </div>
              </form>

              {/* Footer */}
              <div className="shrink-0 pt-30">
                <button
                  onClick={() => setPanelView("addressDetails")}
                  className="w-full py-3 bg-purple-100 hover:bg-purple-200 rounded-lg font-visby font-semibold text-black"
                >
                  Continue
                </button>
              </div>
            </>
          )}

          {panelView === "addressDetails" && (
            <>
              {/* Green dedication bar (flush to top/left/right) */}
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

              {/* Content */}
              <div className="flex-1 overflow-y-auto mt-6">
                {/* Large stacked address block (rounded container with separators) */}
                <div className="mb-6">
                  <div className="rounded-[10px] border border-gray-300 overflow-hidden">
                    <input
                      type="text"
                      placeholder="Street address"
                      className="w-full p-4 text-sm placeholder-gray-400 outline-none"
                    />
                    <div className="h-px bg-gray-200" />
                    <input
                      type="text"
                      placeholder="Apartment / suit / floor"
                      className="w-full p-4 text-sm placeholder-gray-400 outline-none"
                    />
                    <div className="h-px bg-gray-200" />
                    <input
                      type="text"
                      placeholder="Town or City"
                      className="w-full p-4 text-sm placeholder-gray-400 outline-none"
                    />
                  </div>
                </div>

                {/* State / Zip + Country block (rounded container) */}
                <div className="mb-6">
                  <div className="rounded-[10px] border border-gray-300 overflow-hidden">
                    <div className="flex">
                      <input
                        type="text"
                        placeholder="State"
                        className="flex-1 p-4 text-sm placeholder-gray-400 outline-none border-r border-gray-200"
                      />
                      <input
                        type="text"
                        placeholder="Zip code"
                        className="w-1/3 p-4 text-sm placeholder-gray-400 outline-none"
                      />
                    </div>
                    <div className="h-px bg-gray-200" />
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Country"
                        className="w-full p-4 pr-10 text-sm placeholder-gray-400 outline-none"
                      />
                      {/* Right chevron like design */}
                      <svg
                        className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="shrink-0">
                <button
                  onClick={() => console.log("Continue to payment")}
                  className="w-full py-3 bg-purple-100 hover:bg-purple-200 rounded-lg font-visby font-semibold text-black"
                >
                  Continue
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
