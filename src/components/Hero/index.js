import React, { useState } from 'react'
import { HeroContainer,HeroBg,VideoBg,
HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight
} from './HeroElements'
import { Button } from '../ButtonElement'
import Video from '../../video/video1.mp4'

const Hero = () => {
  const [hover,SetHover] =useState(false)

  const onHover= ()=>{
      SetHover(!hover)
  }

  return (
    <HeroContainer>
      <HeroBg>
          <VideoBg autoPlay loop muted src={Video}  type='video/mp4'/>
      </HeroBg>
      <HeroContent>
          <HeroH1>
              Virtual Banking Made Easy
          </HeroH1>
          <HeroP>
              Sign up for a new account today and reciece $250 in 
              credit towards your next payment
          </HeroP>
          <HeroBtnWrapper>
              <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
              primary="true" dark='true'
              >
                  Get Started {hover ?<ArrowForward/>:<ArrowRight/>}
              </Button>
          </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero