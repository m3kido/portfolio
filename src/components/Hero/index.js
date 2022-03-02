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
              Have the full Best Web Experience
          </HeroH1>
          <HeroP>
              Let me design and build your million dollars idea's Website
          </HeroP>
          <HeroBtnWrapper>
              <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
              primary="true" dark='true'  fontbig="true"
              >
                  Hire Me ! {hover ?<ArrowForward/>:<ArrowRight/>}
              </Button>
          </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero