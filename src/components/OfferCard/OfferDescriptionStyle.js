import styled from "styled-components";

export const StyledOfferDescription = styled.p`
  width: 80%;
  text-align: center;
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSize.m};
  @media screen and (max-width: 960px) {
    width: 95%;
    font-size: 12px;
  }
`;
