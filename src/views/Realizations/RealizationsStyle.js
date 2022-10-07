import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledRealizations = styled.section`
  background-color: ${({ theme }) => theme.primary};
  width: 100vw;
  margin: 0 auto;
  min-height: calc(100vh - 100px);
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 960px){
    height: auto;
  }
}
`;

export const StyledContainer = styled.ul`
  width: 95vw;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-evenly;
`;

export const StyledLink = styled(Link)`
  margin: 15px;
  display: block;
`;
