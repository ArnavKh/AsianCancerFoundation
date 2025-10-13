import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // for navigation
import DonateOverlay from "../../DonateOverlay";

const SupportCards = () => {
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(false);

  const cards = [
    {
      title: "CSR Partnerships",
      subtitle: "Align Your Brand With A Life-Saving Mission.",
      hoverText:
        "Support surgeries, awareness drives & patient care initiatives through your CSR program. Partner with ACF to make a measurable impact on public health.",
      action: "contact",
    },
    {
      title: "Corporate Collaborations",
      subtitle: "Purpose Meets Partnership",
      hoverText:
        "Co-create impact through co-branded campaigns, event sponsorships, or cause-drive merchandise. Let your brand stand for something bigger, because doing good is good business.",
      action: "contact",
    },
    {
      title: "Monthly Giving",
      subtitle: "Small Commitment. Lasting Change",
      hoverText:
        "Become a monthly donor & help us provide continuous care. Even small monthly contributions can help fund follow-ups, nutrition, screenings & surgeries for patients.",
      action: "donate",
    },
    {
      title: "One-Time Donations",
      subtitle: "One Gift. One Life Changed.",
      hoverText:
        "Make a direct impact. Your single donation can cover critical needs like surgery, diagnostic tests, or accommodation for underprivileged cancer patients.",
      action: "donate",
    },
  ];

  const handleClick = (action) => {
    if (action === "contact") {
      navigate("/contactus");
    } else if (action === "donate") {
      setShowOverlay(true);
    }
  };

  return (
    <section className="px-4 md:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-y-5 md:gap-y-8 gap-x-5 md:gap-x-75 pb-35 md:mr-76">
  {cards.map((item, idx) => (
    <div
      key={idx}
      onClick={() => handleClick(item.action)}
      className="w-full sm:w-95 md:w-128 group flex flex-col justify-center bg-white rounded-[30px] p-6 shadow-sm hover:shadow transition h-51 align-middle cursor-pointer mx-auto sm:mx-0"
    >
      <h3 className="text-lg md:text-3xl font-semibold font-visby mb-2 group-hover:hidden">
        {item.title}
      </h3>

      <p className="text-[#583490] text-sm md:text-lg font-semibold font-visby group-hover:hidden">
        {item.subtitle}
      </p>

      {/* 👇 Mobile: Always visible */}
      <p className="block md:hidden font-visby text-sm mt-2">
        {item.hoverText}
      </p>

      {/* 👇 Desktop: Only visible on hover */}
      <p className="hidden md:group-hover:block font-visby text-center text-xl">
        {item.hoverText}
      </p>
    </div>
  ))}

  {/* Donate overlay */}
  <DonateOverlay
    isOpen={showOverlay}
    onClose={() => setShowOverlay(false)}
  />
</section>

  );
};

export default SupportCards;
