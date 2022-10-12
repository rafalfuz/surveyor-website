import styled, { css } from "styled-components";

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
  ${(props) =>
    props.formTitle &&
    css`
      @media screen and (max-width: 960px) {
        height: auto;
        line-height: auto;
        width: 100%;
        padding: 10px;
        font-size: ${({ theme }) => theme.fontSize.l};
        margin-left: 0;
        text-align: center;
      }
    `}
`;
