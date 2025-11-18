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
              VIBGYOR<br />Fundraising Concert
            </h2>
            <p className="text-sm md:mb-4 mb-1 font-didact text-black">
              Worli, Mumbai
            </p>
            <p className="font-didact text-sm md:text-lg pt-5 text-black leading-relaxed">
              VIBGYOR was a unique musical fundraiser for children with cancer,
              featuring seven music genres inspired by the chakras & musical
              notes, including classical, devotional, Sufi, ghazals, instrumental
              & contemporary styles.
            </p>
          </div>
        </Link>

        <Link to="/workinaction/tobaccoawareness" className="w-full flex justify-center">
          <div className="card card-tobacco max-w-[560px] w-full">
            <h2 className="text-3xl font-bold mb-1 pt-4 font-visby text-black">
              Tobacco Awareness Session
            </h2>
            <p className="text-sm md:mb-4 mb-1 font-didact text-black">
              Awami School, Bandra West, Mumbai
            </p>
            <p className="font-didact text-sm md:text-lg pt-5 text-black leading-relaxed">
              In partnership with the Nargis Dutt Foundation, ACF conducted an
              engaging tobacco awareness session for 100 students aged 12–16.
            </p>
          </div>
        </Link>

        <Link to="/workinaction/medicalcamp" className="w-full flex justify-center">
          <div className="card card-medical max-w-[560px] w-full">
            <h2 className="text-3xl font-bold mb-1 pt-4 font-visby text-black">
              Cancer Screening Camp
            </h2>
            <p className="text-sm md:mb-4 mb-1 font-didact text-black">
              Sindkhedraja, Buldhana District,<br />Maharashtra
            </p>
            <p className="font-didact text-sm md:text-lg pt-5 text-black leading-relaxed">
              A free medical camp was held in Sindkhedraja with support from ACF,
              HCG-Manavata Cancer Centre, Jeevan Amrut Hospital & Aslan Hospital.
            </p>
          </div>
        </Link>

        <Link to="/workinaction/mobilescreening" className="w-full flex justify-center">
          <div className="card card-mobile max-w-[560px] w-full">
            <h2 className="text-3xl font-bold mb-1 pt-4 font-visby text-black">
              Mobile Screening Camps
            </h2>
            <p className="text-sm md:mb-4 mb-1 font-didact text-black">
              Sindkhedraja, Buldhana District,<br />Maharashtra
            </p>
            <p className="font-didact text-sm md:text-lg pt-5 text-black leading-relaxed">
              The initiative offered screenings for oral, breast & cervical cancer,
              along with tobacco de-addiction counselling.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default OurWorkInAction;
