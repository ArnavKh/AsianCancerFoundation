import React from "react";
import { Link } from "react-router-dom";
import { CircleChevronLeft } from "lucide-react";

import OralCancerImage from "../../assets/Tobacco/2.jpeg";
import Cancer from "../../assets/Tobacco/3.jpg";
import Walkabout from "../../assets/Tobacco/1.jpeg";
import BreastCancer from "../../assets/MobileScreening/9.jpeg";

const OralCancer = () => {
  return (
    <div className="bg-[#f8f5f0] min-h-screen pt-6 pb-6 px-4 sm:px-6 md:px-0">
      
      <div className="w-full max-w-[1080px] mx-auto">

        {/* Header */}
        <div className="relative mb-6 mt-6">
          <Link
            to="/workinaction"
            className="absolute sm:left-0 top-1/2 -translate-y-1/2 z-10"
          >
            <CircleChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
          </Link>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-visby text-purple-900 text-center px-10 sm:px-0">
            Oral Cancer Screening Camp in Sindhudurg
          </h1>
        </div>

        {/* Top Image */}
        <div className="mx-auto rounded-[30px] overflow-hidden mb-6 
          w-full h-[220px] sm:h-[260px] md:h-[350px] lg:h-[380px]">
          <img
            src={OralCancerImage}
            alt="Oral Cancer Screening Camp"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Stats */}
        <div className="mx-auto bg-[rgba(125,165,134,0.31)] rounded-[30px] 
          grid grid-cols-2 text-center py-4 my-8 sm:my-10">

          <div className="border-r border-gray-400">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold font-visby text-[#7DA586]">
              150
            </p>
            <p className="text-sm sm:text-base md:text-xl font-didact text-gray-800">
              Screened
            </p>
          </div>

          <div>
            <p className="text-sm sm:text-lg md:text-2xl font-bold font-visby text-[#7DA586]">
              31st January – 1st February
            </p>
            <p className="text-sm sm:text-lg md:text-2xl font-bold font-visby text-[#7DA586]">
              2026
            </p>
          </div>

        </div>

        {/* Content */}
        <div className="pb-8 sm:pb-10 text-gray-800 px-1 sm:px-0">

          <p className="text-base sm:text-lg md:text-2xl mb-2 font-didact">
            <span className="font-bold font-visby">Highlight - </span>
            150 individuals screened for oral cancer in underserved regions.
          </p>

          <p className="text-base sm:text-lg md:text-2xl mb-4 sm:mb-8 md:mb-12 font-didact">
            <span className="font-bold font-visby">Key Partner - </span>
            Nath Pai Foundation
          </p>

          <p className="text-base sm:text-lg md:text-2xl mb-4 font-didact">
            A community screening initiative addressing high tobacco use and
            limited access to oncologists in Sindhudurg was conducted with the
            Nath Pai Foundation over 2 days in Devgad & Kudal regions of
            Sindhudurg.
          </p>

          <p className="text-base sm:text-lg md:text-2xl font-didact">
            The initiative mobilised oncologists, enabled community outreach
            through the local network, and increased awareness through
            coordinated communication and social media.
          </p>

        </div>

        {/* Related Cards */}
        <div className="w-full flex justify-center mt-8 mb-10 px-2">
          <div
            className="
              grid gap-6 sm:gap-8
              grid-cols-1 sm:grid-cols-2 md:grid-cols-3
              w-full max-w-[1080px]
            "
          >

            {/* Card 1 */}
            <Link to="/workinaction/worldcancerday" className="group">
              <div className="bg-white rounded-[30px] shadow-md hover:shadow-lg transition flex flex-col h-[320px] sm:h-[340px] md:h-[380px]">
                <div className="h-1/2 w-full overflow-hidden rounded-t-[30px]">
                  <img
                    src={Cancer}
                    alt="World Cancer Day"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex-1 flex items-center justify-center p-4">
                  <h2 className="text-purple-900 text-center text-xl sm:text-2xl md:text-3xl font-visby font-semibold">
                    World <br /> Cancer Day Fundraising Event
                  </h2>
                </div>
              </div>
            </Link>

            {/* Card 2 */}
            <Link to="/workinaction/walkabout" className="group">
              <div className="bg-white rounded-[30px] shadow-md hover:shadow-lg transition flex flex-col h-[320px] sm:h-[340px] md:h-[380px]">
                <div className="h-1/2 w-full overflow-hidden rounded-t-[30px]">
                  <img
                    src={Walkabout}
                    alt="Walkabout Event"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex-1 flex items-center justify-center p-4">
                  <h2 className="text-purple-900 text-center text-xl sm:text-2xl md:text-3xl font-visby font-semibold leading-snug">
                    Walkabout <br /> Senior Games Fundraising Event
                  </h2>
                </div>
              </div>
            </Link>

            {/* Card 3 */}
            <Link to="/workinaction/breastcancer" className="group">
              <div className="bg-white rounded-[30px] shadow-md hover:shadow-lg transition flex flex-col h-[320px] sm:h-[340px] md:h-[380px]">
                <div className="h-1/2 w-full overflow-hidden rounded-t-[30px]">
                  <img
                    src={BreastCancer}
                    alt="Breast Cancer Awareness"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex-1 flex items-center justify-center p-4">
                  <h2 className="text-purple-900 text-center text-xl sm:text-2xl md:text-3xl font-visby font-semibold">
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

export default OralCancer;