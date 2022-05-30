import React, { useState } from 'react'
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar";
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/AboutSection/Data';
import Services from '../components/ServicesSection';
import Footer from "../components/Footer";

const Home = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <AboutSection {...homeObjOne}/>
        <AboutSection {...homeObjTwo}/>
        <AboutSection {...homeObjThree}/>
        <Services />
        <Footer />
    </>
  )
}

export default Home