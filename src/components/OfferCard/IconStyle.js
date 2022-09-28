import styled from "styled-components";

export const StyledIcon = styled.div`
  flex-basis: 80px;
  height: 80px;
  padding: 5px;
  margin-left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background-color: ${({ theme }) => theme.primary};
  @media screen and (max-width: 960px) {
    flex-basis: 40px;
    height: 40px;
    margin: 10px;
  }
`;

export const StyledImage = styled.img`
  width: 95%;
  height: 95%;
`;
