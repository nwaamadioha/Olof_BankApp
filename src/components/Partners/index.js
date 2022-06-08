import React from 'react'
import {PartnerContainer, PartnerContent, ImgWrap, Img, PartnerH1, PartnerWrapper} from "./PartnerElements.js"
import img1 from "../../images/nfis.jpeg"
import img2 from "../../images/member1.jpeg"
import img3 from "../../images/member2.jpeg"
import img4 from "../../images/member3.jpeg"
import img5 from "../../images/member4.jpeg"
import img6 from "../../images/member5.jpeg"
// import img1 from "../../images/nfis.jpeg"

const PartnerSection = () => {
  return (
    <>
        <PartnerContainer>
          <PartnerContent>
            <PartnerH1>PARTNERS & RECOGNITIONS</PartnerH1>
            <PartnerWrapper>
                
                <ImgWrap>
                  <Img src={img1}/>
                </ImgWrap>
                <ImgWrap>
                  <Img src={img2}/>
                </ImgWrap>
                <ImgWrap>
                  <Img src={img3}/>
                </ImgWrap>
                <ImgWrap>
                  <Img src={img4}/>
                </ImgWrap>
                <ImgWrap>
                  <Img src={img5}/>
                </ImgWrap>
                <ImgWrap>
                  <Img src={img6}/>
                </ImgWrap>
            </PartnerWrapper>
            </PartnerContent>
        </PartnerContainer>
    </>
  )
}

export default PartnerSection