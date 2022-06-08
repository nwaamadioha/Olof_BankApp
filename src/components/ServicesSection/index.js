import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'
import {Button} from "../ButtonElement.js";
import Icon1 from "../../images/svg1.svg"
import Icon2 from "../../images/svg2.svg"
import Icon3 from "../../images/svg3.svg"
const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>OUR SERVICES</ServicesH1>
      <ServicesWrapper>

        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Gold Loan</ServicesH2>
          <ServicesP>Olof Bank's program combines the security of gold with the opportunity for investment.</ServicesP>
          <Button
            to='/getstarted'
            duration={500}
            exact='true'
            offset={-80}
            primary={true ? 1 : 0} 
            dark={true ? 1 : 0}
          >
            Open Now
          </Button>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2>Prepaid Visa Card</ServicesH2>
          <ServicesP>Reloadable Visa card makes your everyday purchases fast, easy, convenient and secure.</ServicesP>
          <Button
            to='/getstarted'
            duration={500}
            exact='true'
            offset={-80}
            primary={true ? 1 : 0} 
            dark={true ? 1 : 0}
          >
            Open Now
          </Button>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Wire Transfers</ServicesH2>
          <ServicesP>Olof has developed strong international correspondent banking relationships over the years</ServicesP>
          <Button
            to='/getstarted'
            duration={500}
            exact='true'
            offset={-80}
            primary={true ? 1 : 0} 
            dark={true ? 1 : 0}
          >
            Open Now
          </Button>
        </ServicesCard>

      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services