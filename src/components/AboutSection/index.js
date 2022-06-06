import { Button } from '../ButtonElement'
import React from 'react'
import {AboutContainer, AboutWrapper, AboutRow, Column1, TextWrapper, TopLine, Subtitle, Heading, BtnWrap, Column2, ImgWrap, Img} from "./AboutElements";


const AboutSection = ({id, lightBg, imgStart, topLine, headline, description, buttonLabel, img, alt, darkText, primary, dark, lightText}) => {
  return (
    <>
      <AboutContainer lightBg={lightBg} id={id}>
        <AboutWrapper>
          <AboutRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button 
                    to='/getstarted'
                    duration={500}
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0} 
                    dark={dark ? 1 : 0}
                  > 
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  )
}

export default AboutSection