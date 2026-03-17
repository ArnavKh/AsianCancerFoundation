import React from "react";
import { Link } from "react-router-dom";
import { CircleChevronLeft } from "lucide-react";

import BreastCancerImage from "../../assets/MobileScreening/9.jpeg";
import Tobacco from "../../assets/MobileScreening/2.jpeg";
import Cancer from "../../assets/MobileScreening/3.jpg";
import Walkabout from "../../assets/MobileScreening/1.jpeg";

const BreastCancer = () => {
  return (
    <div className="bg-[#f8f5f0] min-h-screen pt-6 pb-6 px-4 sm:px-6 md:px-0">
      
      <div className="w-full max-w-[1080px] mx-auto">


<div className="relative mb-6 mt-6 max-w-[1080px] mx-auto">

  {/* Back Button */}
  <Link
    to="/workinaction"
    className="absolute sm:left-0 top-1/2 -translate-y-1/2 z-10"
  >
    <CircleChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
  </Link>

  {/* Heading */}
  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-visby text-purple-900 text-center px-10 sm:px-12 md:px-0">
   Breast Cancer Awareness Campaign
  </h1>

</div>        

        {/* Top image */}
        <div className="mx-auto rounded-[30px] overflow-hidden mb-6 
          w-full h-[220px] sm:h-[260px] md:h-[350px] lg:h-[380px]"
        >
          <img
            src={BreastCancerImage}
            alt="Breast cancer awareness campaign"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Stats */}
        <div className="mx-auto bg-[rgba(125,165,134,0.31)] rounded-[30px] 
          grid grid-cols-2 text-center py-4 my-8 sm:my-10"
        >
          <div className="border-r border-gray-400">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold font-visby text-[#7DA586]">
              1st
            </p>
            <p className="text-sm sm:text-base md:text-xl font-didact text-gray-800">
              social media awareness campaign
            </p>
          </div>

          <div>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold font-visby text-[#7DA586]">
              October
            </p>
            <p className="text-sm sm:text-base md:text-xl font-didact text-gray-800">
              2025
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="pb-8 sm:pb-10 text-gray-800 px-1 sm:px-0">

          <p className="text-base sm:text-lg md:text-2xl mb-2 font-didact">
            <span className="font-bold font-visby">Highlight – </span>
            Increased brand visibility for ACF while promoting breast cancer awareness.
          </p>

          <p className="text-base sm:text-lg md:text-2xl mb-4 sm:mb-8 md:mb-12 font-didact">
            <span className="font-bold font-visby">Key Partner – </span>
            The Souled Store
          </p>

          <p className="text-base sm:text-lg md:text-2xl mb-4 font-didact">
            The breast cancer awareness campaign was launched in collaboration
            with The Souled Store during Breast Cancer Awareness Month
            (October 2025). The initiative featured themed T-shirts sold on
            The Souled Store’s website, using creative merchandise to promote
            cancer awareness.
          </p>

          <p className="text-base sm:text-lg md:text-2xl font-didact">
            The proceeds from T-shirt sales will support the Asian Cancer
            Foundation's work in cancer care and awareness.
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
                    alt="World cancer day"
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
                    alt="Walkabout event"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex-1 flex items-center justify-center p-4">
                  <h2 className="text-purple-900 text-center text-xl sm:text-2xl md:text-3xl font-visby font-semibold leading-snug">
                    Walkabout Senior Games Fundraising Event
                  </h2>
                </div>
              </div>
            </Link>

            {/* Card 3 */}
            <Link to="/workinaction/oralcancer" className="group">
              <div className="bg-white rounded-[30px] shadow-md hover:shadow-lg transition flex flex-col h-[320px] sm:h-[340px] md:h-[380px]">
                <div className="h-1/2 w-full overflow-hidden rounded-t-[30px]">
                  <img
                    src={Tobacco}
                    alt="Oral cancer screening"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex-1 flex items-center justify-center p-4">
                  <h2 className="text-purple-900 text-center text-xl sm:text-2xl md:text-3xl font-visby font-semibold">
                    Oral Cancer Screening Camp in Sindhudurg
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

export default BreastCancer;