import React from "react";
import { Link } from "react-router-dom";
import { CircleChevronLeft } from "lucide-react";

import OralCancerImage from "../../assets/Tobacco/2.jpeg";
import Cancer from "../../assets/Tobacco/3.jpg";
import Walkabout from "../../assets/Tobacco/1.jpeg";
import BreastCancer from "../../assets/MobileScreening/9.jpeg";

const OralCancer = () => {
  return (
    <div className="bg-[#f8f5f0] min-h-screen py-8 px-4 md:px-0 mx-auto">
      <div className="w-[70%] mx-auto">

        {/* Back + Title */}
        <div className="relative mb-6 mt-8 max-w-[1080px] mx-auto px-4 md:px-0">
          <Link
            to="/workinaction"
            className="absolute left-0 top-1/2 -translate-y-1/2"
          >
            <CircleChevronLeft className="absolute left-[-7rem] top-1/3 -translate-y-1/2 w-10 h-10" />
          </Link>

          <h1 className="text-2xl md:text-3xl font-bold font-visby text-purple-900 text-center">
            Oral Cancer Screening Camp in Sindhudurg
          </h1>
        </div>

        {/* Top Image */}
        <div className="mx-auto rounded-[30px] overflow-hidden mb-6 w-[390px] max-w-full md:w-270 md:h-88 h-[280px]">
          <img
            src={OralCancerImage}
            alt="Oral Cancer Screening Camp"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Stats */}
        <div className="mx-auto bg-[rgba(125,165,134,0.31)] rounded-[30px] grid grid-cols-2 text-center py-4 my-10">
          
          <div className="border-r border-gray-400">
            <p className="md:text-3xl font-bold font-visby text-[#7DA586]">
              150
            </p>
            <p className="md:text-xl font-didact text-gray-800">
              Screened
            </p>
          </div>

          <div>
            <p className="md:text-2xl font-bold font-visby text-[#7DA586]">
              31st January – 1st February
            </p>
            <p className="md:text-2xl font-bold font-visby text-[#7DA586]">
                2026
            </p>
            
          </div>

        </div>

        {/* Content */}
        <div className="mx-auto pb-10 text-gray-800">

          <p className="text-base md:text-2xl mb-2 font-didact">
            <span className="font-bold font-visby">Highlight - </span>
            150 individuals screened for oral cancer in underserved regions.
          </p>

          <p className="text-base md:text-2xl md:mb-15 mb-5 font-didact">
            <span className="font-bold font-visby">Key Partner - </span>
            Nath Pai Foundation
          </p>

          <p className="text-base md:text-2xl mb-4 font-didact">
            A community screening initiative addressing high tobacco use and
            limited access to oncologists in Sindhudurg was conducted with the
            Nath Pai Foundation (NPF) over 2 days in Devgad & Kudal regions of
            Sindhudurg.
          </p>

          <p className="text-base md:text-2xl font-didact">
            The initiative mobilised oncologists, enabled community outreach
            through the local network, and increased awareness through
            coordinated communication and social media.
          </p>

        </div>

        {/* Related Cards */}
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
            <Link to="/workinaction/worldcancerday" className="group">

              <div className="bg-white rounded-[30px] shadow-md hover:shadow-lg transition flex flex-col md:h-104 max-w-[331px] h-[350px] w-[300px]">

                <div className="h-1/2 w-full overflow-hidden rounded-t-[30px]">
                  <img
                    src={Cancer}
                    alt="World Cancer Day"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex-1 flex items-center justify-center p-4">
                  <h2 className="text-purple-900 text-center text-3xl font-visby font-semibold">
                    World <br /> Cancer Day Fundraising Event
                  </h2>
                </div>

              </div>

            </Link>

            {/* Card 2 */}
            <Link to="/workinaction/walkabout" className="group">

              <div className="bg-white rounded-[30px] shadow-md hover:shadow-lg transition flex flex-col md:h-104 max-w-[331px] h-[350px] w-[300px]">

                <div className="h-1/2 w-full overflow-hidden rounded-t-[30px]">
                  <img
                    src={Walkabout}
                    alt="Walkabout Event"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex-1 flex items-center justify-center p-4">
                  <h2 className="text-purple-900 text-center text-3xl font-visby font-semibold leading-snug">
                    Walkabout <br /> Senior Games Fundraising Event
                  </h2>
                </div>

              </div>

            </Link>

            {/* Card 3 */}
            <Link to="/workinaction/breastcancer" className="group">

              <div className="bg-white rounded-[30px] shadow-md hover:shadow-lg transition flex flex-col md:h-104 max-w-[331px] h-[350px] w-[300px]">

                <div className="h-1/2 w-full overflow-hidden rounded-t-[30px]">
                  <img
                    src={BreastCancer}
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

export default OralCancer;