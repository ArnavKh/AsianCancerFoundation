import { useEffect, useState } from "react";
import Logo from "./assets/Logo.png";
import SouledStore from "./assets/SouledStoreLogo.png";

export default function SupportFightPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("visited");
    if (!hasVisited) {
      setShowPopup(true);
      localStorage.setItem("visited", "true");
    }
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="relative w-[780px] h-[432px] bg-pink-50 rounded-2xl shadow-lg p-10">
        {/* Close button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-4 right-6 text-2xl font-bold text-black hover:text-gray-600"
        >
          &times;
        </button>

        {/* Text content */}
        <h1 className="text-[#E31C79] text-[60px] font-extrabold font-visby leading-15">
          SUPPORT <br /> THE FIGHT
        </h1>
        <h2 className="mt-2 text-[15px] font-semibold font-visby text-black">
          Breast Cancer Awareness Merchandise
        </h2>
        <p className="mt-6 text-[26px] text-black max-w-lg font-visby">
          Proceeds will go<br></br> towards supporting Asian <br></br>Cancer
          Foundation
        </p>

        {/* Button */}
        <button className="mt-6  bg-[#EE8A9F] text-white font-bold rounded-[10px] font-visby w-57 h-10">
          Get Your Merch
        </button>

        {/* Logos */}
        <div className="absolute right-34 top-20 flex flex-col items-center">
          {/* Asian Cancer Foundation logo */}
          <img
            src={Logo}
            alt="Asian Cancer Foundation"
            className="w-[237px] h-[124px] object-contain"
          />

          {/* Souled Store inside pink circle */}
          <div className="absolute left-20 top-30 bg-[#FDDCE0] rounded-full w-[180px] h-[180px] flex items-center justify-center">
            <img
              src={SouledStore}
              alt="The Souled Store"
              className="w-[175px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
