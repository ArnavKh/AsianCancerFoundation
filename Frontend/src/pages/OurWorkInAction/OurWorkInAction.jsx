import React from "react";
import { Link } from "react-router-dom";

const OurWorkInAction = () => {
  return (
    <div className="bg-[#f8f5f0] min-h-screen py-12 pb-25">
      <h1 className="text-center text-3xl md:text-4xl font-semibold text-purple-900 mb-20 mt-10 ">
        Our Work In Action
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center px-25 space-y-10">

        {/* VIBGYOR */}
        <Link to="/workinaction/vibgyor">
          <div className="relative w-96 h-109 bg-white rounded-3xl border-6 shadow-[0_0_20px_#D2635D] border-[#D2635D] p-6 transition-shadow">
            <h2 className="text-2xl font-bold mb-1 pt-4">
              VIBGYOR Fundraising Concert
            </h2>
            <p className="text-sm text-gray-700 mb-4">Worli, Mumbai</p>
            <p className="text-gray-700 text pt-5">
              VIBGYOR was a unique musical fundraiser for children with cancer,
              featuring seven music genres inspired by the chakras & musical
              notes, including classical, devotional, Sufi, ghazals,
              instrumental & contemporary styles.
            </p>
          </div>
        </Link>

        <Link to="/workinaction/tobaccoawareness">
          <div className="w-96 h-109 bg-white rounded-3xl border-6 border-[#EF8B67] shadow-[0_0_20px_#EF8B67] p-6 transition-shadow">
            <h2 className="text-2xl font-bold mb-1 pt-4">
              Tobacco Awareness Session
            </h2>
            <p className="text-sm text-gray-700 mb-4">
              Awami School, Bandra West, Mumbai
            </p>
            <p className="text-gray-700 text pt-5">
              In partnership with the Nargis Dutt Foundation, ACF conducted an
              engaging tobacco awareness session for 100 students aged 12–16.
            </p>
          </div>
        </Link>

        {/* Medical Camp */}
        <Link to="/workinaction/medicalcamp">
          <div className="w-96 h-109 bg-white rounded-3xl border-6 border-[#EF8B67] shadow-[0_0_20px_#EF8B67] p-6 transition-shadow">
            <h2 className="text-2xl font-bold mb-1 pt-4">Cancer Screening Camp</h2>
            <p className="text-sm text-gray-700 mb-4">
              Sindkhedraja, Buldhana District, Maharashtra
            </p>
            <p className="text-gray-700 pt-5">
              A free medical camp was held in Sindkhedraja with the support from
              ACF, HCG-Manavata Cancer Centre, Jeevan Amrut Hospital, & Aslan
              Hospital.
            </p>
          </div>
        </Link>

        {/* Tobacco Awarenss */}

        {/* Mobile Screening */}
        <Link to="/workinaction/mobilescreening">
          <div className="w-96 h-109 bg-white rounded-3xl border-6 border-[#D2635D] shadow-[0_0_20px_#D2635D] p-6 transition-shadow">
            <h2 className="text-2xl font-bold mb-1 pt-4">
              Mobile Screening Camps
            </h2>
            <p className="text-sm text-gray-700 mb-4">
              Sindkhedraja, Buldhana District, Maharashtra
            </p>
            <p className="text-gray-700 text pt-5">
              The initiative offered screenings for oral, breast, & cervical
              cancer, along with tobacco de-addiction counselling.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default OurWorkInAction;
