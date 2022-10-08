import styled from "styled-components";

export const StyledOfferDescription = styled.p`
  width: 95%;
  text-align: justify;
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSize.m};
  @media screen and (max-width: 960px) {
    width: 95%;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
