import React from "react";
import ProfileCard from "./ProfileCard";
import Anjali from "../../assets/Our Team/Advisors/Anjali.jpg"
import Hosi from "../../assets/Our Team/Advisors/Hosi.png"
import Nilesh from "../../assets/Our Team/Advisors/Nilesh.png"
import Purvish from "../../assets/Our Team/Advisors/Purvish.png"
import Sanjay from "../../assets/Our Team/Advisors/Sanjay.png"
import Satish from "../../assets/Our Team/Advisors/Satish.png"
import Ulhas from "../../assets/Our Team/Advisors/Ulhas.png"
import Vinay from "../../assets/Our Team/Advisors/Vinay.png"
import Vinayak from "../../assets/Our Team/Advisors/Vinayak.png"

const BoardOfAdvisors = () => {
  return (
    <div className="font-visby px-4 md:px-20">
      <h2 className="text-4xl font-bold text-black mt-10 pt-15 text-center md:text-left md:pl-15">
        Board of Advisors
      </h2>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 justify-items-center space-y-20 gap-x-3">

        <ProfileCard image={Anjali} name={<>Dr. Anjali Patil</>} role="Surgical Oncologist"/>
        <ProfileCard image={Hosi} name={<>Dr. Hosi Bhathena</>} role="Plastic Surgeon" />
        <ProfileCard image={Nilesh} name={<>Dr. Nilesh Lokeshwar</>} role="Medical Oncologist" />
        
        <ProfileCard image={Purvish} name={<>Dr. Purvish Parikh</>} role="Medical Oncologist"/>
        <ProfileCard image={Sanjay} name={<>Dr. Sanjay Upadhye</>} role="Head of Anaesthesia" />
        <ProfileCard image={Satish} name={<>Dr. Satish Rao</>} role="Surgical Oncologist" />
        
        <ProfileCard image={Ulhas} name={<>Dr. Ulhas Kulkarni</>} role="General Surgeon"/>
        <ProfileCard image={Vinay} name={<>Dr. Vinay Deshmane</>} role="Surgical Oncologist" />
        <ProfileCard image={Vinayak} name={<>Dr. Vinayak Jog</>} role="Surgical Oncologist" />

      </div>
    </div>
  );
};

export default BoardOfAdvisors;
