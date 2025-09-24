import React from 'react'
import Hero from './Hero.jsx';
import Stats from './Stats.jsx';
import Mission from './Mission.jsx';
import Impact from './Impact.jsx';
import Board from './Board.jsx';
import FooterBanner from './FooterBanner.jsx';

const Home = () => {
  return (
    <>
      <Hero/>
      <Stats/>
      <Mission/>
      <Impact/>
      <Board/>
      <FooterBanner/>
    </>
  )
}

export default Home;