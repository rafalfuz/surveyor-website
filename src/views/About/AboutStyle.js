import styled from "styled-components";

export const StyledAbout = styled.section`
  background-color: ${({ theme }) => theme.primary};
  width: 100vw;
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 960px){
    height: auto;
    padding-bottom: 50px;
  }
}
`;

export const StyledTitle = styled.h2`
  height: 100px;
  width: 80vw;
  margin: 0 auto;
  line-height: 100px;
  color: ${({theme})=>theme.quaternary}; 
`

export const StyledAboutContainer = styled.div`
  margin: 0 auto;
  width: 80vw;
  height: 70vh;
  box-shadow: 0 10px 30px -10px hsla(0,0%,0%,0.8);
  padding: 50px;
  display: flex;
  @media screen and (max-width: 960px){
    flex-direction: column;
    width: 95%;
    height: auto;
    padding: 20px;
  }
`

export const StyledPhotoWrapper = styled.div`
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px){
    flex-basis: auto;
  }
`

export const StyledSelfie = styled.img`
  width: 60%;
  height: 60%;
  @media screen and (max-width: 960px){
    width: 95%;
    height: 95%;
  }
`

export const StyledName = styled.h1`
  color: ${({theme})=>theme.quaternary};
  padding: 10px;
  @media screen and (max-width: 960px){
    text-align: center;
  }

`

export const StyledDescriptionWrapper = styled.div`
  flex-basis: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px){
    flex-basis: auto;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  
`

export const StyledDescription = styled.p`
  font-size: ${({theme})=>theme.fontSize.l};
  color: ${({theme})=>theme.quaternary};
  padding-bottom: 20px;
  @media screen and (max-width: 960px){
    padding-bottom: 10px;
    font-size: ${({theme})=>theme.fontSize.m};
  }
`