import React from 'react'
import ProfileCard from './ProfileCard'
import Sharmila from "../../assets/Our Team/CoreTeam/Sharmila.png"
// import Ravita from "../../assets/Our Team/CoreTeam/Ravita.png"
import Jyoti from "../../assets/Our Team/CoreTeam/Jyoti.png"
import Trupti from "../../assets/Our Team/CoreTeam/Trupti.png"
import Divyaprakash from "../../assets/Our Team/CoreTeam/Divyaprakash.png"
import Gandhali from "../../assets/Our Team/CoreTeam/Gandhali.jpeg"

const CoreTeamMembers = () => {
  return (
    <div className="font-visby px-4 md:px-20">
    <h2 className="text-4xl font-bold text-black mt-10 pt-15 text-center md:text-left md:pl-15">
        Core Team Members
      </h2>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 justify-items-center space-y-20 gap-x-3 odd-last-center">
        
        <ProfileCard image={Sharmila} name={<>Sharmila Sawant</>} role="Secretary (Operations)"/>
        <ProfileCard image={Jyoti} name={<>Jyoti Nalawade</>} role="Account & Audit Coordinator (Finance)" />
        
        <ProfileCard image={Trupti} name={<>Trupti Bagalkar</>} role="Clinical Manager (Clinical)"/>
        <ProfileCard image={Divyaprakash} name={<>Divyaprakash Dubey</>} role="Legal Advisor (Legal)" />

        <ProfileCard image={Gandhali} name={<>Gandhali Wadekar</>} role="MSW" />
        
      </div>
      </div>
  )
}

export default CoreTeamMembers