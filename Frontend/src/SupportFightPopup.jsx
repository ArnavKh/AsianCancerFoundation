
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import rhythm_banner from "./assets/rhythm_banner.png";

export default function SupportFightPopup() {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setShowPopup(true);
    }
  }, [location.pathname]);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 px-4">
      <div className="relative bg-white rounded-2xl shadow-lg max-w-[478px] h-[450px] sm:h-[600px] overflow-hidden">
      
        {/* Close button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-[-8px] right-1 sm:top-[-7px] sm:right-0 text-3xl font-bold text-black hover:text-gray-600 z-10"
        >
          &times;
        </button>

        {/* Image placeholder */}
        <img
          src={rhythm_banner}
          alt="Support The Fight"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

