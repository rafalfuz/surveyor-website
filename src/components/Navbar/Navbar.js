import { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  StyledNavbar,
  StyledNavbarContainer,
  StyledLinkContainer,
  StyledLogoContainer,
  StyledLogo,
  StyledLink,
} from "./NavbarStyle";
import { MenuIcon } from "./MenuIcon";
import surveyor from "../../assets/Photos/surveyorManWhite.png";

export const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const closeMenu = () => setMobile(false);
  const toTop = () => {
    scroll.scrollToTop();
    closeMenu();
  };

  return (
    <StyledNavbar>
      <StyledNavbarContainer>
        <StyledLogoContainer>
          <StyledLogo src={surveyor} alt="ff" onClick={toTop} />
        </StyledLogoContainer>
        <MenuIcon mobile={mobile} setMobile={setMobile} />
        {mobile ? (
          <StyledLinkContainer mobile>
            <StyledLink
              to="aboutSection"
              smooth={true}
              offset={-100}
              onClick={closeMenu}
            >
              O FIRMIE
            </StyledLink>
            <StyledLink
              to="offerSection"
              smooth={true}
              offset={-100}
              onClick={closeMenu}
            >
              OFERTA
            </StyledLink>
            <StyledLink
              to="realizationSection"
              smooth={true}
              offset={-100}
              onClick={closeMenu}
            >
              REALIZACJE
            </StyledLink>
            <StyledLink
              to="referencesSection"
              smooth={true}
              offset={-100}
              onClick={closeMenu}
            >
              REFERENCJE
            </StyledLink>
            <StyledLink
              to="contractorsSection"
              smooth={true}
              offset={-100}
              onClick={closeMenu}
            >
              KONTRAHENCI
            </StyledLink>
            <StyledLink
              to="contactSection"
              smooth={true}
              offset={-100}
              onClick={closeMenu}
            >
              KONTAKT
            </StyledLink>
          </StyledLinkContainer>
        ) : (
          <StyledLinkContainer>
            <StyledLink to="aboutSection" smooth={true} offset={-100}>
              O FIRMIE
            </StyledLink>
            <StyledLink to="offerSection" smooth={true} offset={-100}>
              OFERTA
            </StyledLink>
            <StyledLink to="realizationSection" smooth={true} offset={-100}>
              REALIZACJE
            </StyledLink>
            <StyledLink to="referencesSection" smooth={true} offset={-100}>
              REFERENCJE
            </StyledLink>
            <StyledLink to="contractorsSection" smooth={true} offset={-100}>
              KONTRAHENCI
            </StyledLink>
            <StyledLink to="contactSection" smooth={true} offset={-100}>
              KONTAKT
            </StyledLink>
          </StyledLinkContainer>
        )}
      </StyledNavbarContainer>
    </StyledNavbar>
  );
};
