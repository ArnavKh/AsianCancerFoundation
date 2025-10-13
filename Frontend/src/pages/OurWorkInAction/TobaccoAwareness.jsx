import React from "react";
import { Link } from "react-router-dom";
import { CircleChevronLeft } from "lucide-react";
import Tobacco from "../../assets/Tobacco/Tobacco.png";
import Cancer from "../../assets/Tobacco/Cancer.png";
import VIBGYOR from "../../assets/Tobacco/VIBGYOR.png";
import Mobile from "../../assets/MobileScreening/MobileScreening.jpg";

const TobaccoAwareness = () => {
  return (
    <div className="bg-[#f8f5f0] min-h-screen pt-8 py-4 px-4 md:px-0">
      <div className="relative mb-6 mt-8 max-w-[1080px] mx-auto px-4 md:px-0">
        <Link
          to="/workinaction"
          className="absolute left-0 top-1/2 -translate-y-1/2"
        >
          <CircleChevronLeft className="absolute left-[-7rem] top-1/3 -translate-y-1/2 w-10 h-10" />
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold font-visby text-purple-900 text-center">
          Tobacco Awareness Session
        </h1>
      </div>

      {/* Top image */}
      <div className="mx-auto rounded-[30px] overflow-hidden mb-6 
        w-[390px] max-w-full md:w-270 md:h-88 h-[280px]
      ">
        <img
          src={Tobacco}
          alt="Tobacco Awareness Session"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Beneficiaries & Date */}
      <div className="md:w-270 mx-auto bg-[rgba(125,165,134,0.31)] rounded-[30px] grid grid-cols-2 text-center py-4 my-10">
        <div className="border-r border-gray-400">
          <p className="md:text-3xl font-bold font-visby text-[#7DA586]">100+</p>
          <p className="md:text-xl font-didact text-gray-800">Beneficiaries</p>
        </div>
        <div>
          <p className="md:text-3xl font-bold font-visby text-[#7DA586]">11th</p>
          <p className="md:text-xl font-didact text-gray-800">January 2023</p>
        </div>
      </div>

      {/* Highlight & Key Partner */}
      <div className="md:w-270 mx-auto pb-10 text-gray-800">
        <p className="text-base md:text-2xl mb-2 font-didact">
          <span className="font-bold font-visby">Highlight - </span>
          Preventive awareness on tobacco consumption
        </p>
        <p className="text-base md:text-2xl md:mb-15 mb-5 font-didact">
          <span className="font-bold font-visby">Key Partner - </span>
          Nargis Dutt Foundation
        </p>

        <p className="text-base md:text-2xl mb-4 font-didact">
          In partnership with the Nargis Dutt Foundation, ACF conducted an
          engaging tobacco awareness session for 100 students aged 12-16.
        </p>
        <p className="text-base md:text-2xl font-didact">
          Led by Dr. Shravan Shetty & supported by teams from both
          organisations, the session highlighted the broader health risks of
          tobacco use beyond cancer, using real-life examples & relatable
          insights.
        </p>
      </div>

      {/* Cards Section */}
      <div
        className="mx-auto
          grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-10 px-2 md:px-0
          max-w-[1080px]
          sm:max-w-[1050px] pt-15"
      >
        <Link to="/workinaction/medicalcamp" className="group">
          <div className="bg-white rounded-[30px] shadow-md hover:shadow-lg transition flex flex-col md:h-104 max-w-[331px] mx-auto md:max-w-none md:mx-0 h-[350px] w-[300px]">
            <div className="h-1/2 w-full overflow-hidden rounded-t-[30px]">
              <img
                src={Cancer}
                alt="Tobacco Awareness Session"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 flex items-center justify-center p-4">
              <h2 className="text-purple-900 text-center text-3xl font-visby font-semibold">
                Cancer Screening
                <br />
                Camp
              </h2>
            </div>
          </div>
        </Link>

        <Link to="/workinaction/vibgyor" className="group">
          <div className="bg-white rounded-[30px] shadow-md hover:shadow-lg transition flex flex-col md:h-104 max-w-[331px] mx-auto md:max-w-none md:mx-0 h-[350px] w-[300px]">
            <div className="h-1/2 w-full overflow-hidden rounded-t-[30px]">
              <img
                src={VIBGYOR}
                alt="VIBGYOR Fundraising Concert"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 flex items-center justify-center p-4">
              <h2 className="text-purple-900 text-center text-3xl font-visby font-semibold">
                VIBGYOR Fundraising Concert
              </h2>
            </div>
          </div>
        </Link>

        <Link to="/workinaction/mobilescreening" className="group">
          <div className="bg-white rounded-[30px] shadow-md hover:shadow-lg transition flex flex-col md:h-104 max-w-[331px] mx-auto md:max-w-none md:mx-0 h-[350px] w-[300px]">
            <div className="h-1/2 w-full overflow-hidden rounded-t-[30px]">
              <img
                src={Mobile}
                alt="Mobile Screening Camps"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 flex items-center justify-center p-4">
              <h2 className="text-purple-900 text-center text-3xl font-visby font-semibold">
                Mobile Screening Camps
              </h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TobaccoAwareness;
