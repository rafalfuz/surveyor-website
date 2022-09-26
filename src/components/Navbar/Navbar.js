import { useState } from "react";
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
  return (
    <StyledNavbar>
      <StyledNavbarContainer>
        <StyledLogoContainer>
          <StyledLogo src={surveyor} alt="ff" />
        </StyledLogoContainer>
        <MenuIcon mobile={mobile} setMobile={setMobile} />
        {mobile ? (
          <StyledLinkContainer mobile>
            <StyledLink onClick={closeMenu}>O FIRMIE</StyledLink>
            <StyledLink onClick={closeMenu}>OFERTA</StyledLink>
            <StyledLink onClick={closeMenu}>REALIZACJE</StyledLink>
            <StyledLink onClick={closeMenu}>REFERENCJE</StyledLink>
            <StyledLink onClick={closeMenu}>KONTRAHENCI</StyledLink>
            <StyledLink onClick={closeMenu}>KONTAKT</StyledLink>
          </StyledLinkContainer>
        ) : (
          <StyledLinkContainer>
            <StyledLink>O FIRMIE</StyledLink>
            <StyledLink>OFERTA</StyledLink>
            <StyledLink>REALIZACJE</StyledLink>
            <StyledLink>REFERENCJE</StyledLink>
            <StyledLink>KONTRAHENCI</StyledLink>
            <StyledLink>KONTAKT</StyledLink>
          </StyledLinkContainer>
        )}
      </StyledNavbarContainer>
    </StyledNavbar>
  );
};
