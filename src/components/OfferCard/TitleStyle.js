import styled from "styled-components";

export const StyledTitle = styled.h2`
  text-transform: uppercase;
  margin-left: 15px;
  flex-basis: 85%;
  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    flex-basis: 80%;
    margin-left: 5px;
  }
`;
