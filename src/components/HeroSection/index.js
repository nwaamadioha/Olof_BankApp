import React, {useState} from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from "./HeroElements"
import Video from "../../videos/video.mp4";
import {Button} from "../ButtonElement.js"

const HeroSection = () => {

  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <HeroContainer id="home">
        <HeroBg>  
          <VideoBg autoPlay loop muted src={Video} type='video/mp4' />    
        </HeroBg>
        <HeroContent>
          <HeroH1>Offshore Banking made Easy</HeroH1>
          <HeroP>Secure your Future with International Private Banking </HeroP>
          <HeroBtnWrapper>
            <Button 
              to="signup" 
              onMouseEnter={onHover} 
              onMouseLeave={onHover}
              primary='true'
              dark='true'
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>

    </HeroContainer>
  )
}

export default HeroSection