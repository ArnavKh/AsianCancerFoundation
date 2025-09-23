import React from "react";
import { FaRibbon } from "react-icons/fa";
import FooterImage from "../../assets/Home/Footer.png"
import DonateButton from "../../DonateButton";

const FooterBanner = () => {
  return (
    <section className="bg-[#f8f5f0] px-4 md:px-8 py-12">
      <div className="relative rounded-[30px] overflow-hidden w-288 h-76 mx-auto">
        <img
          src= {FooterImage}
          alt="Support"
          className="w-full h-56 md:h-72 object-cover rounded-[30px]"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-4 md:px-8 ">
          <h2 className="text-lg md:text-2xl font-bold max-w-lg mb-4 font-visby text-white">
            Your support helps us bring<br></br> timely diagnosis, compassionate<br></br> care &
            treatment to<br></br> those who need<br></br> it most.
          </h2>
          <DonateButton/>
        </div>
      </div>
    </section>
  );
};

export default FooterBanner;
