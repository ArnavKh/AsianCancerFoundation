import React from "react";
import { Link } from "react-router-dom";
import { CircleChevronLeft } from "lucide-react";
import CancerScreeningImage from "../../assets/CancerScreening/cancerScreening.jpg";
import Tobacco from "../../assets/CancerScreening/Tobacco.png";
import VIBGYOR from "../../assets/CancerScreening/VIBGYOR.png";
import Mobile from "../../assets/CancerScreening/Mobile.png";

const CancerScreening = () => {
  return (
    <div className="bg-[#f8f5f0] min-h-screen py-8 px-4 md:px-0">
      <div className="relative mb-6 mt-8 max-w-[1080px] mx-auto px-4 md:px-0">
        <Link
          to="/workinaction"
          className="absolute left-0 top-1/2 -translate-y-1/2"
        >
          <CircleChevronLeft className="absolute left-[-7rem] top-1/3 -translate-y-1/2 w-10 h-10" />
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold font-visby text-purple-900 text-center">
          Cancer Screening Camps
        </h1>
      </div>

      {/* Top image */}
      <div className="mx-auto rounded-[30px] overflow-hidden mb-6 
        w-[390px] md:w-270 md:h-88 h-[280px]">
        <img
          src={CancerScreeningImage}
          alt="Cancer Screening Camp"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Beneficiaries & Date */}
      <div className="md:w-270 mx-auto bg-[rgba(125,165,134,0.31)] rounded-[30px] grid grid-cols-2 text-center py-4 my-10">
        <div className="border-r border-gray-400">
          <p className="md:text-3xl font-bold font-visby text-[#7DA586]">47</p>
          <p className="md:text-xl font-didact text-gray-800">Beneficiaries</p>
        </div>
        <div>
          <p className="md:text-3xl font-bold font-visby text-[#7DA586]">16th</p>
          <p className="md:text-xl font-didact text-gray-800">December 2022</p>
        </div>
      </div>

      {/* Highlight & Key Partner */}
      <div className="md:w-270 mx-auto pb-10 text-gray-800">
        <p className="text-lg md:text-2xl mb-2 font-didact">
          <span className="font-bold font-visby">Highlight - </span>
          Screenings: Pap smears, Oral biopsies, GI OGD scopy, Mammography
        </p>
        <p className="text-lg md:text-2xl md:mb-15 mb-5 font-didact">
          <span className="font-bold font-visby">Key Partner - </span>
          Hazrat Gaus A Azam Dastagir Baba Bahuddeshiya Sanstha
        </p>

        <p className="text-lg md:text-2xl mb-4 font-didact">
          A free medical camp was held in Sindkhedraja with the support from
          ACF, HCG-Manavata Cancer Centre, Jeevan Amrut Hospital, & Aslan
          Hospital.
        </p>
        <p className="text-lg md:text-2xl font-didact">
          The ACF team conducted cancer screenings & consultations, focusing on
          oral, breast, & cervical cancer. Follow-up testing was advised in
          several cases.
        </p>
      </div>

      {/* Cards Section */}
      <div
        className="mx-auto
          grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-10 px-2 md:px-0
          max-w-[1080px]
          sm:max-w-[1050px] pt-20"
      >
        <Link to="/workinaction/tobaccoawareness" className="group">
          <div className="bg-white rounded-[30px] shadow-md hover:shadow-lg transition flex flex-col md:h-104 max-w-[331px] mx-auto md:max-w-none md:mx-0 h-[350px] w-[300px]">
            <div className="h-1/2 w-full overflow-hidden rounded-t-[30px]">
              <img
                src={Tobacco}
                alt="Tobacco Awareness Session"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 flex items-center justify-center p-4">
              <h2 className="text-purple-900 text-center text-3xl font-visby font-semibold">
                Tobacco Awareness
                <br />
                Session
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

export default CancerScreening;
