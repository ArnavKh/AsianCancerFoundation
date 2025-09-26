import React from "react";
import { Link } from "react-router-dom";
import "./OurWorkInAction.css";

const OurWorkInAction = () => {
  return (
    <div className="bg-[#f8f5f0] min-h-screen py-12 pb-55">
      <h1 className="text-center text-4xl font-visby font-semibold text-[#583490] mb-20 mt-10 ">
        Our Work In Action
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center px-25 space-y-10">

        {/* VIBGYOR */}
        <Link to="/workinaction/vibgyor">
          <div className="card card-vibgyor">
            <h2 className="text-3xl font-bold font-visby text-black">
              VIBGYOR<br></br> Fundraising Concert
            </h2>
            <p className="text-sm mb-4 font-didact  text-black">Worli, Mumbai</p>
            <p className="font-didact text-lg pt-5 text-black">
              VIBGYOR was a unique musical<br></br> fundraiser for children with<br></br> cancer,
              featuring seven music<br></br> genres inspired by the chakras &<br></br> musical
              notes, including classical,<br></br> devotional, Sufi, ghazals,<br></br>
              instrumental & contemporary styles.
            </p>
          </div>
        </Link>

        <Link to="/workinaction/tobaccoawareness">
          <div className="card card-tobacco">
            <h2 className="text-3xl font-bold mb-1 pt-4 font-visby text-black">
              Tobacco Awareness Session
            </h2>
            <p className="text-sm mb-4 font-didact  text-black">
              Awami School, Bandra West, Mumbai
            </p>
            <p className="font-didact text-lg pt-5 text-black">
              In partnership with the Nargis Dutt<br></br> Foundation, ACF conducted an<br></br>
              engaging tobacco awareness<br></br> session for 100 students aged 12–16.
            </p>
          </div>
        </Link>

        {/* Medical Camp */}
        <Link to="/workinaction/medicalcamp">
          <div className="card card-medical">
            <h2 className="text-3xl font-bold mb-1 pt-4 font-visby text-black">Cancer Screening Camp</h2>
            <p className="text-sm mb-4 font-didact  text-black">
              Sindkhedraja, Buldhana District,<br></br> Maharashtra
            </p>
            <p className="font-didact text-lg pt-5 text-black">
              A free medical camp was held in<br></br> Sindkhedraja with the support<br></br> from
              ACF, HCG-Manavata Cancer<br></br> Centre, Jeevan Amrut Hospital, &<br></br> Aslan
              Hospital.
            </p>
          </div>
        </Link>

        {/* Tobacco Awarenss */}

        {/* Mobile Screening */}
        <Link to="/workinaction/mobilescreening">
          <div className="card card-mobile">
            <h2 className="text-3xl font-bold mb-1 pt-4 font-visby text-black">
              Mobile Screening Camps
            </h2>
            <p className="text-sm mb-4 font-didact  text-black">
              Sindkhedraja, Buldhana District,<br></br> Maharashtra
            </p>
            <p className="font-didact text-lg pt-5 text-black">
              The initiative offered screenings<br></br> for oral, breast, & cervical
              cancer,<br></br> along with tobacco de-addiction<br></br> counselling.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default OurWorkInAction;
