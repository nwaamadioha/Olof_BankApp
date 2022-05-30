import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, FooterBottom, FooterBottomWrap, SocialLogo, WebsiteRights } from "./FooterElement";
import { animateScroll as scroll } from 'react-scroll';


export const Footer = () => {

  const toggleHome = () => {
      scroll.scrollToTop()
  }
  return (
    <FooterContainer>
      <FooterWrap>
          <FooterLinksContainer>
              <FooterLinksWrapper>
                  <FooterLinkItems>
                      <FooterLinkTitle>About Us</FooterLinkTitle>
                      <FooterLink to="/login">Home</FooterLink>
                      <FooterLink to="/login">How it works</FooterLink>
                      <FooterLink to="/login">Services</FooterLink>
                      {/* <FooterLink to="/login">About Us</FooterLink> */}
                      <FooterLink to="/login">Contact Us</FooterLink>                  
                  </FooterLinkItems>
                  {/* <FooterLinkItems>
                      <FooterLinkTitle>About Us</FooterLinkTitle>
                      <FooterLink to="/login">Home</FooterLink>
                      <FooterLink to="/login">How it works</FooterLink>
                      <FooterLink to="/login">Services</FooterLink>
                      <FooterLink to="/login">About Us</FooterLink>
                      <FooterLink to="/login">Contact Us</FooterLink>                  
                  </FooterLinkItems> */}
              </FooterLinksWrapper>
          </FooterLinksContainer>
          <FooterBottom>
              <FooterBottomWrap>
                  <SocialLogo to='/' onClick={toggleHome}>
                      olofbank
                  </SocialLogo>
                  <WebsiteRights>olofbank © { new Date().getFullYear()} All rights reserved.</WebsiteRights>
              </FooterBottomWrap>
          </FooterBottom>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer