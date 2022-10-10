import styled from "styled-components";

export const StyledTitleOfSection = styled.p`
  height: ${({ height }) => height || "100px"}} 
  width: 80vw;
  margin: 0 auto;
  line-height: ${({ lineHeight }) => lineHeight || "100px"}}
  color: ${({ theme }) => theme.black};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.xl};
  letter-spacing: 1px;
  margin-left: ${({ marginLeft }) => marginLeft || "auto"}};
`;
