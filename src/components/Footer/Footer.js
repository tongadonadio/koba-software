import React from "react";
import {
  FooterContainer,
  FooterContent,
  FooterText,
  NavList,
  NavItem,
  SocialMedia,
  SocialLink,
} from "./FooterStyles";

function Footer() {
  return (
    <FooterContainer component="footer">
      <FooterContent>
        <FooterText>
          &copy; 2024 Koba Software. Todos los derechos reservados.
        </FooterText>
        <NavList>
          <li>
            <NavItem href="#home">Inicio</NavItem>
          </li>
          <li>
            <NavItem href="#services">Servicios</NavItem>
          </li>
          <li>
            <NavItem href="#about">Nosotros</NavItem>
          </li>
          <li>
            <NavItem href="#contact">Contacto</NavItem>
          </li>
        </NavList>
        <SocialMedia>
          <SocialLink
            href="https://www.facebook.com/kobasoftware"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </SocialLink>
          <SocialLink
            href="https://www.twitter.com/kobasoftware"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/company/kobasoftware"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </SocialLink>
        </SocialMedia>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
