import React from "react";
import { FaRibbon } from "react-icons/fa";
import FooterImage from "../../assets/Home/Footer.png"

const FooterBanner = () => {
  return (
    <section className="bg-[#f8f5f0] px-4 md:px-8 py-12">
      <div className="relative rounded-[30px] overflow-hidden w-288 h-76 mx-auto">
        <img
          src= {FooterImage}
          alt="Support"
          className="w-full h-56 md:h-72 object-cover rounded-[30px]"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-4 md:px-8 text-white">
          <h2 className="text-lg md:text-2xl font-bold max-w-lg mb-4 font-visby">
            Your support helps us bring<br></br> timely diagnosis, compassionate<br></br> care &
            treatment to<br></br> those who need<br></br> it most.
          </h2>
          <button className="flex items-center space-x-2 bg-[#D2635D] text-white px-4 py-2 rounded-[10px] text-sm font-bold font-visby">
            <FaRibbon className="w-4 h-4" />
            <span>Donate</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FooterBanner;
