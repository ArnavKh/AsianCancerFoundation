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
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 px-4">
      <div className="relative bg-pink-50 rounded-2xl shadow-lg p-6 sm:p-10 w-full max-w-[780px] h-auto sm:h-[432px] py-15">
        {/* Close button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-3 right-4 sm:top-4 sm:right-6 text-2xl font-bold text-black hover:text-gray-600"
        >
          &times;
        </button>

        {/* Text content */}
        <h1 className="text-[#E31C79] text-[36px] sm:text-[60px] font-extrabold font-visby leading-tight sm:leading-[1.15]">
          SUPPORT <br /> THE FIGHT
        </h1>
        <h2 className="mt-2 text-[14px] sm:text-[15px] font-semibold font-visby text-black">
          Breast Cancer Awareness Merchandise
        </h2>
        <p className="mt-4 sm:mt-6 text-[18px] sm:text-[26px] text-black max-w-lg font-visby">
          Proceeds will go <br /> towards supporting Asian <br /> Cancer
          Foundation
        </p>

        {/* Button */}
        <button className="mt-5 sm:mt-6 bg-[#EE8A9F] text-white font-bold rounded-[10px] font-visby w-full sm:w-57 h-10">
          Get Your Merch
        </button>

        {/* Logos - desktop version (unchanged) */}
        <div className="absolute sm:right-34 sm:top-20 top-auto right-auto sm:flex hidden flex-col items-center bg-[#F8F2EB] w-[214px] h-[214px] rounded-full">
          <img
            src={Logo}
            alt="Asian Cancer Foundation"
            className="w-[337px] h-[154px] object-contain"
          />
          <div className="absolute left-20 top-30 bg-[#FDDCE0] rounded-full w-[180px] h-[180px] flex items-center justify-center">
            <img
              src={SouledStore}
              alt="The Souled Store"
              className="w-[175px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Logos - mobile version (side by side, clearer) */}
        <div className="mt-6 flex flex-col items-center gap-4 sm:hidden">
          <div className="flex justify-center gap-6">
            <div className="flex items-center justify-center w-[140px] h-[140px] bg-[#F8F2EB] rounded-full">
              <img
                src={Logo}
                alt="Asian Cancer Foundation"
                className="w-[100px] h-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center w-[140px] h-[140px] bg-[#FDDCE0] rounded-full">
              <img
                src={SouledStore}
                alt="The Souled Store"
                className="w-[100px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
