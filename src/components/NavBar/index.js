import React, { useEffect, useState } from 'react'
import {FaBars} from "react-icons/fa"

import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll/modules'

import { Nav,NavBarContainer,NavLogo,NavItem,NavMenu
  ,NavLinks,MobileIcon,NavBtn,NavBtnLink } from './NavBarElements'

const NavBar = ({toggle}) => {
  const [scrollNav,setScrollNav]=useState(false)

  const changeNav=()=>{
    if(window.scrollY>=80){
      setScrollNav(true)
    }else{
      setScrollNav(false)
    }
  }
  useEffect(()=>{
   window.addEventListener("scroll",changeNav)
  },[])
  const toggleHome=()=>{
    scroll.scrollToTop()
  }

  return (
    <>
    
     <IconContext.Provider value={{color:'#fff'}}>
     <Nav scrollNav={scrollNav} >
          <NavBarContainer>
              <NavLogo to='/' onClick={toggleHome}>
                  m3kido
              </NavLogo>
              <MobileIcon onClick={toggle}>
                <FaBars />
              </MobileIcon>
              <NavMenu >
                <NavItem>
                  <NavLinks to="about"smooth={true} duration={500} spy={true} exact='true' offset={-80} >About</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="signup" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign up</NavLinks>
                </NavItem>
              </NavMenu>
              <NavBtn>
                <NavBtnLink to="/resume">Resume</NavBtnLink>

              </NavBtn>
              
          </NavBarContainer>
      </Nav>
     </IconContext.Provider>

    </>
  )
}

export default NavBar