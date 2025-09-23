import React from "react";
import { FaRibbon } from "react-icons/fa";
import BlueImage from "../../assets/Home/Blue.jpg";
import TeachingImage from "../../assets/Home/teaching.png";
import vibgyor from "../../assets/Home/vibgyor.jpeg";
import MotherSon from "../../assets/Home/Hero.JPG";

const Hero = () => {
  return (
    <section className="bg-[#583490] text-white py-30 px-20">
      <div className="container pl-20 grid md:grid-cols-2">
        <div>
          <h1 className="text-4xl md:text-5xl font-visby font-semibold pt-12">
            Asian Cancer <br></br>Foundation
          </h1>
          <p className="mt-4 text-lg font-visby pb-3">
            A future where quality cancer care is <br /> accessible to all
          </p>
          <div className="flex items-center py-[16px] px-[8px] bg-white text-black rounded-[30px] w-[464px] h-[167px]">
            <img
              src={MotherSon}
              alt="Join Us"
              className="w-[120px] h-[147px] object-cover rounded-[30px] mr-3 grayscale"
            />
            <div>
              <p className="text-sm mb-2 font-didact">
                Join the Asian Cancer Foundation to <br />
                ensure everyone has access to timely and <br />
                quality treatment.
              </p>
              <button className="flex items-center space-x-2 bg-[#d35c4c] hover:bg-[#c44b3b] text-white px-4 py-2 rounded-md text-sm font-medium">
                <FaRibbon className="w-4 h-4" />
                <span>Donate</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex space-x-4">

          <div>
          <div className="w-56 h-46"> <img src={vibgyor} alt="" className="rounded-[30px] object-cover"/></div>
          <div className="ml-8 w-47 h-59"><img src={BlueImage} alt="" className="rounded-[30px] object-cover h-59"/></div>
          </div>
          
          <div className="w-56 h-80"> <img src={TeachingImage} alt="" className="w-full h-full rounded-[30px] object-cover"/></div>
        
        </div>
      </div>
    </section>
  );
};

export default Hero;
