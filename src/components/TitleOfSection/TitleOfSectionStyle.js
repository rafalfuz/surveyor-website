import styled from "styled-components";

export const StyledTitleOfSection = styled.h2`
  height: 100px;
  width: 80vw;
  margin: 0 auto;
  line-height: 100px;
  color: ${({ theme }) => theme.quaternary};
  border: 1px solid red;
`;
