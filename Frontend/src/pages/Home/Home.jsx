import React from 'react'
import Hero from './Hero';
import Stats from './Stats';
import Mission from './Mission';
import Impact from './Impact';
import Board from './Board';
import FooterBanner from './FooterBanner';

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