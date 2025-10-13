import React from "react";
import { Link } from "react-router-dom";
import { CircleChevronLeft } from "lucide-react";
import MobileScreeningImage from "../../assets/MobileScreening/MobileScreening.jpg";
import Tobacco from "../../assets/MobileScreening/Tobacco.png";
import Cancer from "../../assets/MobileScreening/Cancer.png";
import VIBGYOR from "../../assets/MobileScreening/VIBGYOR.png";

const MobileScreening = () => {
  return (
    <div className="bg-[#f8f5f0] min-h-screen py-8 px-4 md:px-0">
      {/* Header */}
      <div className="relative mb-6 mt-8 max-w-[1080px] mx-auto px-4 md:px-0">
        <Link
          to="/workinaction"
          className="absolute left-0 top-1/2 -translate-y-1/2"
        >
          <CircleChevronLeft className="absolute left-[-7rem] top-1/3 -translate-y-1/2 w-10 h-10" />
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold font-visby text-purple-900 text-center">
          Mobile Screening Camps
        </h1>
      </div>

      {/* Top image */}
      <div className="mx-auto rounded-[30px] overflow-hidden mb-6 
        w-[390px] max-w-full md:w-270 md:h-88 h-[280px]">
        <img
          src={MobileScreeningImage}
          alt="Mobile cancer screening camp"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Beneficiaries & Date */}
      <div className="md:w-270 mx-auto bg-[rgba(125,165,134,0.31)] rounded-[30px] grid grid-cols-2 text-center py-4 my-10">
        <div className="border-r border-gray-400">
          <p className="md:text-3xl font-bold font-visby text-[#7DA586]">405</p>
          <p className="md:text-xl font-didact text-gray-800">Beneficiaries</p>
        </div>
        <div>
          <p className="md:text-3xl font-bold font-visby text-[#7DA586]">
            March–July
          </p>
          <p className="md:text-xl font-didact text-gray-800">2023</p>
        </div>
      </div>

      {/* Highlight & Key Partner */}
      <div className="md:w-270 mx-auto pb-10 text-gray-800">
        <p className="text-base md:text-2xl mb-2 font-didact">
          <span className="font-bold font-visby">Highlight – </span>
          Early detection & community awareness focusing on oral, breast & cervical cancer in high-risk communities.
        </p>
        <p className="text-base md:text-2xl md:mb-15 mb-5 font-didact">
          <span className="font-bold font-visby">Key Partner – </span>
          Mankhurd Lok Seva NGO, Niramay Foundation, Hazrat Gaus A Azam Dastagir Sanstha & others
        </p>
        <p className="text-base md:text-2xl md:mb-15 mb-5 font-didact">
          <span className="font-bold font-visby">Location – </span>
          Mankhurd, Vikhroli, Kandivali, Tardeo, Gamdevi, Cumballa Hill
        </p>

        <p className="text-base md:text-2xl mb-4 font-didact">
          In collaboration with Child Line, Interaide Development India, Kurla Lions & local NGOs, ACF conducted camps across community sites such as police quarters, hospitals & civic offices, using its medical van.
        </p>
        <p className="text-base md:text-2xl font-didact">
          The initiative offered screening for oral, breast, & cervical cancer, along with tobacco de-addiction counselling.
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
                alt="Cancer screening camp session"
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
                alt="VIBGYOR fundraising concert"
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

        <Link to="/workinaction/tobaccoawareness" className="group">
          <div className="bg-white rounded-[30px] shadow-md hover:shadow-lg transition flex flex-col md:h-104 max-w-[331px] mx-auto md:max-w-none md:mx-0 h-[350px] w-[300px]">
            <div className="h-1/2 w-full overflow-hidden rounded-t-[30px]">
              <img
                src={Tobacco}
                alt="Tobacco awareness session"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 flex items-center justify-center p-4">
              <h2 className="text-purple-900 text-center text-3xl font-visby font-semibold">
                Tobacco Awareness Session
              </h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MobileScreening;
