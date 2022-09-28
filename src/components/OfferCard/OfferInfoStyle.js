import styled from "styled-components";

export const StyledOfferInfo = styled.div`
  width: calc(100% + 10px);
  height: 50%;
  position: absolute;
  top: ${({ activeCard }) => (activeCard ? "50%" : "70%")};
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  transition: all 0.8s;
  background-color: ${({ theme }) => theme.secondary};
  border-top: 3px solid black;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 100%;
    top: ${({ activeCard }) => (activeCard ? "0" : "60%")};
    border-top: 1px solid black;
  }
`;
