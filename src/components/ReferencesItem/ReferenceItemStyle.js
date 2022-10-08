import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledReferenceItem = styled.li`
  margin: 0 auto;
  height: 300px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 960px) {
    width: 95%;
    flex-direction: column;
    height: auto;
    margin: 10px auto;
  }
`;

export const StyledLogoContainer = styled.div`
  flex-basis: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 960px) {
    flex-basis
  }
`;

export const StyledLogo = styled.img`
  width: ${({ logoWidth }) => logoWidth || "100%"};
  height: ${({ logoHeight }) => logoHeight || "100%"};
  padding: 5%;
`;

export const StyledContainer = styled.div`
  flex-basis: 55%;
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.h3`
  flex-basis: 25%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 960px) {
    justify-content: center;
  }
`;

export const StyledDescription = styled.p`
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 960px) {
    width: 95%;
    margin: 10px auto;
    align-content: center;
    justify-items: center;
    text-align: center;
  }
`;

export const StyledLink = styled(Link)`
  flex-basis: auto;
  width: 250px;
  text-align: center;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  border: 1px solid ${({ theme }) => theme.primary};
  padding: 10px;
  letter-spacing: 1px;
  @media screen and (max-width: 960px) {
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
`;
