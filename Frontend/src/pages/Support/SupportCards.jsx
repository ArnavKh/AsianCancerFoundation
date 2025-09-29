import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // for navigation
import DonateOverlay from '../../DonateOverlay';

const SupportCards = () => {
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(false);

  const cards = [
    {
      title: "CSR Partnerships",
      subtitle: "Align Your Brand With A Life- Saving Mission.",
      hoverText:
        "Support surgeries, awareness drives & patient care initiatives through your CSR program. Partner with ACF to make a measurable impact on public health.",
      action: "contact", // 👈 go to contact
    },
    {
      title: "Corporate Collaborations",
      subtitle: "Purpose Meets Partnership",
      hoverText:
        "Co-create impact through co-branded campaigns, event sponsorships, or cause-drive merchandise. Let your brand stand for something bigger, because doing good is good business.",
      action: "contact", // 👈 go to contact
    },
    {
      title: "Monthly Giving",
      subtitle: "Small Commitment. Lasting Change",
      hoverText:
        "Become a monthly donor & help us provide continuous care. Even small monthly contributions can help fund follow-ups, nutrition, screenings & surgeries for patients.",
      action: "donate", // 👈 open overlay
    },
    {
      title: "One-Time Donations",
      subtitle: "One Gift. One Life Changed.",
      hoverText:
        "Make a direct impact. Your single donation can cover critical needs like surgery, diagnostic tests, or accommodation for underprivileged cancer patients.",
      action: "donate", // 👈 open overlay
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
    <section className="px-4 md:px-20 py-12 grid grid-cols-1 sm:grid-cols-2 gap-x-75 gap-y-8 pb-35 mr-76">
      {cards.map((item, idx) => (
        <div
          key={idx}
          onClick={() => handleClick(item.action)} // 👈 click handler
          className="w-75 group flex flex-col justify-center bg-white rounded-[30px] p-6 shadow-sm hover:shadow transition md:w-128 h-51 align-middle cursor-pointer"
        >
          <h3 className="text-lg md:text-3xl font-semibold font-visby mb-2 group-hover:hidden">
            {item.title}
          </h3>

          <p className="text-[#583490] text-sm md:text-lg font-semibold font-visby group-hover:hidden">
            {item.subtitle}
          </p>

          <p className="hidden group-hover:block font-visby text-center text-xl">
            {item.hoverText}
          </p>
        </div>
      ))}

      {/* Donate overlay only for the last two */}
      <DonateOverlay isOpen={showOverlay} onClose={() => setShowOverlay(false)} />
    </section>
  );
};

export default SupportCards;
