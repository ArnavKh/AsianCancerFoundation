import React from "react";
import ProfileCard from "../OurTeam/ProfileCard";
import Ramakant from "../../assets/Home/Ramakant.png"
import Sanjay from "../../assets/Home/Sanjay.png"
import Arun from "../../assets/Home/Arun.png"

const Board = () => {
  return (
    <section className="bg-[#f8f5f0] px-6 md:px-16 py-30 pt-35">
      <h2 className="text-[40px] font-bold text-purple-900 mb-8 font-visby">
        OUR BOARD OF DIRECTORS
      </h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-25 justify-items-center space-y-25">

        <ProfileCard image={Ramakant} name={<>Dr. Ramakant Deshpande</>}/>
        <ProfileCard image={Sanjay} name={<>Dr. Sanjay Sharma</>}/>
        <ProfileCard image={Arun} name={<>Dr. Arun Shetty</>}/>
      </div>
    </section>
  );
};

export default Board;
