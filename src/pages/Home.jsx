import React from 'react'
import HeroSection from '../section/HeroSection'
import TechStack from '../section/TechstackSection'
import Navbar from '../components/Navbar/Navbar'

const Home = () => {
  return (
    <>
      <Navbar/>
      <HeroSection />
      <TechStack/>
    </>
  )
}

export default Home