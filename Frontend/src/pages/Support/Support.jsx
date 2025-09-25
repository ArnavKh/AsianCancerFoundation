import React from "react";
import FooterBanner from "../Home/FooterBanner.jsx";
import WhyGiveUs from "./WhyGiveUs.jsx";
import BankDetails from "./BankDetails.jsx";
import EveryPennyCounts from "./EveryPennyCounts.jsx";
import HeroSection from "./HeroSection.jsx";
import SupportCards from "./SupportCards.jsx";

const Support = () => {
  return (
    <div className="font-sans bg-[#f9f3ec] text-gray-900">
      <HeroSection/>
      <SupportCards/>
      <EveryPennyCounts/>
      <WhyGiveUs/>
      <BankDetails/>
      <FooterBanner/>
    </div>
  );
};

export default Support;
