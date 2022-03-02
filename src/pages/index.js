import React, { useState } from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import NavBar from '../components/NavBar'
import Services from '../components/Services'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen,setIsOpen]=useState(false)

    const toggle= ()=>{
     setIsOpen(!isOpen)
    }

  return (
    
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <NavBar toggle={toggle} />
    <Hero />
    <InfoSection {...homeObjOne}/>
    <InfoSection {...homeObjTwo}/>
    <Services />
    <InfoSection {...homeObjThree}/>
    <Footer/>

    </>
  )
}

export default Home