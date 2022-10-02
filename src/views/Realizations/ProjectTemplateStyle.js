import styled from "styled-components";

import santiago from "../../assets/Photos/santiago.jpg";

export const StyledWrapper = styled.div`
  width: 100vw;
`;

export const StyledBackground = styled.div`
  background-image: url(${santiago});
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
`;

export const StyledContainer = styled.div`
  width: 80%;
  height: 150vh;
  background-color: white;
  margin: 15vh auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    width: 95%;
  }
`;

export const StyledTitle = styled.h2`
  color: black;
`;

export const StyledInfos = styled.div``;

export const StyledDescription = styled.p``;

export const StyledPhotos = styled.div``;
