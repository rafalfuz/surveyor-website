import styled from "styled-components";
import NavBottomMobile from "../../assets/Photos/mapBottomMobile.jpg";

export const StyledNavbar = styled.nav`
  position: fixed;
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.primary};
  background-blend-mode: screen;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  z-index: 9999;
`;

export const StyledNavbarContainer = styled.div`
  width: 90%;
  height: 80%;
  border-bottom: 2px solid white;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  @media screen and (max-width: 960px) {
    justify-content: space-between;
  }
`;

export const StyledLogoContainer = styled.div`
  flex-basis: 40%;
  font-size: 32px;
  font-weight: 700;
  color: background-color: ${({ theme }) => theme.quaternary};
  text-shadow: 1px 1px black;
  background-blend-mode: darker;
  
`;

export const StyledLogo = styled.img`
  width: 40px;
  height: 40px;
  transform: rotateY(180deg);
`;

export const StyledLinkContainer = styled.ul`
  flex-basis: 60%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  list-style-type: none;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: royalblue;
    background-image: url(${NavBottomMobile});
    background-blend-mode: unset;
    width: 100%;
    height: calc(100vh - 100px);
    position: fixed;
    top: 100px;
    left: ${({ mobile }) => (mobile ? 0 : "-100%")};
    transition: all 0.5s ease;
    overflow: hidden;
  }
`;

export const StyledLink = styled.li`
  font-size: 22px;
  font-weight: ${({ theme }) => theme.fontWeight.slim};
  color: ${({ theme }) => theme.quaternary};
  text-shadow: 1px 1px black;
  transition: all 0.5s;

  &:hover {
    cursor: pointer;
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    text-shadow: -5px -5px black;
    transform: scale(1.05);
    transition: all 0.5s;
  }
  @media (max-width: 960px) {
    border-radius: 10px;
    background-color: black;
    padding: 10px;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
  }
`;
