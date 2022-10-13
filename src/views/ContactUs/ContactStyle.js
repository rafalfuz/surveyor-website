import styled from "styled-components";
import logo from "../../assets/Photos/logoLevelPng.png";

export const StyledContact = styled.section`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledContactInfoContainer = styled.div`
  width: 100%;
  height: auto;
`;

export const StyledMaps = styled.div`
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const StyledMap = styled.div`
  width: 100%;
  height: 500px;
  padding: 20px;
  @media screen and (max-width: 960px) {
    height: 250px;
    padding: 10px;
    margin: 10px 0;
  }
`;

export const StyledFrame = styled.iframe`
  width: 100%;
  height: 85%;
  @media screen and (max-width: 960px) {
    height: 90%;
  }
`;

export const StyledMapTitle = styled.p`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.fontSize.l};
  @media screen and (max-width: 960px) {
    height: 30px;
  }
`;

export const StyledLogo = styled.div`
  width: 50%;
  height: 300px;
  margin: 0 auto;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 150px;
  }
`;

export const StyledContactInfos = styled.div`
  width: 50%;
  height: 220px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: left;
  @media screen and (max-width: 960px) {
    height: auto;
    width: 90%;
  }
`;

export const StyledInfoItem = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
`;

export const StyledA = styled.a`
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-left: 10px;
  text-decoration: ${({ underline }) => (underline ? "underline" : "none")};
  letter-spacing: 1px;
  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
