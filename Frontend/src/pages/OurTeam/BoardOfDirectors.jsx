import React from "react";
import ProfileCard from "./ProfileCard";
import Ramakant from "../../assets/Our Team/Directors/Ramakant.png";
import Sanjay from "../../assets/Our Team/Directors/Sanjay.png";
import Arun from "../../assets/Our Team/Directors/Arun.png";

const BoardOfDirectors = () => {
  return (
    <div className="font-visby px-4 md:px-20">
      <h2 className="text-4xl font-bold text-black mt-10 pt-15 text-center md:text-left md:pl-15">
        Board of Directors
      </h2>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 justify-items-center space-y-20 gap-x-3">
        <ProfileCard image={Ramakant} name={<>Dr. Ramakant Deshpande</>} role="Director"/>
        <ProfileCard image={Sanjay} name={<>Dr. Sanjay Sharma</>} role="Director"/>
        <ProfileCard image={Arun} name={<>Dr. Arun Shetty</>} role="Director"/>
      </div>
      </div>
  );
};

export default BoardOfDirectors;
