import React from "react";
import FooterBanner from "./FooterBanner";
import WhyGiveUs from "./WhyGiveUs";
import BankDetails from "./BankDetails";
import EveryPennyCounts from "./EveryPennyCounts";
import HeroSection from "./HeroSection";
import SupportCards from "./SupportCards";

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
