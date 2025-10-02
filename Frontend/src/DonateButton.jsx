import { useState } from "react";
import { FaRibbon } from "react-icons/fa";  // ⬅️ make sure this import exists
import DonateOverlay from "./DonateOverlay";

export default function DonateButton() {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="hover:cursor-pointer">
      <button
        onClick={() => setShowOverlay(true)}   // ⬅️ toggle overlay open
        className="flex items-center space-x-2 bg-[#D2635D] text-white px-4 py-2 rounded-[10px] text-sm font-bold hover:cursor-pointer"
      >
        <FaRibbon className="w-4 h-4" />
        <span>Donate</span>
      </button>

      <DonateOverlay
        isOpen={showOverlay}                   // ⬅️ bind to state
        onClose={() => setShowOverlay(false)}  // ⬅️ close overlay
      />
    </div>
  );
}
