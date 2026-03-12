import React from "react";
import { Link } from "react-router-dom";
import "./OurWorkInAction.css";

const OurWorkInAction = () => {
  return (
    <div className="bg-[#f8f5f0] min-h-screen py-12 md:pb-20 pb-10">
      <h1 className="text-3xl md:text-4xl font-bold font-visby text-center text-[#583490] mb-16 mt-10">
        Our Work In Action
      </h1>

      {/* container: center grid items; px gives breathing room on small screens */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 justify-items-center">
        
        {/* Note: Link wraps the card but does NOT force full width */}
        <Link to="/workinaction/vibgyor" className="w-full flex justify-center">
          <div className="card card-vibgyor max-w-[560px] w-full">
            <h2 className="text-3xl font-bold font-visby text-black">
              Walkabout Senior Games Fundraising Event

            </h2>
            <p className="text-sm md:mb-4 mb-1 font-didact text-black">
              Juhu, Mumbai
            </p>
            <p className="font-didact text-sm md:text-lg pt-5 text-black leading-relaxed">
              WalkAbout hosted its Senior Games in Juhu, bringing together 300+ senior HNIs for a sports-focused community day. The event created a platform for the ACF to increase visibility among a highly relevant demographic while raising awareness about cancer care initiatives.
            </p>
          </div>
        </Link>

        <Link to="/workinaction/tobaccoawareness" className="w-full flex justify-center">
          <div className="card card-tobacco max-w-[560px] w-full">
            <h2 className="text-3xl font-bold font-visby text-black">
              Oral Cancer Screening Camp in Sindhudurg
            </h2>
            <p className="text-sm md:mb-4 mb-1 font-didact text-black">
              Sindhudurg
            </p>
            <p className="font-didact text-sm md:text-lg pt-5 text-black leading-relaxed">
              A community screening initiative addressing high tobacco use and limited access to oncologists in Sindhudurg was conducted with the Nath Pai Foundation (NPF) over 2 days in Devgad & Kudal regions of Sindudurg.
            </p>
          </div>
        </Link>

        <Link to="/workinaction/medicalcamp" className="w-full flex justify-center">
          <div className="card card-medical max-w-[560px] w-full">
            <h2 className="text-3xl font-bold mb-1 pt-4 font-visby text-black">
              World Cancer <br /> Day Fundraising Event

            </h2>
            <p className="text-sm md:mb-4 mb-1 font-didact text-black">
              The Quorum Club
            </p>
            <p className="font-didact text-sm md:text-lg pt-5 text-black leading-relaxed">
              A conversation and fundraising evening organised around World Cancer Day by the Asian Cancer Foundation in partnership with the Shyamal Music Foundation at The Quorum Club.
            </p>
          </div>
        </Link>

        <Link to="/workinaction/mobilescreening" className="w-full flex justify-center">
          <div className="card card-mobile max-w-[560px] w-full">
            <h2 className="text-3xl font-bold mb-1 pt-4 font-visby text-black">
              Breast Cancer Awareness Campaign
            </h2>
            <p className="text-sm md:mb-4 mb-1 font-didact text-black">
              
            </p>
            <p className="font-didact text-sm md:text-lg pt-5 text-black leading-relaxed">
              The breast cancer awareness campaign was launched in collaboration with The Souled Store during Breast Cancer Awareness Month (October 2025).
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default OurWorkInAction;
