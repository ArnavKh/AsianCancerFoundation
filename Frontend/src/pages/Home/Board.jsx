import React, { useState } from "react";
import Ramakant from "../../assets/Home/Ramakant.png";
import Sanjay from "../../assets/Home/Sanjay.png";
import Arun from "../../assets/Home/Arun.png";

const Card = ({ image, name, description, short }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-[331px] h-[373px] cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full duration-700 ${
          flipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-[30px] overflow-hidden shadow-lg group"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img src={image} alt={name} className="w-full h-full object-cover" />

          <div className="absolute bottom-0 w-full text-center p-4">
            <div className="bg-[#5F6D82]/70 rounded-[18px] py-2 text-white">
              <h3 className="text-[20px] font-didact">{name}</h3>
            </div>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <div className="text-center px-4">
              <p className="text-white text-sm mb-4 font-didact pb-10">{short}</p>
                <p className="text-white font-didact text-xl pt-45">Click to read more</p>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-[30px] overflow-hidden shadow-lg bg-[#5F3DC4] text-white p-6 rotate-y-180"
          style={{ backfaceVisibility: "hidden" }}
        >
          <p className="text-sm leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Inline style for rotate-y-180 */}
      <style jsx>{`
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

const Board = () => {
  return (
    <section className="bg-[#f8f5f0] px-6 md:px-16 pb-20 pt-35">
      <h2 className="text-[40px] font-bold text-purple-900 mb-8 font-visby">
        OUR BOARD OF DIRECTORS
      </h2>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-25 justify-items-center space-y-25">
        <Card
          image={Ramakant}
          name="Dr. Ramakant Deshpande"
          short="Dr Ramakant [Raman] Deshpande is well known in Surgical Oncology with over 40 years expertise in ..."
          description={`Dr Ramakant [Raman] Deshpande is well known in Surgical Oncology with over 40 years expertise in Breast, thoracic cancers with two decades experience at Tata Memorial Hospital then at Asian Cancer Institute. His pioneering contribution in "Thoracoscopic Surgery" won him the Padmashri Award. A postgraduate teacher in Oncology, is on editorial boards of several peer-reviewed journals and member of several professional organizations and winner of several National and International awards.`}
        />

        <Card
          image={Sanjay}
          name="Dr. Sanjay Sharma"
          short="One of the finest Breast, Thoracic and Gastrointestinal Cancer Surgeons in the Country with 43 years of experience ...."
          description={`One of the finest Breast, Thoracic and Gastrointestinal Cancer Surgeons in the Country with 43 years of experience, Winner of many professional awards, Trained in Cancer Surgery at Tata Memorial Hospital, Memorial Sloan Kettering cancer Centre & Cornell University at New York and at National Cancer Centre Japan, at Stanford -USA and with over 50 professional publications, one of the promoter Directors of the Asian cancer Institute for past over 20 years with membership and Chairmanship of most professional Indian oncology associations.`}
        />

        <Card
          image={Arun}
          name="Dr. Arun Shetty"
          short="Dr. Arun Kumar Shetty, with 30+ years in surgery and hospital leadership ...."
          description={`Dr. Arun Kumar Shetty, with 30+ years in surgery and hospital leadership, holds an MS in General Surgery and a Diploma in Business Management. At Asian Cancer Institute, he leads professional services with a focus on quality care and patient outcomes.`}
        />
      </div>
    </section>
  );
};

export default Board;
