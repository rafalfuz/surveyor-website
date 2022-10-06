import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledRealizations = styled.section`
  background-color: ${({ theme }) => theme.primary};
  width: 95vw;
  min-height: calc(100vh - 100px);
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid violet;
  @media screen and (max-width: 960px){
    height: auto;
    
  }
}
`;

export const StyledContainer = styled.ul`
  width: 95vw;
  display: flex;
  align-items: space-around;
  justify-content: space-around;;
  flex-wrap: wrap;
  border: 1px solid yellow;
`

export const StyledLink = styled(Link)`
  border: 1px solid black;
  width: 25vw;
  height: 25vw;
  margin: 20px;
  overflow: hidden;
  @media screen and (max-width: 960px) {
    width: 90vw;
    height: 90vw;
  }
`