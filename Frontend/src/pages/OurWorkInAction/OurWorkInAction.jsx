import React from "react";
import { Link } from "react-router-dom";
import "./OurWorkInAction.css";

const OurWorkInAction = () => {
  return (
    <div className="bg-[#f8f5f0] min-h-screen py-12 md:pb-55 pb-15">
      
      <h1 className="text-center text-4xl font-visby font-semibold text-[#583490] mb-20 mt-10">
        Our Work In Action
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center px-25 md:space-y-10 space-y-2">

        {/* 5 */}
        <Link to="/workinaction/walkabout">
          <div className="card card-vibgyor">
            <h2 className="text-3xl font-bold font-visby text-black">
              Walkabout Senior Games Fundraising Event
            </h2>
            <p className="text-sm md:mb-4 mb-1 font-didact text-black">
              Juhu, Mumbai
            </p>
            <p className="font-didact text-sm md:text-lg pt-5 text-black">
              WalkAbout hosted its Senior Games in Juhu, bringing together
              300+ senior HNIs for a sports-focused community day. The event
              created a platform for the ACF to increase visibility among a
              highly relevant demographic while raising awareness about
              cancer care initiatives.
            </p>
          </div>
        </Link>

        {/* 6 */}
        <Link to="/workinaction/oralcancer">
          <div className="card card-tobacco">
            <h2 className="text-3xl font-bold font-visby text-black">
              Oral Cancer Screening Camp in Sindhudurg
            </h2>
            <p className="text-sm md:mb-4 mb-1 font-didact text-black">
              Sindhudurg
            </p>
            <p className="font-didact text-sm md:text-lg pt-5 text-black">
              A community screening initiative addressing high tobacco use
              and limited access to oncologists in Sindhudurg was conducted
              with the Nath Pai Foundation over 2 days in Devgad &
              Kudal regions of Sindhudurg.
            </p>
          </div>
        </Link>

        {/* 7 */}
        <Link to="/workinaction/worldcancerday">
          <div className="card card-medical">
            <h2 className="text-3xl font-bold mb-1 pt-4 font-visby text-black">
              World Cancer Day Fundraising Event
            </h2>
            <p className="text-sm md:mb-4 mb-1 font-didact text-black">
              The Quorum Club
            </p>
            <p className="font-didact text-sm md:text-lg pt-5 text-black">
              A conversation and fundraising evening organised around World
              Cancer Day by the Asian Cancer Foundation in partnership with
              the Shyamal Music Foundation at The Quorum Club.
            </p>
          </div>
        </Link>

        {/* 8 */}
        <Link to="/workinaction/breastcancer">
          <div className="card card-mobile">
            <h2 className="text-3xl font-bold mb-1 pt-4 font-visby text-black">
              Breast Cancer Awareness Campaign
            </h2>
            <p className="font-didact text-sm md:text-lg pt-5 text-black">
              The breast cancer awareness campaign was launched in
              collaboration with The Souled Store during Breast Cancer
              Awareness Month (October 2025).
            </p>
          </div>
        </Link>


        {/* 1 */}
        <Link to="/workinaction/vibgyor">
          <div className="card card-vibgyor">
            <h2 className="text-3xl font-bold mb-1 pt-4 font-visby text-black">
              VIBGYOR <br /> Fundraising Concert
            </h2>
            <p className="text-sm md:mb-4 mb-1 font-didact text-black">
              Worli, Mumbai
            </p>
            <p className="font-didact text-sm md:text-lg pt-5 text-black">
              VIBGYOR was a unique musical fundraiser for children with cancer,
              featuring seven music genres inspired by the chakras & musical
              notes, including classical, devotional, Sufi, ghazals,
              instrumental & contemporary styles.
            </p>
          </div>
        </Link>

        {/* 2 */}
        <Link to="/workinaction/tobaccoawareness">
          <div className="card card-tobacco">
            <h2 className="text-3xl font-bold mb-1 pt-4 font-visby text-black">
              Tobacco Awareness Session
            </h2>
            <p className="text-sm md:mb-4 mb-1 font-didact text-black">
              Awami School, Bandra West, Mumbai
            </p>
            <p className="font-didact text-sm md:text-lg pt-5 text-black">
              In partnership with the Nargis Dutt Foundation, ACF conducted an
              engaging tobacco awareness session for 100 students aged 12–16.
            </p>
          </div>
        </Link>

        {/* 3 */}
        <Link to="/workinaction/medicalcamp">
          <div className="card card-medical">
            <h2 className="text-3xl font-bold mb-1 pt-4 font-visby text-black">
              Cancer Screening Camp
            </h2>
            <p className="text-sm md:mb-4 mb-1 font-didact text-black">
              Sindkhedraja, Buldhana District, Maharashtra
            </p>
            <p className="font-didact text-sm md:text-lg pt-5 text-black">
              A free medical camp was held in Sindkhedraja with the support
              from ACF, HCG-Manavata Cancer Centre, Jeevan Amrut Hospital, &
              Aslan Hospital.
            </p>
          </div>
        </Link>

        {/* 4 */}
        <Link to="/workinaction/mobilescreening">
          <div className="card card-mobile">
            <h2 className="text-3xl font-bold mb-1 pt-4 font-visby text-black">
              Mobile Screening Camps
            </h2>
            <p className="text-sm md:mb-4 mb-1 font-didact text-black">
              Sindkhedraja, Buldhana District, Maharashtra
            </p>
            <p className="font-didact text-sm md:text-lg pt-5 text-black">
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