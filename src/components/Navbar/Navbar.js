import { StyledNavbar, 
    StyledNavbarContainer, 
    StyledLinkContainer,
StyledLogo,
StyledLink } from "./NavbarStyle"

export const Navbar = ({}) => {
    return(
        <StyledNavbar>
            <StyledNavbarContainer>
                <StyledLogo>LOGO</StyledLogo>
                <StyledLinkContainer>
                <StyledLink>O FIRMIE</StyledLink>
                <StyledLink>OFERTA</StyledLink>
                <StyledLink>WYCENA</StyledLink>
                <StyledLink>REALIZACJE</StyledLink>
                <StyledLink>KONTAKT</StyledLink>
                </StyledLinkContainer>
            </StyledNavbarContainer>
        </StyledNavbar>

    )
}