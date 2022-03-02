import React from 'react'
import {FaFacebook,FaInstagram,FaGithub} from "react-icons/fa"

import { FooterContainer,FooterWrap,FooterLinksContainer
,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink ,
SocialIconLink,SocialIcons,SocialMedia,SocialLogo
,SocialMediaWrap,WebsiteRight} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>
                            About Us
                        </FooterLinkTitle>
                            <FooterLink to="/signin">
                                about us
                            </FooterLink>
                            <FooterLink to="/signin">
                                how it works
                            </FooterLink>
                            <FooterLink to="/signin">
                                rate us
                            </FooterLink>
                            <FooterLink to="/signin">
                                careers
                            </FooterLink>
                            <FooterLink to="/signin">
                                contact us
                            </FooterLink>
                        
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>
                            Videos
                        </FooterLinkTitle>
                            <FooterLink to="/signin">
                                about us
                            </FooterLink>
                            <FooterLink to="/signin">
                                how it works
                            </FooterLink>
                            <FooterLink to="/signin">
                                rate us
                            </FooterLink>
                            <FooterLink to="/signin">
                                careers
                            </FooterLink>
                            <FooterLink to="/signin">
                                contact us
                            </FooterLink>
                        
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>
                            Contact Us
                        </FooterLinkTitle>
                            <FooterLink to="/signin">
                                about us
                            </FooterLink>
                            <FooterLink to="/signin">
                                how it works
                            </FooterLink>
                            <FooterLink to="/signin">
                                rate us
                            </FooterLink>
                            <FooterLink to="/signin">
                                careers
                            </FooterLink>
                            <FooterLink to="/signin">
                                contact us
                            </FooterLink>
                        
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>
                            Social Media
                        </FooterLinkTitle>
                            <FooterLink to="/signin">
                                about us
                            </FooterLink>
                            <FooterLink to="/signin">
                                how it works
                            </FooterLink>
                            <FooterLink to="/signin">
                                rate us
                            </FooterLink>
                            <FooterLink to="/signin">
                                careers
                            </FooterLink>
                            <FooterLink to="/signin">
                                contact us
                            </FooterLink>
                        
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' >
                        m3kido
                    </SocialLogo >
                    
                    <SocialIcons>
                        <SocialIconLink href='https://www.facebook.com/profile.php?id=100019125851867' target="_blank" aria-label='Facebook'>
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href='https://www.instagram.com/m3kido/' target="_blank" aria-label='Instagram'>
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label='Github'>
                            <FaGithub/>
                        </SocialIconLink>
                    </SocialIcons>
                    <WebsiteRight>m3kido © {new Date().getFullYear() } </WebsiteRight>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer