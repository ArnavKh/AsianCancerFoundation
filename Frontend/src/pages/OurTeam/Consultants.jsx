import React from 'react'
import ProfileCard from './ProfileCard'

import Somma from "../../assets/Our Team/Consultants/Somma.png"
import Neha from "../../assets/Our Team/Consultants/Neha.png"

const Consultants = () => {
  return (
    <div className="font-visby px-20">
    <h2 className="text-3xl font-semibold text-black mt-10 text-left w-full pl-20 pt-15">
        Consultants
      </h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 justify-items-center space-y-20">
      <a href='https://www.somaa.health/'><ProfileCard image={Somma} name={<>Somaa Health</>} role="Healthcare Consultants"/></a>
      <a href='https://www.nehadkamat.com/'><ProfileCard image={Neha} name={<>Dr Neha D. Kamat</>} role="Health Psychologist" /></a>
      </div>
      </div>
  )
}

export default Consultants