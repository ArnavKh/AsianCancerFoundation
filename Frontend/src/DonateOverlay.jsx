import { useEffect, useState } from "react";
import DonateImage from "./assets/DonateOverlay.png";
import Logo from "./assets/Logo.png";
import { Link } from "react-router-dom";

import DonationPanel from "./DonationPanel";
import OncePanel from "./OncePanel";
import CommentPanel from "./CommentPanel";
import ReminderPanel from "./ReminderPanel";
import DetailsPanel from "./DetailsPanel";
import AddressDetailsPanel from "./AddressDetailsPanel";

export default function DonateOverlay({ isOpen, onClose }) {
  const [donationType, setDonationType] = useState("monthly");
  const [amount, setAmount] = useState("");
  const [dedicate, setDedicate] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [panelView, setPanelView] = useState("donation");

  useEffect(() => {
    if (isOpen) {
      setPanelView("donation");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      
      <div className="flex flex-col md:flex-row gap-6 relative">
        {/* Left Panel */}
        <div className="hidden md:flex bg-white rounded-[20px] shadow h-159 w-125 flex-col">
          <img src={DonateImage} alt="Foundation" className="w-125 rounded-t-[20px]" />
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

        {/* Right Panel */}
        <div
          className={`rounded-[20px] shadow h-159 w-87 flex flex-col relative p-6 ${
            panelView === "reminder" ? "bg-[#5F6D82] text-white" : "bg-white text-black"
          }`}
        >
          {/* Close Button – now INSIDE the right panel, top-right */}
          <button
            onClick={() => {
              if (panelView !== "reminder") {
                setPanelView("reminder");
              } else {
                onClose();
              }
            }}
            className="absolute top-1 right-3 text-black text-lg font-black z-10 hover:opacity-70 transition"
          >
            ✕
          </button>

          {panelView === "donation" && (
            <DonationPanel
              donationType={donationType}
              setDonationType={setDonationType}
              amount={amount}
              setAmount={setAmount}
              dedicate={dedicate}
              setDedicate={setDedicate}
              setPanelView={setPanelView}
            />
          )}

          {panelView === "once" && (
            <OncePanel
              amount={amount}
              setPanelView={setPanelView}
            />
          )}

          {panelView === "comment" && (
            <CommentPanel setPanelView={setPanelView} />
          )}

          {panelView === "reminder" && (
            <ReminderPanel onClose={onClose} setPanelView={setPanelView} />
          )}

          {panelView === "details" && (
            <DetailsPanel
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              setPanelView={setPanelView}
            />
          )}

          {panelView === "addressDetails" && (
            <AddressDetailsPanel setPanelView={setPanelView} onClose={onClose}/>
          )}
        </div>
      </div>
    </div>
  );
}