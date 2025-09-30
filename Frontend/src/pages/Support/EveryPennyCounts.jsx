import React, { useState } from 'react'
import "./EveryPennyCounts.css";
import DonateOverlay from '../../DonateOverlay';

const EveryPennyCounts = () => {
  const [showOverlay, setShowOverlay] = useState(false); // ⬅️ overlay state
  const [selectedAmount, setSelectedAmount] = useState(null); // ⬅️ optional: store which amount was clicked

  const handleDonateClick = (amt) => {
    setSelectedAmount(amt); // (you can pass this into overlay if you want pre-fill)
    setShowOverlay(true);
};
  return (
    <section className="px-4 md:px-20 py-12 md:py-16 bg-white">
        <h2 className="text-3xl md:text-3xl text-[#583490] mb-8 font-visby font-extrabold">
          EVERY DONATION COUNTS
        </h2>

        <p className="text-base md:text-3xl mb-6 font-visby font-semibold">
          You Can Start By Donating A Little Monthly
        </p>
        <div className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start">
        {["₹ 1,000", "₹ 2,500", "₹ 5,000", "₹ 10,000+"].map((amt, i) => (
          <button
            key={i}
            onClick={() => handleDonateClick(amt)} // ⬅️ trigger overlay
            className="donation-card bg-[#f9f3ec] border-3 border-[#583490] rounded-[10px]
             text-[#583490] font-bold w-59 h-29 text-2xl font-visby shadow-[#583490] shadow-sm"
          >
            {amt}
          </button>
        ))}
      </div>

        <p className="text-base md:text-3xl font-semibold mb-6 font-visby ">
          Support Breast Cancer Surgeries
        </p>

        <div className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start">
          {["₹ 2,50,000", "₹250,00,000"].map((amt, i) => (
            <button
              key={i}
              className="bg-[#f9f3ec] px-6 md:px-12 py-3 md:py-5 rounded-[10px] shadow-[#583490] shadow-md
       font-bold font-visby w-59 h-29 sm:w-auto text-center text-2xl"
            >
              <div>
                <a href="/contactus">
                <div className="text-[#583490] text-2xl font-bold">{amt}</div>
                <div className="text-sm md:text-base font-normal mt-1">
                  {i === 0 ? "Per Surgery" : "For 100 Surgeries"}
                </div>
              </a>
              </div>
            </button>
          ))}
        </div>

        <p className="text-base md:text-3xl font-semibold mb-6 font-visby">
          Support Head And Neck Cancer Surgeries
        </p>

        <div className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start">
          {["₹ 3,00,000", "₹300,00,000"].map((amt, i) => (
            <button
              key={i}
              className="bg-[#f9f3ec] px-6 md:px-12 py-3 md:py-5 rounded-[10px] shadow-[#583490] shadow-md
       font-bold font-visby w-59 h-29 sm:w-auto text-center text-2xl"
            >
              <div>
              <a href="/contactus">
                <div className="text-[#583490] text-2xl font-bold">{amt}</div>
                <div className="text-sm md:text-base font-normal mt-1">
                  {i === 0 ? "Per Surgery" : "For 100 Surgeries"}
                </div>
                </a>
              </div>
            </button>
          ))}
        </div>
        <DonateOverlay
        isOpen={showOverlay}
        onClose={() => setShowOverlay(false)}
        amount={selectedAmount} // optional — remove if DonateOverlay doesn't accept it
      />
      </section>
  )
}

export default EveryPennyCounts