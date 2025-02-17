import Carousel3D from '@/components/Landing/Carousel3D'
import Features from '@/components/Landing/Features'
import LandingHero from '@/components/Landing/LandingHero'
import Navbar from '@/components/Landing/Navbar'
import FaqSection from '@/components/Landing/FaqSection'


import React from 'react'

const LandingPage = () => {
  return (
   <>
   <Navbar/>
   <LandingHero/>
   <Features/>
   <Carousel3D/>
   <FaqSection/>
   
   </>
  )
}

export default LandingPage