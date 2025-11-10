import React from "react";
import BoardOfDirectors from "./BoardOfDirectors";
import BoardOfAdvisors from "./BoardOfAdvisors";
import CoreTeamMembers from "./CoreTeamMembers";
import Consultants from "./Consultants";
import ProfileCard from "./ProfileCard";

const OurTeam = () => {
  return (
    <div className="bg-[#f8f5f0] min-h-screen flex flex-col md:py-18 pt-18 px-6">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold font-visby text-center text-[#583490]">
        Meet The Team That <br /> Makes It All Happen
      </h1>
      <BoardOfDirectors/>
      <BoardOfAdvisors/>
      <CoreTeamMembers/>
      <Consultants/>
    </div>
  );
};

export default OurTeam;
