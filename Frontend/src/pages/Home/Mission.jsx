import React from "react";
import Quotes from "../../assets/Home/Quotes.png";
import MissionImage from "../../assets/Home/Mission.png";

const Mission = () => {
  return (
    <section className="bg-[#f8f5f0] px-6 md:px-16 py-35 pb-40 flex flex-col md:flex-row items-center justify-center gap-50">
  {/* Left image with colored background */}
  <div className="relative w-[300px] md:w-[350px]">
    <div className="absolute -top-10 -left-10 w-full h-50 bg-[#dc6458] rounded-[30px]"></div>
    <img
      src={MissionImage}
      alt="Mission"
      className="relative rounded-xl w-full h-auto z-10"
    />
  </div>

  {/* Right text content */}
<div className="flex flex-col text-center md:text-left relative">
  {/* Quotes image behind heading */}
  <img
    src={Quotes}
    alt="Quotes"
    className="absolute bottom-37 right-51 translate-x-1/2 md:translate-x-0 w-27 h-18"
  />
  
  <h2 className="relative text-4xl md:text-4xl font-extrabold text-[#583490] font-visby text-center">
    Our Mission
  </h2>
  <p className="mt-4 text-xl md:text-2xl text-gray-800 font-didact leading-relaxed text-center">
    To bridge gaps in cancer<br /> care through advocacy, <br />
    resources, and outreach
  </p>
</div>
</section>

  );
};

export default Mission;