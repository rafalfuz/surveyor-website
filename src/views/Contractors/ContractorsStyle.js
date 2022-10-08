import styled from "styled-components"


export const StyledContractors = styled.section`
  background-color: ${({ theme }) => theme.primary};
  width: 100vw;
  margin: 0 auto;
  height: calc(20vh + 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 960px){
    height: auto;
    padding-bottom: 50px;
  }
}
`;

export const StyledContainer = styled.ul`
  width: 100%;
  height: 20vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 50px;
  @media screen and (max-width: 960px){
    padding: 25px;
    flex-wrap: wrap;
    height: auto;
  }
`;

export const StyledItem = styled.li`
    width: 150px;
    height: 150px;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 960px){
        width: 75px;
        height: 75px;
        padding: 10px;
      }
`