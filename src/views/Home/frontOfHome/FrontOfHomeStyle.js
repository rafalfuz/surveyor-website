import styled from "styled-components";

export const StyledFront = styled.div`
  width: 50%;
  height: calc(100% - 100px);
  background-color: rgba(150, 198, 217, 0.4);
  position: absolute;
  top: 100px;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 960px){
    width: 100%;
    height: 25%;
    left: 0;
    top: 37.5%;
  }
`;
