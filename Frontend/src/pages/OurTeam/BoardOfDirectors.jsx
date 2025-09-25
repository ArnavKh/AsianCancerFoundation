import React from "react";
import ProfileCard from "./ProfileCard";
import Ramakant from "../../assets/Our Team/Directors/Ramakant.png";
import Sanjay from "../../assets/Our Team/Directors/Sanjay.png";
import Arun from "../../assets/Our Team/Directors/Arun.png";

const BoardOfDirectors = () => {
  return (
    <div className="font-visby px-20">
      <h2 className="text-4xl font-bold text-black mt-10 text-left w-full pl-20 pt-15">
        Board of Directors
      </h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 justify-items-center">

        <ProfileCard image={Ramakant} name={<>Dr. Ramakant Deshpande</>} role="Director"/>
        <ProfileCard image={Sanjay} name={<>Dr. Sanjay Sharma</>} role="Director"/>
        <ProfileCard image={Arun} name={<>Dr. Arun Shetty</>} role="Director"/>
      </div>
    </div>
  );
};

export default BoardOfDirectors;
