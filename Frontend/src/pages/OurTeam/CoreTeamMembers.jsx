import React from 'react'
import ProfileCard from './ProfileCard'
import Sharmila from "../../assets/Our Team/CoreTeam/Sharmila.png"
import Ravita from "../../assets/Our Team/CoreTeam/Ravita.png"
import Jyoti from "../../assets/Our Team/CoreTeam/Jyoti.png"
import Trupti from "../../assets/Our Team/CoreTeam/Trupti.png"
import Divyaprakash from "../../assets/Our Team/CoreTeam/Divyaprakash.png"

const CoreTeamMembers = () => {
  return (
    <div className="font-visby px-20">
    <h2 className="text-4xl font-bold text-black mt-10 pt-15 text-center md:text-left md:pl-15">
        Core Team Members
      </h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 justify-items-center space-y-20">
        
        <ProfileCard image={Sharmila} name={<>Sharmila Sawant</>} role="Secretary (Operations)"/>
        <ProfileCard image={Ravita} name={<>Ravita Kamble</>} role="Medical Social Worker" />
        <ProfileCard image={Jyoti} name={<>Jyoti Nalawade</>} role="Account & Audit Coordinator (Finance)" />
        
        <ProfileCard image={Trupti} name={<>Trupti Bagalkar</>} role="Clinical Manager (Clinical)"/>
        <ProfileCard image={Divyaprakash} name={<>Divyaprakash Dubey</>} role="Legal Advisor (Legal)" />
        
      </div>
      </div>
  )
}

export default CoreTeamMembers