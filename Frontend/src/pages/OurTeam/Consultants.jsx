import React from "react";
import Somma from "../../assets/Our Team/Consultants/Somma.png";
import Neha from "../../assets/Our Team/Consultants/Neha.png";

const FlipCard = ({ image, name, role, description, website }) => {
  return (
    <div
      className="relative w-[264px] h-[300px] rounded-[30px] cursor-pointer group"
      style={{ perspective: "1000px" }}
    >
      <div className="relative w-full h-full duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-[30px] overflow-hidden shadow-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Image */}
          <img src={image} className="w-full h-full object-cover" />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

          {/* Text content */}
          <div className="absolute bottom-0 w-full text-center p-4">
            <div className="bg-white/80 text-gray-900 rounded-xl p-1">
              <h3 className="text-[20px] font-visby font-extrabold">{name}</h3>
              <p className="text-[16px] text-[#583490] font-visby font-medium">{role}</p>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-[30px] overflow-hidden shadow-lg bg-[#583490] text-white p-4 rotate-y-180 flex flex-col justify-between"
          style={{ backfaceVisibility: "hidden" }}
        >
          <p className="text-sm leading-relaxed font-didact p-5">{description}</p>
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-white text-[#5F3DC4] font-bold py-2 px-4 rounded-full text-center font-didact"
            >
              Visit their Website
            </a>
          )}
        </div>
      </div>

      {/* custom flip styles */}
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

const Consultants = () => {
  return (
    <div className="font-visby px-20 pb-45">
      <h2 className="text-4xl font-bold text-black mt-10 text-left w-full pl-20 pt-15">
        Consultants
      </h2>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 justify-items-center gap-12">
        <FlipCard
          image={Somma}
          name="Somaaa Health"
          role="Healthcare Consultants"
          description="Somaaa Health provides expert healthcare consulting services with a focus on quality, patient outcomes, and holistic wellbeing."
          website="https://www.somaa.health/"
        />

        <FlipCard
          image={Neha}
          name="Dr Neha D. Kamat"
          role="Health Psychologist"
          description="Dr. Neha D. Kamat is a practicing psychologist in Mumbai, focusing on health, nutrition, and mental wellness."
          website="https://www.nehadkamat.com/"
        />
      </div>
    </div>
  );
};

export default Consultants;
