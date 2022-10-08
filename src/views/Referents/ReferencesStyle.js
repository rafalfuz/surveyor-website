import styled from "styled-components";

export const StyledReferences = styled.section`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.teriarty};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledContainer = styled.ul`
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;
