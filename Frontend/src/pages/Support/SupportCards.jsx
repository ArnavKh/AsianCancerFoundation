import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    if (action === "contact") navigate("/contactus");
    else if (action === "donate") setShowOverlay(true);
  };

  return (
    <section
  className="
    px-4 md:px-20 
    grid 
    grid-cols-1 
    xl:grid-cols-2 
    gap-5 md:gap-8 
    pb-10
  "
>
      {cards.map((item, idx) => (
        <div
          key={idx}
          onClick={() => handleClick(item.action)}
          className="
            group cursor-pointer 
            bg-white rounded-[30px] shadow-sm hover:shadow 
            flex flex-col justify-center
            p-6 
            h-[13rem]

            /* Full width until large screens */
            w-full 

            /* Prevent overlap by forcing a minimum width */
            min-w-[18rem]

            /* Your original desktop size preserved */
            lg:w-[32rem]
          "
        >
          <h3 className="text-lg md:text-3xl font-semibold font-visby mb-2 group-hover:hidden">
            {item.title}
          </h3>

          <p className="text-[#583490] text-sm md:text-lg font-semibold font-visby group-hover:hidden">
            {item.subtitle}
          </p>

          {/* Mobile always visible */}
          <p className="block md:hidden font-visby text-sm mt-2">
            {item.hoverText}
          </p>

          {/* Desktop hover text */}
          <p className="hidden md:group-hover:block font-visby text-center text-xl">
            {item.hoverText}
          </p>
        </div>
      ))}

      <DonateOverlay isOpen={showOverlay} onClose={() => setShowOverlay(false)} />
    </section>
  );
};

export default SupportCards;
