import React from "react";
import BlueImage from "../../assets/Home/Blue.jpg";
import TeachingImage from "../../assets/Home/teaching.png";
import vibgyor from "../../assets/Home/vibgyor.jpeg";
import MotherSon from "../../assets/Home/Hero.JPG";
import DonateButton from "../../DonateButton";

const Hero = () => {
  return (
    <section className="bg-[#583490] text-white pt-16 pb-24 px-4 sm:px-8 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
        {/* Left Section */}
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-visby font-semibold pt-4 md:pt-12">
            Asian Cancer <br /> Foundation
          </h1>
          <p className="mt-4 text-base sm:text-lg font-visby pb-3 font-medium">
            A future where quality cancer care is <br className="hidden sm:block" />
            accessible to all
          </p>

          {/* White Box */}
          <div className="flex items-center mt-6 bg-white text-black rounded-[30px] w-full max-w-[95%] sm:max-w-[460px] h-auto sm:p-2 p-3">
            <img
              src={MotherSon}
              alt="Join Us"
              className="w-[80px] sm:w-[120px] h-[100px] sm:h-[147px] object-cover rounded-[22px] grayscale mr-5"
            />
            <div className="flex-1">
              <p className="text-xs sm:text-sm mb-2 font-didact leading-snug">
                Join the Asian Cancer Foundation to <br />
                ensure everyone has access to timely and <br />
                quality treatment.
              </p>
              <DonateButton />
            </div>
          </div>
        </div>

        {/* Right Section: Image Grid — hidden on small screens */}
        <div className="hidden md:grid grid-cols-2 pt-14">
          <div className="space-y-4 ml-16">
            <div className="w-55 h-38">
              <img
                src={vibgyor}
                alt=""
                className="w-full h-full rounded-[30px] object-cover"
              />
            </div>
            <div className="w-55 h-59">
              <img
                src={BlueImage}
                alt=""
                className="w-full h-full rounded-[30px] object-cover"
              />
            </div>
          </div>

          <div className="w-55 h-101">
            <img
              src={TeachingImage}
              alt=""
              className="rounded-[30px] object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
