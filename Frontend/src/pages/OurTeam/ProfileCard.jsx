import React from "react";

const ProfileCard = ({ image, name, role }) => {
  return (
    <div className="relative w-[264px] h-[300px] rounded-[30px] overflow-hidden shadow-lg">
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-80 object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

      {/* Text content */}
      <div className="absolute bottom-0 w-full text-center p-4">
        <div className="bg-white/90 text-gray-900 rounded-xl p-1">
          <h3 className="text-[20px] font-semibold">{name}</h3>
          <p className="text-[16px] text-purple-600">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
