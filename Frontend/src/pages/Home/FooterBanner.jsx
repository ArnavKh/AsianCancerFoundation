  import React from "react";
  import { FaRibbon } from "react-icons/fa";
  import FooterImage from "../../assets/Home/Footer.png"
  import DonateButton from "../../DonateButton";

  const FooterBanner = () => {
    return (
      <section className="bg-[#f8f5f0] px-4 md:px-8">
        <div className="relative rounded-[30px] overflow-hidden md:w-330 w-70 h-76 mx-auto items-center">
  {/* Background image */}
  <img
    src={FooterImage}
    alt="Support"
    className="absolute inset-0 w-full h-full object-cover rounded-[30px]"
  />

  {/* White tint gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-white/40 to-white/30"></div>

  {/* Content on top */}
  <div className="absolute inset-0 flex flex-col justify-center items-start px-4 md:px-8 text-white">
    <h2 className="text-lg md:text-2xl font-bold max-w-lg mb-4 font-visby">
      Your support helps us bring<br />
      timely diagnosis, compassionate<br />
      care & treatment to<br />
      those who need<br />
      it most.
    </h2>
    <DonateButton />
  </div>
</div>

      </section>
    );
  };

  export default FooterBanner;
