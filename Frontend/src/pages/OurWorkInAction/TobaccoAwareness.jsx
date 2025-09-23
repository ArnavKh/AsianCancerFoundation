import React from "react";
import { Link } from "react-router-dom";
import { CircleChevronLeft } from "lucide-react";
import Tobacco from "../../assets/Tobacco/Tobacco.png";
import Cancer from "../../assets/Tobacco/Cancer.png";
import VIBGYOR from "../../assets/Tobacco/VIBGYOR.png";
import Mobile from "../../assets/Tobacco/MobileScreening.png";

const TobaccoAwareness = () => {
  return (
  <div className="bg-[#f8f5f0] min-h-screen py-8 px-4">
        <div className="relative mb-6 mt-8">
          <Link
            to="/workinaction"
            className="absolute left-0 top-1/2 -translate-y-1/2"
          >
            <CircleChevronLeft className="ml-15 w-10 h-10" />
          </Link>
  
          <h1 className="text-2xl md:text-3xl font-bold font-visby text-purple-900 text-center">
            Tobacco Awareness Session
          </h1>
        </div>
  
        {/* Top image */}
        <div className="max-w-3xl mx-auto rounded-[30px] overflow-hidden mb-6 w-242 h-88">
          <img
            src={Tobacco}
            alt="Medical Camp"
            className="w-242 h-88 object-cover"
          />
        </div>
  
        {/* Beneficiaries & Date */}
        <div className="max-w-3xl mx-auto bg-[rgba(125,165,134,0.31)] rounded-[30px] grid grid-cols-2 text-center py-4 mb-6">
          <div className="border-r border-gray-400">
            <p className="text-3xl font-bold font-visby text-[#7DA586]">100+</p>
            <p className="text-xl font-didact text-gray-800">Beneficiaries</p>
          </div>
          <div>
            <p className="text-3xl font-bold font-visby text-[#7DA586]">11th</p>
            <p className="text-xl font-didact text-gray-800">January 2023</p>
          </div>
        </div>
  
        {/* Highlight & Key Partner */}
        <div className="max-w-3xl mx-auto mb-6 text-gray-800">
          <p className="text-2xl mb-2 font-didact">
            <span className="font-bold font visby">Highlight - </span>
            Preventive awareness on tobacco consumption
          </p>
          <p className="text-2xl mb-15 font-didact">
            <span className="font-bold font visby">Key Partner - </span>
            Nargist Dutt Foundation
          </p>
  
          <p className="text-2xl mb-4 font-didact">
            In partnership with the Nargis Dutt Foundation, ACF conducted an engaging tobacco awareness session for 100 students aged 12-16.
          </p>
          <p className="text-2xl font-didact">
            Led by Dr.Shravan Shetty & supposed by teams from both organisations, the session highlighted the broader health risks of tobacco use beyong cancer, using real-life examples & relatable insights.
          </p>
        </div>
  
        {/* Cards Section */}
        <div className="max-w-5xl mx-auto px-33 grid grid-cols-1 md:grid-cols-3 gap-6 mt-30 mb-40">
          {/* Card 1 */}
          <div className="bg-white rounded-[30px] shadow-md hover:shadow-lg transition flex flex-col h-72">
            <div className="h-1/2 w-full overflow-hidden rounded-t-[30px]">
              <img
                src={Cancer}
                alt="Tobacco Awareness Session"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 flex items-center justify-center p-4">
              <h2 className="text-purple-900 text-center text-2xl font-semibold">
                Cancer Screening
                <br />
                Camp
              </h2>
            </div>
          </div>
  
          {/* Card 2 */}
          <div className="bg-white rounded-[30px] shadow-md hover:shadow-lg transition flex flex-col h-72">
            <div className="h-1/2 w-full overflow-hidden rounded-t-[30px]">
              <img
                src={VIBGYOR}
                alt="VIBGYOR Fundraising Concert"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 flex items-center justify-center p-4">
              <h2 className="text-purple-900 text-center text-2xl font-semibold">
                VIBGYOR Fundraising Concert
              </h2>
            </div>
          </div>
  
          {/* Card 3 */}
          <div className="bg-white rounded-[30px] shadow-md hover:shadow-lg transition flex flex-col h-72">
            <div className="h-1/2 w-full overflow-hidden rounded-t-[30px]">
              <img
                src={Mobile}
                alt="Mobile Screening Camps"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 flex items-center justify-center p-4">
              <h2 className="text-purple-900 text-center text-2xl font-semibold">
                Mobile Screening Camps
              </h2>
            </div>
          </div>
        </div>
      </div>);
};

export default TobaccoAwareness;
