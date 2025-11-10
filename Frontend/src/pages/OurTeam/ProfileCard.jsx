import React from "react";

const ProfileCard = ({ image, name, role }) => {
  return (
    <div className="relative w-full max-w-[317px] aspect-[317/320] rounded-[30px] overflow-hidden shadow-lg">
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

      {/* Text content */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%]">
        <div className="bg-white/85 text-gray-900 rounded-xl px-2 py-1 text-center shadow-md">
          <h3 className="text-[11px] sm:text-[18px] font-visby font-extrabold leading-tight">
            {name}
          </h3>
          <p className="text-[10px] sm:text-[15px] text-[#583490] font-visby font-medium mt-0.5">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
