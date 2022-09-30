import styled from "styled-components";

export const StyledRealizations = styled.section`
  background-color: ${({ theme }) => theme.primary};
  width: 100vw;
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 960px){
    height: auto;
  }
}
`;