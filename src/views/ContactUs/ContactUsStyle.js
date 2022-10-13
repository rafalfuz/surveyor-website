import styled, { css } from "styled-components";
import backgroundDesktop from "../../assets/Photos/topographyDesktop.jpg";
import backgroundMobile from "../../assets/Photos/topographyMobile.jpg";

export const StyledContactUs = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundDesktop});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    background-image: url(${backgroundMobile});
    height: auto;
    padding: 20px 0;
  }
  ${(props) =>
    props.noBckGrdImg &&
    css`
      background: none;
      background-color: ${({ theme }) => theme.secondary};
      @media screen and (max-width: 960px) {
        background: none;
      }
    `}
`;

export const StyledWrapper = styled.div`
  width: 80%;
  height: 85%;
  background-color: rgba(43, 103, 140, 0.9);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.8);
  @media screen and (max-width: 960px) {
    width: 90%;
    height: 95%;
    background-color: rgba(43, 103, 140, 0.8);
    justify-content: flex-start;
  }
`;

export const StyledInfoContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 10px 0;
  @media screen and (max-width: 960px) {
    padding: 5px 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const StyledInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  margin-left: 10px;
  font-size: ${({ theme }) => theme.fontSize.m};
  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const StyledPattern = styled.p`
  margin-left: 10px;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme, color }) => color || theme.primary};
  padding-right: ${({ paddingRight }) => (paddingRight ? "50px" : "0")};
  font-weight: ${({ bold }) =>
    bold
      ? ({ theme }) => theme.fontWeight.bold
      : ({ theme }) => theme.fontWeight.normal}};
  @media screen and (max-width: 960px){
    font-size: ${({ theme }) => theme.fontSize.m};
  }
      
`;

export const StyledFormContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const StyledA = styled.a`
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-left: 10px;
`;
