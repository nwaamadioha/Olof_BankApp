import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterBottom, FooterBottomWrap, SocialLogo, WebsiteRights } from "./FooterElement";
import { animateScroll as scroll } from 'react-scroll';


export const Footer = () => {

  const toggleHome = () => {
      scroll.scrollToTop()
  }
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialLogo to='/' onClick={toggleHome}>
          olofbank
        </SocialLogo>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Call Us</FooterLinkTitle>
              <FooterLinkTitle>+49 (567) 78923</FooterLinkTitle>   
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Email Us</FooterLinkTitle>
              <FooterLinkTitle> secure@olofbank.com</FooterLinkTitle>   
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
      <FooterBottom>
        <FooterBottomWrap>
          <WebsiteRights>olofbank © { new Date().getFullYear()} All rights reserved.</WebsiteRights>
        </FooterBottomWrap>
      </FooterBottom>
    </FooterContainer>
  )
}

export default Footer