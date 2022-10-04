import styled from "styled-components";
import {Link} from 'react-router-dom'

import santiago from "../../assets/Photos/santiago.jpg";

export const StyledWrapper = styled.div`
  width: 100vw;
`;

export const StyledBackground = styled.div`
  background-image: url(${santiago});
  background-image: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
`;

export const StyledContainer = styled.div`
  width: 50%;
  background-color: white;
  margin: 20vh auto;
  padding: 60px;
  position: relative;
  @media screen and (max-width: 960px) {
    width: 95%;
    padding: 20px;
  }
`;

export const StyledTitle = styled.h2`
  font-size: ${({theme})=>theme.fontSize.xxl};
  text-transform: uppercase;
  padding-bottom: 50px;
  border-bottom: 2px solid ${({theme})=>theme.primary};
`;

export const StyledInfos = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledInfo = styled.div`
  flex-basis: 50%;
`

export const StyledDescription = styled.p`
  height: 250px;
  @media screen and (max-width: 960px){
    height: auto;
    padding-bottom: 20px;
    
  }
`;

export const StyledPhotos = styled.div``;

export const StyledPattern = styled.p`
  font-size: ${({theme})=>theme.fontSize.l};
  color: ${({theme})=>theme.primary};
  padding-top: 10px;
  font-weight: ${({bold})=>bold ? ({theme})=>theme.fontWeight.bold : ({theme})=>theme.fontWeight.normal}};
`
export const StyledBackBtn = styled.button`
  width: 50%;
  height: 50px;
  margin: 30px auto;
  display: block;
  outline: none;
  border: none;
  border-radius: 15px;
  text-decoration: none;
  background-color: ${({theme})=>theme.primary};
  color: white;
  line-height: 50px;
  
  &:hover{
    cursor: pointer;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`