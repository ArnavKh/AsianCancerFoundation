import React from "react";
import { Link } from "react-router-dom";
import { CircleChevronLeft } from "lucide-react";
import MobileScreeningImage from "../../assets/MobileScreening/MobileScreening.jpg";
import Tobacco from "../../assets/MobileScreening/Tobacco.png";
import Cancer from "../../assets/MobileScreening/Cancer.png";
import VIBGYOR from "../../assets/MobileScreening/VIBGYOR.png";

const MobileScreening = () => {
  return (
    <div className="bg-[#f8f5f0] min-h-screen pt-6 pb-6 px-4 sm:px-6 md:px-0">

      {/* Header */}
      <div className="relative mb-6 mt-6 max-w-[1080px] mx-auto">

        <Link
          to="/workinaction"
          className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-10"
        >
          <CircleChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
        </Link>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-visby text-purple-900 text-center px-10 sm:px-0">
          Mobile Screening Camps
        </h1>
      </div>

      {/* Top image */}
      <div className="mx-auto rounded-[30px] overflow-hidden mb-6 
        w-full max-w-[1080px] h-[220px] sm:h-[260px] md:h-[350px] lg:h-[380px]">
        <img
          src={MobileScreeningImage}
          alt="Mobile cancer screening camp"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Beneficiaries & Date */}
      <div className="w-full max-w-[1080px] mx-auto bg-[rgba(125,165,134,0.31)] rounded-[30px] 
        grid grid-cols-2 text-center py-4 my-8 sm:my-10">
        <div className="border-r border-gray-400">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold font-visby text-[#7DA586]">
            405
          </p>
          <p className="text-sm sm:text-base md:text-xl font-didact text-gray-800">
            Beneficiaries
          </p>
        </div>
        <div>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold font-visby text-[#7DA586]">
            March–July
          </p>
          <p className="text-sm sm:text-base md:text-xl font-didact text-gray-800">
            2023
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="w-full max-w-[1080px] mx-auto pb-8 sm:pb-10 text-gray-800 px-1 sm:px-0">
        <p className="text-base sm:text-lg md:text-2xl mb-2 font-didact">
          <span className="font-bold font-visby">Highlight – </span>
          Early detection & community awareness focusing on oral, breast & cervical cancer in high-risk communities.
        </p>

        <p className="text-base sm:text-lg md:text-2xl mb-4 sm:mb-6 font-didact">
          <span className="font-bold font-visby">Key Partner – </span>
          Mankhurd Lok Seva NGO, Niramay Foundation, Hazrat Gaus A Azam Dastagir Sanstha & others
        </p>

        <p className="text-base sm:text-lg md:text-2xl mb-4 sm:mb-6 font-didact">
          <span className="font-bold font-visby">Location – </span>
          Mankhurd, Vikhroli, Kandivali, Tardeo, Gamdevi, Cumballa Hill
        </p>

        <p className="text-base sm:text-lg md:text-2xl mb-4 font-didact">
          In collaboration with Child Line, Interaide Development India, Kurla Lions & local NGOs, ACF conducted camps across community sites such as police quarters, hospitals & civic offices, using its medical van.
        </p>

        <p className="text-base sm:text-lg md:text-2xl font-didact">
          The initiative offered screening for oral, breast, & cervical cancer, along with tobacco de-addiction counselling.
        </p>
      </div>

      {/* Cards Section */}
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        gap-6 mt-8 mb-10 max-w-[1080px] px-2 sm:px-0">

        {/* Card 1 */}
        <Link to="/workinaction/medicalcamp" className="group">
          <div className="bg-white rounded-[30px] shadow-md hover:shadow-lg transition flex flex-col h-[320px] sm:h-[340px] md:h-[380px]">
            <div className="h-1/2 w-full overflow-hidden rounded-t-[30px]">
              <img
                src={Cancer}
                alt="Cancer screening camp session"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 flex items-center justify-center p-4">
              <h2 className="text-purple-900 text-center text-xl sm:text-2xl md:text-3xl font-visby font-semibold">
                Cancer Screening
                <br />
                Camp
              </h2>
            </div>
          </div>
        </Link>

        {/* Card 2 */}
        <Link to="/workinaction/vibgyor" className="group">
          <div className="bg-white rounded-[30px] shadow-md hover:shadow-lg transition flex flex-col h-[320px] sm:h-[340px] md:h-[380px]">
            <div className="h-1/2 w-full overflow-hidden rounded-t-[30px]">
              <img
                src={VIBGYOR}
                alt="VIBGYOR fundraising concert"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 flex items-center justify-center p-4">
              <h2 className="text-purple-900 text-center text-xl sm:text-2xl md:text-3xl font-visby font-semibold">
                VIBGYOR Fundraising Concert
              </h2>
            </div>
          </div>
        </Link>

        {/* Card 3 */}
        <Link to="/workinaction/tobaccoawareness" className="group">
          <div className="bg-white rounded-[30px] shadow-md hover:shadow-lg transition flex flex-col h-[320px] sm:h-[340px] md:h-[380px]">
            <div className="h-1/2 w-full overflow-hidden rounded-t-[30px]">
              <img
                src={Tobacco}
                alt="Tobacco awareness session"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 flex items-center justify-center p-4">
              <h2 className="text-purple-900 text-center text-xl sm:text-2xl md:text-3xl font-visby font-semibold">
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