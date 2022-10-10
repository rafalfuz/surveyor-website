import styled from "styled-components";
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
`;

export const StyledInfoContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 10px 0;
`;

export const StyledInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
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
      
`;

export const StyledFormContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;
