import React from "react";
import { Link } from "react-router-dom";
import { CircleChevronLeft } from "lucide-react";
import CancerScreeningImage from "../../assets/CancerScreening/cancerScreening.jpg";
import Tobacco from "../../assets/CancerScreening/Tobacco.png";
import VIBGYOR from "../../assets/CancerScreening/VIBGYOR.png";
import Mobile from "../../assets/CancerScreening/Mobile.png";

const CancerScreening = () => {
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
          Cancer Screening Camps
        </h1>
      </div>

      {/* Top image */}
      <div className="max-w-3xl mx-auto rounded-[30px] overflow-hidden mb-6 w-242 h-88">
        <img
          src={CancerScreeningImage}
          alt="Medical Camp"
          className="w-242 h-88 object-cover"
        />
      </div>

      {/* Beneficiaries & Date */}
      <div className="max-w-3xl mx-auto bg-[rgba(125,165,134,0.31)] rounded-[30px] grid grid-cols-2 text-center py-4 mb-6">
        <div className="border-r border-gray-400">
          <p className="text-3xl font-bold font-visby text-[#7DA586]">47</p>
          <p className="text-xl font-didact text-gray-800">Beneficiaries</p>
        </div>
        <div>
          <p className="text-3xl font-bold font-visby text-[#7DA586]">16th</p>
          <p className="text-xl font-didact text-gray-800">December 2022</p>
        </div>
      </div>

      {/* Highlight & Key Partner */}
      <div className="max-w-3xl mx-auto mb-6 text-gray-800">
        <p className="text-2xl mb-2 font-didact">
          <span className="font-bold font visby">Highlight - </span>
          Screenings: Pap smears, Oral biopsies, GI OGD scopy, Mammography
        </p>
        <p className="text-2xl mb-15 font-didact">
          <span className="font-bold font visby">Key Partner - </span>
          Hazrat Gaus A Azam Dastagir Baba Bahuddeshiya Sanstha
        </p>

        <p className="text-2xl mb-4 font-didact">
          A free medical camp was held in Sindkhedraja with the support from
          ACF, HCG-Manavata Cancer Centre, Jeevan Amrut Hospital, & Aslan
          Hospital.
        </p>
        <p className="text-2xl font-didact">
          The ACF team conducted cancer screenings & consultations, focusing on
          oral, breast, & cervical cancer. Follow-up testing was advised in
          several cases.
        </p>
      </div>

      {/* Cards Section */}
      <div className="max-w-5xl mx-auto px-33 grid grid-cols-1 md:grid-cols-3 gap-6 mt-30 mb-40">
        {/* Card 1 */}
        <div className="bg-white rounded-[30px] shadow-md hover:shadow-lg transition flex flex-col h-72">
          <div className="h-1/2 w-full overflow-hidden rounded-t-[30px]">
            <img
              src={Tobacco}
              alt="Tobacco Awareness Session"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 flex items-center justify-center p-4">
            <h2 className="text-purple-900 text-center text-2xl font-semibold">
              Tobacco Awareness
              <br />
              Session
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
    </div>
  );
};

export default CancerScreening;
