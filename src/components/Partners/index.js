import React from 'react'
import {PartnerContainer, ImageWrap, Img, PartnerWrapper} from "./PartnerElements.js"


const PartnerSection = () => {
  return (
    <>
        <PartnerContainer>
            <PartnerWrapper>
                <ImageWrap>
                  <Img src="../../images/nfis.jpeg"/>
                </ImageWrap>
            </PartnerWrapper>
        </PartnerContainer>
    </>
  )
}

export default PartnerSection