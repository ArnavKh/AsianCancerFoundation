import React, { useState } from "react";
import Somma from "../../assets/Our Team/Consultants/Somaa.svg";
import Neha from "../../assets/Our Team/Consultants/Neha.png";

const Consultants = () => {
  const [isSomaaFlipped, setIsSomaaFlipped] = useState(false);
  const [isNehaFlipped, setIsNehaFlipped] = useState(false);

  const isMobile = window.innerWidth < 768;

  return (
    <div className="font-visby px-20 md:pb-45 pb-10">
      <h2 className="text-4xl font-bold text-black mt-10 pt-15 text-center md:text-left md:pl-15">
        Consultants
      </h2>

      {/* ONLY THIS LINE CHANGED – now 2 columns from md+ */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 justify-items-center gap-12 md:gap-x-20 lg:gap-x-32">
        
        {/* SOMAA HEALTH CARD – 100% ORIGINAL */}
        <div
          className="relative w-[264px] h-[300px] rounded-[30px] cursor-pointer group"
          style={{ perspective: "1000px" }}
          onClick={() => isMobile && setIsSomaaFlipped(!isSomaaFlipped)}
        >
          <div
            className={`relative w-full h-full duration-700 transform-style-preserve-3d 
              ${isMobile ? (isSomaaFlipped ? "rotate-y-180" : "") : "group-hover:rotate-y-180"}`}
          >
            {/* FRONT */}
            <div
              className="absolute inset-0 rounded-[30px] overflow-hidden border-2 border-[#A2A1A1]"
              style={{ backfaceVisibility: "hidden" }}
            >
              <img
                src={Somma}
                className="w-full h-full object-cover pb-10 pl-2"
                alt="Somaa Health"
              />
              <div className="absolute bottom-0 w-full text-center p-4">
                <div className="bg-white/80 text-gray-900 rounded-xl p-1">
                  <h3 className="text-[20px] font-visby font-extrabold">
                    Somaa Health
                  </h3>
                  <p className="text-[16px] text-[#583490] font-visby font-medium">
                    Healthcare Consultants
                  </p>
                </div>
              </div>
            </div>

            {/* BACK */}
            <div
              className="absolute inset-0 rounded-[30px] overflow-hidden shadow-lg bg-[#583490] text-white p-4 rotate-y-180 flex flex-col items-center justify-center text-center"
              style={{ backfaceVisibility: "hidden" }}
            >
              <p className="text-sm leading-relaxed font-didact p-5">
                Somaa Health, a boutique healthcare consulting company, is spearheading
                the revitalization of ACF’s mission through strategic fundraising,
                program development, and high-impact collaborations.
              </p>
              <a
                href="https://www.somaa.health/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-white text-[#5F3DC4] font-bold py-2 px-4 rounded-full text-center font-didact"
              >
                Visit their Website
              </a>
            </div>
          </div>
        </div>

        {/* DR NEHA D. KAMAT CARD – 100% ORIGINAL */}
        <div
          className="relative w-[264px] h-[300px] rounded-[30px] cursor-pointer group"
          style={{ perspective: "1000px" }}
          onClick={() => isMobile && setIsNehaFlipped(!isNehaFlipped)}
        >
          <div
            className={`relative w-full h-full duration-700 transform-style-preserve-3d 
              ${isMobile ? (isNehaFlipped ? "rotate-y-180" : "") : "group-hover:rotate-y-180"}`}
          >
            {/* FRONT */}
            <div
              className="absolute inset-0 rounded-[30px] overflow-hidden shadow-lg"
              style={{ backfaceVisibility: "hidden" }}
            >
              <img src={Neha} className="w-full h-full object-cover" alt="Dr Neha" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 w-full text-center p-4">
                <div className="bg-white/80 text-gray-900 rounded-xl p-1">
                  <h3 className="text-[20px] font-visby font-extrabold">
                    Dr Neha D. Kamat
                  </h3>
                  <p className="text-[16px] text-[#583490] font-visby font-medium">
                    Health Psychologist
                  </p>
                </div>
              </div>
            </div>

            {/* BACK */}
            <div
              className="absolute inset-0 rounded-[30px] overflow-hidden shadow-lg bg-[#583490] text-white p-4 rotate-y-180 flex flex-col items-center justify-center text-center"
              style={{ backfaceVisibility: "hidden" }}
            >
              <p className="text-sm leading-relaxed font-didact p-5">
                Dr. Neha D. Kamat is a practicing Psychologist in Mumbai, with a focus on
                Health, Nutrition, & Mental Wellness.
              </p>
              <a
                href="https://www.nehadkamat.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-white text-[#5F3DC4] font-bold py-2 px-4 rounded-full text-center font-didact"
              >
                Visit their Website
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Your original styles – untouched */}
      <style jsx>{`
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

export default Consultants;