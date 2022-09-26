import styled from "styled-components";

export const StyledOffer = styled.section`
  width: 100vw;
  height: calc(100vh - 100px);
  background-color: ${({ theme }) => theme.primary};
  border: 1px solid violet;
`;
