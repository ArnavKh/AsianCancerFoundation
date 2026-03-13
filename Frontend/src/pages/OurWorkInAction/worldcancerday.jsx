import React from "react";
import { Link } from "react-router-dom";
import { CircleChevronLeft } from "lucide-react";

import WorldCancerDayImage from "../../assets/CancerScreening/3.jpg";
import Tobacco from "../../assets/CancerScreening/2.jpeg";
import Walkabout from "../../assets/CancerScreening/1.jpeg";
import Mobile from "../../assets/MobileScreening/9.jpeg";

const WorldCancerDay = () => {
  return (
    <div className="bg-[#f8f5f0] min-h-screen py-8 px-4 md:px-0 mx-auto">
      <div className="w-[70%] mx-auto">

        {/* Header */}
        <div className="relative mb-6 mt-8 max-w-[1080px] mx-auto px-4 md:px-0">
          <Link
            to="/workinaction"
            className="absolute left-0 top-1/2 -translate-y-1/2"
          >
            <CircleChevronLeft className="absolute left-[-7rem] top-1/3 -translate-y-1/2 w-10 h-10" />
          </Link>

          <h1 className="text-2xl md:text-3xl font-bold font-visby text-purple-900 text-center">
            World Cancer Day Fundraising Event
          </h1>
        </div>

        {/* Top image */}
        <div className="mx-auto rounded-[30px] overflow-hidden mb-6 w-[390px] max-w-full md:w-270 md:h-88 h-[280px]">
          <img
            src={WorldCancerDayImage}
            alt="World Cancer Day Event"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Beneficiaries & Date */}
        <div className="mx-auto bg-[rgba(125,165,134,0.31)] rounded-[30px] grid grid-cols-2 text-center py-4 my-10">
          <div className="border-r border-gray-400">
            <p className="md:text-3xl font-bold font-visby text-[#7DA586]">
              ₹35,000+
            </p>
            <p className="md:text-xl font-didact text-gray-800">
              Raised
            </p>
          </div>

          <div>
            <p className="md:text-3xl font-bold font-visby text-[#7DA586]">
              5th
            </p>
            <p className="md:text-xl font-didact text-gray-800">
              February 2026
            </p>
          </div>
        </div>

        {/* Highlight & Key Partner */}
        <div className="mx-auto pb-10 text-gray-800">

          <p className="text-base md:text-2xl mb-2 font-didact">
            <span className="font-bold font-visby">Highlight - </span>
            Increased brand visibility for ACF both in-person and digitally for fundraising.
          </p>

          <p className="text-base md:text-2xl md:mb-15 mb-5 font-didact">
            <span className="font-bold font-visby">Key Partner - </span>
            Shyamala Music Foundation
          </p>

          <p className="text-base md:text-2xl mb-4 font-didact">
            A conversation and fundraising evening organised around World Cancer Day by the Asian Cancer Foundation in partnership with the Shyamal Music Foundation at The Quorum Club.
          </p>

          <p className="text-base md:text-2xl font-didact">
            The event featured a talk by oncologist and director of ACF, Padma Shri Dr Ramakant Deshpande, on lifestyle-related cancer risks, followed by an exclusive classical fusion performance by Aditya Kalyanpur and his team.
          </p>

        </div>

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

            {/* Card 1 */}
            <Link to="/workinaction/tobaccoawareness" className="group">
              <div className="bg-white rounded-[30px] shadow-md hover:shadow-lg transition flex flex-col md:h-104 h-[350px] w-[300px] max-w-[331px]">
                <div className="h-1/2 w-full overflow-hidden rounded-t-[30px]">
                  <img
                    src={Tobacco}
                    alt="Oral Cancer Screening Camp"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex-1 flex items-center justify-center p-4">
                  <h2 className="text-purple-900 text-center text-3xl font-visby font-semibold leading-snug">
                    Oral Cancer Screening Camp in Sindhudurg
                  </h2>
                </div>
              </div>
            </Link>

            {/* Card 2 */}
            <Link to="/workinaction/walkabout" className="group">
              <div className="bg-white rounded-[30px] shadow-md hover:shadow-lg transition flex flex-col md:h-104 h-[350px] w-[300px] max-w-[331px]">
                <div className="h-1/2 w-full overflow-hidden rounded-t-[30px]">
                  <img
                    src={Walkabout}
                    alt="Walkabout Event"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex-1 flex items-center justify-center p-4">
                  <h2 className="text-purple-900 text-center text-3xl font-visby font-semibold leading-snug">
                    Walkabout Senior Games Fundraising Event
                  </h2>
                </div>
              </div>
            </Link>

            {/* Card 3 */}
            <Link to="/workinaction/mobilescreening" className="group">
              <div className="bg-white rounded-[30px] shadow-md hover:shadow-lg transition flex flex-col md:h-104 h-[350px] w-[300px] max-w-[331px]">
                <div className="h-1/2 w-full overflow-hidden rounded-t-[30px]">
                  <img
                    src={Mobile}
                    alt="Breast Cancer Awareness"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex-1 flex items-center justify-center p-4">
                  <h2 className="text-purple-900 text-center text-3xl font-visby font-semibold">
                    Breast Cancer Awareness Campaign
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

export default WorldCancerDay;