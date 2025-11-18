import React from "react";
import { Link } from "react-router-dom";
import { CircleChevronLeft } from "lucide-react";
import Tobacco from "../../assets/VIBGYOR/Tobacco.png";
import Cancer from "../../assets/VIBGYOR/Cancer.png";
import VIBGYORImage from "../../assets/VIBGYOR/VIBGYOR2.png";
import Mobile from "../../assets/MobileScreening/MobileScreening.jpg";

const VIBGYOR = () => {
  return (
    <div className="bg-[#f8f5f0] min-h-screen py-8 px-4 md:px-0 mx-auto">
      <div className="w-[70%] mx-auto">
      <div className="relative mb-6 mt-8 max-w-[1080px] mx-auto px-4 md:px-0">
        <Link
          to="/workinaction"
          className="absolute left-0 top-1/2 -translate-y-1/2"
        >
          <CircleChevronLeft className="absolute left-[-7rem] top-1/3 -translate-y-1/2 w-10 h-10" />
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold font-visby text-purple-900 text-center">
             VIBGYOR Fundraising Concert
           </h1>
      </div>

      {/* Top image */}
      <div className="mx-auto rounded-[30px] overflow-hidden mb-6 
        w-[390px] max-w-full md:w-270 md:h-88 h-[280px]
      ">
        <img
          src={VIBGYORImage}
          alt="Medical Camp"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Beneficiaries & Date */}
      <div className="mx-auto bg-[rgba(125,165,134,0.31)] rounded-[30px] grid grid-cols-2 text-center py-4 my-10">
        <div className="border-r border-gray-400">
          <p className="md:text-3xl font-bold font-visby text-[#7DA586]">900</p>
          <p className="md:text-xl font-didact text-gray-800">Attendees</p>
        </div>
        <div>
          <p className="md:text-3xl font-bold font-visby text-[#7DA586]">5th</p>
          <p className="md:text-xl font-didact text-gray-800">November 2022</p>
        </div>
      </div>

      {/* Highlight & Key Partner */}
      <div className="mx-auto pb-10 text-gray-800">
           <p className="text-base md:text-2xl mb-2 font-didact">
             <span className="font-bold font visby">Highlight - </span>
             Fundraising for paedatric cancer care through musical performances & community engagement
           </p>
           <p className="text-base md:text-2xl md:mb-15 mb-5 font-didact">
             <span className="font-bold font-visby">Key Partner - </span>
             C-Kids
           </p>
  
           <p className="text-base md:text-2xl mb-4 font-didact">
             VIBGYOR was a unique musical fundraiser for children with cancer, featuring seven music genres inspired by the chakras & musical notes, including classical, devotional, Sufi, ghazals, instrumental & cotemporary styles.
           </p>
           <p className="text-base md:text-2xl font-didact">
             Proceeds supported the C-Kids program that provides care for underprivileged children undergoing cancer treatment.
           </p>
         </div>

      {/* Cards Section */}
      {/* Cards Section */}
<div className="w-full flex justify-center mt-8 mb-10 px-2">
  <div
    className="
      grid 
      gap-8
      justify-items-center 
      grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
      w-full
      max-w-[1200px]
    "
  >
    <Link to="/workinaction/medicalcamp" className="group">
      {/* Card 1 */}
      <div className="bg-white rounded-[30px] shadow-md hover:shadow-lg transition flex flex-col md:h-104 max-w-[331px] h-[350px] w-[300px]">
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

    <Link to="/workinaction/mobilescreening" className="group">
      {/* Card 2 */}
      <div className="bg-white rounded-[30px] shadow-md hover:shadow-lg transition flex flex-col md:h-104 max-w-[331px] h-[350px] w-[300px]">
        <div className="h-1/2 w-full overflow-hidden rounded-t-[30px]">
          <img
            src={Mobile}
            alt="VIBGYOR Fundraising Concert"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 flex items-center justify-center p-4">
          <h2 className="text-purple-900 text-center text-3xl font-visby font-semibold">
            Mobile Screening
            <br />
            Camps
          </h2>
        </div>
      </div>
    </Link>

    <Link to="/workinaction/tobaccoawareness" className="group">
      {/* Card 3 */}
      <div className="bg-white rounded-[30px] shadow-md hover:shadow-lg transition flex flex-col md:h-104 max-w-[331px] h-[350px] w-[300px]">
        <div className="h-1/2 w-full overflow-hidden rounded-t-[30px]">
          <img
            src={Tobacco}
            alt="Mobile Screening Camps"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 flex items-center justify-center p-4">
          <h2 className="text-purple-900 text-center text-3xl font-visby font-semibold leading-snug">
            Tobacco
            <br />
            Awareness
            <br />
            Session
          </h2>
        </div>
      </div>
    </Link>
  </div>
</div>

    </div>
    </div>
  );
};

export default VIBGYOR;

